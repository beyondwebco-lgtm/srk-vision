import React from "react";

export default function WorkflowSection() {
  const steps = [
    {
      stepNumber: "STEP 1",
      title: "ORDER & BRIEF REVIEW",
      description:
        "We organize your requirements, references, deadlines, and project details before editing begins.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="5" width="20" height="23" rx="2.5" fill="#D99B6A" />
          <rect x="8.5" y="8" width="15" height="18" rx="1.5" fill="#FFFFFF" />
          <rect x="11" y="3.5" width="10" height="3.5" rx="1" fill="#A87349" />
          <circle cx="16" cy="5.2" r="1" fill="#FFFFFF" />
          <rect x="11" y="12" width="10" height="1.8" rx="0.9" fill="#E88B52" />
          <rect x="11" y="16" width="10" height="1.8" rx="0.9" fill="#B0A090" />
          <rect x="11" y="20" width="6.5" height="1.8" rx="0.9" fill="#B0A090" />
        </svg>
      ),
    },
    {
      stepNumber: "STEP 2",
      title: "PROFESSIONAL EDITOR",
      description:
        "Our editor transforms your brief into a refined visual result while following your requested style.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C17.66 28 19 26.66 19 25C19 24.23 18.69 23.53 18.18 23.02C17.67 22.51 17.36 21.81 17.36 21.04C17.36 19.38 18.7 18.04 20.36 18.04H23C26.31 18.04 29 15.35 29 12.04C29 7.6 23.18 4 16 4Z"
            fill="#FBE7D0"
            stroke="#DCA675"
            strokeWidth="1.2"
          />
          <circle cx="10" cy="13" r="2" fill="#E85D75" />
          <circle cx="15" cy="9.5" r="2" fill="#F59E0B" />
          <circle cx="21" cy="11.5" r="2" fill="#3B82F6" />
          <circle cx="13" cy="22" r="1.8" fill="#10B981" />
          <ellipse cx="23.5" cy="15" rx="1.8" ry="1.4" fill="#6B1E35" opacity="0.15" />
        </svg>
      ),
    },
    {
      stepNumber: "STEP 3",
      title: "DETAILED RECHECKING",
      description:
        "A separate reviewer checks details, consistency, colors, alignment, and visible editing errors.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="4" width="16" height="23" rx="2" fill="#FFFFFF" stroke="#C5B2A1" strokeWidth="1.2" />
          <path d="M18 4L23 9H19.5C18.67 9 18 8.33 18 7.5V4Z" fill="#E2D4C6" />
          <rect x="9.5" y="11" width="11" height="1.6" rx="0.8" fill="#A89B8E" />
          <rect x="9.5" y="14.5" width="11" height="1.6" rx="0.8" fill="#A89B8E" />
          <rect x="9.5" y="18" width="7" height="1.6" rx="0.8" fill="#A89B8E" />
          <g transform="translate(14, 15) rotate(-35)">
            <rect x="0" y="0" width="13" height="3.8" rx="1" fill="#E88B52" />
            <path d="M13 0L17 1.9L13 3.8V0Z" fill="#2E231F" />
            <rect x="0" y="0" width="3" height="3.8" rx="0.8" fill="#B0A090" />
          </g>
        </svg>
      ),
    },
    {
      stepNumber: "STEP 4",
      title: "FINAL CROSS-CHECK & DELIVERY",
      description:
        "We verify the final files against your requirements before preparing them for client delivery.",
      icon: (
        <div className="w-[32px] h-[32px] rounded-lg bg-[#27BE69] flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
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
