import React from "react";
import Link from "next/link";
import Image from "next/image";
import { STUDIO_INFO } from "@/data/content";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative py-28 md:py-40 bg-[#111111] text-white overflow-hidden">
      {/* Background Photograph with Subtle Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop"
          alt="SRK Visions Wedding Masterpiece Atmosphere"
          fill
          className="object-cover object-center opacity-25 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/85 to-[#111111]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#B49A78] font-semibold mb-6">
          COMMENCE YOUR COLLABORATION
        </span>

        {/* Large Editorial Heading */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.08] max-w-4xl">
          You Capture the Moment. <br />
          <span className="italic font-normal text-[#EDE9E2]">
            We Perfect the Story.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl font-light text-neutral-300 max-w-2xl leading-relaxed">
          Let us transform your photographs into beautifully refined, professionally finished visual experiences.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/order"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold bg-white text-[#171717] hover:bg-[#B49A78] hover:text-white transition-all duration-300 group border border-white hover:border-[#B49A78]"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={STUDIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            <MessageSquare className="mr-2 w-4 h-4 text-[#B49A78]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
