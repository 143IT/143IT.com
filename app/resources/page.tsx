import Link from "next/link";
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  FileText, 
  Video, 
  Code, 
  ArrowRight,
  Github,
  Globe,
  Wrench,
  Briefcase
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — IT Guides, Tools & Downloads | 143IT",
  description: "Free IT resources, guides, tools, and downloads to help you automate, modernize, and optimize your infrastructure.",
};

export default function ResourcesPage() {
  const categories = [
    {
      title: "Guides & Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Infrastructure as Code Guide",
          description: "Complete guide to IaC with Terraform and Ansible",
          href: "/blog/infrastructure-as-code-guide-2024",
          type: "internal",
        },
        {
          title: "AI Search Measurement Guide",
          description: "Track AI referrals, answer visibility, and scanner score deltas",
          href: "/resources/ai-search-measurement",
          type: "internal",
        },
        {
          title: "Self-Healing Infrastructure",
          description: "Learn to build automated remediation workflows",
          href: "/blog/self-healing-infrastructure",
          type: "internal",
        },
        {
          title: "Azure Best Practices",
          description: "Cloud configuration and optimization guide",
          href: "#",
          type: "external",
        },
        {
          title: "DevOps Playbook",
          description: "CI/CD pipeline templates and workflows",
          href: "#",
          type: "external",
        },
      ],
    },
    {
      title: "Tools & Scripts",
      icon: Wrench,
      items: [
        {
          title: "PowerShell Automation Library",
          description: "Reusable PowerShell scripts for common tasks",
          href: "#",
          type: "external",
        },
        {
          title: "Terraform Modules",
          description: "Pre-built infrastructure modules for Azure/AWS",
          href: "#",
          type: "external",
        },
        {
          title: "n8n Workflow Templates",
          description: "Ready-to-use automation workflows",
          href: "#",
          type: "external",
        },
        {
          title: "Monitoring Dashboards",
          description: "Grafana dashboard templates",
          href: "#",
          type: "external",
        },
      ],
    },
    {
      title: "Downloads",
      icon: Download,
      items: [
        {
          title: "IT Assessment Checklist",
          description: "PDF checklist for infrastructure audits",
          href: "#",
          type: "download",
        },
        {
          title: "Security Compliance Template",
          description: "SOC 2 and HIPAA compliance checklist",
          href: "#",
          type: "download",
        },
        {
          title: "Disaster Recovery Plan Template",
          description: "DR planning document template",
          href: "#",
          type: "download",
        },
        {
          title: "Vendor Evaluation Matrix",
          description: "Tool for comparing IT service providers",
          href: "#",
          type: "download",
        },
      ],
    },
    {
      title: "Learning Resources",
      icon: Video,
      items: [
        {
          title: "Video Tutorials",
          description: "Step-by-step video guides for common tasks",
          href: "#",
          type: "external",
        },
        {
          title: "Webinar Recordings",
          description: "Recorded sessions on automation and cloud",
          href: "#",
          type: "external",
        },
        {
          title: "Training Courses",
          description: "Self-paced courses on DevOps and automation",
          href: "#",
          type: "external",
        },
        {
          title: "Certification Prep",
          description: "Study guides for Azure, AWS, and DevOps certs",
          href: "#",
          type: "external",
        },
      ],
    },
  ];

  const quickLinks = [
    {
      title: "Blog",
      description: "Latest insights and tutorials",
      href: "/blog",
      icon: FileText,
    },
    {
      title: "Case Studies",
      description: "Real client success stories",
      href: "/case-studies",
      icon: BookOpen,
    },
    {
      title: "Services",
      description: "Our service offerings",
      href: "/services",
      icon: Briefcase,
    },
    {
      title: "Contact",
      description: "Get in touch with our team",
      href: "/contact",
      icon: Globe,
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-text/80 mb-4">
            Free tools, guides, and downloads to help you succeed
          </p>
          <p className="text-lg text-text/60">
            Everything you need to automate, modernize, and optimize your IT infrastructure
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6 hover:border-accent-1/50 hover:bg-accent-1/5 transition-all duration-300"
              >
                <div className="bg-accent-1/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-1/20 transition-colors">
                  <link.icon className="h-6 w-6 text-accent-1" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-accent-1 transition-colors">
                  {link.title}
                </h3>
                <p className="text-text/70 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-accent-1/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-accent-1" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6 hover:border-accent-1/50 transition-all duration-300"
                  >
                    {item.type === "internal" ? (
                      <Link
                        href={item.href}
                        className="group block"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-heading font-bold group-hover:text-accent-1 transition-colors">
                            {item.title}
                          </h3>
                          <ArrowRight className="h-5 w-5 text-accent-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="text-text/70 text-sm">{item.description}</p>
                      </Link>
                    ) : (
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-heading font-bold">
                            {item.title}
                          </h3>
                          {item.type === "external" && (
                            <ExternalLink className="h-5 w-5 text-accent-1 flex-shrink-0" />
                          )}
                          {item.type === "download" && (
                            <Download className="h-5 w-5 text-accent-1 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-text/70 text-sm mb-4">{item.description}</p>
                        <span className="text-xs text-accent-1 bg-accent-1/10 px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Need <span className="gradient-text">Custom Solutions?</span>
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Our team can create tailored tools and workflows for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="btn-secondary inline-flex items-center space-x-2">
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

