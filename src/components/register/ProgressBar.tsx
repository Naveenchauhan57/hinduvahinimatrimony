"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
}

const stepsLabels = [
  "Profile Type",
  "Community",
  "Personal",
  "Education",
  "Career",
  "Verification",
  "About",
  "Complete",
];

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const progressPercent = Math.min((currentStep / 7) * 100, 100);

  return (
    <div className="w-full mb-8">
      {/* Step Numbers & Labels */}
      <div className="hidden md:flex justify-between items-center mb-4">
        {stepsLabels.map((label, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <div key={idx} className="flex flex-col items-center flex-1 relative">
              {/* Connector line (except first step) */}
              {idx > 0 && (
                <div
                  className={`absolute top-4 left-[-50%] right-[50%] h-[2px] -translate-y-1/2 z-0 transition-colors duration-500
                    ${isCompleted ? "bg-[#D4A359]" : "bg-[#E8D7B0]/40"}`}
                />
              )}

              {/* Number circle */}
              <div
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                  ${isActive
                    ? "bg-gradient-to-r from-[#E0A100] to-[#D4A359] text-white ring-4 ring-[#E0A100]/20 scale-110 shadow-md"
                    : isCompleted
                      ? "bg-[#D4A359] text-white"
                      : "bg-[#FCFAF5] border-2 border-[#E8D7B0] text-[#5C6478]"
                  }`}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  idx + 1
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-[11px] font-black uppercase tracking-wider transition-colors duration-300
                  ${isActive ? "text-[#E0A100]" : isCompleted ? "text-[#D4A359]" : "text-[#94A3B8]"}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile progress tracker */}
      <div className="md:hidden flex justify-between items-center mb-2 px-1">
        <span className="text-xs font-black uppercase tracking-wider text-[#E0A100]">
          Step {currentStep + 1} of 8: {stepsLabels[currentStep] || "Complete"}
        </span>
        <span className="text-xs font-bold text-[#94A3B8]">
          {Math.round(progressPercent)}%
        </span>
      </div>

      {/* Visual progress bar */}
      <div className="w-full h-1.5 bg-[#E8D7B0]/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
