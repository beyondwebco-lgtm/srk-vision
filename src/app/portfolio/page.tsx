import type { Metadata } from "next";
import PortfolioSection from "@/components/PortfolioSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata: Metadata = {
  title: "Portfolio — Curated Post-Production Gallery",
  description:
    "Explore our complete archive of wedding colour grading, high-end beauty retouching, portrait perfection, and luxury album spreads crafted by SRK Visions.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F7F4]">
      {/* Portfolio Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
          ARCHIVE & EXHIBITION
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mt-2 text-[#171717]">
          Our Complete Works.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#737373] max-w-2xl font-light leading-relaxed">
          Every project reflects our commitment to preserving natural textures, authentic skin tones, and evocative storytelling. Filter through our specialized categories below.
        </p>
      </div>

      {/* Full Gallery with all items */}
      <PortfolioSection isPreview={false} />

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
