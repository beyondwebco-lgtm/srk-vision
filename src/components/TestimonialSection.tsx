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
    <section className="py-24 md:py-32 bg-[#EDE9E2] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#171717]/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
              CLIENT EXPERIENCES
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2 text-[#171717]">
              Trusted by Those <br />
              <span className="italic font-normal">Behind the Lens.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-[#737373] max-w-md font-light leading-relaxed">
            Genuine verified experiences from wedding photographers, studio owners, and creators across India and the United States.
          </p>
        </div>

        {/* Luxury Editorial Testimonial Card */}
        <div className="bg-[#F8F7F4] p-8 sm:p-12 md:p-16 border border-[#171717]/10 relative shadow-sm max-w-5xl mx-auto">
          <Quote className="w-12 h-12 text-[#B49A78]/25 absolute top-8 right-8" />

          {/* Star Rating */}
          <div className="flex items-center space-x-1.5 mb-8">
            {[...Array(current.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#B49A78] text-[#B49A78]"
              />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed text-[#171717] min-h-[160px] flex items-center">
            “{current.quote}”
          </blockquote>

          {/* Client Details & Date */}
          <div className="mt-10 pt-6 border-t border-[#171717]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-editorial text-2xl font-medium text-[#171717]">
                {current.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#B49A78] mt-0.5">
                {current.location} · {current.date}
              </p>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center space-x-3">
              <span className="text-xs text-[#737373] tracking-widest font-mono mr-2">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 border border-[#171717]/20 flex items-center justify-center hover:bg-[#171717] hover:text-white transition-colors"
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
