"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Animated Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-1/5 via-accent-purple/5 to-transparent pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-50" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-accent-1/20 to-accent-cyan/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-accent-purple/20 to-accent-2/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-accent-emerald/15 to-accent-cyan/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-accent-1/20"
        animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/5 text-accent-cyan/20"
        animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Shield size={40} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-1/6 text-accent-purple/20"
        animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Cloud size={44} />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <FadeInSection delay={0.1}>
            <motion.div
              className="inline-flex items-center space-x-2 glass-card px-5 py-2.5 mb-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="h-4 w-4 text-accent-1" />
              <span className="text-sm text-accent-1 font-medium tracking-wide">
                Automation-First MSP Services
              </span>
            </motion.div>
          </FadeInSection>

          {/* Main Headline */}
          <FadeInSection delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight">
              <span className="gradient-text glow-effect">
                Automate &amp; Dominate
              </span>
              <br />
              <span className="text-text/90">with AI</span>
            </h1>
          </FadeInSection>

          {/* Subheadline */}
          <FadeInSection delay={0.5}>
            <p className="text-xl md:text-2xl text-text/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Next-Gen IT Management with <span className="text-accent-cyan font-medium">Cloud</span>, <span className="text-accent-1 font-medium">Automation</span>, and <span className="text-accent-purple font-medium">AI</span> at the Core.
            </p>
          </FadeInSection>

          {/* CTAs */}
          <FadeInSection delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/services" className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/products/azure-vm-manager" className="btn-secondary inline-flex items-center space-x-3 text-lg px-8 py-4">
                <span>Explore Azure VM Manager</span>
              </Link>
            </div>
          </FadeInSection>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
