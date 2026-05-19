import React from "react";
import Image from "next/image";
import TrustBar from "./TrustBar";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-between overflow-hidden select-none bg-[#FFFCF5]">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-couple.png"
          alt="Premium Hindu Matrimony Couple Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* Soft Saffron-Pink premium gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#E59E0A]/35 via-[#F59E0B]/20 to-[#9D174D]/25 mix-blend-multiply z-10" />
        
        {/* Rich dark gradient overlay from bottom to top for maximum text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/20 z-25" />
      </div>

      {/* Subtle mandala background accent in the center (SVG Overlay) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 pointer-events-none z-30 select-none text-white">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1, 1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Decorative mandala shapes */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <path
                key={i}
                d="M 50 15 C 47 30, 53 30, 50 50 C 47 30, 53 30, 50 15"
                transform={`rotate(${angle} 50 50)`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-40 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Traditional spiritual micro-tag */}
          <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-[#E59E0A]/20 to-[#F59E0B]/20 border border-[#F2D9A6]/40 shadow-xs backdrop-blur-xs">
            <span className="text-[#F2D9A6] text-xs font-black tracking-[0.25em] uppercase">
              शुभ विवाह • Sacred Unions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#FFFCF5] tracking-tight leading-none drop-shadow-md mb-6 max-w-3xl">
            Sacred Connections <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#F2D9A6]">
              for a Lifetime
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#FFFCF5]/90 font-medium leading-relaxed max-w-2xl drop-shadow-sm mb-10">
            Find your life partner through verified Hindu profiles, Vedic compatibility, and trusted family values.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="/register"
              className="w-full sm:w-auto relative overflow-hidden group bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] text-white font-extrabold py-4 px-10 rounded-full shadow-lg hover:shadow-[#F59E0B]/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-base"
            >
              <span className="relative z-10">Create Free Profile</span>
              <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </a>

            <a
              href="#matches"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-extrabold py-4 px-10 rounded-full border border-[#F2D9A6]/40 hover:border-[#F2D9A6] backdrop-blur-md transition-all duration-300 text-base"
            >
              Browse Matches
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Trust Metrics Bar */}
      <div className="relative z-45 w-full">
        <TrustBar />
      </div>
    </section>
  );
}
