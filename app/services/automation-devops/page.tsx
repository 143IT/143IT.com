import Link from "next/link";
import { Workflow, CheckCircle2, GitBranch, Code, Rocket, ArrowRight, Timer } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation & DevOps Services | 143IT",
  description: "Turn operations into code with PowerShell, Terraform, Ansible, and modern CI/CD pipelines that drive performance.",
};

export default function AutomationDevOpsPage() {
  const features = [
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Define and manage infrastructure with Terraform, Ansible, and CloudFormation for consistent, repeatable deployments.",
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines using Jenkins, GitHub Actions, Azure DevOps, and GitLab.",
    },
    {
      icon: Rocket,
      title: "Automated Testing",
      description: "Comprehensive test automation including unit, integration, and end-to-end testing frameworks.",
    },
    {
      icon: Timer,
      title: "Continuous Improvement",
      description: "Metrics-driven optimization with monitoring, logging, and feedback loops for constant refinement.",
    },
  ];

  const services = [
    "Infrastructure as Code (Terraform, Ansible)",
    "CI/CD Pipeline Development",
    "Configuration Management",
    "GitOps Workflows",
    "Container Orchestration (Kubernetes)",
    "Automated Testing Frameworks",
    "Monitoring & Observability",
    "Release Management",
    "ChatOps & Automation Bots",
    "Documentation Automation",
  ];

  const tools = [
    { name: "Terraform", category: "IaC" },
    { name: "Ansible", category: "Config Management" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitHub Actions", category: "CI/CD" },
    { name: "Docker", category: "Containers" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "PowerShell", category: "Automation" },
    { name: "Azure DevOps", category: "Platform" },
  ];

  const useCases = [
    {
      title: "Eliminate Manual Deployment",
      description: "Replace error-prone manual deployments with automated, tested pipelines that deploy in minutes, not hours.",
    },
    {
      title: "Scale with Confidence",
      description: "Infrastructure as Code allows you to replicate entire environments instantly for testing, staging, or new regions.",
    },
    {
      title: "Reduce Downtime",
      description: "Automated rollback, canary deployments, and blue-green strategies minimize risk and maximize uptime.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center space-x-3 mb-6">
            <Workflow className="h-12 w-12 text-accent-1" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              <span className="gradient-text">Automation & DevOps</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-3xl">
            Turn operations into code with PowerShell, Terraform, Ansible, and modern CI/CD pipelines that drive performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Automate Your Operations</span>
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
            Automation <span className="gradient-text">That Delivers</span>
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

      {/* Tools & Technologies */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Tools We <span className="gradient-text">Master</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-lg p-6 text-center hover:border-accent-1/50 transition-colors"
              >
                <div className="font-heading font-bold text-lg mb-1">{tool.name}</div>
                <div className="text-text/60 text-sm">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Transform Your <span className="gradient-text">Operations</span>
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
                <p className="text-text/70">{useCase.description}</p>
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
            Ready to Automate Everything?
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's build pipelines that make deployments boring (in a good way).
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Start Automating</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
