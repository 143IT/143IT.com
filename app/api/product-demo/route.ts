import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, getClientIdentifier } from "@/lib/rate-limit";

const personalEmailDomains = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
]);

const demoRequestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(255).refine(
    (email) => !personalEmailDomains.has(email.split("@")[1] ?? ""),
    "Please use a business email address"
  ),
  company: z.string().trim().min(2).max(150),
  jobRole: z.string().trim().min(2).max(100),
  azureSubscriptions: z.coerce.number().int().min(1).max(10000),
  approximateVms: z.coerce.number().int().min(0).max(1000000),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10).max(3000),
  activeAzureSubscription: z.literal(true),
});

const rateLimitConfig = {
  limit: 5,
  windowMs: 15 * 60 * 1000,
};

function sanitize(value: string) {
  return value
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

export async function POST(request: Request) {
  const clientId = getClientIdentifier(request);
  const rateLimit = checkRateLimit(`product-demo:${clientId}`, rateLimitConfig);

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please try again later.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(
            (rateLimit.reset - Date.now()) / 1000
          ).toString(),
        },
      }
    );
  }

  try {
    const body = await request.json();
    const validation = demoRequestSchema.safeParse(body);

    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: firstIssue?.message ?? "Please review the form fields.",
          details: validation.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const data = validation.data;
    const payload = {
      type: "azure-vm-manager-demo-request",
      source: "143it-website",
      notificationRecipient: "support@143it.com",
      submittedAt: new Date().toISOString(),
      clientIp: clientId,
      userAgent: request.headers.get("user-agent") || "unknown",
      lead: {
        name: sanitize(data.name),
        email: data.email,
        company: sanitize(data.company),
        jobRole: sanitize(data.jobRole),
        phone: data.phone ? sanitize(data.phone) : undefined,
      },
      environment: {
        azureSubscriptions: data.azureSubscriptions,
        approximateVms: data.approximateVms,
        activeAzureSubscription: data.activeAzureSubscription,
      },
      primaryChallenge: sanitize(data.message),
      followUpCommitment: "one-business-day",
      requestedPath: "demo-then-assisted-trial",
    };

    const webhookUrl =
      process.env.N8N_PRODUCT_DEMO_WEBHOOK ?? process.env.N8N_CONTACT_WEBHOOK;

    if (!webhookUrl) {
      if (process.env.NODE_ENV === "development") {
        console.info("Product demo request (development mode)", payload);
        return NextResponse.json({
          success: true,
          message: "Demo request received in development mode.",
        });
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "Demo requests are temporarily unavailable. Please email support@143it.com.",
        },
        { status: 503 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!webhookResponse.ok) {
        throw new Error(`n8n returned ${webhookResponse.status}`);
      }
    } finally {
      clearTimeout(timeout);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your request has been received. A 143IT product specialist will contact you within one business day.",
      },
      {
        headers: {
          "X-RateLimit-Limit": rateLimit.limit.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
          "X-RateLimit-Reset": rateLimit.reset.toString(),
        },
      }
    );
  } catch (error) {
    console.error("Product demo request failed", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to submit your request. Please try again or email support@143it.com.",
      },
      { status: 500 }
    );
  }
}
