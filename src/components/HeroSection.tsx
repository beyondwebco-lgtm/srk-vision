"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100svh-10px)] min-h-[580px] max-h-[960px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Artwork: Exact reference artwork extracted from screenshot */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt="SRK Visions Cinematic Post-Production Artwork"
          fill
          priority
          className="object-cover object-center select-none"
          sizes="100vw"
        />
        {/* Black cinematic overlay (approx 45%) */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero Content: Centered, 2-line Serif Heading, Subtitle, Caramel Button */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12 md:mt-16">
        
        {/* Main Heading: 2 lines, large classical serif font */}
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold text-white tracking-[0.06em] leading-[1.18] uppercase max-w-4xl drop-shadow-md">
          CAPTURED BY YOU.<br />
          PERFECTED BY US.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 font-quicksand text-lg sm:text-xl md:text-[23px] text-white/95 font-medium tracking-wide drop-shadow">
          Your Trusted Photo Post-Production Partner.
        </p>

        {/* Primary CTA: Caramel button, white bold text, fully rounded, ~230px x 64px */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center bg-[#CE986C] hover:bg-[#b8855b] text-white font-quicksand font-bold text-base md:text-[17px] min-w-[200px] sm:min-w-[230px] h-[54px] sm:h-[62px] px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
