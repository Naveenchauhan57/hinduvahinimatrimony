"use client";

import React, { useState } from "react";

type TabKey = "Community" | "Religion" | "State" | "Mother Tongue" | "Marital Status";

const tabData: Record<TabKey, string[]> = {
  Community: [
    "Brahmin Matrimony",
    "Rajput Matrimony",
    "Agarwal Matrimony",
    "Maratha Matrimony",
    "Yadav Matrimony",
    "Kayastha Matrimony",
    "Jain Matrimony",
    "Punjabi Matrimony",
    "Tamil Matrimony",
    "Telugu Matrimony",
    "Gujarati Matrimony",
    "Bengali Matrimony",
    "Marwari Matrimony",
    "Nair Matrimony",
    "Reddy Matrimony",
    "More Communities",
  ],
  Religion: [
    "Hindu Matrimony",
    "Sikh Matrimony",
    "Jain Matrimony",
    "Buddhist Matrimony",
    "More Religions",
  ],
  State: [
    "Maharashtra Matrimony",
    "Uttar Pradesh Matrimony",
    "Karnataka Matrimony",
    "Andhra Pradesh Matrimony",
    "Tamil Nadu Matrimony",
    "Gujarat Matrimony",
    "Rajasthan Matrimony",
    "Delhi Matrimony",
    "Punjab Matrimony",
    "West Bengal Matrimony",
    "Kerala Matrimony",
    "Telangana Matrimony",
    "More States",
  ],
  "Mother Tongue": [
    "Hindi Matrimony",
    "Marathi Matrimony",
    "Punjabi Matrimony",
    "Gujarati Matrimony",
    "Bengali Matrimony",
    "Tamil Matrimony",
    "Telugu Matrimony",
    "Kannada Matrimony",
    "Malayalam Matrimony",
    "Odia Matrimony",
    "More Languages",
  ],
  "Marital Status": [
    "Never Married Matrimony",
    "Divorced Matrimony",
    "Widowed Matrimony",
    "Awaiting Divorce Matrimony",
  ],
};

const tabs: TabKey[] = ["Community", "Religion", "State", "Mother Tongue", "Marital Status"];

export default function ExploreProfilesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Community");

  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFCF5] to-[#FFFFFF] py-16 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Subtle ambient glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-radial from-[#E0A100]/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-radial from-[#D4A359]/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C98A00] leading-none">
              Browse Database
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.05] mb-3">
            Explore Indian Matrimonial Communities
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#E0A100] to-[#D4A359] rounded-full mb-4" />
          <p className="text-base md:text-xl text-slate-500 font-semibold max-w-3xl leading-relaxed">
            Browse verified profiles across India's most respected communities, languages, regions, and traditions.
          </p>
        </div>

        {/* Main Premium Card */}
        <div className="relative w-full bg-white/95 rounded-2xl border border-[#E8D7B0] shadow-[0_20px_80px_rgba(212,163,89,0.08)] p-8 md:p-10 overflow-hidden">

          {/* Decorative top-right badge */}
          <div className="absolute top-5 right-5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider text-white bg-linear-to-r from-[#E0A100] to-[#D4A359] shadow-[0_4px_15px_rgba(212,163,89,0.35)]">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              10,000+ Verified Families
            </span>
          </div>

          {/* Tabs Row */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#F0E4C5]/80 pb-5 mb-7 pr-36">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-[13px] font-black tracking-wide uppercase transition-all duration-300 focus:outline-none
                    ${isActive
                      ? "bg-linear-to-r from-[#E0A100] to-[#D4A359] text-white shadow-lg shadow-[#D4A359]/30 scale-[1.02]"
                      : "bg-[#FAF5E9] text-[#5C6478] hover:bg-[#F4E7C1] hover:text-[#0B132B]"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Community Links Grid — pill buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {tabData[activeTab].map((link, idx) => {
              const isMore = link.startsWith("More");
              return (
                <a
                  key={idx}
                  href={`#explore-${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl border text-[13.5px] font-semibold transition-all duration-250 group
                    ${isMore
                      ? "border-[#D4A359] bg-[#FFF8E8] text-[#C58900] font-black hover:shadow-sm hover:scale-[1.02]"
                      : "border-[#EFE3C4] bg-[#FFFDF8] text-[#3D3D3D] hover:border-[#D4A359] hover:bg-[#FFF8E8] hover:text-[#C58900]"
                    }`}
                >
                  <span>{link}</span>
                  <svg
                    className={`w-3.5 h-3.5 shrink-0 stroke-current transition-transform duration-300 group-hover:translate-x-0.5 ${isMore ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              );
            })}
          </div>

          {/* Subtle bottom decorative line */}
          <div className="mt-8 pt-5 border-t border-[#F0E4C5]/60 flex items-center justify-between">
            <p className="text-[12.5px] text-slate-400 font-semibold">
              Showing verified profiles across India
            </p>
            <a
              href="#register"
              className="text-[12.5px] font-black text-[#C58900] hover:text-[#E0A100] uppercase tracking-widest transition-colors duration-200 flex items-center gap-1 group"
            >
              View All Profiles
              <svg className="w-3.5 h-3.5 stroke-current group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
