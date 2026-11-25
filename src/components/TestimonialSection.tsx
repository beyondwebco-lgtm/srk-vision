"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/content";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0] text-[#727272]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
            TESTIMONIALS
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
            Happy Clients
          </h2>
          <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-[24px] p-8 sm:p-12 md:p-16 border border-[#E8CDB4] shadow-sm relative">
          <Quote className="w-12 h-12 text-[#6B1E35]/15 absolute top-8 right-8" />

          {/* 5 Muted Gold Stars */}
          <div className="flex items-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#CE986C] text-[#CE986C]"
              />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-quicksand text-base sm:text-lg md:text-xl text-[#727272] leading-[1.8] font-medium min-h-[140px] flex items-center">
            “{current.quote}”
          </blockquote>

          {/* Client Details & Carousel Controls */}
          <div className="mt-8 pt-6 border-t border-[#E8CDB4]/60 flex items-center justify-between">
            <div>
              <p className="font-cinzel text-xl sm:text-2xl font-bold text-[#6B1E35]">
                {current.name}
              </p>
              <p className="font-quicksand text-xs sm:text-sm text-[#CE986C] font-semibold mt-0.5">
                {current.location} · {current.date}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E8CDB4] flex items-center justify-center text-[#6B1E35] hover:bg-[#6B1E35] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E8CDB4] flex items-center justify-center text-[#6B1E35] hover:bg-[#6B1E35] hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
