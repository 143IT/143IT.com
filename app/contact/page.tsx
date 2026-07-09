"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email us directly at support@143it.com");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@143it.com",
      href: "mailto:support@143it.com",
      gradient: "from-accent-1 to-amber-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote, serving the United States and Canada",
      href: null,
      gradient: "from-accent-purple to-pink-500",
    },
  ];

  const inputClasses = "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-text placeholder-text/40 focus:outline-none focus:border-accent-1/50 focus:bg-white/10 transition-all duration-300";

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-1/5 via-accent-cyan/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-40" />

        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto max-w-5xl text-center relative">
          <FadeInSection>
            <motion.div
              className="inline-flex items-center space-x-2 glass-card px-5 py-2.5 mb-10"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-accent-1" />
              <span className="text-sm text-accent-1 font-medium">Let's Connect</span>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              <span className="gradient-text">Get in Touch</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-xl md:text-2xl text-text/70 max-w-3xl mx-auto">
              Let's discuss how we can help transform your IT infrastructure
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <FadeInSection>
                <h2 className="text-2xl font-heading font-bold mb-8">
                  Contact Information
                </h2>
              </FadeInSection>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <FadeInSection key={index} delay={index * 0.1}>
                    <motion.div
                      className="flex items-start space-x-4 glass-card p-5 group"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${info.gradient}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <info.icon className="h-6 w-6 text-background" />
                      </motion.div>
                      <div>
                        <div className="text-text/50 text-sm mb-1">{info.title}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-text hover:text-accent-1 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-text font-medium">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection delay={0.4}>
                <div className="glass-card p-6">
                  <h3 className="font-heading font-bold mb-3 text-text">Response Time</h3>
                  <p className="text-text/60 text-sm leading-relaxed">
                    We respond to product demo requests within one business day.
                    Other inquiries are handled by email during business days.
                  </p>
                </div>
              </FadeInSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeInSection delay={0.2}>
                <motion.div
                  className="glass-card p-8 md:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-2xl font-heading font-bold mb-8">
                    Send Us a Message
                  </h2>

                  {status === "success" ? (
                    <motion.div
                      className="text-center py-16"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-accent-emerald to-teal-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle className="h-10 w-10 text-background" />
                      </motion.div>
                      <h3 className="text-2xl font-heading font-bold mb-3 gradient-text">
                        Message Sent!
                      </h3>
                      <p className="text-text/70">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : status === "error" ? (
                    <motion.div
                      className="text-center py-16"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-red-500/20">
                        <Mail className="h-10 w-10 text-red-500" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-red-500">
                        Something Went Wrong
                      </h3>
                      <p className="text-text/70 mb-6">
                        {errorMessage}
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="btn-secondary"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-text/70 mb-2 text-sm font-medium">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={inputClasses}
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-text/70 mb-2 text-sm font-medium">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={inputClasses}
                            placeholder="john@company.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-text/70 mb-2 text-sm font-medium">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Your Company"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-text/70 mb-2 text-sm font-medium">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-text/70 mb-2 text-sm font-medium">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">Select a service</option>
                          <option value="managed-it">Managed Infrastructure</option>
                          <option value="cloud">Cloud Migration & Modernization</option>
                          <option value="automation">Automation & DevOps</option>
                          <option value="security">Security & Compliance</option>
                          <option value="ai">AI Integration</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-text/70 mb-2 text-sm font-medium">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className={`${inputClasses} resize-none`}
                          placeholder="Tell us about your project or requirements..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full btn-primary inline-flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                        whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                      >
                        <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                        {status !== "submitting" && <Send className="h-5 w-5" />}
                      </motion.button>

                      <p className="text-sm text-text/50 text-center">
                        By submitting this form, you agree to our Privacy Policy.
                      </p>
                    </form>
                  )}
                </motion.div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
