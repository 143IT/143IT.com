import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Eye,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  ServerCog,
} from "lucide-react";
import DemoRequestForm from "@/components/DemoRequestForm";
import ProductWorkflowDemo from "@/components/ProductWorkflowDemo";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Azure VM Manager — Controlled Azure VM Operations | 143IT",
  description:
    "Azure VM Manager helps infrastructure teams and MSPs request, track, and audit recurring Azure virtual machine operations.",
  alternates: {
    canonical: "/products/azure-vm-manager",
  },
  openGraph: {
    title: "Azure VM Manager | 143IT",
    description:
      "Controlled, visible, and auditable Azure VM operations—built from real infrastructure experience.",
    type: "website",
    url: "https://143it.com/products/azure-vm-manager",
    siteName: "143IT",
    images: [
      {
        url: "https://143it.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Azure VM Manager by 143IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azure VM Manager | 143IT",
    description:
      "Controlled, visible, and auditable Azure VM operations—built from real infrastructure experience.",
    images: ["https://143it.com/og-image.svg"],
  },
};

const outcomes = [
  {
    icon: ClipboardCheck,
    title: "Consistent workflows",
    description:
      "Replace fragmented portal steps and operator-specific procedures with explicit operational requests.",
  },
  {
    icon: Eye,
    title: "Visible status",
    description:
      "Follow a request from submission through execution instead of losing context across tools and handoffs.",
  },
  {
    icon: LockKeyhole,
    title: "Auditable actions",
    description:
      "Retain a record of who requested an operation, what it targeted, and how it completed.",
  },
];

const fit = [
  "Infrastructure teams managing Azure virtual machines",
  "MSPs operating across customer Azure environments",
  "Organizations standardizing recurring VM procedures",
  "Teams that need clearer operational history and ownership",
];

export default function AzureVmManagerPage() {
  return (
    <div className="pt-24">
      <StructuredData
        type="SoftwareApplication"
        data={{
          name: "Azure VM Manager",
          description:
            "Azure VM Manager helps infrastructure teams and MSPs request, track, and audit recurring Azure virtual machine operations.",
          url: "https://143it.com/products/azure-vm-manager",
          featureList: [
            "Azure VM operation request workflow",
            "Guided operational status tracking",
            "Audit-oriented request history",
            "Assisted demo and trial onboarding",
          ],
          audience: {
            "@type": "Audience",
            audienceType: "Infrastructure teams and managed service providers",
          },
        }}
      />
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-1/10 via-accent-cyan/5 to-transparent" />
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-accent-1">
              <ServerCog className="h-4 w-4" />
              Built by an MSP for infrastructure teams
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-7">
              Controlled Azure VM operations with{" "}
              <span className="gradient-text">clear accountability</span>
            </h1>
            <p className="text-xl md:text-2xl text-text/70 max-w-3xl leading-relaxed mb-10">
              Azure VM Manager is designed to help teams request, track, and audit
              recurring virtual machine operations across Azure environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#request-demo"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#workflow"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Explore the Workflow
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <div className="text-accent-1 font-semibold mb-3">The problem</div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                VM operations become fragmented as environments grow
              </h2>
            </div>
            <div className="space-y-5 text-lg text-text/70 leading-relaxed">
              <p>
                Azure provides powerful controls, but recurring actions can become
                scattered across portal sessions, scripts, tickets, and individual
                operator knowledge.
              </p>
              <p>
                Azure VM Manager is being built to provide a controlled operational
                path with clear requests, status, and history. It does not replace
                Azure governance or operator responsibility; it makes the workflow
                easier to understand and audit.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className="bg-background/50 border border-accent-1/20 rounded-xl p-7"
                >
                  <Icon className="h-7 w-7 text-accent-1 mb-5" />
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-text/70">{outcome.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-accent-1 font-semibold mb-3">Guided preview</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-5">
              From request to operational record
            </h2>
            <p className="text-lg text-text/70">
              Explore the intended workflow without connecting to a live Azure
              environment. Current product screenshots will be added after the
              launch asset review.
            </p>
          </div>
          <ProductWorkflowDemo />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-background/50 border border-accent-1/20 rounded-2xl p-8">
              <Cloud className="h-8 w-8 text-accent-1 mb-5" />
              <h2 className="text-3xl font-heading font-bold mb-5">
                Who it is for
              </h2>
              <div className="space-y-4">
                {fit.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background/50 border border-accent-1/20 rounded-2xl p-8">
              <Layers3 className="h-8 w-8 text-accent-1 mb-5" />
              <h2 className="text-3xl font-heading font-bold mb-5">
                Hybrid pricing, scoped to your environment
              </h2>
              <p className="text-text/70 mb-5">
                Pricing combines a base organization or tenant license with included
                users, Azure subscriptions, and VM capacity. Additional users and
                infrastructure capacity can be scoped through tiers or add-ons.
              </p>
              <p className="font-heading font-bold text-xl mb-6">
                Contact us for pricing.
              </p>
              <a href="#request-demo" className="text-accent-1 font-semibold inline-flex items-center gap-2">
                Discuss your environment
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div>
              <ShieldCheck className="h-9 w-9 text-accent-1 mb-5" />
              <h2 className="text-4xl font-heading font-bold mb-5">
                Review security, support, and launch boundaries
              </h2>
              <p className="text-text/70 leading-relaxed">
                Azure VM Manager is being prepared for assisted launch. Security
                architecture, Azure access requirements, support expectations, and
                SLA items are documented separately so buyers can evaluate risk
                without relying on vague claims.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link
                href="/products/azure-vm-manager/security"
                className="bg-background/50 border border-accent-1/20 rounded-2xl p-7 hover:border-accent-1/50 transition-colors"
              >
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Security & Trust
                </h3>
                <p className="text-text/70 mb-5">
                  Azure access model, data handling, boundaries, and security
                  review items.
                </p>
                <span className="text-accent-1 font-semibold inline-flex items-center gap-2">
                  Review controls
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/products/azure-vm-manager/support"
                className="bg-background/50 border border-accent-1/20 rounded-2xl p-7 hover:border-accent-1/50 transition-colors"
              >
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Product Support
                </h3>
                <p className="text-text/70 mb-5">
                  Launch support channel, one-business-day demo response, and SLA
                  approval gaps.
                </p>
                <span className="text-accent-1 font-semibold inline-flex items-center gap-2">
                  Review support
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-5">
            Assisted launch and onboarding
          </h2>
          <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
            Launch customers begin with a product demonstration. Organizations with
            a business email and an active Azure subscription can then be considered
            for a manually approved assisted trial.
          </p>
          <Link href="/case-studies" className="btn-secondary inline-flex items-center gap-2">
            Read Why We Built It
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="request-demo" className="py-20 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <div className="text-accent-1 font-semibold mb-3">Request a demo</div>
              <h2 className="text-4xl font-heading font-bold mb-5">
                Show us what you manage today
              </h2>
              <p className="text-text/70 leading-relaxed">
                We will review your request and contact you within one business day.
                Demo requests are routed to the 143IT product team through n8n.
              </p>
            </div>
            <div className="glass-card p-7 md:p-9">
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
