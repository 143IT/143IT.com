"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  History,
  PlayCircle,
  Server,
} from "lucide-react";

const steps = [
  {
    title: "Select the target",
    description:
      "Choose the Azure subscription, resource group, and virtual machine that the operation should affect.",
    icon: Server,
    detail: "Subscription: Production · Resource group: Operations · VM: web-01",
  },
  {
    title: "Review the request",
    description:
      "Confirm the requested action and its target before it enters the execution workflow.",
    icon: ClipboardList,
    detail: "Action: Restart VM · Requested by: Demo operator · Status: Ready",
  },
  {
    title: "Track the operation",
    description:
      "Follow operation status and retain an auditable record of the request and outcome.",
    icon: History,
    detail: "Queued → In progress → Completed · Operation record retained",
  },
];

export default function ProductWorkflowDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveIcon = steps[activeStep].icon;

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
      <div className="space-y-3" role="tablist" aria-label="Product workflow">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const active = index === activeStep;
          return (
            <button
              key={step.title}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="workflow-preview"
              onClick={() => setActiveStep(index)}
              className={`w-full text-left p-5 rounded-xl border transition-colors ${
                active
                  ? "bg-accent-1/10 border-accent-1/60"
                  : "bg-background/40 border-white/10 hover:border-accent-1/30"
              }`}
            >
              <span className="flex items-start gap-4">
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    active ? "bg-accent-1 text-background" : "bg-white/5 text-text/60"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-heading font-bold mb-1">
                    {index + 1}. {step.title}
                  </span>
                  <span className="block text-sm text-text/60">
                    {step.description}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="workflow-preview"
        role="tabpanel"
        className="rounded-2xl border border-accent-1/20 bg-[#0b0f17] overflow-hidden min-h-[390px]"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.03]">
          <div>
            <div className="font-heading font-bold">Azure VM Manager</div>
            <div className="text-xs text-text/50">Guided workflow preview</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-accent-emerald">
            <span className="w-2 h-2 rounded-full bg-accent-emerald" />
            Demo environment
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-text/50">Step {activeStep + 1} of {steps.length}</div>
            <div className="flex gap-2">
              {steps.map((step, index) => (
                <span
                  key={step.title}
                  className={`h-1.5 w-10 rounded-full ${
                    index <= activeStep ? "bg-accent-1" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="w-14 h-14 rounded-xl bg-accent-1/10 flex items-center justify-center mb-6">
            <ActiveIcon className="h-7 w-7 text-accent-1" />
          </div>
          <h3 className="text-2xl font-heading font-bold mb-3">
            {steps[activeStep].title}
          </h3>
          <p className="text-text/70 mb-8">{steps[activeStep].description}</p>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 mb-6">
            <div className="text-xs uppercase tracking-wider text-text/40 mb-2">
              Example state
            </div>
            <div className="text-sm text-text/80">{steps[activeStep].detail}</div>
          </div>

          <div className="flex items-center gap-2 text-sm text-text/60">
            {activeStep === steps.length - 1 ? (
              <CheckCircle2 className="h-5 w-5 text-accent-emerald" />
            ) : (
              <PlayCircle className="h-5 w-5 text-accent-1" />
            )}
            This preview illustrates the workflow and does not connect to Azure.
          </div>
        </div>
      </div>
    </div>
  );
}
