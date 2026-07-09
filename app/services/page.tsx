import Link from "next/link";
import { Cloud, Shield, Bot, Workflow, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSP Services — Managed IT, Cloud, Automation & AI | 143IT",
  description: "Comprehensive IT and cloud management with automation-first principles. Managed Infrastructure, Cloud Modernization, DevOps, Security, and AI Integration.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Database,
      title: "Managed Infrastructure",
      description: "Scoped management of Windows, VMware, Azure, and M365 environments with monitoring and operational support.",
      features: [
        "Infrastructure monitoring",
        "Patch and update management",
        "Performance optimization",
        "Capacity planning",
        "Incident response & resolution",
      ],
      href: "/services/managed-it",
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Modernization",
      description: "Seamless migration and optimization for Azure, AWS, and hybrid cloud platforms with zero-downtime strategies.",
      features: [
        "Cloud readiness assessment",
        "Migration planning & execution",
        "Cost optimization",
        "Cloud-native architecture",
        "Multi-cloud management",
      ],
      href: "/services/cloud-modernization",
    },
    {
      icon: Workflow,
      title: "Automation & DevOps",
      description: "Turn operations into code with PowerShell, Terraform, Ansible, and modern CI/CD pipelines that drive performance.",
      features: [
        "Infrastructure as Code (IaC)",
        "CI/CD pipeline development",
        "Configuration management",
        "Automated testing & deployment",
        "GitOps workflows",
      ],
      href: "/services/automation-devops",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Security planning, identity management, patching, backup, and compliance-readiness services.",
      features: [
        "Security monitoring assessment",
        "Identity & access management",
        "Vulnerability management",
        "Compliance monitoring",
        "Backup & disaster recovery",
      ],
      href: "/services/security-compliance",
    },
    {
      icon: Bot,
      title: "AI-Integrated Workflows",
      description: "Intelligent automation with n8n, ChatGPT, Microsoft Copilot, and custom AI solutions tailored to your business.",
      features: [
        "AI-powered workflow automation",
        "Chatbot development",
        "Intelligent document processing",
        "Predictive analytics",
        "Custom AI integrations",
      ],
      href: "/services/ai-integration",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      description: "We analyze your current infrastructure, identify pain points, and define success metrics.",
    },
    {
      step: "02",
      title: "Stabilize",
      description: "Ensure reliable operations with monitoring, patching, and incident management.",
    },
    {
      step: "03",
      title: "Automate",
      description: "Eliminate toil with Infrastructure as Code and automated workflows.",
    },
    {
      step: "04",
      title: "Evolve",
      description: "Continuously improve with AI, analytics, and modern cloud-native solutions.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">MSP Services</span> That Scale
          </h1>
          <p className="text-xl text-text/80 mb-8">
            Comprehensive IT and cloud management with automation-first principles
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 hover:border-accent-1/50 transition-all duration-300 card-glow"
              >
                <div className="bg-accent-1/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-accent-1" />
                </div>

                <h2 className="text-2xl font-heading font-bold mb-4">
                  {service.title}
                </h2>

                <p className="text-text/80 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-1 flex-shrink-0 mt-0.5" />
                      <span className="text-text/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center space-x-2 text-accent-1 hover:text-ctaHover transition-colors font-semibold"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-text/80">
              A proven methodology for IT transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent-1/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent-1/30">
                  <span className="text-2xl font-heading font-bold text-accent-1">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-text/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's discuss how we can help you manage, automate, and evolve your infrastructure.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Book a Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
