"use client";

import React, { useState } from "react";
import { useRegisterStore } from "@/store/register-store";

const heightOptions = [
  "4'5\" (134 cm)", "4'6\" (137 cm)", "4'7\" (139 cm)", "4'8\" (142 cm)", "4'9\" (144 cm)",
  "4'10\" (147 cm)", "4'11\" (149 cm)", "5'0\" (152 cm)", "5'1\" (154 cm)", "5'2\" (157 cm)",
  "5'3\" (160 cm)", "5'4\" (162 cm)", "5'5\" (165 cm)", "5'6\" (167 cm)", "5'7\" (170 cm)",
  "5'8\" (172 cm)", "5'9\" (175 cm)", "5'10\" (177 cm)", "5'11\" (180 cm)", "6'0\" (182 cm)",
  "6'1\" (185 cm)", "6'2\" (187 cm)", "6'3\" (190 cm)", "6'4\" (193 cm)", "6'5\" (195 cm)",
];

const dietOptions = ["Vegetarian", "Vegan", "Eggetarian", "Non-Vegetarian", "Jain Diet"];
const manglikOptions = ["No", "Yes", "Anshik Manglik", "Don't Know"];
const habitOptions = ["No", "Yes", "Occasionally"];

export default function StepPersonalDetails() {
  const {
    maritalStatus,
    height,
    diet,
    manglik,
    smoking,
    drinking,
    setField,
    nextStep,
    prevStep,
  } = useRegisterStore();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!maritalStatus) newErrors.maritalStatus = "Marital Status is required";
    if (!height) newErrors.height = "Height is required";
    if (!diet) newErrors.diet = "Diet choice is required";
    if (!manglik) newErrors.manglik = "Manglik status is required";
    if (!smoking) newErrors.smoking = "Smoking choice is required";
    if (!drinking) newErrors.drinking = "Drinking choice is required";
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
          Personal Details
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Please share some personal details and preferences.
        </p>
      </div>

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Marital Status */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Marital Status
          </label>
          <select
            value={maritalStatus}
            onChange={(e) => setField("maritalStatus", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.maritalStatus ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Marital Status</option>
            <option value="Never Married" className="text-[#0B132B]">Never Married</option>
            <option value="Divorced" className="text-[#0B132B]">Divorced</option>
            <option value="Widowed" className="text-[#0B132B]">Widowed</option>
            <option value="Awaiting Divorce" className="text-[#0B132B]">Awaiting Divorce</option>
          </select>
          {errors.maritalStatus && (
            <span className="text-xs font-bold text-red-500">{errors.maritalStatus}</span>
          )}
        </div>

        {/* Height */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Height
          </label>
          <select
            value={height}
            onChange={(e) => setField("height", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.height ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Height</option>
            {heightOptions.map((h) => (
              <option key={h} value={h} className="text-[#0B132B]">{h}</option>
            ))}
          </select>
          {errors.height && (
            <span className="text-xs font-bold text-red-500">{errors.height}</span>
          )}
        </div>

        {/* Diet */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Dietary Preferences
          </label>
          <select
            value={diet}
            onChange={(e) => setField("diet", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.diet ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Diet</option>
            {dietOptions.map((d) => (
              <option key={d} value={d} className="text-[#0B132B]">{d}</option>
            ))}
          </select>
          {errors.diet && (
            <span className="text-xs font-bold text-red-500">{errors.diet}</span>
          )}
        </div>

        {/* Manglik Status */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Manglik Status
          </label>
          <select
            value={manglik}
            onChange={(e) => setField("manglik", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.manglik ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Manglik Status</option>
            {manglikOptions.map((m) => (
              <option key={m} value={m} className="text-[#0B132B]">{m}</option>
            ))}
          </select>
          {errors.manglik && (
            <span className="text-xs font-bold text-red-500">{errors.manglik}</span>
          )}
        </div>

        {/* Smoking */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Smoke Habit
          </label>
          <select
            value={smoking}
            onChange={(e) => setField("smoking", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.smoking ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Smoking habit</option>
            {habitOptions.map((opt) => (
              <option key={opt} value={opt} className="text-[#0B132B]">{opt}</option>
            ))}
          </select>
          {errors.smoking && (
            <span className="text-xs font-bold text-red-500">{errors.smoking}</span>
          )}
        </div>

        {/* Drinking */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
            Drink Habit
          </label>
          <select
            value={drinking}
            onChange={(e) => setField("drinking", e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
              ${errors.drinking ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
          >
            <option value="" className="text-slate-400">Select Drinking habit</option>
            {habitOptions.map((opt) => (
              <option key={opt} value={opt} className="text-[#0B132B]">{opt}</option>
            ))}
          </select>
          {errors.drinking && (
            <span className="text-xs font-bold text-red-500">{errors.drinking}</span>
          )}
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
