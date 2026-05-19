import React from "react";
import Image from "next/image";

export default function FounderMessageSection() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFFFF] to-[#FFFCF5] py-16 md:py-20 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-[-5%] w-[350px] h-[350px] bg-radial from-[#F59E0B]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-[350px] h-[350px] bg-radial from-[#E59E0A]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Left Column: Large Quote & Message Statement */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C98A00] leading-none">
                A Message from the Founder
              </span>
            </div>
            
            {/* Giant decorative quotation mark */}
            <span className="text-6xl select-none font-serif text-[#E59E0A]/35 leading-none h-4 block mb-2">
              “
            </span>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.05] max-w-3xl mb-6">
              Restoring Honor, Trust, and Sacred Alignment to Matrimony
            </h3>
            
            <div className="space-y-6 text-[#6B7280] text-base md:text-lg font-semibold leading-8">
              <p>
                In a digital landscape filled with casual swipes and brief connections, we realized that modern matchmaking was losing its soul. Traditional Hindu marriage (Vivah) is not a simple contract—it is a sacred transit that coordinates planetary positions, family lineages, and lifelong spiritual values.
              </p>
              
              <p>
                HinduVahini was founded to protect and refine this journey. We combine robust, modern ID verification systems with time-honored Vedic astrology. We strive to provide Hindu families across the globe a secure, highly private, and luxurious space to connect with authenticity and complete peace of mind.
              </p>
            </div>

            {/* Signature & Tagline */}
            <div className="mt-8 pt-6 border-t border-[#F2E7D3] w-full flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-[#111827] leading-none">Anoop Chandran</p>
                <p className="text-sm font-bold text-[#C98A00] uppercase tracking-wide mt-1.5">Founder, HinduVahini Matrimony</p>
              </div>
              <span className="text-4xl select-none font-serif text-[#C98A00]/80">✨</span>
            </div>
          </div>

          {/* Right Column: Elegant Photo container with decorative glows */}
          <div className="lg:col-span-5 flex flex-col items-center relative z-10 w-full">
            {/* Saffron halo glow behind container */}
            <div className="absolute inset-0 bg-[#E59E0A]/20 rounded-3xl blur-3xl transform scale-90 pointer-events-none" />

            <div className="relative p-3 rounded-3xl bg-linear-to-br from-[#E59E0A] via-[#F59E0B] to-[#C98A00] shadow-[0_20px_50px_rgba(229,158,10,0.2)] w-full max-w-[380px] mx-auto">
              {/* Image Frame Container */}
              <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-stone-950 flex items-center justify-center border-2 border-white shadow-inner">
                {/* Spiritual mandala line work as bg in the frame */}
                <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
                  <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  </svg>
                </div>
                
                {/* Professional Portrait of Indian Founder */}
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                  alt="Anoop Chandran"
                  fill
                  sizes="(max-w-768px) 100vw, 380px"
                  priority
                  className="object-cover object-top select-none"
                />

                {/* Glassmorphic overlay card at the bottom */}
                <div className="absolute bottom-4 inset-x-4 bg-white/10 backdrop-blur-xl border border-white/20 text-[#FFFCF5] py-3 px-4 rounded-2xl text-center shadow-lg z-20">
                  <h4 className="text-[17px] font-black tracking-wide">Anoop Chandran</h4>
                  <p className="text-[10px] font-bold tracking-widest text-[#E59E0A] uppercase mt-1">Guided by Roots · Built for the Future</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
