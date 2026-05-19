"use client";

import React from "react";
import { useRegisterStore } from "@/store/register-store";
import ProgressBar from "./ProgressBar";
import StepProfileType from "./StepProfileType";
import StepLocationCommunity from "./StepLocationCommunity";
import StepPersonalDetails from "./StepPersonalDetails";
import StepEducation from "./StepEducation";
import StepCareerIncome from "./StepCareerIncome";
import StepOtpVerification from "./StepOtpVerification";
import StepSelfieVerification from "./StepSelfieVerification";
import StepAboutMe from "./StepAboutMe";
import StepSuccess from "./StepSuccess";
import { AnimatePresence, motion } from "framer-motion";

export default function RegisterWizard() {
  const { currentStep } = useRegisterStore();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepProfileType />;
      case 1:
        return <StepLocationCommunity />;
      case 2:
        return <StepPersonalDetails />;
      case 3:
        return <StepEducation />;
      case 4:
        return <StepCareerIncome />;
      case 5:
        return <StepOtpVerification />;
      case 6:
        return <StepSelfieVerification />;
      case 7:
        return <StepAboutMe />;
      case 8:
        return <StepSuccess />;
      default:
        return <StepProfileType />;
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white/95 rounded-2xl border border-[#E8D7B0] p-6 md:p-10 shadow-[0_24px_80px_rgba(212,163,89,0.08)] relative overflow-hidden">
      
      {/* Decorative Top Accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#C98A00]" />

      {/* Progress Bar (Hide on success step) */}
      {currentStep < 8 && <ProgressBar currentStep={currentStep} />}

      {/* Dynamic Animated Step Area */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
