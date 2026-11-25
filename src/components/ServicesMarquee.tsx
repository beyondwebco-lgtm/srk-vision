import React from "react";

export default function ServicesMarquee() {
  const marqueeItems = [
    "Colour Correction",
    "High-End Retouching",
    "Image Culling & Selection",
    "Instagram Content Designing",
    "Professional Album Designing",
  ];

  // Repeat for continuous seamless loop
  const list = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-[#171717] text-[#EDE9E2] border-y border-white/10 overflow-hidden py-5 select-none relative">
      <div className="animate-marquee flex items-center space-x-8 md:space-x-12 whitespace-nowrap">
        {list.map((item, index) => (
          <div key={index} className="flex items-center space-x-8 md:space-x-12">
            <span className="font-editorial text-lg md:text-2xl tracking-widest uppercase font-light text-neutral-200">
              {item}
            </span>
            <span className="text-[#B49A78] text-sm md:text-base font-serif">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
