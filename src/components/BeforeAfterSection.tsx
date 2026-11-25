"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BEFORE_AFTER_ITEMS } from "@/data/content";
import { Sparkles } from "lucide-react";

export default function BeforeAfterSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const activeItem = BEFORE_AFTER_ITEMS[selectedIdx];

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <section className="py-24 md:py-32 bg-[#EDE9E2] text-[#171717] grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#171717]/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
              Precision & Craftsmanship
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2 text-[#171717]">
              See the Difference. <br />
              <span className="italic font-normal">Feel the Detail.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-[#737373] max-w-md font-light leading-relaxed">
            Drag the comparison divider to examine the natural skin texture retention, delicate tone balance, and pristine shadow depth executed by our post-production artists.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-8">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border ${
                selectedIdx === idx
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-transparent text-[#171717] border-[#171717]/20 hover:border-[#171717]"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="bg-[#F8F7F4] p-4 sm:p-6 md:p-8 border border-[#171717]/10 shadow-sm">
          <div
            className="relative w-full aspect-[4/3] md:aspect-[16/9] max-h-[640px] select-none overflow-hidden cursor-ew-resize bg-[#171717]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="slider"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                setSliderPosition((p) => Math.max(0, p - 5));
              } else if (e.key === "ArrowRight") {
                setSliderPosition((p) => Math.min(100, p + 5));
              }
            }}
            aria-label="Comparison slider between before and after editing"
          >
            {/* AFTER IMAGE (Base layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activeItem.afterImage}
                alt={`${activeItem.title} - Perfected After`}
                fill
                className="object-cover object-center pointer-events-none"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute bottom-6 right-6 z-10 bg-[#171717]/85 backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#EDE9E2] border border-white/10 flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-[#B49A78]" />
                <span>After — SRK Visions</span>
              </div>
            </div>

            {/* BEFORE IMAGE (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-full h-full min-w-full">
                {/* Fixed width container prevents image distortion */}
                <div className="relative w-full h-full min-w-[700px] sm:min-w-[900px] md:min-w-[1200px]">
                  <Image
                    src={activeItem.beforeImage}
                    alt={`${activeItem.title} - Original Before`}
                    fill
                    className="object-cover object-center pointer-events-none"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-10 bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/90 border border-white/10">
                Before — Original RAW
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#171717] border-2 border-white flex items-center justify-center text-white shadow-xl">
                <div className="flex items-center space-x-1">
                  <span className="text-[10px] leading-none">&#10094;</span>
                  <span className="text-[10px] leading-none">&#10095;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description of current comparison */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#171717]/10">
            <div>
              <h3 className="font-editorial text-2xl font-medium text-[#171717]">
                {activeItem.title}
              </h3>
              <p className="text-xs text-[#737373] mt-1 font-light max-w-xl">
                {activeItem.description}
              </p>
            </div>
            <div className="text-[11px] text-[#737373] uppercase tracking-widest font-mono">
              Use arrow keys or drag divider
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
