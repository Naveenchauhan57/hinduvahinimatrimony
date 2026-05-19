import React from "react";

export default function TrustBar() {
  return (
    <div className="w-full bg-[#1A1A1A]/75 backdrop-blur-md border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4 text-center">
          {/* Trust Metric 1 */}
          <div className="flex items-center gap-3 text-white group">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#E59E0A]/20 border border-[#E59E0A]/40 text-[#E59E0A] group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] font-extrabold tracking-wide text-white">
                #1 Trusted Platform
              </span>
              <span className="text-[11px] font-medium text-white/60 tracking-wider">
                Hindu Matrimony
              </span>
            </div>
          </div>

          {/* Vertical divider on desktop */}
          <div className="hidden md:block w-px h-8 bg-white/10" />

          {/* Trust Metric 2 */}
          <div className="flex items-center gap-3 text-white group">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#E59E0A]/20 border border-[#E59E0A]/40 text-[#E59E0A] group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-5 h-5 fill-current text-[#E59E0A]"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] font-extrabold tracking-wide text-white">
                ⭐ 4.9 Rated
              </span>
              <span className="text-[11px] font-medium text-white/60 tracking-wider">
                By Thousands of Families
              </span>
            </div>
          </div>

          {/* Vertical divider on desktop */}
          <div className="hidden md:block w-px h-8 bg-white/10" />

          {/* Trust Metric 3 */}
          <div className="flex items-center gap-3 text-white group">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#E59E0A]/20 border border-[#E59E0A]/40 text-[#E59E0A] group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] font-extrabold tracking-wide text-white">
                10,000+ Profiles
              </span>
              <span className="text-[11px] font-medium text-white/60 tracking-wider">
                100% Fully Verified
              </span>
            </div>
          </div>

          {/* Vertical divider on desktop */}
          <div className="hidden md:block w-px h-8 bg-white/10" />

          {/* Trust Metric 4 */}
          <div className="flex items-center gap-3 text-white group">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#E59E0A]/20 border border-[#E59E0A]/40 text-[#E59E0A] group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[15px] font-extrabold tracking-wide text-white">
                Global Hindu Community
              </span>
              <span className="text-[11px] font-medium text-white/60 tracking-wider">
                Aligning Cultures & Stars
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
