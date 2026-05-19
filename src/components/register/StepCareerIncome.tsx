"use client";

import React, { useState } from "react";
import { useRegisterStore } from "@/store/register-store";

const incomeOptions = [
  "Under ₹3 Lakhs",
  "₹3 Lakhs - ₹5 Lakhs",
  "₹5 Lakhs - ₹7 Lakhs",
  "₹7 Lakhs - ₹10 Lakhs",
  "₹10 Lakhs - ₹15 Lakhs",
  "₹15 Lakhs - ₹20 Lakhs",
  "₹20 Lakhs - ₹30 Lakhs",
  "₹30 Lakhs - ₹50 Lakhs",
  "₹50 Lakhs - ₹1 Crore",
  "₹1 Crore+",
];

export default function StepCareerIncome() {
  const {
    occupation,
    industry,
    company,
    annualIncome,
    incomeVisibility,
    setField,
    nextStep,
    prevStep,
  } = useRegisterStore();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!occupation.trim()) newErrors.occupation = "Occupation is required";
    if (!industry.trim()) newErrors.industry = "Industry/Sector is required";
    if (!company.trim()) newErrors.company = "Company/Employer name is required";
    if (!annualIncome) newErrors.annualIncome = "Annual Income is required";
    if (!incomeVisibility) newErrors.incomeVisibility = "Income Visibility setting is required";
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
          Career &amp; Income
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Tell us about your professional standing and income visibility preference.
        </p>
      </div>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Occupation */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Occupation / Job Role
          </label>
          <input
            type="text"
            placeholder="e.g. Software Engineer, Business Analyst, Doctor"
            value={occupation}
            onChange={(e) => setField("occupation", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.occupation ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          />
          {errors.occupation && (
            <span className="text-xs font-bold text-red-500">{errors.occupation}</span>
          )}
        </div>

        {/* Industry */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Industry Sector
          </label>
          <input
            type="text"
            placeholder="e.g. IT & Software, Healthcare, Banking, Education"
            value={industry}
            onChange={(e) => setField("industry", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.industry ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          />
          {errors.industry && (
            <span className="text-xs font-bold text-red-500">{errors.industry}</span>
          )}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Company Name
          </label>
          <input
            type="text"
            placeholder="e.g. Google, TCS, Private Practice, Self-Employed"
            value={company}
            onChange={(e) => setField("company", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.company ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          />
          {errors.company && (
            <span className="text-xs font-bold text-red-500">{errors.company}</span>
          )}
        </div>

        {/* Annual Income */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Annual Income (INR)
          </label>
          <select
            value={annualIncome}
            onChange={(e) => setField("annualIncome", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.annualIncome ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Annual Income</option>
            {incomeOptions.map((inc) => (
              <option key={inc} value={inc} className="text-[#0B132B]">{inc}</option>
            ))}
          </select>
          {errors.annualIncome && (
            <span className="text-xs font-bold text-red-500">{errors.annualIncome}</span>
          )}
        </div>

        {/* Income Visibility Options */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Income Visibility Preference
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Keep Private", value: "private", desc: "Only visible to verified matches request-wise." },
              { label: "Visible to Matches", value: "visible", desc: "Display clearly on the profile card." },
            ].map((option) => {
              const isSelected = incomeVisibility === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setField("incomeVisibility", option.value as "private" | "visible")}
                  className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-250 cursor-pointer
                    ${isSelected
                      ? "bg-[#FFF9EE] border-[#D4A359] ring-2 ring-[#D4A359]/20"
                      : "bg-white border-[#E8D7B0] hover:border-[#D4A359] hover:bg-[#FCFAF5]"
                    }`}
                >
                  <span className={`text-sm font-black ${isSelected ? "text-[#C58900]" : "text-[#0B132B]"}`}>
                    {option.label}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 mt-1">
                    {option.desc}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.incomeVisibility && (
            <span className="text-xs font-bold text-red-500">{errors.incomeVisibility}</span>
          )}
        </div>

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
          onClick={handleContinue}
          className="relative overflow-hidden group bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100] text-white font-black py-3 px-8 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider shadow-md shadow-[#D4A359]/20 hover:scale-[1.02] cursor-pointer"
        >
          <span className="relative z-10">Create Profile</span>
          <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </button>
      </div>
    </div>
  );
}
