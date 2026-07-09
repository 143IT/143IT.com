import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MessageSquare,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Azure VM Manager Support | 143IT",
  description:
    "Review the launch support model and open SLA decisions for Azure VM Manager.",
  alternates: {
    canonical: "/products/azure-vm-manager/support",
  },
};

const supportFacts = [
  {
    icon: Mail,
    title: "Support channel",
    body:
      "Email is the public support channel at launch. Demo requests, onboarding questions, and product-support intake route through support@143it.com.",
  },
  {
    icon: Clock,
    title: "Initial response",
    body:
      "New demo requests receive an initial response within one business day. Product support response targets still require operational approval before publication.",
  },
  {
    icon: MessageSquare,
    title: "Assisted onboarding",
    body:
      "Launch customers start with a demo and may move into an assisted trial after qualification with a business email and active Azure subscription.",
  },
  {
    icon: ShieldAlert,
    title: "SLA status",
    body:
      "Formal uptime targets, maintenance windows, exclusions, escalation paths, and service credits are not yet published commitments.",
  },
];

const approvalItems = [
  "Coverage hours and holiday schedule",
  "Severity definitions and target response times",
  "Escalation path and ownership handoff",
  "Uptime calculation and maintenance-window policy",
  "Service-credit policy, if any",
];

export default function AzureVmManagerSupportPage() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-1/10 via-accent-cyan/5 to-transparent" />
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-accent-1">
              <MessageSquare className="h-4 w-4" />
              Launch support model
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-7">
              Support commitments should match{" "}
              <span className="gradient-text">real operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-text/70 max-w-3xl leading-relaxed">
              Azure VM Manager is launching with an assisted sales and trial
              process. This page separates approved contact expectations from SLA
              items that still require business and operational approval.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {supportFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.title}
                  className="bg-background/50 border border-accent-1/20 rounded-2xl p-8"
                >
                  <Icon className="h-8 w-8 text-accent-1 mb-5" />
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    {fact.title}
                  </h2>
                  <p className="text-text/70 leading-relaxed">{fact.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-4xl font-heading font-bold mb-5">
              SLA items pending approval
            </h2>
            <p className="text-text/70 leading-relaxed mb-8">
              These items should be finalized before Azure VM Manager is sold with
              formal support or availability commitments.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {approvalItems.map((item) => (
                <div
                  key={item}
                  className="border border-accent-1/20 rounded-xl p-4 text-text/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-5">
            Need product help?
          </h2>
          <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
            Email support@143it.com with your company, contact details, and a
            concise description of the request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@143it.com" className="btn-primary">
              Email support
            </a>
            <Link
              href="/products/azure-vm-manager/security"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Review security model
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
