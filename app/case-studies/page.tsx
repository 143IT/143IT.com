import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  ListChecks,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why We Built Azure VM Manager | 143IT",
  description:
    "The honest build story behind Azure VM Manager: a 143IT product designed to make recurring Azure VM operations controlled, visible, and auditable.",
};

const principles = [
  {
    icon: ListChecks,
    title: "Controlled operations",
    description:
      "Turn repeatable VM tasks into explicit workflows with clear inputs, status, and outcomes.",
  },
  {
    icon: Eye,
    title: "Operational visibility",
    description:
      "Give infrastructure teams a consistent view of requested actions and their progress.",
  },
  {
    icon: ShieldCheck,
    title: "Auditability by design",
    description:
      "Record who requested an action, what was targeted, and how the operation completed.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-accent-1">
            <ServerCog className="h-4 w-4" />
            143IT Product Build Story
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Why We Built <span className="gradient-text">Azure VM Manager</span>
          </h1>
          <p className="text-xl text-text/80 leading-relaxed">
            An honest look at the operational problem behind our first
            productized offering—and the principles guiding its development.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>The operational problem</h2>
            <p>
              Azure gives infrastructure teams powerful tools for managing virtual
              machines. The difficult part is maintaining a consistent operational
              process across subscriptions, environments, and recurring tasks.
              Actions can become fragmented across portal sessions, scripts, tickets,
              and individual operator knowledge.
            </p>
            <p>
              143IT built Azure VM Manager to create a more controlled path for those
              tasks. The product is intended to make Azure VM operations easier to
              request, track, and audit without hiding the underlying responsibility
              of managing production infrastructure.
            </p>

            <h2>Built from infrastructure experience</h2>
            <p>
              Rob Lo, Founder and Principal Cloud Architect at 143IT, has more than
              20 years of experience in enterprise infrastructure and IT operations
              across Azure, AWS, VMware, identity, security, infrastructure as code,
              DevOps, and AI-assisted automation.
            </p>
            <p>
              Azure VM Manager applies that operational perspective to a focused
              product: reduce repetitive work, make actions visible, and provide an
              auditable record without making unsupported promises about outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 my-16">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="bg-background/50 border border-accent-1/20 rounded-xl p-6"
                >
                  <Icon className="h-7 w-7 text-accent-1 mb-4" />
                  <h2 className="text-xl font-heading font-bold mb-3">
                    {principle.title}
                  </h2>
                  <p className="text-text/70">{principle.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-accent-1/5 border border-accent-1/20 rounded-xl p-8">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Product launch status
            </h2>
            <p className="text-text/80 mb-6">
              Azure VM Manager is being prepared for an assisted launch. Qualified
              organizations will be able to request a demonstration and discuss an
              assisted trial. Product capabilities, pricing, security requirements,
              and support terms will be published as they are finalized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?interest=azure-vm-manager"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Request Product Information
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Explore 143IT Services
              </Link>
            </div>
          </div>

          <div className="mt-12 flex items-start gap-3 text-sm text-text/60">
            <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0" />
            <p>
              This page describes 143IT&apos;s own product-development experience. It
              does not present invented customers, fabricated testimonials, or
              unverified performance metrics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
