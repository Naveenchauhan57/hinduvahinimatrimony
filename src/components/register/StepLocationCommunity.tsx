"use client";

import React, { useState } from "react";
import { useRegisterStore } from "@/store/register-store";

const communityOptions = [
  "Brahmin",
  "Rajput",
  "Agarwal / Vaishya",
  "Maratha",
  "Kayastha",
  "Patel / Patidar",
  "Nair",
  "Menon",
  "Reddy",
  "Arya Vysya",
  "Jat",
  "Yadav",
  "Sindhi",
  "Punjabi",
  "Baniya",
  "Khatri",
  "Lingayat",
  "Other Caste"
];

export default function StepLocationCommunity() {
  const {
    currentCity,
    livesWithFamily,
    familyCity,
    community,
    subCommunity,
    openToAllCommunities,
    setField,
    nextStep,
    prevStep,
  } = useRegisterStore();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!currentCity.trim()) newErrors.currentCity = "Current City is required";
    if (livesWithFamily === null) newErrors.livesWithFamily = "Please specify if you live with family";
    if (!familyCity.trim()) newErrors.familyCity = "Family City is required";
    if (!community.trim()) newErrors.community = "Community is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title block */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mb-2">
          Location &amp; Community
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Tell us about where you live and your community preferences.
        </p>
      </div>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Current City */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Current City
          </label>
          <input
            type="text"
            placeholder="e.g. Mumbai, New Delhi, San Francisco"
            value={currentCity}
            onChange={(e) => setField("currentCity", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.currentCity ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          />
          {errors.currentCity && (
            <span className="text-xs font-bold text-red-500">{errors.currentCity}</span>
          )}
        </div>

        {/* Lives with Family */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Lives With Family?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ].map((option) => {
              const isSelected = livesWithFamily === option.value;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setField("livesWithFamily", option.value)}
                  className={`py-3 rounded-xl text-sm font-black tracking-wide border transition-all duration-250 cursor-pointer
                    ${isSelected
                      ? "bg-[#D4A359] border-transparent text-white shadow-sm"
                      : "bg-white border-[#E8D7B0] text-[#0B132B] hover:bg-[#FFFDF8] hover:border-[#D4A359]"
                    }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          {errors.livesWithFamily && (
            <span className="text-xs font-bold text-red-500">{errors.livesWithFamily}</span>
          )}
        </div>

        {/* Family City */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Family City
          </label>
          <input
            type="text"
            placeholder="e.g. Pune, Lucknow, Varanasi"
            value={familyCity}
            onChange={(e) => setField("familyCity", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.familyCity ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          />
          {errors.familyCity && (
            <span className="text-xs font-bold text-red-500">{errors.familyCity}</span>
          )}
        </div>

        {/* Community select */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Community / Caste
          </label>
          <select
            value={community}
            onChange={(e) => setField("community", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.community ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Community</option>
            {communityOptions.map((c) => (
              <option key={c} value={c} className="text-[#0B132B]">{c}</option>
            ))}
          </select>
          {errors.community && (
            <span className="text-xs font-bold text-red-500">{errors.community}</span>
          )}
        </div>

        {/* Sub-Community (Optional) */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Sub-Community (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Saraswat, Kanyakubj, Bhardwaj"
            value={subCommunity}
            onChange={(e) => setField("subCommunity", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#E8D7B0] bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:border-[#D4A359] focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200"
          />
        </div>

        {/* Checkbox wrapper */}
        <div className="flex items-center gap-3 md:mt-8 pl-1">
          <input
            type="checkbox"
            id="openToAll"
            checked={openToAllCommunities}
            onChange={(e) => setField("openToAllCommunities", e.target.checked)}
            className="w-4 h-4 text-[#D4A359] border-[#E8D7B0] rounded-sm focus:ring-[#D4A359] accent-[#D4A359]"
          />
          <label htmlFor="openToAll" className="text-xs font-bold text-[#0B132B] select-none cursor-pointer">
            Open to all compatible communities
          </label>
        </div>

      </div>

      {/* Buttons block */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="px-6 py-3 rounded-xl border border-[#E8D7B0] hover:border-[#D4A359] hover:bg-[#FCFAF5] text-xs font-black uppercase tracking-wider text-[#0B132B] transition-all duration-250 cursor-pointer"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="relative overflow-hidden group bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100] text-white font-black py-3 px-8 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider shadow-md shadow-[#D4A359]/20 hover:scale-[1.02] cursor-pointer"
        >
          <span className="relative z-10">Continue</span>
          <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </button>
      </div>
    </div>
  );
}
