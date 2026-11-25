import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STUDIO_INFO } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F7F4] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cinematic Photography with Framed Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl bg-[#EDE9E2]">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop"
                alt="SRK Visions Creative Studio Workspace"
                fill
                className="object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            {/* Subtle floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#111111] text-white p-6 shadow-xl max-w-[220px] border border-white/10 hidden sm:block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B49A78] block">
                Heritage & Longevity
              </span>
              <p className="font-editorial text-2xl font-light mt-1 text-[#EDE9E2]">
                10+ Years of Craftsmanship
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Content & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-[1px] bg-[#B49A78]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#B49A78] font-semibold">
                ABOUT SRK VISIONS · EST. 2015
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#171717] leading-[1.12]">
              The Story Behind Our <br />
              <span className="italic font-normal">Creative Excellence</span>
            </h2>

            <div className="space-y-4 text-base md:text-lg text-[#737373] font-light leading-relaxed">
              <p>
                We specialize in premium photo post-production, delivering exceptional quality, creativity, and precision in every project.
              </p>
              <p>
                Our expertise includes professional colour correction, high-end retouching, image culling, luxury album designing, and Instagram social media content.
              </p>
              <p>
                With approximately 25+ company collaborations and over 1,000+ clients served, we&apos;ve built our experience around attention to detail, consistent quality, and professional results.
              </p>
              <p>
                From a single photograph to complete wedding collections, we bring every image to life with a refined, elegant, and timeless finish.
              </p>
            </div>

            <div className="pt-2">
              <blockquote className="border-l-2 border-[#B49A78] pl-4 italic font-editorial text-2xl text-[#171717]">
                “Your Vision. Our Expertise. Exceptional Results.”
              </blockquote>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#171717] hover:text-[#B49A78] font-semibold transition-colors group"
              >
                <span>Read Full Studio Philosophy</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Business Statistics Grid with Subtle Details */}
        <div className="mt-20 pt-16 border-t border-[#171717]/10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STUDIO_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#171717] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B49A78] font-medium">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#737373] font-light">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
