import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WorkflowSection from "@/components/WorkflowSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata: Metadata = {
  title: "Services — Professional Photo Post-Production Disciplines",
  description:
    "Comprehensive photo editing solutions for wedding and portrait photographers: colour correction, high-end skin retouching, image culling, luxury album designing, and Instagram content.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F7F4]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
          DISCIPLINES & EXPERTISE
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mt-2 text-[#171717]">
          Tailored Post-Production.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#737373] max-w-2xl font-light leading-relaxed">
          From individual flagship portraits to full thousands-of-images wedding catalogues, we deliver calibrated colour grading, realistic skin texture preservation, and magazine-quality album layouts.
        </p>
      </div>

      {/* Services List */}
      <ServicesSection />

      {/* Before / After Showcase */}
      <BeforeAfterSection />

      {/* Four Step Workflow */}
      <WorkflowSection />

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
