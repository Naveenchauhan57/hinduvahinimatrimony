"use client";

import React from "react";
import { useRegisterStore } from "@/store/register-store";
import Link from "next/link";

export default function StepSuccess() {
  const { reset } = useRegisterStore();

  return (
    <div className="flex flex-col items-center text-center gap-6 py-6 select-none">
      
      {/* Spiritual / Celebration Icon Ring */}
      <div className="relative w-24 h-24 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20 flex items-center justify-center text-[#E59E0A] shadow-inner mb-2 animate-bounce">
        <span className="text-4xl">💮</span>
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full bg-[#E59E0A]/20 blur-xl pointer-events-none scale-75" />
      </div>

      {/* Success headings */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
          Your Sacred Profile Has Been Created!
        </h3>
        <p className="text-sm text-slate-500 font-semibold max-w-md mx-auto leading-relaxed">
          May the stars align in your favor. Your registration is complete and is being queued for Astro-compatibility matching.
        </p>
      </div>

      {/* Trust verification and next steps checklist */}
      <div className="bg-[#FFF9EE] border border-[#F2D9A6] rounded-xl p-5 w-full text-left max-w-md mt-2">
        <h5 className="text-xs font-black uppercase tracking-wider text-[#0B132B] mb-3">
          Next Steps to Find Matches
        </h5>
        <ul className="space-y-3">
          {[
            { icon: "✓", text: "Profile goes live within 24 hours after verification." },
            { icon: "✓", text: "Receive 5 complementary hand-picked Vedic matches daily." },
            { icon: "✓", text: "Verify government ID via your dashboard for immediate visibility." },
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[13px] font-semibold text-[#6B7280]">
              <span className="text-[#16A34A] font-black shrink-0">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-4">
        <Link
          href="/"
          onClick={reset}
          className="w-full sm:flex-1 relative overflow-hidden group bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100] text-white font-black py-3.5 px-6 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider shadow-md shadow-[#D4A359]/20 hover:scale-[1.02] text-center"
        >
          <span className="relative z-10">View Dashboard</span>
          <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </Link>
        <Link
          href="/"
          onClick={reset}
          className="w-full sm:flex-1 bg-white border border-[#E8D7B0] hover:border-[#D4A359] hover:bg-[#FCFAF5] text-[#0B132B] font-black py-3.5 px-6 rounded-xl transition-all duration-250 text-sm uppercase tracking-wider text-center"
        >
          Browse Matches
        </Link>
      </div>

    </div>
  );
}
