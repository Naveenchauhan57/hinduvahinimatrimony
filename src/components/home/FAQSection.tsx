"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How does HinduVahini verify profiles?",
    answer: "Every profile on HinduVahini goes through a strict multi-tier verification. We verify government-issued photo IDs (like Aadhaar, PAN, or passport) and combine it with AI selfie matching to ensure 100% genuine profiles. Verified profiles receive the trusted Blue Tick badge.",
  },
  {
    question: "What is AI Vedic Matchmaking and Kundli Guna Milan?",
    answer: "Our advanced algorithms combine traditional Vedic astrology principles with modern compatibility indicators. When setting up your profile, you can provide birth details to generate automated horoscope matching reports, calculating the Guna score out of 36 to help you find spiritually compatible matches.",
  },
  {
    question: "Can I control who views my photos and contact details?",
    answer: "Yes, privacy is our highest priority. HinduVahini offers advanced privacy settings that let you control who can view your uploaded photos, horoscope details, and direct contact numbers. You can limit views to verified profiles only or approve requests individually.",
  },
  {
    question: "How does the VIP Personal Matchmaking service work?",
    answer: "VIP HinduVahini is our elite service designed for busy professionals and traditional families. You are assigned a dedicated Senior Relationship Advisor who understands your family requirements, manually curates elite profiles, conducts background checks, and organizes coordinated private meetings.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFFFF] to-[#FFFCF5] py-16 md:py-20 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Background visual art accents */}
      <div className="absolute top-12 left-[-10%] w-[500px] h-[500px] bg-radial from-[#E59E0A]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-[-10%] w-[500px] h-[500px] bg-radial from-[#C98A00]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12 max-w-2xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C98A00] leading-none">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-[1.05]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] rounded-full mt-4" />
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[#6B7280] font-semibold leading-8">
            Everything you need to know about safety, astrological matches, and premium services.
          </p>
        </div>

        {/* FAQ Accordion Cards List - Constrained for readability */}
        <div className="space-y-4 w-full max-w-3xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white/95 backdrop-blur-md rounded-2xl border border-[#F2E7D3] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(229,158,10,0.08)] transition-all duration-500 overflow-hidden ${
                  isOpen ? "border-[#E59E0A]/55" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  type="button"
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none select-none hover:bg-[#FFFCF5]/30 transition-colors duration-300"
                >
                  <span className="text-lg font-black text-[#111827] tracking-wide pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/minus icons inside gradient circle */}
                  <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-[#E59E0A] to-[#C98A00] text-white shadow-md transition-all duration-300 group-hover:scale-105">
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </span>
                </button>

                {/* Smooth Animated collapse content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-[#F2E7D3]" : "max-h-0"
                  }`}
                >
                  <div className="p-6 md:p-7 bg-[#FFFCF5]/50 text-[15px] font-semibold text-[#6B7280] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
