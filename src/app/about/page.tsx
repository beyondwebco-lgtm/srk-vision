import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { STUDIO_INFO } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Us — The Story Behind Our Creative Excellence",
  description:
    "Established in 2015 in Begumpet, Hyderabad. Learn how SRK Visions partners with leading wedding photographers and commercial studios across India and worldwide.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F7F4] text-[#171717]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
          ABOUT SRK VISIONS · EST. 2015
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mt-2 text-[#171717] max-w-4xl">
          A Decade of Dedicated <br />
          <span className="italic font-normal">Post-Production Mastery.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#737373] max-w-2xl font-light leading-relaxed">
          Founded in Hyderabad, India in 2015, SRK Visions was built on a foundational promise: to give professional photographers their time back while elevating their creative voice to international editorial standards.
        </p>
      </div>

      {/* Dual Image Split Feature */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE9E2] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop"
              alt="Editorial photo editing monitor and calibration tools"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE9E2] shadow-xl md:mt-12">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
              alt="Wedding portrait with warm natural skin tones"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-8 text-lg text-[#737373] font-light leading-relaxed">
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#171717] font-light">
          We specialize in premium photo post-production, delivering exceptional quality, creativity, and precision in every project.
        </h2>
        <p>
          Our expertise encompasses professional colour correction, high-end retouching, image culling, luxury album designing, and Instagram social media content.
        </p>
        <p>
          With approximately 25+ company collaborations and over 1,000+ clients served across India, the United States, and Europe, we&apos;ve built our reputation around attention to detail, consistent quality, and professional results.
        </p>
        <p>
          From a single hero photograph to complete 2,000-image destination wedding collections, we bring every image to life with a refined, elegant, and timeless finish.
        </p>

        <div className="pt-6 border-y border-[#171717]/10 py-8 my-8">
          <blockquote className="font-editorial text-3xl md:text-4xl text-[#171717] italic text-center max-w-2xl mx-auto">
            “Your Vision. Our Expertise. Exceptional Results.”
          </blockquote>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
          {STUDIO_INFO.stats.map((s, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-editorial text-4xl sm:text-5xl text-[#171717]">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B49A78] mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-12 text-center">
          <Link
            href="/order"
            className="inline-flex items-center px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#171717] text-white hover:bg-[#B49A78] transition-colors"
          >
            <span>Partner With SRK Visions</span>
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      <FinalCtaSection />
    </div>
  );
}
