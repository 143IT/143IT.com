import Link from "next/link";
import { Database, CheckCircle2, Clock, Shield, Zap, ArrowRight, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = genMeta({
  title: "Managed IT Infrastructure Services | 143IT",
  description: "Scoped management and operational support for Windows, VMware, Azure, and M365 environments.",
  path: "/services/managed-it",
});

export default function ManagedITPage() {
  const features = [
    {
      icon: Clock,
      title: "Monitoring & Operational Support",
      description: "Monitoring and response coverage defined around your environment and approved service scope.",
    },
    {
      icon: Shield,
      title: "Proactive Maintenance",
      description: "Automated patch management, system updates, and preventive maintenance to avoid downtime.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous tuning and optimization to ensure peak performance of your infrastructure.",
    },
    {
      icon: Zap,
      title: "Rapid Issue Resolution",
      description: "Expert team ready to diagnose and resolve issues before they impact your business.",
    },
  ];

  const services = [
    "Infrastructure Health Monitoring",
    "Windows Server Management",
    "VMware & Hyper-V Administration",
    "Azure & M365 Management",
    "Patch & Update Management",
    "Capacity Planning & Forecasting",
    "Performance Tuning & Optimization",
    "Backup & Recovery Management",
    "Documentation & Runbooks",
    "Service Level Agreement (SLA) Compliance",
  ];

  const useCases = [
    {
      title: "Growing Businesses",
      description: "Scale your infrastructure without hiring a full IT team. Get enterprise-grade management at a fraction of the cost.",
    },
    {
      title: "Legacy System Modernization",
      description: "Maintain legacy systems while planning migration paths to modern cloud infrastructure.",
    },
    {
      title: "Compliance-Driven Industries",
      description: "Healthcare, finance, and regulated industries requiring strict uptime and compliance standards.",
    },
  ];

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          name: "Managed IT Infrastructure Services",
          description: "Scoped management and operational support for Windows, VMware, Azure, and M365 environments.",
          url: "https://143it.com/services/managed-it",
          areaServed: ["US", "CA"],
          serviceType: "IT Infrastructure Management",
          offers: {
            "@type": "Offer",
            name: "Managed IT Infrastructure",
            description: "Monitoring, maintenance, and operational support defined in an approved service scope.",
          },
        }}
      />
      <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="h-12 w-12 text-accent-1" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              <span className="gradient-text">Managed IT Infrastructure</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-3xl">
            Scoped management and operational support for Windows, VMware, Azure, and M365 environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get Started</span>
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
            Why Choose Our <span className="gradient-text">Managed IT</span>
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

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            Perfect For
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-accent-1/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Elevate Your Infrastructure?
          </h2>
          <p className="text-xl text-text/80 mb-8">
            Let's discuss how our managed IT services can transform your operations.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Schedule a Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
