import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  KeyRound,
  LockKeyhole,
  Mail,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Azure VM Manager Security & Trust | 143IT",
  description:
    "Review the planned security model, Azure access boundaries, data handling, and trust controls for Azure VM Manager.",
  alternates: {
    canonical: "/products/azure-vm-manager/security",
  },
  openGraph: {
    title: "Azure VM Manager Security & Trust | 143IT",
    description:
      "Review the planned security model, Azure access boundaries, data handling, and trust controls for Azure VM Manager.",
    type: "website",
    url: "https://143it.com/products/azure-vm-manager/security",
    siteName: "143IT",
    images: [
      {
        url: "https://143it.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Azure VM Manager Security & Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azure VM Manager Security & Trust | 143IT",
    description:
      "Review the planned security model, Azure access boundaries, data handling, and trust controls for Azure VM Manager.",
    images: ["https://143it.com/og-image.svg"],
  },
};

const securityTopics = [
  {
    icon: KeyRound,
    title: "Azure access model",
    body:
      "Azure VM Manager is intended to operate with customer-approved Azure access. Required roles and scopes will be documented during onboarding so permissions can be assigned at the narrowest practical scope.",
  },
  {
    icon: LockKeyhole,
    title: "Secrets and identity",
    body:
      "The target production design uses managed identities and Azure Key Vault for service identity and secret handling. Static secrets should not be embedded in application code or public configuration.",
  },
  {
    icon: Database,
    title: "Operational records",
    body:
      "The product records requests, status, execution results, and audit context so teams can review who requested an action, what was targeted, and how the operation completed.",
  },
  {
    icon: ServerCog,
    title: "Queue-backed execution",
    body:
      "The launch architecture moves long-running Azure VM actions from the API process into a worker behind Azure Service Bus, improving separation between request intake and operation execution.",
  },
];

const boundaries = [
  "Does not replace Azure Policy, Defender for Cloud, Microsoft Entra governance, or customer change-management requirements.",
  "Does not grant itself access to Azure subscriptions; access must be explicitly approved and configured by the customer.",
  "Does not remove the customer’s responsibility to review requested actions before approving operational use.",
  "Does not publish customer tenant IDs, subscription IDs, email addresses, or VM inventory in marketing assets.",
];

const openItems = [
  "Exact Azure RBAC roles and minimum scopes for each supported operation",
  "Authentication, authorization, and tenant-isolation implementation evidence",
  "Retry, timeout, duplicate-detection, dead-letter, poison-message, and cancellation policies",
  "Data retention, deletion, subprocessors, and incident-response commitments",
];

export default function AzureVmManagerSecurityPage() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-1/10 via-accent-cyan/5 to-transparent" />
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-accent-1">
              <ShieldCheck className="h-4 w-4" />
              Azure VM Manager trust center
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-7">
              Security and access should be{" "}
              <span className="gradient-text">explicit</span>
            </h1>
            <p className="text-xl md:text-2xl text-text/70 max-w-3xl leading-relaxed">
              This page documents the security model being prepared for Azure VM
              Manager. Items that still require implementation or formal approval
              are intentionally labeled instead of presented as completed controls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {securityTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.title}
                  className="bg-background/50 border border-accent-1/20 rounded-2xl p-8"
                >
                  <Icon className="h-8 w-8 text-accent-1 mb-5" />
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    {topic.title}
                  </h2>
                  <p className="text-text/70 leading-relaxed">{topic.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-accent-1 font-semibold mb-3">
                Product boundaries
              </div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                What Azure VM Manager is not intended to do
              </h2>
              <div className="space-y-4">
                {boundaries.map((item) => (
                  <div key={item} className="flex gap-3 text-text/80">
                    <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle className="h-7 w-7 text-accent-cyan" />
                <h2 className="text-3xl font-heading font-bold">
                  Review items before launch
                </h2>
              </div>
              <p className="text-text/70 mb-6 leading-relaxed">
                These details must be verified against the application before
                stronger public claims are made.
              </p>
              <ul className="space-y-3 text-text/75">
                {openItems.map((item) => (
                  <li key={item} className="border-l-2 border-accent-1/40 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <Mail className="h-10 w-10 text-accent-1 mx-auto mb-5" />
          <h2 className="text-4xl font-heading font-bold mb-5">
            Security contact
          </h2>
          <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
            For security questions or vulnerability reports, contact the 143IT
            team by email. Include affected systems, reproduction steps, and any
            relevant timestamps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@143it.com" className="btn-primary">
              Email support@143it.com
            </a>
            <Link
              href="/products/azure-vm-manager/support"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Review support model
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
