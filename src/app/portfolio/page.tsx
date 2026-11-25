"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import PortfolioBeforeAfter from "@/components/PortfolioBeforeAfter";

const CATEGORIES = [
  "All Work",
  "Weddings",
  "Portraits",
  "Colour Correction",
  "High-End Retouching",
  "Album Designing",
  "Social Media",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "All Work") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-28 md:pt-36 bg-[#F8F5F0] text-[#727272] min-h-screen">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 pb-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
            PORTFOLIO ARCHIVE
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[46px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
            The Art of the Perfect Finish
          </h1>
          <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-quicksand font-bold tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#6B1E35] text-white border-[#6B1E35]"
                  : "bg-white text-[#727272] border-[#E8CDB4] hover:border-[#6B1E35]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] overflow-hidden border border-[#E8CDB4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5EEE5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#CE986C] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-[#6B1E35] leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-quicksand text-xs sm:text-sm text-[#727272] mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8CDB4]/50 flex items-center justify-between">
                  <span className="text-[11px] text-[#727272]/80">
                    {item.clientStudio || "SRK Visions"}
                  </span>
                  <Link
                    href="/order"
                    className="inline-flex items-center text-xs font-bold text-[#6B1E35] hover:text-[#CE986C]"
                  >
                    <span>Request Edit</span>
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Before & After comparison section added only to the Portfolio page */}
      <PortfolioBeforeAfter />
    </div>
  );
}
