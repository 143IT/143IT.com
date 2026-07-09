import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  MessagesSquare,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engagement & Pricing Approach | 143IT",
  description:
    "Learn how 143IT scopes managed IT, cloud, automation, security, and AI engagements around your current environment and requirements.",
};

const steps = [
  {
    icon: MessagesSquare,
    title: "Discovery",
    description:
      "We review your environment, priorities, constraints, current tools, and the outcomes you need.",
  },
  {
    icon: ClipboardCheck,
    title: "Defined scope",
    description:
      "You receive a written scope covering deliverables, responsibilities, assumptions, timing, and support expectations.",
  },
  {
    icon: Layers3,
    title: "Right-sized engagement",
    description:
      "Pricing reflects the approved scope rather than a generic package with services your organization may not need.",
  },
];

const pricingFactors = [
  "Number of users, endpoints, subscriptions, and environments",
  "Cloud and on-premises platform complexity",
  "Required support coverage and response expectations",
  "Security, compliance, backup, and recovery requirements",
  "Automation, integration, and documentation scope",
  "Project-based delivery versus ongoing managed services",
];

export default function PricingPage() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Pricing Built Around a <span className="gradient-text">Defined Scope</span>
          </h1>
          <p className="text-xl text-text/80 mb-8 leading-relaxed">
            143IT engagements are priced after discovery so the proposal reflects
            your actual environment, responsibilities, and service requirements.
          </p>
          <Link
            href="/contact?interest=services-pricing"
            className="btn-primary inline-flex items-center gap-2"
          >
            Request a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              How Scoping <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Clear expectations come before a commercial commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-background/50 border border-accent-1/20 rounded-xl p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-1/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-accent-1" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-3">
                    {step.title}
                  </h2>
                  <p className="text-text/70">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-5">
                What Influences <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-text/70 leading-relaxed">
                These factors help determine effort, operating responsibility, and
                the appropriate engagement structure.
              </p>
            </div>
            <div className="space-y-4">
              {pricingFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-start gap-3 bg-background/40 border border-accent-1/20 rounded-lg p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0 mt-0.5" />
                  <span className="text-text/80">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Start With a <span className="gradient-text">Practical Conversation</span>
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Tell us what you manage today and what needs to improve. We will confirm
            fit before proposing services, timelines, or support commitments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?interest=services-pricing"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Contact 143IT
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
