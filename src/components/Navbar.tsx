"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Capsule Navbar Header */}
      <header className="fixed top-2.5 sm:top-3.5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[1340px] h-[64px] sm:h-[72px] md:h-[78px] bg-[#F6EFE6]/95 backdrop-blur-md rounded-full border border-[#E8CDB4] shadow-[0_4px_20px_rgba(107,30,53,0.06)] px-5 sm:px-8 md:px-10 flex items-center justify-between transition-all duration-300">
          
          {/* Left: Original SRK Visions Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 group focus:outline-none shrink-0"
            aria-label="SRK Visions Home"
          >
            <div className="relative w-[34px] h-[26px]">
              <Image
                src="/assets/srk-logo.png"
                alt="SRK Visions"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-cinzel text-sm sm:text-base font-bold text-[#171717] tracking-wider uppercase hidden sm:inline-block">
              SRK Visions
            </span>
          </Link>

          {/* Centre: Nav links with diamond separators (Exact Reference) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[15px] lg:text-[16px] text-[#727272] font-quicksand font-medium">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <React.Fragment key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 hover:text-[#6B1E35] ${
                      isActive ? "text-[#6B1E35] font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  {/* Muted beige diamond separator */}
                  <span className="text-[#CE986C] text-[10px] select-none opacity-80">
                    ◆
                  </span>
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right: Capsule "Order now" button */}
          <div className="flex items-center space-x-3">
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-[#6B1E35] hover:bg-[#843B43] text-white font-quicksand font-semibold text-xs sm:text-sm px-5 sm:px-7 py-2 sm:py-2.5 rounded-full shadow-sm transition-all duration-300"
            >
              Order now
            </Link>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#6B1E35] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F6EFE6]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-24 text-[#6B1E35] md:hidden">
          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#CE986C] font-semibold">
              Navigation
            </span>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel text-2xl font-bold hover:text-[#843B43]"
            >
              Home
            </Link>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-2xl font-bold hover:text-[#843B43]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/order"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full py-3.5 bg-[#6B1E35] text-white font-quicksand font-bold rounded-full shadow-md text-sm"
              >
                Order now
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E8CDB4] text-xs text-[#727272] space-y-1">
            <p className="font-semibold text-[#6B1E35]">SRK Visions · Est. 2021</p>
            <p>Begumpet, Hyderabad – 500016</p>
            <p>+91 70324 24878</p>
          </div>
        </div>
      )}
    </>
  );
}
