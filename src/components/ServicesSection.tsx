import React from "react";
import Link from "next/link";
import { 
  Palette, 
  Filter, 
  Sparkles, 
  BookOpen, 
  ArrowUpRight 
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "01",
    slug: "colour-correction",
    title: "Colour Correction",
    icon: (props: { className?: string }) => <Palette {...props} />,
    description:
      "Our colour correction process enhances every image by adjusting exposure, brightness, contrast, white balance, and colour tones. We refine natural skin tones, balance highlights and shadows, and create a consistent visual finish across complete photo collections.",
  },
  {
    id: "02",
    slug: "image-culling",
    title: "Image Culling & Selection",
    icon: (props: { className?: string }) => <Filter {...props} />,
    description:
      "Our professional image culling process involves carefully reviewing every photograph to identify the best moments, expressions, compositions, and overall image quality. We eliminate duplicates, blurred shots and unwanted images while selecting the finest photographs to ensure a consistent, well-organized final collection.",
  },
  {
    id: "03",
    slug: "high-end-retouching",
    title: "High-End Retouch",
    icon: (props: { className?: string }) => <Sparkles {...props} />,
    description:
      "Our high-end retouching process focuses on refining skin texture, removing blemishes, correcting imperfections, and enhancing facial details with precision. We carefully balance skin tones and perfect every detail while preserving natural beauty for a flawless, realistic, and luxurious finish.",
  },
  {
    id: "04",
    slug: "album-designing",
    title: "Professional Album Designing",
    icon: (props: { className?: string }) => <BookOpen {...props} />,
    description:
      "We create customized, professionally designed albums in the dimensions required by our clients. Our process includes basic colour correction, shadow adjustments, skin tone refinement, skin texture smoothing, and removal of distracting elements from wedding stage backgrounds.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5EEE5] text-[#727272]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
            WHAT WE DO
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
            Our Services
          </h2>
          <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
        </div>

        {/* 4 Service Cards in a Balanced 2 × 2 Grid on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1180px] mx-auto">
          {SERVICES_DATA.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-[#F8F5F0] rounded-[22px] p-8 sm:p-9 border border-[#E8CDB4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#F5EEE5] border border-[#E8CDB4] flex items-center justify-center text-[#6B1E35] mb-6 group-hover:bg-[#6B1E35] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-[22px] font-bold text-[#6B1E35] mb-3 leading-snug">
                    {s.title}
                  </h3>

                  <p className="font-quicksand text-sm sm:text-[15px] text-[#727272] leading-[1.75] font-medium">
                    {s.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8CDB4]/50 flex items-center justify-between">
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs uppercase tracking-widest text-[#6B1E35] font-bold inline-flex items-center hover:text-[#CE986C] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/order?service=${s.slug}`}
                    className="text-xs uppercase tracking-wider px-4 py-2 rounded-full bg-[#6B1E35] text-white hover:bg-[#843B43] font-semibold transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
