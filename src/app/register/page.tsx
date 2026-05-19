import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegisterWizard from "@/components/register/RegisterWizard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join HinduVahini Matrimony | Premium Matrimony Registration",
  description: "Begin your journey to a sacred lifetime union. Register securely and explore verified profiles.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF5] font-sans antialiased overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Container */}
      <main className="grow flex flex-col items-center justify-center py-12 px-6 relative">
        {/* Subtle background mandala linework for spiritual elegance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none z-0 text-[#E59E0A] select-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1, 1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <path
                  key={i}
                  d="M 50 15 C 47 30, 53 30, 50 50 C 47 30, 53 30, 50 15"
                  transform={`rotate(${angle} 50 50)`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
        </div>

        {/* Dynamic Wizard Box */}
        <div className="relative z-10 w-full flex justify-center">
          <RegisterWizard />
        </div>
      </main>

      {/* Elegant Footer */}
      <Footer />
    </div>
  );
}
