import Link from "next/link";
import { Shield, CheckCircle2, Lock, Eye, FileCheck, ArrowRight, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Compliance Services | 143IT",
  description: "Security planning, identity management, patching, backup, and compliance-readiness services scoped to your environment.",
};

export default function SecurityCompliancePage() {
  const features = [
    {
      icon: Eye,
      title: "Security Operations Planning",
      description: "Assess monitoring, detection, escalation, and response requirements before selecting or integrating security tooling.",
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description: "Zero-trust architecture, MFA, privileged access management, and identity governance.",
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Management",
      description: "Continuous scanning, patch management, and proactive remediation of security vulnerabilities.",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "SOC 2, ISO 27001, HIPAA, PCI-DSS, and other regulatory compliance frameworks.",
    },
  ];

  const services = [
    "Security Monitoring Assessment",
    "Threat Detection & Response Planning",
    "Identity & Access Management (IAM)",
    "Multi-Factor Authentication (MFA)",
    "Vulnerability Scanning & Assessment",
    "Patch Management",
    "Backup & Disaster Recovery",
    "Compliance Audits & Reporting",
    "Security Awareness Training",
    "Incident Response Planning",
  ];

  const complianceFrameworks = [
    { name: "SOC 2", description: "Service Organization Control 2" },
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "HIPAA", description: "Healthcare Data Protection" },
    { name: "PCI-DSS", description: "Payment Card Industry" },
    { name: "GDPR", description: "Data Privacy Regulation" },
    { name: "NIST", description: "Cybersecurity Framework" },
  ];

  const securityLayers = [
    {
      layer: "Perimeter Security",
      items: ["Firewall Management", "DDoS Protection", "VPN & Remote Access"],
    },
    {
      layer: "Identity Security",
      items: ["MFA Enforcement", "Privileged Access", "Single Sign-On"],
    },
    {
      layer: "Data Security",
      items: ["Encryption at Rest", "Encryption in Transit", "Data Loss Prevention"],
    },
    {
      layer: "Endpoint Security",
      items: ["Antivirus/EDR", "Device Management", "Security Patching"],
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-12 w-12 text-accent-1" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              <span className="gradient-text">Security & Compliance</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-3xl">
            Security planning, identity management, patching, backup, and compliance-readiness services scoped to your environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Secure Your Infrastructure</span>
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
            Comprehensive <span className="gradient-text">Security</span>
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

      {/* Security Layers */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Defense in <span className="gradient-text">Depth</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8"
              >
                <h3 className="text-xl font-heading font-bold mb-4 text-accent-1">
                  {layer.layer}
                </h3>
                <ul className="space-y-2">
                  {layer.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-text/70">
                      <div className="w-1.5 h-1.5 bg-accent-1 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Compliance <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-6 text-center hover:border-accent-1/50 transition-colors"
              >
                <div className="text-2xl font-heading font-bold text-accent-1 mb-2">
                  {framework.name}
                </div>
                <div className="text-text/60 text-sm">{framework.description}</div>
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
            Protect Your Business Today
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's build a comprehensive security strategy for your organization.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Get a Security Assessment</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
