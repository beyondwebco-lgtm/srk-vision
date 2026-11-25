import AboutSection from "@/components/AboutSection";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F5F0]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-4 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
          STUDIO HERITAGE
        </span>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[46px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
          About SRK Visions
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#727272] max-w-2xl mx-auto font-medium">
          A decade of post-production mastery based in Hyderabad, India — dedicated to quality, precision, and lasting client partnerships.
        </p>
      </div>

      <AboutSection />
      <WorkflowSection />
      <TestimonialSection />
    </div>
  );
}
