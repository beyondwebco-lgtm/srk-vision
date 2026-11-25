import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F5F0]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-4 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
          DISCIPLINES & CAPABILITIES
        </span>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[46px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
          Precision Post-Production
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#727272] max-w-2xl mx-auto font-medium">
          Explore our five core photo post-production disciplines crafted specifically for wedding photographers, portrait creators, and luxury studios.
        </p>
      </div>

      <ServicesSection />
      <WorkflowSection />
      <TestimonialSection />
    </div>
  );
}
