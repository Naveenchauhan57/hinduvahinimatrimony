import React from "react";

export default function WhyHinduVahiniSection() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFFFF] to-[#FFFCF5] py-14 md:py-16 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Background radial overlays */}
      <div className="absolute top-1/3 left-[-10%] w-[400px] h-[400px] bg-radial from-[#E59E0A]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[400px] h-[400px] bg-radial from-[#C98A00]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">

        {/* Section Heading */}
        <div className="text-center mb-7 max-w-2xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3 px-5 py-1.5 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C98A00] leading-none">
              Our Heritage &amp; Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-[1.05]">
            Why HinduVahini Matrimony?
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] rounded-full mt-3" />
        </div>

        {/* Main Card */}
        <div className="w-full bg-white/95 rounded-2xl border border-[#E8D7B0] p-6 md:p-8 shadow-[0_24px_80px_rgba(212,163,89,0.08)] max-w-6xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-radial from-[#E59E0A]/5 via-transparent to-transparent rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Quote callout */}
              <div className="p-5 rounded-xl bg-linear-to-br from-[#FFFCF5] to-[#FFF9EE] border border-[#F2D9A6]/75 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E59E0A] rounded-l-xl" />
                <h4 className="text-[15px] font-black text-[#111827] mb-1.5 pl-1">
                  Sacred Union of Seven Lifetimes
                </h4>
                <p className="text-[13px] font-semibold text-[#6B7280] leading-6 pl-1">
                  "In our culture, marriage (Vivah) is not just a dynamic contract. It represents an auspicious transition that ties two families and two spirits together over seven lifetimes."
                </p>
              </div>

              {/* Feature items */}
              <div className="flex items-start gap-3">
                <span className="text-3xl text-[#E59E0A] font-serif select-none leading-none mt-0.5">💮</span>
                <div>
                  <h5 className="text-[13.5px] font-black text-[#111827] uppercase tracking-wider mb-1">
                    Vedic Alignment
                  </h5>
                  <p className="text-[13px] font-semibold text-[#6B7280] leading-6">
                    Bridging traditional values and modern lifestyles through AI-driven Guna compatibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-3xl text-[#C98A00] font-serif select-none leading-none mt-0.5">✨</span>
                <div>
                  <h5 className="text-[13.5px] font-black text-[#111827] uppercase tracking-wider mb-1">
                    Authentic Database
                  </h5>
                  <p className="text-[13px] font-semibold text-[#6B7280] leading-6">
                    Guaranteed trust via mandatory selfie validation and government-approved document verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Paragraphs */}
            <div className="lg:col-span-7 flex flex-col space-y-5 text-[#6B7280] text-sm md:text-[15px] font-semibold leading-7">
              <p>
                Welcome to <strong className="text-[#111827] font-black">HinduVahini Matrimony</strong>, where sacred traditions harmoniously intertwine with modern technology to assist you in discovering your lifelong partner. We understand that in Hindu culture, marriage is not merely a union of two individuals, but a sacred covenant that binds two families together for seven lifetimes.
              </p>
              <p>
                Trust and authenticity are the cornerstones of HinduVahini Matrimony. Every registration undergoes a rigorous, multi-layered validation process that includes mandatory government ID checks and advanced selfie verification. Profiles that satisfy our verification criteria are awarded the coveted <strong className="text-[#E59E0A] font-black">Blue Tick badge</strong>, guaranteeing complete peace of mind.
              </p>
              <p>
                Our pioneering <strong className="text-[#111827] font-black">AI-Powered Vedic Matchmaking</strong> engine brings the wisdom of traditional astrology into the digital age. By analyzing birth coordinates, Gunas, and planetary alignments, our system offers intelligent Kundli Milan reports combining Vedic calculations with modern lifestyle compatibility.
              </p>
              <p>
                As a matrimonial service for the Hindu diaspora, HinduVahini connects brides and grooms across communities like Brahmin, Rajput, Agarwal, Jain, and Maratha. Premium members enjoy direct contact, elevated visibility, Astro-compatibility consultations, and access to our bespoke <strong className="text-[#C98A00] font-black">VIP Personal Matchmaking</strong> service.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
