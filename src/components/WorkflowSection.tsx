import React from "react";
import { WORKFLOW_STEPS } from "@/data/content";

export default function WorkflowSection() {
  return (
    <section className="py-24 md:py-32 bg-[#EDE9E2] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
            OUR WORKFLOW
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2 text-[#171717]">
            Four Steps. <br />
            <span className="italic font-normal">One Perfect Finish.</span>
          </h2>
          <p className="mt-4 text-base text-[#737373] font-light leading-relaxed">
            Our multi-tiered production pipeline ensures consistency across thousands of frames, with separate specialized artists dedicated to color, retouching, and rigorous quality inspection.
          </p>
        </div>

        {/* Timeline Grid with Thin Connecting Line */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-[#171717]/15 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col space-y-4 pt-6 border-t lg:border-t-0 border-[#171717]/15"
              >
                {/* Step indicator node */}
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-5xl lg:text-6xl font-light text-[#B49A78] tracking-tight">
                    {step.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#171717] hidden lg:block" />
                </div>

                <h3 className="font-editorial text-2xl font-medium text-[#171717] tracking-tight pt-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#171717] font-normal leading-relaxed">
                  {step.description}
                </p>

                <p className="text-xs text-[#737373] font-light leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
