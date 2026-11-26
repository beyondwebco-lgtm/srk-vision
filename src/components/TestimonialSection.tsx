"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/content";
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  // Duplicate array for seamless infinite marquee loop (-50% translation)
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0] text-[#727272] overflow-hidden relative">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 mb-14 text-center">
        {/* Section Header */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
          TESTIMONIALS
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
          Happy Clients
        </h2>
        <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
        <p className="mt-4 text-sm sm:text-base text-[#727272] max-w-xl mx-auto font-medium">
          Trusted by leading photography studios and wedding creators across India and internationally.
        </p>
      </div>

      {/* Marquee Container with edge gradients */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#F8F5F0] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#F8F5F0] to-transparent z-10" />

        {/* Continuous Smooth Scrolling Marquee Track */}
        <div className="animate-marquee-slow flex space-x-6 sm:space-x-8 px-4">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[390px] md:w-[420px] shrink-0 bg-white rounded-[22px] p-7 sm:p-8 border border-[#E8CDB4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top: 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#CE986C] text-[#CE986C]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#6B1E35]/20 group-hover:text-[#6B1E35]/35 transition-colors" />
                </div>

                {/* Quote Body */}
                <p className="font-quicksand text-sm sm:text-[15px] text-[#727272] leading-[1.8] font-medium min-h-[110px]">
                  “{item.quote}”
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="mt-6 pt-5 border-t border-[#E8CDB4]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#6B1E35]">
                    {item.name}
                  </h4>
                  <span className="font-quicksand text-xs sm:text-sm text-[#CE986C] font-semibold block mt-0.5">
                    {item.location}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#727272]/70 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
