import Link from "next/link";
import { Bot, CheckCircle2, Brain, MessageSquare, FileText, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration & Automation Services | 143IT",
  description: "Intelligent automation with n8n, ChatGPT, Microsoft Copilot, and custom AI solutions tailored to your business.",
};

export default function AIIntegrationPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Workflows",
      description: "Integrate AI into your existing workflows with n8n, Make, and custom automation platforms.",
    },
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "Custom AI chatbots for customer support, lead qualification, and internal knowledge bases.",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Automated document processing, data extraction, and intelligent classification using AI.",
    },
    {
      icon: Sparkles,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends, detect anomalies, and optimize operations.",
    },
  ];

  const services = [
    "ChatGPT & OpenAI Integration",
    "Microsoft Copilot Deployment",
    "n8n Workflow Automation",
    "Custom AI Model Development",
    "Natural Language Processing (NLP)",
    "Computer Vision Solutions",
    "AI-Powered Chatbots",
    "Document Processing Automation",
    "Predictive Maintenance",
    "AI Strategy & Consulting",
  ];

  const useCases = [
    {
      title: "IT Support Automation",
      description: "AI-powered ticket classification, automated responses, and intelligent routing to reduce support workload.",
      example: "Define and validate which requests are safe to automate",
    },
    {
      title: "Documentation Generation",
      description: "Automatically generate runbooks, API docs, and technical documentation from code and infrastructure.",
      example: "Generate drafts with human review and source validation",
    },
    {
      title: "Intelligent Monitoring",
      description: "AI analyzes logs, metrics, and events to predict issues before they cause outages.",
      example: "Prioritize signals while keeping operators in control",
    },
  ];

  const aiPlatforms = [
    "OpenAI (ChatGPT, GPT-4)",
    "Microsoft Copilot",
    "Azure AI Services",
    "n8n Automation",
    "Make (Integromat)",
    "Langchain",
    "Hugging Face",
    "Custom ML Models",
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center space-x-3 mb-6">
            <Bot className="h-12 w-12 text-accent-1" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              <span className="gradient-text">AI Integration</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-3xl">
            Intelligent automation with n8n, ChatGPT, Microsoft Copilot, and custom AI solutions tailored to your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Explore AI Solutions</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            AI <span className="gradient-text">That Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300"
              >
                <div className="bg-accent-1/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-accent-1" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                <p className="text-text/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Real-World <span className="gradient-text">AI Applications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-bold mb-4 text-accent-1">
                  {useCase.title}
                </h3>
                <p className="text-text/70 mb-4">{useCase.description}</p>
                <div className="text-sm text-accent-1/80 bg-accent-1/10 rounded-lg p-3 border border-accent-1/20">
                  💡 {useCase.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Platforms */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            AI Platforms We <span className="gradient-text">Leverage</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-lg p-6 text-center hover:border-accent-1/50 transition-colors"
              >
                <div className="font-heading font-bold text-text/90">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            What's <span className="gradient-text">Included</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-background/30 border border-accent-1/20 rounded-lg p-4 hover:border-accent-1/40 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0" />
                <span className="text-text/80">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Integrate AI?
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's explore how AI can transform your business operations.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Schedule an AI Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
