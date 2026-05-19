"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRegisterStore } from "@/store/register-store";

export default function StepOtpVerification() {
  const { phone, setField, nextStep, prevStep } = useRegisterStore();

  const [localPhone, setLocalPhone] = useState(phone);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpVal, setOtpVal] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState("");

  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Count down timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, timer]);

  const sendOtp = () => {
    if (!localPhone.match(/^\+?[1-9]\d{9,12}$/)) {
      setError("Please enter a valid mobile number (10-12 digits, optional country code)");
      return;
    }
    setError("");
    setField("phone", localPhone);
    setIsOtpSent(true);
    setTimer(30);
    setCanResend(false);
  };

  const handleOtpChange = (val: string, index: number) => {
    if (!/^\d*$/.test(val)) return; // Only digits allowed

    const newOtp = [...otpVal];
    // Keep only the last character entered
    newOtp[index] = val.slice(-1);
    setOtpVal(newOtp);

    // Auto-focus next input
    if (val && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otpVal[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const fullOtp = otpVal.join("");
    if (fullOtp.length < 6) {
      setError("Please enter all 6 digits of the OTP code");
      return;
    }
    // Simulate successful OTP check
    setError("");
    setField("otpVerified", true);
    nextStep();
  };

  const editNumber = () => {
    setIsOtpSent(false);
    setOtpVal(Array(6).fill(""));
    setError("");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Title Block */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mb-2">
          Verify Mobile Number
        </h3>
        <p className="text-sm text-slate-500 font-semibold">
          Enter your mobile number to secure your profile and receive compatibility updates.
        </p>
      </div>

      {!isOtpSent ? (
        /* Step A: Phone Number Input */
        <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
              Mobile Number
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="e.g. +91 9876543210"
                value={localPhone}
                onChange={(e) => setLocalPhone(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-xl border bg-[#FCFAF5]/50 text-sm font-semibold text-[#0B132B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-200
                  ${error ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
              />
              <button
                type="button"
                onClick={sendOtp}
                className="bg-[#D4A359] hover:bg-[#C58900] text-white font-black px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors duration-250 cursor-pointer"
              >
                Send OTP
              </button>
            </div>
            {error && <span className="text-xs font-bold text-red-500">{error}</span>}
          </div>
        </div>
      ) : (
        /* Step B: 6-digit OTP Box */
        <div className="flex flex-col gap-5 max-w-md mx-auto md:mx-0 w-full">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-400">Verification code sent to</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-[#0B132B]">{phone}</span>
              <button
                type="button"
                onClick={editNumber}
                className="text-xs font-bold text-[#C58900] hover:text-[#E0A100] underline"
              >
                Edit Number
              </button>
            </div>
          </div>

          {/* OTP inputs container */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#0B132B]">
              Enter 6-Digit OTP Code
            </label>
            <div className="flex gap-2.5 justify-between">
              {otpVal.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  pattern="\d*"
                  maxLength={1}
                  value={digit}
                  ref={(el) => {
                    if (el) inputRefs.current[idx] = el;
                  }}
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-12 h-12 text-center text-lg font-black rounded-xl border bg-[#FCFAF5]/50 text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#D4A359]/30 transition-all duration-150
                    ${error ? "border-red-500 bg-red-50/20" : "border-[#E8D7B0] focus:border-[#D4A359]"}`}
                />
              ))}
            </div>
            {error && <span className="text-xs font-bold text-red-500 mt-1">{error}</span>}
          </div>

          {/* Timer and Resend triggers */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            {canResend ? (
              <button
                type="button"
                onClick={sendOtp}
                className="text-[#C58900] font-black hover:text-[#E0A100] hover:underline"
              >
                Resend Verification Code
              </button>
            ) : (
              <span>Resend OTP code in {timer}s</span>
            )}
          </div>
        </div>
      )}

      {/* Action triggers */}
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
          onClick={handleVerify}
          disabled={!isOtpSent}
          className={`relative overflow-hidden group font-black py-3 px-8 rounded-xl transition-all duration-300 text-sm uppercase tracking-wider
            ${isOtpSent
              ? "bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#E0A100] text-white shadow-md shadow-[#D4A359]/20 hover:scale-[1.02] cursor-pointer"
              : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
            }`}
        >
          <span className="relative z-10">Verify &amp; Continue</span>
          {isOtpSent && (
            <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          )}
        </button>
      </div>
    </div>
  );
}
