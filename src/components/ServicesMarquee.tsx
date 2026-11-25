import React from "react";

export default function ServicesMarquee() {
  const items = [
    "COLOUR CORRECTION",
    "HIGH END RETOUCH",
    "SOCIAL MEDIA POST DESIGNING",
    "IMAGE CULLING SELECTION",
    "PROFESSIONAL ALBUM DESIGNING",
  ];

  // Repeat for continuous smooth scrolling
  const fullList = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#F6EFE6] text-[#6B1E35] border-y border-[#E8CDB4] overflow-hidden py-4 select-none relative">
      <div className="animate-marquee-smooth flex items-center space-x-8 md:space-x-12 whitespace-nowrap">
        {fullList.map((item, index) => (
          <div key={index} className="flex items-center space-x-8 md:space-x-12">
            <span className="font-cinzel text-base md:text-[18px] tracking-[0.14em] uppercase font-bold text-[#6B1E35]">
              {item}
            </span>
            <span className="text-[#CE986C] text-sm md:text-base">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
