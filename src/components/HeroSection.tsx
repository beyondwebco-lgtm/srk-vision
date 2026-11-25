"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
    caption: "Editorial Wedding Collection",
    subtitle: "Fine Art Colour Grading",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1920&auto=format&fit=crop",
    caption: "High-End Beauty & Fashion",
    subtitle: "Natural Skin Micro-Retouching",
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop",
    caption: "Destination Celebration Stories",
    subtitle: "Story Culling & Dynamic Range Balance",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] w-full flex items-center justify-center overflow-hidden bg-[#111111] text-white">
      {/* Background Slideshow with Slow Crossfade & Subtle Scale */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div
              className={`relative w-full h-full transform transition-transform duration-[8000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            {/* Carefully Balanced Editorial Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-[#111111]/60" />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        );
      })}

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12 md:mt-8">
        {/* Understated Visual Studio Tag */}
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B49A78] animate-pulse" />
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#EDE9E2]">
            SRK Visions · Established 2015 · Hyderabad
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.08] text-white max-w-4xl">
          Captured by You. <br />
          <span className="italic font-normal text-[#EDE9E2]">
            Perfected by Us.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl font-light text-neutral-300 tracking-wide max-w-2xl leading-relaxed">
          Your Trusted Photo Post-Production Partner.
        </p>
        <p className="mt-1 text-xs md:text-sm text-neutral-400 tracking-wider uppercase font-light">
          Colour Correction · High-End Retouching · Image Culling · Luxury Album Design
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white text-[#171717] hover:bg-[#B49A78] hover:text-white transition-all duration-300 border border-white hover:border-[#B49A78] group"
          >
            <span>View Our Work</span>
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/order"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            <span>Start Your Project</span>
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2.5 mt-12">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-500 rounded-full focus:outline-none ${
                i === currentSlide ? "w-8 bg-[#B49A78]" : "w-2 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 pointer-events-none opacity-80">
        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
          Scroll
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-neutral-300 animate-bounce" />
      </div>
    </section>
  );
}
