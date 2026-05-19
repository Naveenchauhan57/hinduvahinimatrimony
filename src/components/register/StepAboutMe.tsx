"use client";

import React, { useState, useEffect } from "react";
import { useRegisterStore } from "@/store/register-store";

export default function StepAboutMe() {
  const {
    currentCity,
    qualification,
    occupation,
    industry,
    aboutMe,
    setField,
    nextStep,
    prevStep,
  } = useRegisterStore();

  const [localAbout, setLocalAbout] = useState(aboutMe);

  // Auto-generate profile description draft if default is present or empty
  useEffect(() => {
    const jobStr = occupation ? ` working as a ${occupation} in ${industry || "my field"}` : "";
    const eduStr = qualification ? `, having completed my ${qualification}` : "";
    const locStr = currentCity ? `. I reside in ${currentCity}` : "";

    const autoText = `I am a family-oriented individual who values tradition, spirituality, and meaningful relationships${eduStr}${jobStr}${locStr}. I am seeking a compatible life partner for a sacred lifelong journey.`;
    
    // Only set if user hasn't heavily modified it
    if (aboutMe === "I am a family-oriented individual who values tradition, spirituality, and meaningful relationships. I am seeking a compatible life partner for a sacred lifelong journey.") {
      setLocalAbout(autoText);
      setField("aboutMe", autoText);
    }
  }, [currentCity, qualification, occupation, industry, aboutMe, setField]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 4000) {
      setLocalAbout(text);
      setField("aboutMe", text);
    }
  };

  const handleComplete = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title block */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mb-2">
          About This Profile
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Tell us about your values, interests, and what you seek in a life partner. Feel free to refine the draft below.
        </p>
      </div>

      {/* Description Textarea */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
          Profile Description / Bio
        </label>
        <textarea
          rows={6}
          value={localAbout}
          onChange={handleTextChange}
          placeholder="Describe yourself..."
          className="w-full px-4 py-3 rounded-xl border border-[#E8D7B0] bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:border-[#D4A359] focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200 resize-none leading-relaxed"
        />
        <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
          <span>Write at least 50 characters for better responses</span>
          <span>{localAbout.length} / 4000</span>
        </div>
      </div>

      {/* Astro note */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FFF9EE] border border-[#F2D9A6]">
        <span className="text-2xl leading-none select-none">✨</span>
        <p className="text-[13px] font-semibold text-[#6B7280] leading-relaxed">
          <strong className="text-[#0B132B] font-black">AI Matchmaker:</strong> Our Vedic match engine uses this bio alongside your astro charts to highlight compatible personality tags to matching families.
        </p>
      </div>

      {/* Actions */}
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
          onClick={handleComplete}
          disabled={localAbout.trim().length < 20}
          className={`relative overflow-hidden group font-black py-3 px-8 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider
            ${localAbout.trim().length >= 20
              ? "bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100] text-white shadow-md shadow-[#D4A359]/20 hover:scale-[1.02] cursor-pointer"
              : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
            }`}
        >
          <span className="relative z-10">Complete Registration</span>
          {localAbout.trim().length >= 20 && (
            <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          )}
        </button>
      </div>
    </div>
  );
}
