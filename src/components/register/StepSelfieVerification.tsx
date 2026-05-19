"use client";

import React, { useState } from "react";
import { useRegisterStore } from "@/store/register-store";

export default function StepSelfieVerification() {
  const { setField, nextStep, prevStep } = useRegisterStore();
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
      setField("selfieUploaded", true);
      setField("selfieSkipped", false);
    }
  };

  const handleContinue = () => {
    // Navigate forward
    nextStep();
  };

  const handleSkip = () => {
    setField("selfieUploaded", false);
    setField("selfieSkipped", true);
    nextStep();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title block */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mb-2">
          Verify Your Identity
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Upload a clear selfie to receive the trusted Blue Tick badge and boost compatibility responses.
        </p>
      </div>

      {/* Selfie drop zone / display mockup */}
      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#E8D7B0] bg-[#FCFAF5]/50 rounded-2xl max-w-md mx-auto w-full relative">
        {previewUrl ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Selfie Preview" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-bold text-slate-400 truncate max-w-[200px]">
              {fileName}
            </span>
            <label className="text-xs font-black text-[#C58900] hover:text-[#E0A100] cursor-pointer hover:underline">
              Choose different file
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <label className="flex flex-col items-center gap-3 cursor-pointer group w-full py-4">
            <div className="w-14 h-14 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20 flex items-center justify-center text-[#E59E0A] group-hover:scale-105 transition-transform duration-250">
              <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </div>
            <div className="text-center">
              <span className="text-sm font-black text-[#0B132B] group-hover:text-[#E0A100] transition-colors duration-200">
                Upload Selfie Photo
              </span>
              <p className="text-xs font-semibold text-slate-400 mt-1">
                Supports JPG, PNG (Max 5MB)
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* Trust benefits box */}
      <div className="bg-[#FCFAF5] border border-[#E8D7B0] rounded-xl p-5">
        <h5 className="text-xs font-black uppercase tracking-wider text-[#0B132B] mb-3">
          Verification Privileges
        </h5>
        <ul className="space-y-2.5">
          {[
            { icon: "🛡️", title: "Higher Trust Score", desc: "Families prefer contacting verified profiles." },
            { icon: "🚀", title: "Better Response Rates", desc: "Up to 3x more match compatibility replies." },
            { icon: "🔵", title: "Blue Tick Badge", desc: "A symbol of authenticity across the database." },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="text-lg leading-none select-none">{item.icon}</span>
              <div>
                <h6 className="text-[13px] font-bold text-[#0B132B] leading-none mb-0.5">
                  {item.title}
                </h6>
                <p className="text-xs text-slate-400 font-semibold">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
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

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleSkip}
            className="px-6 py-3 rounded-xl border border-slate-200 hover:border-[#D4A359] text-xs font-black uppercase tracking-wider text-slate-400 hover:text-[#0B132B] transition-all duration-250 cursor-pointer"
          >
            Skip for Now
          </button>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!previewUrl}
            className={`relative overflow-hidden group font-black py-3 px-8 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider
              ${previewUrl
                ? "bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100] text-white shadow-md shadow-[#D4A359]/20 hover:scale-[1.02] cursor-pointer"
                : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
              }`}
          >
            <span className="relative z-10">Continue</span>
            {previewUrl && (
              <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
