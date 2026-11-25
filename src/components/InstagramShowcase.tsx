import React from "react";
import Image from "next/image";
import { INSTAGRAM_ITEMS, STUDIO_INFO } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function InstagramShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F7F4] text-[#171717]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#171717]/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
              INSTAGRAM SHOWCASE
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2 text-[#171717]">
              Creativity Beyond the Frame.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-2.5 text-xs uppercase tracking-widest font-semibold border border-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-300"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#B49A78]" />
              <span>Follow {STUDIO_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6-Grid Editorial Photography Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_ITEMS.map((item) => (
            <a
              key={item.id}
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#EDE9E2] block"
            >
              <Image
                src={item.image}
                alt="SRK Visions Instagram Post"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
              {/* Instagram Hover Icon & Dark Tint */}
              <div className="absolute inset-0 bg-[#111111]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                <InstagramIcon className="w-6 h-6 text-[#B49A78] mb-2" />
                <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-300">
                  {item.likes} Likes
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
