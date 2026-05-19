"use client";

import React from "react";
import { useRegisterStore, ProfileFor } from "@/store/register-store";
import { motion } from "framer-motion";

const options: ProfileFor[] = [
  "Myself",
  "My Son",
  "My Daughter",
  "My Brother",
  "My Sister",
  "My Friend",
  "My Relative",
];

export default function StepProfileType() {
  const { profileFor, setField, nextStep } = useRegisterStore();

  const handleSelect = (option: ProfileFor) => {
    setField("profileFor", option);
  };

  const handleContinue = () => {
    if (profileFor) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title block */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mb-2">
          This Profile Is For
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Select who you are registering for to help us tailor your experience.
        </p>
      </div>

      {/* Profile for list (Interactive Pills) */}
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {options.map((option) => {
          const isSelected = profileFor === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`px-5 py-3 rounded-full text-sm font-black tracking-wide border transition-all duration-300 cursor-pointer
                ${isSelected
                  ? "bg-gradient-to-r from-[#E0A100] to-[#D4A359] border-transparent text-white shadow-md shadow-[#D4A359]/25 scale-[1.03]"
                  : "bg-white border-[#E8D7B0] text-[#0B132B] hover:bg-[#FFFDF8] hover:border-[#D4A359]"
                }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Info Warning Banner */}
      <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFF9EE] border border-[#F2D9A6] mt-2">
        <span className="text-2xl leading-none select-none">💮</span>
        <p className="text-[13px] font-semibold text-[#6B7280] leading-relaxed">
          <strong className="text-[#0B132B] font-black">Sacred Alliance Note:</strong> HinduVahini is built for genuine families seeking sacred and authentic matrimonial alliances. Verification is mandatory.
        </p>
      </div>

      {/* Action CTA */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={handleContinue}
          disabled={!profileFor}
          className={`w-full sm:w-auto relative overflow-hidden group font-black py-3 px-8 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider
            ${profileFor
              ? "bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100] text-white shadow-md shadow-[#D4A359]/20 hover:scale-[1.02] cursor-pointer"
              : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
            }`}
        >
          <span className="relative z-10">Continue</span>
          {profileFor && (
            <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          )}
        </button>
      </div>
    </div>
  );
}
