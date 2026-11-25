import React from "react";
import { ClipboardList, Palette, FileEdit, CheckCircle2 } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      stepNumber: "STEP 1",
      title: "ORDER & BRIEF REVIEW",
      description:
        "We organize your requirements, references, deadlines, and project details before editing begins.",
      icon: (
        <div className="text-[#CE986C]">
          <ClipboardList className="w-7 h-7" />
        </div>
      ),
    },
    {
      stepNumber: "STEP 2",
      title: "PROFESSIONAL EDITOR",
      description:
        "Our editor transforms your brief into a refined visual result while following your requested style.",
      icon: (
        <div className="text-[#CE986C]">
          <Palette className="w-7 h-7" />
        </div>
      ),
    },
    {
      stepNumber: "STEP 3",
      title: "DETAILED RECHECKING",
      description:
        "A separate reviewer checks details, consistency, colors, alignment, and visible editing errors.",
      icon: (
        <div className="text-[#CE986C]">
          <FileEdit className="w-7 h-7" />
        </div>
      ),
    },
    {
      stepNumber: "STEP 4",
      title: "FINAL CROSS-CHECK & DELIVERY",
      description:
        "We verify the final files against your requirements before preparing them for client delivery.",
      icon: (
        <div className="text-[#25D366]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#6B1E35] text-white relative">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
        
        {/* Section Label: OUR WORKFLOW */}
        <span className="text-xs uppercase tracking-[0.28em] text-[#CE986C] font-semibold block mb-3">
          OUR WORKFLOW
        </span>

        {/* Heading: FOUR STEPS. ONE PERFECT FINISH. (Exact Screenshot 3) */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[50px] font-bold text-white tracking-wide uppercase leading-tight mb-20 md:mb-24">
          FOUR STEPS. ONE PERFECT FINISH.
        </h2>

        {/* Four-Step Timeline with Thin Connecting Line */}
        <div className="relative">
          {/* Thin Horizontal Caramel Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[34px] left-[12%] right-[12%] h-[1px] bg-[#CE986C]/50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                
                {/* Circular white icon container ~68px diameter with thin caramel border */}
                <div className="w-[68px] h-[68px] rounded-full bg-white border border-[#CE986C] shadow-md flex items-center justify-center shrink-0 mb-6 transition-transform duration-300 hover:scale-105">
                  {item.icon}
                </div>

                {/* Step Number: STEP 1 */}
                <span className="font-quicksand text-xs uppercase tracking-[0.2em] text-[#CE986C] font-bold mb-2">
                  {item.stepNumber}
                </span>

                {/* Step Title: Serif font */}
                <h3 className="font-cinzel text-lg sm:text-[19px] font-bold text-white tracking-wider uppercase mb-3 min-h-[48px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-quicksand text-sm text-white/80 font-medium leading-[1.75] max-w-[260px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
