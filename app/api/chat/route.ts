import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';
import { checkRateLimit, getClientIdentifier } from '@/lib/rate-limit';

// Force dynamic rendering - don't evaluate at build time
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Validation schema for chat messages
const messageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string().max(2000, 'Message content is too long'),
});

const chatRequestSchema = z.object({
  messages: z.array(messageSchema).min(1, 'At least one message is required').max(10, 'Too many messages in history'),
});

// Rate limit configuration: 10 requests per minute
const RATE_LIMIT_CONFIG = {
  limit: 10,
  windowMs: 60 * 1000, // 1 minute
};

// System prompt with 143IT context
const SYSTEM_PROMPT = `You are an AI assistant for 143IT, a Managed Service Provider (MSP) specializing in automation, cloud modernization, and AI-powered infrastructure solutions.

Company Information:
- Tagline: "Automate & Dominate with AI"
- Slogan: "Next-Gen IT Management with Cloud, Automation, and AI at the Core"
- Contact: support@143it.com | +1 (720) 292-6098
- Location: Remote-First, Serving USA and CA

Core Services:

1. Managed IT Services
   - Infrastructure monitoring and management scoped to customer requirements
   - Proactive maintenance and support
   - Help desk and end-user support
   - Network and server management

2. Cloud Modernization
   - Azure and AWS migration and optimization
   - Cost optimization and FinOps
   - Cloud-native architecture design
   - Multi-cloud strategies

3. Automation & DevOps
   - Infrastructure as Code (Terraform, Bicep)
   - CI/CD pipeline implementation
   - GitOps workflows
   - Process automation with n8n

4. AI Integration
   - ChatGPT and LLM integration
   - Custom ML models and workflows
   - AI-powered automation
   - Intelligent document processing

5. Security & Compliance
   - Security monitoring assessment and operations planning
   - Identity and Access Management (IAM)
   - Compliance frameworks (SOC2, HIPAA, etc.)
   - Zero-trust architecture

Your Role:
1. Answer questions about 143IT services professionally and accurately
2. Help with general technical support questions
3. Qualify leads by understanding their needs and pain points
4. Direct urgent issues to contact support@143it.com or +1 (720) 292-6098
5. Be helpful, professional, and conversational

Tone:
- Professional yet approachable
- Technical but easy to understand
- Enthusiastic about technology and automation
- Solution-focused

When qualifying leads, ask about:
- Current infrastructure and pain points
- Cloud migration needs
- Automation opportunities
- Security and compliance requirements
- Team size and technical capabilities

Always be helpful and direct complex or urgent issues to the human team.`;

export async function POST(request: Request) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request);
    const rateLimitResult = checkRateLimit(clientId, RATE_LIMIT_CONFIG);

    if (!rateLimitResult.success) {
      const resetDate = new Date(rateLimitResult.reset);
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: resetDate.toISOString(),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = chatRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid request format', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { messages } = validationResult.data;

    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not defined');
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
      );
    }

    // Initialize OpenAI client (lazy initialization to avoid build-time errors)
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json(
      { message: assistantMessage },
      {
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        },
      }
    );
  } catch (error) {
    console.error('OpenAI API error:', error);

    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key' },
          { status: 401 }
        );
      } else if (error.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
