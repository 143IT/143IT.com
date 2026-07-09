"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  jobRole: "",
  azureSubscriptions: "",
  approximateVms: "",
  phone: "",
  message: "",
  activeAzureSubscription: false,
};

export default function DemoRequestForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const inputClasses =
    "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text placeholder-text/40 focus:outline-none focus:border-accent-1/60 transition-colors";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/product-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to submit your demo request.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit your demo request."
      );
      setStatus("error");
    }
  }

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : value,
    }));
  }

  if (status === "success") {
    return (
      <div className="text-center py-12" role="status">
        <div className="w-16 h-16 rounded-full bg-accent-emerald/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="h-8 w-8 text-accent-emerald" />
        </div>
        <h3 className="text-2xl font-heading font-bold mb-3">
          Demo request received
        </h3>
        <p className="text-text/70 max-w-lg mx-auto">
          Your request has been received. A 143IT product specialist will contact
          you within one business day to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div
          className="flex gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"
          role="alert"
        >
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{error} You can also email support@143it.com.</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <label className="block text-sm text-text/70">
          Name *
          <input
            className={`${inputClasses} mt-2`}
            name="name"
            value={form.name}
            onChange={updateField}
            required
            autoComplete="name"
          />
        </label>
        <label className="block text-sm text-text/70">
          Work email *
          <input
            className={`${inputClasses} mt-2`}
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-sm text-text/70">
          Company *
          <input
            className={`${inputClasses} mt-2`}
            name="company"
            value={form.company}
            onChange={updateField}
            required
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm text-text/70">
          Job role *
          <input
            className={`${inputClasses} mt-2`}
            name="jobRole"
            value={form.jobRole}
            onChange={updateField}
            required
            autoComplete="organization-title"
          />
        </label>
        <label className="block text-sm text-text/70">
          Azure subscriptions *
          <input
            className={`${inputClasses} mt-2`}
            name="azureSubscriptions"
            type="number"
            min="1"
            max="10000"
            value={form.azureSubscriptions}
            onChange={updateField}
            required
          />
        </label>
        <label className="block text-sm text-text/70">
          Approximate number of VMs *
          <input
            className={`${inputClasses} mt-2`}
            name="approximateVms"
            type="number"
            min="0"
            max="1000000"
            value={form.approximateVms}
            onChange={updateField}
            required
          />
        </label>
      </div>

      <label className="block text-sm text-text/70">
        Phone <span className="text-text/40">(optional)</span>
        <input
          className={`${inputClasses} mt-2`}
          name="phone"
          type="tel"
          value={form.phone}
          onChange={updateField}
          autoComplete="tel"
        />
      </label>

      <label className="block text-sm text-text/70">
        Primary challenge *
        <textarea
          className={`${inputClasses} mt-2 min-h-32 resize-y`}
          name="message"
          value={form.message}
          onChange={updateField}
          required
          minLength={10}
          maxLength={3000}
          placeholder="Tell us what you want to improve about Azure VM operations."
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-text/70">
        <input
          className="mt-1 h-4 w-4 accent-accent-1"
          name="activeAzureSubscription"
          type="checkbox"
          checked={form.activeAzureSubscription}
          onChange={updateField}
          required
        />
        <span>
          I confirm that my organization has an active Azure subscription. *
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending request
          </>
        ) : (
          <>
            Request a Demo
            <Send className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
