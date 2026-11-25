"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";
  const showDarkNav = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F8F7F4]/90 backdrop-blur-md shadow-sm border-b border-[#171717]/8 py-4 text-[#171717]"
            : showDarkNav
            ? "bg-transparent py-6 text-white"
            : "bg-[#F8F7F4]/80 backdrop-blur-sm py-5 text-[#171717] border-b border-[#171717]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex flex-col tracking-wider focus:outline-none"
            aria-label="SRK Visions Home"
          >
            <span className="font-editorial text-2xl md:text-3xl font-semibold tracking-widest uppercase">
              SRK Visions
            </span>
            <span
              className={`text-[9px] tracking-[0.28em] uppercase -mt-1 transition-colors ${
                isScrolled || !showDarkNav ? "text-[#737373]" : "text-white/70"
              }`}
            >
              Creative Studio · Est. 2015
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 relative py-1 ${
                    active
                      ? "text-[#B49A78] font-medium"
                      : isScrolled || !showDarkNav
                      ? "text-[#171717] hover:text-[#B49A78]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B49A78]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Order Now CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/order"
              className={`group inline-flex items-center px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border ${
                isScrolled || !showDarkNav
                  ? "bg-[#171717] text-white border-[#171717] hover:bg-[#B49A78] hover:border-[#B49A78]"
                  : "bg-white text-[#171717] border-white hover:bg-[#B49A78] hover:text-white hover:border-[#B49A78]"
              }`}
            >
              <span>Order Now</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none transition-colors ${
              isScrolled || !showDarkNav ? "text-[#171717]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111]/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 text-white md:hidden">
          <div className="flex flex-col space-y-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#B49A78]">
              Menu Navigation
            </p>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial text-3xl font-light tracking-wide text-white/90 hover:text-[#B49A78] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/order"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full py-4 text-xs font-semibold tracking-widest uppercase bg-[#B49A78] text-white hover:bg-[#A38967] transition-colors"
              >
                <span>Start Project / Order Now</span>
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col space-y-2 text-xs text-white/60">
            <p className="text-white/80 font-medium">SRK Visions · Hyderabad</p>
            <p>+91 70324 24878</p>
            <p>srkvisions05@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
}
