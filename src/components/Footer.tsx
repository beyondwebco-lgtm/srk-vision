import React from "react";
import Link from "next/link";
import { STUDIO_INFO } from "@/data/content";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function Footer() {
  const quickLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Colour correction", href: "/services/colour-correction" },
    { label: "Image culling selection", href: "/services/image-culling" },
    { label: "High end retouch", href: "/services/high-end-retouching" },
    { label: "Professional album designing", href: "/services/album-designing" },
  ];

  return (
    <footer className="bg-[#6B1E35] text-white pt-20 pb-12 border-t border-[#CE986C]/30">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div>
              <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider uppercase text-white">
                {STUDIO_INFO.name}
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold mt-1">
                Creative Studio · Est. {STUDIO_INFO.establishedYear}
              </p>
            </div>
            <p className="font-quicksand text-base sm:text-[17px] text-white/90 font-medium italic leading-relaxed max-w-sm">
              “You Capture the Moment. We Perfect the Story.”
            </p>
            <div className="pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white/90 hover:text-[#CE986C] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#CE986C]" />
                <span>{STUDIO_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#CE986C] font-bold">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2.5 text-sm font-quicksand text-white/80 font-medium">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#CE986C] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#CE986C] font-bold">
              Services
            </h4>
            <ul className="flex flex-col space-y-2.5 text-sm font-quicksand text-white/80 font-medium">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#CE986C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#CE986C] font-bold">
              Contact
            </h4>
            <div className="flex flex-col space-y-3.5 text-sm font-quicksand text-white/80 font-medium">
              <a
                href="tel:+917032424878"
                className="flex items-center space-x-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#CE986C] shrink-0" />
                <span>+91 70324 24878</span>
              </a>
              <a
                href="mailto:srkvisions05@gmail.com"
                className="flex items-center space-x-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#CE986C] shrink-0" />
                <span>srkvisions05@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2.5 text-white/80">
                <MapPin className="w-4 h-4 text-[#CE986C] shrink-0 mt-1" />
                <span className="leading-snug">Mathaji nagar, brahman wadi, Begumpet, Hyderabad, 500016</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-quicksand text-white/60 font-medium space-y-3 sm:space-y-0">
          <p>© 2026 {STUDIO_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.beyondwebco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Made by BeyondWebCo
            </a>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
