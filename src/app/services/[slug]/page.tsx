import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, ServiceItem } from "@/data/content";
import { ArrowUpRight, Check, ShieldCheck, Clock, Award } from "lucide-react";
import FinalCtaSection from "@/components/FinalCtaSection";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — SRK Visions`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} — SRK Visions Hyderabad`,
      description: service.fullDesc,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service: ServiceItem | undefined = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 md:pt-32 bg-[#F8F7F4]">
      {/* Service Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
        <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold mb-3">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <span>/</span>
          <span>Discipline {service.number}</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#171717] max-w-4xl">
          {service.title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#737373] max-w-3xl font-light leading-relaxed">
          {service.fullDesc}
        </p>
      </div>

      {/* Hero Showcase Image */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl bg-[#EDE9E2]">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>

      {/* In-depth Details & Inclusions */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Description & Inclusions */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            <div>
              <h2 className="font-editorial text-3xl font-light text-[#171717] mb-6 border-b border-[#171717]/10 pb-4">
                What&apos;s Included in Our Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#EDE9E2]/60 border border-[#171717]/8 flex items-start space-x-3"
                  >
                    <Check className="w-4 h-4 text-[#B49A78] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#171717]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-editorial text-3xl font-light text-[#171717] mb-6 border-b border-[#171717]/10 pb-4">
                Deliverables & Quality Guarantees
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 text-sm text-[#737373] font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B49A78]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-[#111111] text-white">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold block mb-2">
                Ideal Application
              </span>
              <p className="font-editorial text-xl font-light text-[#EDE9E2] leading-relaxed">
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#EDE9E2] p-8 border border-[#171717]/10 shadow-sm flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
                Partner with SRK Visions
              </span>
              <h3 className="font-editorial text-3xl font-light text-[#171717]">
                Ready to elevate your collection?
              </h3>
              <p className="text-xs text-[#737373] font-light leading-relaxed">
                Send us a sample batch or start your order with our dedicated project managers.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-xs text-[#171717]">
                  <Clock className="w-4 h-4 text-[#B49A78]" />
                  <span>Rapid 48-72 Hour Delivery Available</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#171717]">
                  <ShieldCheck className="w-4 h-4 text-[#B49A78]" />
                  <span>100% Confidentiality & Data Security</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#171717]">
                  <Award className="w-4 h-4 text-[#B49A78]" />
                  <span>Two-Tier Quality Audit System</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href={`/order?service=${service.slug}`}
                  className="w-full inline-flex items-center justify-center py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#171717] text-white hover:bg-[#B49A78] transition-colors"
                >
                  <span>Order This Service</span>
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/917032424878?text=Hello%20SRK%20Visions,%20I%20am%20enquiring%20about%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 text-xs uppercase tracking-[0.2em] font-semibold border border-[#171717]/30 hover:border-[#171717] text-[#171717] transition-colors"
                >
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCtaSection />
    </div>
  );
}
