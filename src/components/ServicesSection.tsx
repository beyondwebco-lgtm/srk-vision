import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/content";
import { ArrowUpRight, Check } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F7F4] text-[#171717]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-[#171717]/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
              WHAT WE DO
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-2 text-[#171717]">
              Expertise in Every Detail.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-[#737373] max-w-md font-light leading-relaxed">
            Five signature disciplines crafted for wedding photographers, commercial studios, and creative directors who refuse to compromise on visual standards.
          </p>
        </div>

        {/* Alternating Editorial Service Rows */}
        <div className="flex flex-col space-y-28 md:space-y-36">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:col-start-7" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#EDE9E2] shadow-lg group">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  </div>

                  {/* Service Number Accent */}
                  <span className="absolute -top-6 -left-4 sm:-left-8 font-editorial text-7xl sm:text-8xl font-light text-[#171717]/10 select-none pointer-events-none">
                    {service.number}
                  </span>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center space-y-6 ${
                    isEven ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-editorial text-xl font-normal text-[#B49A78]">
                      {service.number}
                    </span>
                    <span className="w-8 h-[1px] bg-[#B49A78]" />
                    <span className="text-xs uppercase tracking-[0.25em] text-[#737373]">
                      Discipline
                    </span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#171717] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-base text-[#737373] font-light leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#171717] font-semibold mb-3">
                      Core Inclusions:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#171717]/85 font-light">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#B49A78] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex items-center space-x-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-xs uppercase tracking-widest text-[#171717] hover:text-[#B49A78] font-semibold transition-colors group"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <Link
                      href={`/order?service=${service.slug}`}
                      className="inline-flex items-center px-5 py-2 text-xs uppercase tracking-widest bg-[#171717] text-white hover:bg-[#B49A78] transition-colors"
                    >
                      <span>Enquire Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
