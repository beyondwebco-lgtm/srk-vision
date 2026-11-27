"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Grid, Eye } from "lucide-react";

export interface AlbumSpread {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  aspectRatio: string;
}

const ALBUM_SPREADS: AlbumSpread[] = [
  {
    id: "spread-1",
    title: "Traditional South Indian Weddings",
    category: "Temple Vows & Heritage",
    description:
      "Open flush-mount spread featuring a South Indian temple wedding couple in crimson Kanchipuram silk and ivory veshti, paired with temple lamp photography and gold-embossed 'The Sacred Vows' typography.",
    image: "/assets/portfolio/albums/spread-1.webp",
    aspectRatio: "3:2",
  },
  {
    id: "spread-2",
    title: "Bridal Portraits & Jewelry",
    category: "Fine-Art Details",
    description:
      "Minimalist modern bridal portrait spread showing an Indian bride in intricate kundan jewelry paired with close-up henna mehndi hands and chandbali earring details.",
    image: "/assets/portfolio/albums/spread-2.webp",
    aspectRatio: "3:2",
  },
  {
    id: "spread-3",
    title: "Wedding Couple Panoramic Spread",
    category: "Palace Romance",
    description:
      "Expansive double-page panoramic flush-mount spread of a royal Indian couple on a heritage palace terrace at sunset with minimalist 'Forever & Always' typography.",
    image: "/assets/portfolio/albums/spread-3.webp",
    aspectRatio: "3:2",
  },
  {
    id: "spread-4",
    title: "Wedding Ceremony Storytelling",
    category: "Sacred Rituals",
    description:
      "Clean asymmetrical storytelling grid spread capturing candid sangeet dancing under fairy lights and sacred fire pheras ceremony moments with generous whitespace.",
    image: "/assets/portfolio/albums/spread-4.webp",
    aspectRatio: "3:2",
  },
  {
    id: "spread-5",
    title: "Elegant Floral Layouts",
    category: "Haldi & Mehendi Celebration",
    description:
      "Floral-framed open spread accented with marigold and jasmine petals, showcasing vibrant haldi petal showers and celebratory laughter in a crisp editorial layout.",
    image: "/assets/portfolio/albums/spread-5.webp",
    aspectRatio: "3:2",
  },
  {
    id: "spread-6",
    title: "Minimal Editorial Album Compositions",
    category: "Silhouette & Fine Art",
    description:
      "Modern fine-art minimal spread pairing generous negative space and delicate serif typography ('Chapter One — The Beginning') on the left with a golden backlit palace arch couple silhouette.",
    image: "/assets/portfolio/albums/spread-6.webp",
    aspectRatio: "3:2",
  },
];

export default function PortfolioAlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<AlbumSpread | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? ALBUM_SPREADS.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === ALBUM_SPREADS.length - 1 ? 0 : prevIdx + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      next();
    } else if (distance < -50) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSpread = ALBUM_SPREADS[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-[#F5EEE5] text-[#727272] border-t border-[#E8CDB4] relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.28em] text-[#CE986C] font-semibold block mb-2">
            Srkvisions
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide uppercase">
            Professional Album Designing
          </h2>
          <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#727272] font-medium max-w-xl mx-auto">
            Handcrafted flush-mount wedding album spreads featuring generous negative space, refined typography, and emotional storytelling.
          </p>
        </div>

        {/* Carousel Main Stage */}
        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Display Mockup Card */}
          <div className="bg-[#F8F5F0] rounded-[24px] p-4 sm:p-7 md:p-9 border border-[#E8CDB4] shadow-md transition-all duration-300">
            {/* Clickable Image Container for Lightbox Preview */}
            <div
              onClick={() => setLightboxImage(activeSpread)}
              className="relative aspect-[3/2] w-full overflow-hidden rounded-[16px] bg-[#EDE9E2] border border-[#E8CDB4]/80 shadow-sm group cursor-pointer"
              title="Click to view full-screen preview"
            >
              <Image
                src={activeSpread.image}
                alt={activeSpread.title}
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#6B1E35] font-quicksand font-bold text-xs uppercase tracking-wider shadow">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full Screen Preview</span>
                </span>
              </div>
            </div>

            {/* Slide Info & Controls Footer */}
            <div className="mt-6 pt-5 border-t border-[#E8CDB4]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#CE986C] font-bold block mb-1">
                  Spread {currentIndex + 1} of {ALBUM_SPREADS.length} · {activeSpread.category}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#6B1E35]">
                  {activeSpread.title}
                </h3>
                <p className="font-quicksand text-xs sm:text-sm text-[#727272] font-medium mt-1 max-w-xl">
                  {activeSpread.description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-3 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={prev}
                  className="w-11 h-11 rounded-full bg-white border border-[#E8CDB4] flex items-center justify-center text-[#6B1E35] shadow-sm hover:bg-[#6B1E35] hover:text-white transition-all duration-300 hover:scale-105"
                  aria-label="Previous album spread"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-white border border-[#E8CDB4] flex items-center justify-center text-[#6B1E35] shadow-sm hover:bg-[#6B1E35] hover:text-white transition-all duration-300 hover:scale-105"
                  aria-label="Next album spread"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Pagination Dot Indicators */}
          <div className="flex items-center justify-center space-x-2.5 mt-8">
            {ALBUM_SPREADS.map((spread, idx) => (
              <button
                key={spread.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-8 h-2.5 bg-[#6B1E35]"
                    : "w-2.5 h-2.5 bg-[#CE986C]/40 hover:bg-[#CE986C]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* "See More" Button to expand gallery collection */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-white border border-[#E8CDB4] text-[#6B1E35] font-quicksand font-bold text-sm uppercase tracking-wider shadow-sm hover:bg-[#6B1E35] hover:text-white hover:border-[#6B1E35] transition-all duration-300"
          >
            <Grid className="w-4 h-4" />
            <span>{isExpanded ? "Hide Complete Gallery" : "See More Album Spreads"}</span>
          </button>
        </div>

        {/* Expanded Gallery Grid (when "See More" is toggled) */}
        {isExpanded && (
          <div className="mt-14 pt-12 border-t border-[#E8CDB4] animate-fadeIn">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-[#CE986C] font-semibold">
                FULL ALBUM ARCHIVE
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#6B1E35] mt-1">
                All Six Wedding Album Spreads
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {ALBUM_SPREADS.map((spread, index) => (
                <div
                  key={`expanded-${spread.id}`}
                  onClick={() => setLightboxImage(spread)}
                  className="bg-[#F8F5F0] rounded-[20px] p-4 border border-[#E8CDB4] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[14px] bg-[#EDE9E2] border border-[#E8CDB4]/60 mb-4">
                    <Image
                      src={spread.image}
                      alt={spread.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="p-2.5 rounded-full bg-white text-[#6B1E35] shadow">
                        <Eye className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#CE986C] font-bold block mb-1">
                    Spread 0{index + 1}
                  </span>
                  <h4 className="font-cinzel text-base font-bold text-[#6B1E35]">
                    {spread.title}
                  </h4>
                  <p className="font-quicksand text-xs text-[#727272] mt-1 line-clamp-2">
                    {spread.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Full-Screen Preview */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close full-screen preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High-Resolution Spread Container */}
            <div className="relative aspect-[3/2] w-full max-h-[78vh] overflow-hidden rounded-[16px] border border-white/20 shadow-2xl">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <p className="font-cinzel text-lg sm:text-xl font-bold">
                {lightboxImage.title}
              </p>
              <p className="font-quicksand text-xs sm:text-sm text-white/75 mt-0.5 max-w-2xl">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
