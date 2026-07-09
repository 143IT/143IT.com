import Link from "next/link";
import { ArrowRight, CheckCircle2, ServerCog } from "lucide-react";

export default function CaseStudyHighlights() {
  const principles = [
    "Built from operational experience",
    "Designed for controlled Azure actions",
    "Focused on visibility and auditability",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">What We&apos;re Building</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Practical products shaped by real infrastructure operations
          </p>
        </div>

        <div className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 md:p-10 card-glow">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-16 h-16 rounded-xl bg-accent-1/10 flex items-center justify-center flex-shrink-0">
              <ServerCog className="h-8 w-8 text-accent-1" />
            </div>
            <div>
              <div className="text-accent-1 text-sm font-semibold mb-3">
                143IT Product Build Story
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Why We Built Azure VM Manager
              </h3>
              <p className="text-text/80 mb-6 leading-relaxed">
                Repetitive Azure VM operations are easy to perform inconsistently
                and difficult to audit across environments. We are building Azure
                VM Manager to turn those operational tasks into controlled, visible
                workflows for infrastructure teams and MSPs.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {principles.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-text/70">
                    <CheckCircle2 className="h-4 w-4 text-accent-1 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center space-x-2 text-accent-1 hover:text-ctaHover transition-colors font-semibold"
              >
                <span>Read the Build Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
