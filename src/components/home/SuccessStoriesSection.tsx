"use client";

import React, { useState } from "react";
import Image from "next/image";

const successStories = [
  {
    couple: "Aditya & Priyanka",
    location: "Mumbai & San Francisco",
    date: "Auspicious Vivah • Nov 2025",
    text: "We matched through the Vedic Guna matching filter. Finding someone who values tradition as much as modern aspirations was a blessing. Our families connected instantly.",
    highlight: "Vedic Guna Matching aligned their orbits.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80",
  },
  {
    couple: "Rohit & Meera",
    location: "Delhi & Toronto",
    date: "Auspicious Vivah • Jan 2026",
    text: "With HinduVahini's 100% ID verification, we felt completely secure during our interactions. Our journey from first chat to a beautiful sacred vivah has been magical.",
    highlight: "100% Secure ID Validation provided peace of mind.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    couple: "Siddharth & Ananya",
    location: "Bangalore & London",
    date: "Auspicious Vivah • Apr 2026",
    text: "The VIP relationship manager curated matching profiles perfectly according to our expectations. We couldn't have asked for a more private and premium experience.",
    highlight: "VIP Matchmaking curated their perfect match.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function SuccessStoriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextStory = () => {
    setActiveIdx((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveIdx((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeIdx];

  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFCF5] to-[#FFFFFF] py-16 md:py-20 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-radial from-[#E59E0A]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-8 items-center">
          
          {/* Left Column: Title & Controls */}
          <div className="flex flex-col items-start text-left relative z-10 mb-10 md:mb-12 lg:mb-0">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#C98A00]">
                Sacred Unions
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111827] tracking-tight leading-tight mb-6">
              HinduVahini Success Stories
            </h2>

            <p className="text-lg text-[#6B7280] font-semibold leading-relaxed mb-8">
              Witness the stories of elegant alignments, where Vedic science and authentic matches come together to build lifelong marriages.
            </p>

            {/* Custom Interactive gold indicators & Navigation handles */}
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                {successStories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    type="button"
                    className={`h-2 rounded-full transition-all duration-500 ${
                      activeIdx === idx
                        ? "w-10 bg-[#E59E0A]"
                        : "w-2.5 bg-[#F2E7D3] hover:bg-[#E59E0A]/50"
                    }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevStory}
                  type="button"
                  className="w-12 h-12 rounded-full border border-[#F2E7D3] hover:border-[#E59E0A] hover:bg-[#E59E0A]/5 flex items-center justify-center text-[#5F5A54] hover:text-[#E59E0A] hover:shadow-[0_0_15px_rgba(229,158,10,0.15)] transition-all duration-300"
                  aria-label="Previous story"
                >
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextStory}
                  type="button"
                  className="w-12 h-12 rounded-full border border-[#F2E7D3] hover:border-[#E59E0A] hover:bg-[#E59E0A]/5 flex items-center justify-center text-[#5F5A54] hover:text-[#E59E0A] hover:shadow-[0_0_15px_rgba(229,158,10,0.15)] transition-all duration-300"
                  aria-label="Next story"
                >
                  <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Featured Story Showcase Card */}
          <div className="relative z-10 w-full">
            {/* Soft gold decorative shadow circle behind card */}
            <div className="absolute inset-0 bg-[#E59E0A]/10 rounded-3xl blur-3xl transform scale-95 pointer-events-none" />

            <div className="bg-white rounded-3xl border border-[#F2E7D3] shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(229,158,10,0.15)] transition-all duration-500 min-h-auto overflow-hidden flex flex-col">
              
              {/* TOP WEDDING IMAGE */}
              <div className="relative h-72 w-full overflow-hidden shrink-0">
                <Image
                  src="/hindu-wedding-couple.png"
                  alt="Traditional Indian Hindu wedding couple during their sacred vivah ceremony"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent z-10" />

                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[11px] font-black text-[#C98A00] tracking-[0.15em] bg-white px-3 py-1 rounded-full uppercase shadow-sm">
                    Sacred Vivah
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[11px] font-black text-white tracking-wider bg-black/45 backdrop-blur-xs px-3.5 py-1 rounded-full shadow-xs border border-white/10">
                    {currentStory.date}
                  </span>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <p className="text-xs font-black text-[#E59E0A] uppercase tracking-[0.2em] mb-1">
                      {currentStory.location}
                    </p>
                    <h4 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-none">
                      {currentStory.couple}
                    </h4>
                  </div>

                  {/* Highlight Badge */}
                  <div className="mb-6 px-4.5 py-2.5 rounded-xl bg-[#E59E0A]/5 border border-[#E59E0A]/20 text-[13.5px] font-bold text-[#C98A00] tracking-wide inline-block leading-none">
                    {currentStory.highlight}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-[#6B7280] text-xl font-semibold leading-relaxed italic mb-8">
                    "{currentStory.text}"
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 border-t border-[#F2E7D3] flex items-center justify-between">
                  <a
                    href="#full-chronicle"
                    className="text-sm font-black text-[#E59E0A] hover:text-[#C98A00] uppercase tracking-widest transition-colors duration-200 flex items-center gap-1.5 group select-none"
                  >
                    <span>Read Full Vivah Chronicle</span>
                    <svg className="w-4 h-4 stroke-current transform group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  {/* Decorative gold flower */}
                  <span className="text-2xl select-none font-serif text-[#C98A00]">💮</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
