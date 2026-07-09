"use client";

import Link from "next/link";
import { Cloud, Shield, Bot, Workflow, Database, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function FeaturedServices() {
  const services = [
    {
      icon: Database,
      title: "Managed Infrastructure",
      description: "Enterprise-grade management of Windows, VMware, Azure, and M365 environments.",
      href: "/services/managed-it",
      gradient: "from-accent-1 to-amber-500",
    },
    {
      icon: Cloud,
      title: "Cloud Modernization",
      description: "Seamless migration and optimization for Azure, AWS, and hybrid cloud platforms.",
      href: "/services/cloud-modernization",
      gradient: "from-accent-cyan to-blue-500",
    },
    {
      icon: Workflow,
      title: "Automation & DevOps",
      description: "Turn operations into code with Terraform, Ansible, PowerShell, and CI/CD pipelines.",
      href: "/services/automation-devops",
      gradient: "from-accent-purple to-pink-500",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Security planning, identity management, patching, backup, and compliance readiness.",
      href: "/services/security-compliance",
      gradient: "from-accent-emerald to-teal-500",
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Intelligent workflows with n8n, ChatGPT, Copilot, and custom AI solutions.",
      href: "/services/ai-integration",
      gradient: "from-accent-2 to-indigo-500",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto relative">
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="gradient-text">Featured Services</span>
            </h2>
            <p className="text-xl text-text/70 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <Link href={service.href}>
                <motion.div
                  className="glass-card p-8 h-full group cursor-pointer relative overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon */}
                  <motion.div
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient}`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <service.icon className="h-7 w-7 text-background" />
                  </motion.div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-3 text-text group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text/60 group-hover:text-text/80 transition-colors leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <ArrowUpRight className={`h-6 w-6 bg-gradient-to-r ${service.gradient} bg-clip-text`} style={{ color: 'currentColor' }} />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.5}>
          <div className="text-center mt-16">
            <Link href="/services" className="btn-primary inline-flex items-center space-x-3">
              <span>View All Services</span>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
