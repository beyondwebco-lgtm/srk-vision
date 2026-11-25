import React from "react";
import Link from "next/link";
import { STUDIO_INFO, SERVICES } from "@/data/content";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div>
              <span className="font-editorial text-3xl font-medium tracking-widest uppercase text-white">
                {STUDIO_INFO.name}
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B49A78] mt-1">
                Creative Studio · Est. {STUDIO_INFO.establishedYear}
              </p>
            </div>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              {STUDIO_INFO.tagline} Professional photo post-production and creative editing studio delivering timeless refinement for discerning photographers worldwide.
            </p>
            <div className="pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-neutral-300 hover:text-[#B49A78] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#B49A78]" />
                <span>{STUDIO_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B49A78] font-semibold">
              Explore
            </h4>
            <ul className="flex flex-col space-y-2.5 text-sm text-neutral-300 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-[#B49A78] text-[#B49A78] transition-colors font-medium">
                  Order Now
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors text-neutral-400 text-xs pt-1">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B49A78] font-semibold">
              Services
            </h4>
            <ul className="flex flex-col space-y-2.5 text-sm text-neutral-300 font-light">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#B49A78] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B49A78]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B49A78] font-semibold">
              Hyderabad Studio
            </h4>
            <div className="flex flex-col space-y-3 text-sm text-neutral-300 font-light">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B49A78] shrink-0" />
                <span>{STUDIO_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-center space-x-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B49A78] shrink-0" />
                <span>{STUDIO_INFO.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#B49A78] shrink-0 mt-1" />
                <span>{STUDIO_INFO.addressShort}</span>
              </div>
              <div className="pt-2">
                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs tracking-wider uppercase text-[#B49A78] hover:underline"
                >
                  Direct WhatsApp Chat &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 font-light space-y-4 md:space-y-0">
          <p>© 2026 {STUDIO_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-neutral-400 transition-colors">
              Studio Location & Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
