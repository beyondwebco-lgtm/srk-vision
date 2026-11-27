import React from "react";
import type { Metadata } from "next";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioComparisonsGrid from "@/components/PortfolioComparisonsGrid";
import PortfolioAlbumCarousel from "@/components/PortfolioAlbumCarousel";
import PortfolioCta from "@/components/PortfolioCta";

export const metadata: Metadata = {
  title: "Portfolio — SRK Visions | Luxury Wedding Photo Post-Production",
  description:
    "Explore our interactive Before & After wedding photo comparisons and luxury album design spreads. Master post-production, colour correction, and high-end retouching based in Hyderabad.",
  openGraph: {
    title: "Portfolio — SRK Visions | Hyderabad Creative Studio",
    description:
      "Every wedding tells a unique love story. Experience the difference professional photo editing makes with interactive Before & After sliders and album mockups.",
    images: [{ url: "/assets/portfolio/portfolio-hero.webp" }],
  },
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#F8F5F0]">
      {/* 1. PORTFOLIO HERO SECTION */}
      <PortfolioHero />

      {/* 2. BEFORE & AFTER COMPARISON SECTION (4 Interactive Sliders in 2x2 Grid) */}
      <PortfolioComparisonsGrid />

      {/* 3. PROFESSIONAL ALBUM DESIGNING SECTION (6 Spreads Carousel with Lightbox & Expansion) */}
      <PortfolioAlbumCarousel />

      {/* 4. FINAL CALL-TO-ACTION SECTION (Burgundy banner with Order Now) */}
      <PortfolioCta />
    </main>
  );
}
