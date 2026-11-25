import HeroSection from "@/components/HeroSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import PortfolioSection from "@/components/PortfolioSection";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialSection from "@/components/TestimonialSection";
import InstagramShowcase from "@/components/InstagramShowcase";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 5. Full-viewport Hero */}
      <HeroSection />

      {/* 6. Animated Services Marquee */}
      <ServicesMarquee />

      {/* 7. About Section with Statistics */}
      <AboutSection />

      {/* 8. Our Services Editorial Rows */}
      <ServicesSection />

      {/* 9. Interactive Before & After Comparison Slider */}
      <BeforeAfterSection />

      {/* 10. Curated Portfolio Masonry Gallery */}
      <PortfolioSection isPreview={true} />

      {/* 11. Professional 4-Step Workflow */}
      <WorkflowSection />

      {/* 12. Client Experiences & Testimonial Carousel */}
      <TestimonialSection />

      {/* 13. Instagram Showcase */}
      <InstagramShowcase />

      {/* 16. Final Dark Call-to-Action */}
      <FinalCtaSection />
    </>
  );
}
