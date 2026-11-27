"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

export interface ComparisonItem {
  id: string;
  category: string;
  comparisonNumber: string;
  title: string;
  subtitle: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const COMPARISONS_DATA: ComparisonItem[] = [
  {
    id: "comp-1",
    comparisonNumber: "Comparison 1",
    category: "Colour Correction",
    title: "Traditional Indian Wedding Couple",
    subtitle: "Balanced Exposure & Radiant Warmth",
    description:
      "Flat colours, dull lighting and low contrast before editing, transformed into beautiful colour grading, balanced exposure and natural skin tones.",
    beforeImage: "/assets/portfolio/comp1-before.webp",
    afterImage: "/assets/portfolio/comp1-after.webp",
  },
  {
    id: "comp-2",
    comparisonNumber: "Comparison 2",
    category: "Colour Correction",
    title: "Candid Indian Wedding Ceremony",
    subtitle: "Atmospheric White Balance & Ambient Lighting",
    description:
      "Unbalanced white balance and washed-out colours before editing, transformed into rich, realistic colours and professionally corrected ceremony lighting.",
    beforeImage: "/assets/portfolio/comp2-before.webp",
    afterImage: "/assets/portfolio/comp2-after.webp",
  },
  {
    id: "comp-3",
    comparisonNumber: "Comparison 3",
    category: "High-End Retouch",
    title: "Indian Bridal Close-Up Portrait",
    subtitle: "Pore Texture Preservation & Micro Retouching",
    description:
      "Natural skin texture with visible temporary blemishes before editing, followed by professional skin retouching with authentic natural texture meticulously preserved.",
    beforeImage: "/assets/portfolio/comp3-before.webp",
    afterImage: "/assets/portfolio/comp3-after.webp",
  },
  {
    id: "comp-4",
    comparisonNumber: "Comparison 4",
    category: "High-End Retouch",
    title: "Professional Groom Portrait",
    subtitle: "Even Lighting & Dignified Editorial Polish",
    description:
      "Uneven lighting, minor blemishes and distracting details before editing, refined with balanced skin tones, corrected lighting and professional royal finishing.",
    beforeImage: "/assets/portfolio/comp4-before.webp",
    afterImage: "/assets/portfolio/comp4-after.webp",
  },
];

function SingleComparisonCard({ item }: { item: ComparisonItem }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-[22px] border border-[#E8CDB4] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#6B1E35]">
          {item.comparisonNumber} — {item.category}
        </span>
        <span className="text-[11px] font-quicksand text-[#CE986C] font-semibold uppercase tracking-wider">
          Interactive Slider
        </span>
      </div>

      {/* Interactive Slider Frame */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label={`${item.title} comparison slider`}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] border border-[#E8CDB4]/80 select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#CE986C] touch-none shadow-inner bg-[#EDE9E2]"
      >
        {/* AFTER IMAGE (Base full layer) */}
        <Image
          src={item.afterImage}
          alt={`${item.title} - After Editing`}
          fill
          className="object-cover object-center pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* BEFORE IMAGE (Clipped top layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={item.beforeImage}
            alt={`${item.title} - Before Editing`}
            fill
            className="object-cover object-center pointer-events-none"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Top-Left: BEFORE badge */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-quicksand font-bold tracking-widest uppercase shadow">
            BEFORE
          </span>
        </div>

        {/* Top-Right: AFTER badge */}
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="inline-block px-3 py-1 rounded-full bg-[#6B1E35]/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-quicksand font-bold tracking-widest uppercase shadow">
            AFTER
          </span>
        </div>

        {/* Vertical Divider Line with Draggable Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered Circular Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#CE986C] shadow-lg flex items-center justify-center transition-transform hover:scale-110">
            <svg
              className="w-4 h-4 text-[#6B1E35]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
              <polyline points="9 18 15 12 9 6" />
              <polyline points="15 18 21 12 15 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service Title & Detailed Description Below */}
      <div className="mt-4 pt-3 border-t border-[#E8CDB4]/50 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-cinzel text-lg sm:text-[20px] font-bold text-[#6B1E35] leading-snug">
            {item.title}
          </h3>
          <p className="font-quicksand text-xs uppercase tracking-wider text-[#CE986C] font-semibold mt-0.5">
            {item.subtitle}
          </p>
          <p className="font-quicksand text-xs sm:text-[13.5px] text-[#727272] leading-[1.65] font-medium mt-2">
            {item.description}
          </p>
        </div>
        <p className="font-quicksand text-[11px] text-[#727272]/70 italic mt-3">
          * Demonstration sample illustrating post-production refinement
        </p>
      </div>
    </div>
  );
}

export default function PortfolioComparisonsGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0] text-[#727272] relative">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
            TRANSFORMATION GALLERY
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
            The Difference We Make
          </h2>
          <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#727272] font-medium">
            Drag the handle horizontally to experience the difference professional photo editing makes.
          </p>
        </div>

        {/* 2-Column, 2-Row Grid on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {COMPARISONS_DATA.map((item) => (
            <SingleComparisonCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
