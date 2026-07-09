"use client";

import Link from "next/link";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rob-loftin-143it", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/iloveyouit", label: "GitHub" },
    { icon: Mail, href: "mailto:support@143it.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-background pt-1">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-1 via-accent-cyan to-accent-purple" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <motion.span
                className="text-3xl font-heading font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                143IT
              </motion.span>
            </Link>
            <p className="mt-4 text-text/80 font-semibold text-lg">
              Automate & Dominate with AI
            </p>
            <p className="mt-2 text-text/50 text-sm max-w-md">
              Next-Gen IT Management with Cloud, Automation, and AI at the Core.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text/60 hover:text-accent-1 transition-all duration-300 hover:bg-white/10"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-text mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/products/azure-vm-manager" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Azure VM Manager</Link></li>
              <li><Link href="/products/azure-vm-manager/security" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Product Security</Link></li>
              <li><Link href="/products/azure-vm-manager/support" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Product Support</Link></li>
              <li><Link href="/services/managed-it" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Managed IT</Link></li>
              <li><Link href="/services/cloud-modernization" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Cloud Modernization</Link></li>
              <li><Link href="/services/automation-devops" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Automation & DevOps</Link></li>
              <li><Link href="/services/ai-integration" className="text-text/50 hover:text-accent-1 transition-colors text-sm">AI Integration</Link></li>
              <li><Link href="/services/security-compliance" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Security & Compliance</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-bold text-text mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-text/50 hover:text-accent-1 transition-colors text-sm">About</Link></li>
              <li><Link href="/blog" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/case-studies" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Build Story</Link></li>
              <li><Link href="/contact" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Contact</Link></li>
              <li><Link href="/resources" className="text-text/50 hover:text-accent-1 transition-colors text-sm">Resources</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text/40 text-sm">
            © {new Date().getFullYear()} 143IT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/legal/privacy" className="text-text/40 hover:text-accent-1 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-text/40 hover:text-accent-1 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
