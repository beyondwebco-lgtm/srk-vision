import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Handshake, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — SRK Visions | Hyderabad Creative Studio",
  description:
    "Discover the story behind SRK Visions. Founded by Shaik Sharuk, our dedicated team delivers premium photo post-production, color correction, high-end retouching, and album designing.",
};

const TEAM_MEMBERS = [
  {
    name: "Aakash",
    role: "Managing Department",
    bio: "He oversees order processing, workflow management, and timely project updates. He ensures smooth coordination, efficient operations, and seamless communication with clients.",
  },
  {
    name: "Karthik",
    role: "Lead Retouching Artist",
    bio: "He leads the team in color correction, high-end retouching, With strong experience and leadership skills, he ensures quality and consistency in every project.",
  },
  {
    name: "Amer",
    role: "Digital Imaging Art",
    bio: "He leads the team in professional album designing and social media post editing, bringing experience and creative expertise to every project. His strong leadership ensures smooth teamwork, consistent quality, and outstanding results.",
  },
  {
    name: "Deva",
    role: "Final Review",
    bio: "He is responsible for cross-checking completed photographs and identifying any corrections needed. He ensures every image meets our quality expectations before it is approved for delivery.",
  },
];

const VALUES_DATA = [
  {
    title: "YOUR SATISFACTION, OUR PRIORITY",
    description:
      "Every project matters to us. We focus on understanding your expectations and delivering results that leave you completely satisfied.",
    icon: Sparkles,
  },
  {
    title: "YOUR VISION, OUR RESPONSIBILITY",
    description:
      "We treat every image with care and dedication, making sure the final results match your style, preferences, and expectations.",
    icon: Handshake,
  },
  {
    title: "QUALITY WITHOUT COMPROMISE",
    description:
      "From the smallest details to the final output, we maintain high standards to ensure every project meets your expectations.",
    icon: ShieldCheck,
  },
  {
    title: "BUILDING TRUST THROUGH EVERY PROJECT",
    description:
      "We believe in clear communication, consistent quality, and long-term relationships. Your trust motivates us to deliver our best every time.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F5F0] text-[#727272]">
      {/* Page Hero Header */}
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-16 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
          OUR STORY
        </span>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[50px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
          About Us
        </h1>
        <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
      </div>

      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        {/* Founder & Creative Director Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-28">
          {/* Left Column: Workstation photo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[580px] p-2.5 sm:p-3 bg-[#F8F5F0] rounded-[22px] border border-[#E8CDB4] shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-[#EDE9E2]">
                <Image
                  src="/assets/about-workstation.webp"
                  alt="Shaik Sharuk - Founder & Creative Director SRK Visions"
                  fill
                  priority
                  className="object-cover object-[center_38%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5EEE5] text-[#CE986C] border border-[#E8CDB4]/60 text-xs sm:text-[13px] font-quicksand font-bold tracking-widest uppercase">
                EST. 2021
              </span>
            </div>

            <div>
              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#6B1E35] tracking-wide uppercase leading-tight">
                Shaik Sharuk
              </h2>
              <p className="font-quicksand text-base sm:text-lg text-[#CE986C] font-bold tracking-wider uppercase mt-1">
                Founder & Creative Director
              </p>
            </div>

            <p className="font-quicksand text-base sm:text-[17px] text-[#727272] font-medium leading-[1.8] text-justify">
              At SRK Visions, with nearly 9 years of experience in photo post-production and 6 successful years of SRK Visions, our journey is built on passion, creativity, and excellence. We take pride in delivering exceptional quality and building lasting relationships with our clients. Every photograph we work on is approached with a unique creative vision and meticulous attention to detail. We believe every image has a story worth telling, and our mission is to bring that story to life. At SRK Visions, we don&apos;t just edit photographs — we transform moments into timeless visual stories.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
              OUR TEAM
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
              The Creative Team
            </h2>
            <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-[22px] p-7 sm:p-8 border border-[#E8CDB4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#F5EEE5] border border-[#E8CDB4] flex items-center justify-center text-[#6B1E35] font-cinzel text-xl font-bold mb-6 group-hover:bg-[#6B1E35] group-hover:text-white transition-colors">
                    {member.name.charAt(0)}
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-[22px] font-bold text-[#6B1E35] mb-1">
                    {member.name}
                  </h3>

                  <p className="font-quicksand text-xs sm:text-[13px] uppercase tracking-wider text-[#CE986C] font-bold mb-4">
                    {member.role}
                  </p>

                  <p className="font-quicksand text-sm text-[#727272] font-medium leading-[1.75]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
              OUR VALUES
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
              Your Trust, Our Commitment
            </h2>
            <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES_DATA.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F5EEE5] rounded-[22px] p-7 sm:p-8 border border-[#E8CDB4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-white border border-[#E8CDB4] flex items-center justify-center text-[#6B1E35] mb-6 group-hover:bg-[#6B1E35] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-[#CE986C] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#6B1E35] mb-3 leading-snug">
                      {val.title}
                    </h3>

                    <p className="font-quicksand text-sm text-[#727272] font-medium leading-[1.75]">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Banner: Let's Tell Your Story */}
      <section className="py-20 md:py-24 bg-[#6B1E35] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase leading-tight">
            Let&apos;s Tell Your Story
          </h2>
          <p className="mt-4 font-quicksand text-base sm:text-lg text-white/85 font-medium max-w-xl mx-auto">
            Share your celebration with us and we&apos;ll help you remember it forever
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#CE986C] hover:bg-[#b8855b] text-white font-quicksand font-bold text-base md:text-[17px] min-w-[200px] h-[54px] sm:h-[60px] px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
