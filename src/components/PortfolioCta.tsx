import React from "react";
import Link from "next/link";

export default function PortfolioCta() {
  return (
    <section className="py-20 md:py-28 bg-[#6B1E35] text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="text-xs uppercase tracking-[0.28em] text-[#CE986C] font-semibold block mb-3">
          START YOUR PROJECT
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-wide uppercase leading-tight">
          Great Results Start Here
        </h2>
        <div className="w-16 h-[2px] bg-[#CE986C] mx-auto my-5" />
        <p className="font-quicksand text-base sm:text-lg text-white/85 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
          Transform your wedding collections with industry-leading post-production and meticulous creative craftsmanship.
        </p>
        <div>
          <Link
            href="/order"
            className="inline-flex items-center justify-center bg-[#CE986C] hover:bg-[#b8855b] text-white font-quicksand font-bold text-base md:text-[17px] min-w-[210px] h-[54px] sm:h-[60px] px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}
