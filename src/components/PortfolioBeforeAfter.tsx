"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ComparisonSlide {
  id: string;
  serviceTitle: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const COMPARISON_SLIDES: ComparisonSlide[] = [
  {
    id: "slide-1",
    serviceTitle: "Slide 1 — Professional Colour Correction",
    description:
      "Indian wedding couple photograph with dull colours and unbalanced lighting before editing, followed by rich, natural colours, balanced exposure and refined skin tones.",
    beforeImage: "/assets/before-after/slide1-before.webp",
    afterImage: "/assets/before-after/slide1-after.webp",
  },
  {
    id: "slide-2",
    serviceTitle: "Slide 2 — High-End Retouching",
    description:
      "Professional bridal close-up portrait with natural skin imperfections before editing, followed by refined skin texture, corrected blemishes and premium facial retouching.",
    beforeImage: "/assets/before-after/slide2-before.webp",
    afterImage: "/assets/before-after/slide2-after.webp",
  },
  {
    id: "slide-3",
    serviceTitle: "Slide 3 — Background Cleanup",
    description:
      "Indian wedding stage photograph with distracting background objects before editing, followed by a clean, professionally refined composition.",
    beforeImage: "/assets/before-after/slide3-before.webp",
    afterImage: "/assets/before-after/slide3-after.webp",
  },
];

export default function PortfolioBeforeAfter() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeSlide = COMPARISON_SLIDES[currentSlideIndex];

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

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? COMPARISON_SLIDES.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === COMPARISON_SLIDES.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setSliderPosition(50);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0] border-t border-[#E8CDB4] text-[#727272]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide uppercase">
            Before &amp; After
          </h2>
          <p className="font-quicksand text-base sm:text-lg text-[#727272] font-medium mt-2">
            Experience the difference professional photo editing makes.
          </p>
          <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
        </div>

        {/* Main Comparison Container with 4:3 Aspect Ratio */}
        <div className="max-w-4xl mx-auto bg-[#F5EEE5] p-4 sm:p-6 md:p-8 rounded-[24px] border border-[#E8CDB4] shadow-sm">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden select-none cursor-ew-resize bg-black touch-none shadow-md"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Before and After comparison slider for ${activeSlide.serviceTitle}`}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                setSliderPosition((p) => Math.max(0, p - 5));
              } else if (e.key === "ArrowRight") {
                setSliderPosition((p) => Math.min(100, p + 5));
              }
            }}
          >
            {/* After Image Layer (Base) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activeSlide.afterImage}
                alt={`${activeSlide.serviceTitle} — After editing`}
                fill
                priority
                className="object-cover object-center pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              {/* After Label */}
              <div className="absolute bottom-5 right-5 z-10 bg-[#6B1E35]/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-quicksand font-bold uppercase tracking-wider text-white border border-[#E8CDB4]/40 shadow-sm pointer-events-none">
                After
              </div>
            </div>

            {/* Before Image Layer (Clipped via slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-full">
                <div className="relative w-full h-full min-w-[320px] sm:min-w-[640px] md:min-w-[850px]">
                  <Image
                    src={activeSlide.beforeImage}
                    alt={`${activeSlide.serviceTitle} — Before editing`}
                    fill
                    priority
                    className="object-cover object-center pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              </div>
              {/* Before Label */}
              <div className="absolute bottom-5 left-5 z-10 bg-black/75 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-quicksand font-bold uppercase tracking-wider text-white border border-white/20 shadow-sm pointer-events-none">
                Before
              </div>
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.6)] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#6B1E35] border-2 border-white flex items-center justify-center text-white shadow-lg pointer-events-none">
                <div className="flex items-center space-x-1 text-xs">
                  <span>&#10094;</span>
                  <span>&#10095;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Title & Description below slider */}
          <div className="mt-6 pt-5 border-t border-[#E8CDB4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#6B1E35]">
                {activeSlide.serviceTitle}
              </h3>
              <p className="font-quicksand text-xs sm:text-sm text-[#727272] mt-1 font-medium max-w-xl">
                {activeSlide.description}
              </p>
            </div>

            {/* Previous & Next Navigation Arrows */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#E8CDB4] bg-white flex items-center justify-center text-[#6B1E35] hover:bg-[#6B1E35] hover:text-white transition-colors shadow-sm"
                aria-label="Previous comparison slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#E8CDB4] bg-white flex items-center justify-center text-[#6B1E35] hover:bg-[#6B1E35] hover:text-white transition-colors shadow-sm"
                aria-label="Next comparison slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Three Pagination Indicators & Demonstration Sample Notice */}
          <div className="mt-6 pt-4 border-t border-[#E8CDB4]/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2.5">
              {COMPARISON_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlideIndex
                      ? "w-8 bg-[#6B1E35]"
                      : "w-2.5 bg-[#CE986C]/50 hover:bg-[#CE986C]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <span className="font-quicksand text-[11px] text-[#727272]/80 uppercase tracking-wider font-semibold">
              Demonstration sample · 4:3 Studio Calibration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
