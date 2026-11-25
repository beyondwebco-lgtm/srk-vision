import React from "react";
import Image from "next/image";
import { INSTAGRAM_ITEMS, STUDIO_INFO } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function InstagramShowcase() {
  // Show 3 Instagram images as required
  const threeImages = INSTAGRAM_ITEMS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#F5EEE5] text-[#727272]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-[#E8CDB4]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
              INSTAGRAM SHOWCASE
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
              Follow Us
            </h2>
          </div>

          <div className="mt-4 sm:mt-0">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#6B1E35] hover:text-[#CE986C] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{STUDIO_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Instagram Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {threeImages.map((item) => (
            <a
              key={item.id}
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-[18px] overflow-hidden border border-[#E8CDB4] shadow-sm block bg-black"
            >
              <Image
                src={item.image}
                alt="SRK Visions Instagram Post"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#6B1E35]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                <InstagramIcon className="w-8 h-8 text-[#CE986C] mb-2" />
                <span className="text-xs font-quicksand font-bold uppercase tracking-widest">
                  View On Instagram
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
