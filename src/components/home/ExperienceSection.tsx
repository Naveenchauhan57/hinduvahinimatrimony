import React from "react";

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFCF5] to-[#FFFFFF] py-16 md:py-20 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Premium Decorative Background Glows */}
      <div className="absolute top-6 right-[-10%] w-[400px] h-[400px] bg-radial from-[#E59E0A]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-[-10%] w-[400px] h-[400px] bg-radial from-[#C98A00]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Mandalas or Orbs */}
      <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-[#E59E0A]/3 blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-purple-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-10 md:gap-12">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-2xl flex flex-col items-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#E59E0A]/10 border border-[#F2E7D3] shadow-xs">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C98A00] leading-none">
              Discover Our Edge
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-[1.05]">
            The HinduVahini Experience
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] rounded-full mt-4" />
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[#6B7280] font-semibold leading-8">
            Restoring the sacred values of Hindu marriage with cutting-edge verification and alignment intelligence.
          </p>
        </div>

        {/* Feature Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          
          {/* Card 1: 100% ID Verified Profiles */}
          <div className="relative group bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#F2E7D3] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(229,158,10,0.12)] transition-all duration-500 flex flex-col items-start overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#E59E0A]/5 via-transparent to-transparent rounded-full pointer-events-none" />
            
            {/* Glowing Icon Container */}
            <div className="w-14 h-14 rounded-xl bg-[#FFF8E7] border border-[#F2E7D3] flex items-center justify-center text-[#E59E0A] mb-6 shadow-[0_8px_20px_rgba(229,158,10,0.1)] group-hover:scale-105 transition-all duration-500">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            
            <h3 className="text-xl font-black text-[#111827] tracking-tight mb-2.5">
              100% ID Verified Profiles
            </h3>
            
            <p className="text-[15px] font-semibold text-[#6B7280] leading-relaxed">
              Every profile undergoes rigorous government ID and selfie verification to ensure complete authenticity and family trust.
            </p>
          </div>

          {/* Card 2: Blue Tick for Sacred Matches */}
          <div className="relative group bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#F2E7D3] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(229,158,10,0.12)] transition-all duration-500 flex flex-col items-start overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#E59E0A]/5 via-transparent to-transparent rounded-full pointer-events-none" />
            
            {/* Glowing Icon Container */}
            <div className="w-14 h-14 rounded-xl bg-[#FFF8E7] border border-[#F2E7D3] flex items-center justify-center text-[#E59E0A] mb-6 shadow-[0_8px_20px_rgba(229,158,10,0.1)] group-hover:scale-105 transition-all duration-500">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" className="stroke-[2.5]" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" className="stroke-1 opacity-30" />
              </svg>
            </div>
            
            <h3 className="text-xl font-black text-[#111827] tracking-tight mb-2.5">
              Blue Tick for Sacred Matches
            </h3>
            
            <p className="text-[15px] font-semibold text-[#6B7280] leading-relaxed">
              Verified profiles receive a trusted badge and enjoy significantly higher acceptance and response rates.
            </p>
          </div>

          {/* Card 3: AI-Powered Vedic Matchmaking */}
          <div className="relative group bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#F2D9A6]/30 hover:border-[#E59E0A]/40 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(229,158,10,0.12)] transition-all duration-500 flex flex-col items-start md:col-span-2 lg:col-span-1 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#E59E0A]/5 via-transparent to-transparent rounded-full pointer-events-none" />
            
            {/* Glowing Icon Container */}
            <div className="w-14 h-14 rounded-xl bg-[#FFF8E7] border border-[#F2E7D3] flex items-center justify-center text-[#E59E0A] mb-6 shadow-[0_8px_20px_rgba(229,158,10,0.1)] group-hover:scale-105 transition-all duration-500">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            
            <h3 className="text-xl font-black text-[#111827] tracking-tight mb-2.5">
              AI-Powered Vedic Matchmaking
            </h3>
            
            <p className="text-[15px] font-semibold text-[#6B7280] leading-relaxed">
              Advanced algorithms combine traditional horoscope analysis with modern compatibility intelligence.
            </p>
          </div>

        </div>

        {/* VIP Premium Banner Redesigned to be highly compact */}
        <div className="w-full bg-linear-to-br from-stone-900 via-stone-950 to-stone-900 rounded-2xl border-2 border-[#E59E0A]/40 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Decorative glowing orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-radial from-[#E59E0A]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-72 h-72 bg-radial from-[#C98A00]/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Luxury background vector pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none text-[#F2D9A6]">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.15" />
            </svg>
          </div>

          {/* Left: Branding & Taglines */}
          <div className="relative z-10 shrink-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/30 mb-3.5">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#E59E0A]">
                Elite Concierge
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-[#FFFCF5] tracking-tight leading-none mb-2">
              VIP HINDUVAHINI
            </h4>
            <p className="text-xs font-extrabold text-[#E59E0A] tracking-wider uppercase">
              Personal Matchmaking for Distinguished Families
            </p>
          </div>

          {/* Center: Luxury Description */}
          <div className="relative z-10 flex-1 max-w-xl text-center lg:text-left lg:px-6">
            <p className="text-[14.5px] font-semibold text-[#FFFCF5]/80 leading-relaxed">
              Experience the highest tier of confidentiality and custom curation. Enjoy one-on-one matches coordinated by senior relationship advisors, full background reviews, and private luxury introductions.
            </p>
          </div>

          {/* Right: Premium CTA Button */}
          <div className="relative z-10 shrink-0 w-full lg:w-auto">
            <a
              href="#vip-consultation"
              className="block w-full lg:w-auto text-center relative overflow-hidden group bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] text-[#111827] font-black py-3 md:py-4 px-6 md:px-8 rounded-full shadow-[0_10px_25px_rgba(229,158,10,0.25)] hover:shadow-[0_15px_35px_rgba(229,158,10,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm uppercase tracking-wider whitespace-nowrap"
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
