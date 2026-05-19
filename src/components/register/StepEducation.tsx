"use client";

import React, { useState } from "react";
import { useRegisterStore } from "@/store/register-store";

const qualificationOptions = [
  "B.Tech / B.E. / B.S.",
  "M.Tech / M.E. / M.S.",
  "MBA / PGDM",
  "MCA / MCM / MS IT",
  "MBBS / MD / MS / BDS",
  "Ph.D / Fellowship",
  "CA / CS / ICWA",
  "B.Com / B.B.A. / B.C.A.",
  "M.Com / M.A. / M.Sc.",
  "B.Arch / M.Arch",
  "Law (L.L.B. / L.L.M.)",
  "High School / Diploma",
  "Other Graduate Degree",
  "Other Postgraduate Degree",
];

export default function StepEducation() {
  const {
    qualification,
    college,
    certifications,
    setField,
    nextStep,
    prevStep,
  } = useRegisterStore();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!qualification) newErrors.qualification = "Highest Qualification is required";
    if (!college.trim()) newErrors.college = "College/University name is required";
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
          Education Details
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Tell us about your educational background.
        </p>
      </div>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 gap-5">
        
        {/* Qualification */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Highest Qualification
          </label>
          <select
            value={qualification}
            onChange={(e) => setField("qualification", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.qualification ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Qualification</option>
            {qualificationOptions.map((q) => (
              <option key={q} value={q} className="text-[#0B132B]">{q}</option>
            ))}
          </select>
          {errors.qualification && (
            <span className="text-xs font-bold text-red-500">{errors.qualification}</span>
          )}
        </div>

        {/* College Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            College / University Name
          </label>
          <input
            type="text"
            placeholder="e.g. IIT Bombay, Delhi University, Stanford"
            value={college}
            onChange={(e) => setField("college", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.college ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          />
          {errors.college && (
            <span className="text-xs font-bold text-red-500">{errors.college}</span>
          )}
        </div>

        {/* Certifications (Optional) */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Additional Certifications (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. CFA Level 3, PMP, AWS Solutions Architect"
            value={certifications}
            onChange={(e) => setField("certifications", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#E8D7B0] bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:border-[#D4A359] focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200"
          />
        </div>

      </div>

      {/* Action Buttons */}
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
