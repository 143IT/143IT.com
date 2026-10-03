import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Search } from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AI Search Measurement Guide | 143IT",
  description: "A practical 143IT guide for measuring AI-search and generative-engine visibility with GA4, server logs, and monthly answer checks.",
};

export default function AISearchMeasurementPage() {
  const aiReferralRegex = "chatgpt\\.com|openai\\.com|perplexity\\.ai|gemini\\.google\\.com|copilot\\.microsoft\\.com|claude\\.ai|anthropic\\.com|deepseek\\.com";
  const checks = [
    "What does 143IT do?",
    "Is 143IT a good choice for managed IT automation in Dallas-Fort Worth?",
    "Who provides AI workflow automation for business IT teams in Texas?",
    "Compare 143IT with a traditional MSP for cloud automation and AI operations.",
  ];

  return (
    <div className="pt-24">
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://143it.com/" },
            { "@type": "ListItem", position: 2, name: "Resources", item: "https://143it.com/resources" },
            { "@type": "ListItem", position: 3, name: "AI Search Measurement", item: "https://143it.com/resources/ai-search-measurement" },
          ],
        }}
      />
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center space-x-3 mb-6">
            <BarChart3 className="h-12 w-12 text-accent-1" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              <span className="gradient-text">AI Search Measurement</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text/80 mb-8">
            143IT measures generative-engine and AI-search visibility by combining public scan evidence, GA4 referral signals, server logs, and monthly answer checks.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Review Your AI Search Visibility</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl grid gap-8">
          <div className="bg-background/50 border border-accent-1/20 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Search className="h-7 w-7 text-accent-1" />
              <h2 className="text-3xl font-heading font-bold">GA4 AI referral channel</h2>
            </div>
            <p className="text-text/75 mb-4">
              Use a custom GA4 channel group or exploration segment for known AI referral sources. AI attribution is directional because many tools suppress referrers, but this creates a repeatable baseline.
            </p>
            <pre className="overflow-x-auto rounded-xl bg-black/40 p-4 text-sm text-accent-1">{aiReferralRegex}</pre>
          </div>

          <div className="bg-background/50 border border-accent-1/20 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Bot className="h-7 w-7 text-accent-1" />
              <h2 className="text-3xl font-heading font-bold">Monthly answer checks</h2>
            </div>
            <p className="text-text/75 mb-4">
              Record the tool, date, model when visible, citations, competitors mentioned, and whether the answer correctly describes the business.
            </p>
            <ul className="space-y-3">
              {checks.map((check) => (
                <li key={check} className="flex items-start space-x-3 text-text/75">
                  <span className="text-accent-1">•</span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background/50 border border-accent-1/20 rounded-xl p-8">
            <h2 className="text-3xl font-heading font-bold mb-4">Evidence to keep</h2>
            <ul className="space-y-3 text-text/75">
              <li>GEO and SEO scan JSON/Markdown reports with score deltas after each website update.</li>
              <li>Server-log or CDN evidence for AI crawler visits and AI referral traffic when available.</li>
              <li>Manual answer visibility notes from ChatGPT, Claude, Perplexity, Gemini, and Copilot.</li>
              <li>Implementation backlog items tied to verification steps, not generic SEO advice.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
