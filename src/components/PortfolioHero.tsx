import React from "react";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="relative w-full h-[52svh] min-h-[380px] max-h-[500px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Cinematic Indian Wedding Background Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/portfolio/portfolio-hero.webp"
          alt="SRK Visions Indian Wedding Portfolio Showcase"
          fill
          priority
          className="object-cover object-center select-none brightness-95"
          sizes="100vw"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content: Centered white serif typography and elegant spacing */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center mt-10">
        <span className="text-xs sm:text-[13px] uppercase tracking-[0.3em] text-[#CE986C] font-semibold drop-shadow mb-3">
          CREATIVE POST-PRODUCTION
        </span>
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[0.08em] uppercase leading-tight drop-shadow-md">
          OUR PORTFOLIO
        </h1>
        <div className="w-16 h-[2px] bg-[#CE986C] mx-auto my-4" />
        <p className="font-quicksand text-base sm:text-lg md:text-xl text-white/95 font-medium tracking-wide drop-shadow max-w-xl">
          Every wedding tells a unique love story.
        </p>
      </div>
    </section>
  );
}
