import React from "react";

export default function SEOContentSection() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFFFF] to-[#FFFCF5] py-16 md:py-20 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Background radial overlays */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-radial from-[#E59E0A]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-radial from-[#C98A00]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Heading & Pill */}
        <div className="text-center mb-10 md:mb-12 max-w-2xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C98A00] leading-none">
              Our Heritage & Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-[1.05]">
            Why HinduVahini Matrimony?
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] rounded-full mt-4" />
        </div>

        {/* Magazine-style Editorial Section (2 Columns Grid) */}
        <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl border border-[#F2E7D3] p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(229,158,10,0.12)] transition-all duration-500 max-w-6xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-[#E59E0A]/5 via-transparent to-transparent rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Left Column: Bold Highlight Callout & Traditional Vision */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Highlight callout box */}
              <div className="p-6 rounded-2xl bg-linear-to-br from-[#FFFCF5] to-[#FFF9EE] border border-[#F2D9A6]/75 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#E59E0A] rounded-l-full" />
                <h4 className="text-lg font-black text-[#111827] mb-2">
                  Sacred Union of Seven Lifetimes
                </h4>
                <p className="text-[14.5px] font-semibold text-[#6B7280] leading-relaxed">
                  "In our culture, marriage (Vivah) is not just a dynamic contract. It represents an auspicious transition that ties two families and two spirits together over seven lifetimes."
                </p>
              </div>

              {/* Side statement */}
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#E59E0A] font-serif select-none">💮</span>
                <div>
                  <h5 className="text-[14.5px] font-black text-[#111827] uppercase tracking-wider mb-1">
                    Vedic Alignment
                  </h5>
                  <p className="text-[13.5px] font-semibold text-[#6B7280] leading-relaxed">
                    Bridging traditional values and modern lifestyles through AI-driven Guna compatibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#C98A00] font-serif select-none">✨</span>
                <div>
                  <h5 className="text-[14.5px] font-black text-[#111827] uppercase tracking-wider mb-1">
                    Authentic Database
                  </h5>
                  <p className="text-[13.5px] font-semibold text-[#6B7280] leading-relaxed">
                    Guaranteed trust via mandatory selfie validation and government-approved document verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: In-depth Paragraphs */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-[#6B7280] text-[15px] font-semibold leading-relaxed">
              
              <p>
                Welcome to <strong className="text-[#111827] font-black">HinduVahini Matrimony</strong>, where sacred traditions harmoniously intertwine with modern technology to assist you in discovering your lifelong partner. We understand that in Hindu culture, marriage is not merely a union of two individuals, but a sacred covenant that binds two families together for seven lifetimes. Our platform is passionately built to honor these time-honored spiritual values while offering state-of-the-art matchmaking features to today’s generation.
              </p>
              
              <p>
                Trust and authenticity are the cornerstones of HinduVahini Matrimony. Every registration undergoes a rigorous, multi-layered validation process that includes mandatory government ID checks and advanced selfie verification. Profiles that satisfy our verification criteria are awarded the coveted <strong className="text-[#E59E0A] font-black">Blue Tick badge</strong>, guaranteeing our members complete peace of mind and protection from misrepresentation.
              </p>
              
              <p>
                Our pioneering <strong className="text-[#111827] font-black">AI-Powered Vedic Matchmaking</strong> engine brings the wisdom of traditional astrology into the digital age. By analyzing birth coordinates, Gunas, and planetary alignments, our system offers intelligent horoscope compatibility (Kundli Milan) reports. We combine these Vedic calculations with modern lifestyle preferences, career values, and personal interests to curate introductions that align stars and cultures alike.
              </p>
              
              <p>
                As a global matrimonial service, HinduVahini connects eligible brides and grooms across the entire Hindu diaspora. Whether you are searching for matches within specific communities like Brahmin, Rajput, Agarwal, Jain, or Maratha, or looking across diverse geographies such as India, the United States, Canada, Australia, and the UK, our platform bridges distances to bring your soulmate closer.
              </p>

              <p>
                We cater to all needs by offering robust free profiles alongside elite premium features. Premium members enjoy exclusive advantages, including direct contact options, elevated search visibility, Astro-compatibility consultations, and access to our bespoke <strong className="text-[#C98A00] font-black">VIP Personal Matchmaking</strong> services. Discover a premium experience designed for families who value privacy, tradition, and lifelong happiness.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
