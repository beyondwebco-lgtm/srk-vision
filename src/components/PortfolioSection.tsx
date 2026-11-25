"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  "All Work",
  "Weddings",
  "Portraits",
  "Colour Correction",
  "High-End Retouching",
  "Album Designing",
  "Social Media",
];

export default function PortfolioSection({ isPreview = true }: { isPreview?: boolean }) {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "All Work") return true;
    return item.category === activeCategory;
  });

  const displayItems = isPreview ? filteredItems.slice(0, 6) : filteredItems;

  return (
    <section className="py-24 md:py-32 bg-[#F8F7F4] text-[#171717]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#171717]/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
              CURATED GALLERY
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2 text-[#171717]">
              The Art of the Perfect Finish.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-[#737373] max-w-md font-light leading-relaxed">
            A testament to subtle skin preservation, cinematic shadow balance, and editorial design trusted by photographers globally.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-transparent text-[#737373] border-transparent hover:border-[#171717]/20 hover:text-[#171717]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col space-y-3 cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EDE9E2]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-[#111111]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B49A78]">
                    {item.category}
                  </span>
                  <h4 className="font-editorial text-2xl font-light mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-2 font-light line-clamp-2">
                    {item.description}
                  </p>
                  {item.clientStudio && (
                    <span className="text-[10px] text-neutral-400 mt-2 uppercase tracking-wider">
                      Client: {item.clientStudio}
                    </span>
                  )}
                </div>
              </div>

              {/* Minimal caption below */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <h4 className="font-editorial text-lg text-[#171717] font-medium group-hover:text-[#B49A78] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#737373] font-light">
                    {item.category}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B49A78]" />
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio CTA if in Preview Mode */}
        {isPreview && (
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#171717] text-white hover:bg-[#B49A78] transition-colors"
            >
              <span>Explore Complete Portfolio Archive</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
