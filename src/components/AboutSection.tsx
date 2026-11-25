import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0] text-[#727272] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Workstation Image with thin caramel border and ivory padding */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[580px] p-2.5 sm:p-3 bg-[#F8F5F0] rounded-[22px] border border-[#E8CDB4] shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#EDE9E2]">
                <Image
                  src="/assets/about-workstation.jpg"
                  alt="SRK Visions Creative Studio Photo Editing Workstation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content matching Screenshot 1 exactly */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Small Pill Label: EST. 2021 */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5EEE5] text-[#CE986C] border border-[#E8CDB4]/60 text-xs sm:text-[13px] font-quicksand font-bold tracking-widest uppercase">
                EST. 2021
              </span>
            </div>

            {/* Main Heading: 2 lines, Burgundy classical serif font */}
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#6B1E35] tracking-wide leading-[1.22] uppercase">
              The Story Behind Our <br />
              Creative Excellence
            </h2>

            {/* Description: exact text from reference */}
            <p className="font-quicksand text-base sm:text-[17px] text-[#727272] font-medium leading-[1.8] text-justify">
              We specialize in premium photo post-production, delivering exceptional quality, creativity, and precision in every project. Our expertise includes Professional Color Correction, High-End Retouching, Image Culling, Luxury Album Designing, and Instagram Social Media Content. With approximately 25+ company collaborations and over 1,000+ clients served, we&apos;ve built our experience around attention to detail, consistent quality, and professional results. From a single photograph to complete wedding collections, we bring every image to life with a refined, elegant, and timeless finish. Your Vision. Our Expertise. Exceptional Results.
            </p>

            {/* Business Statistics: 3 horizontal stats without cards */}
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#E8CDB4]/60">
              <div className="flex flex-col">
                <span className="font-cinzel text-3xl sm:text-[36px] font-bold text-[#6B1E35]">
                  25+
                </span>
                <span className="font-quicksand text-xs sm:text-sm text-[#727272] font-medium mt-0.5">
                  Lead companies
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-3xl sm:text-[36px] font-bold text-[#6B1E35]">
                  99.9%
                </span>
                <span className="font-quicksand text-xs sm:text-sm text-[#727272] font-medium mt-0.5">
                  Happy customers
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-3xl sm:text-[36px] font-bold text-[#6B1E35]">
                  1000+
                </span>
                <span className="font-quicksand text-xs sm:text-sm text-[#727272] font-medium mt-0.5">
                  Projects
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
