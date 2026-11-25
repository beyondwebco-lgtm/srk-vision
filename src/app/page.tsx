import HeroSection from "@/components/HeroSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialSection from "@/components/TestimonialSection";
import InstagramShowcase from "@/components/InstagramShowcase";

export default function HomePage() {
  return (
    <>
      {/* Reference 2: Hero Section */}
      <HeroSection />

      {/* Services Marquee */}
      <ServicesMarquee />

      {/* Reference 1: About Section */}
      <AboutSection />

      {/* What We Do / Services Section */}
      <ServicesSection />

      {/* Reference 3: Workflow Section */}
      <WorkflowSection />

      {/* Testimonials Carousel */}
      <TestimonialSection />

      {/* Instagram 3-Grid Showcase */}
      <InstagramShowcase />
    </>
  );
}
