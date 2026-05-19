import React from "react";

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 group focus:outline-none select-none">
      {/* Brand Icon: Premium Sacred Mandala/Flame */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-br from-[#E59E0A] via-[#F59E0B] to-[#C98A00] shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.03]">
        {/* Sacred Modernized Matrimonial SVG Graphic */}
        <svg
          className="w-6 h-6 text-[#FFFCF5] transform group-hover:rotate-12 transition-transform duration-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Layered traditional flame & union paths */}
          <path
            d="M12 2C12 2 17.5 7.5 17.5 11.5C17.5 15.5 14.5 18.5 12 21.5C9.5 18.5 6.5 15.5 6.5 11.5C6.5 7.5 12 2 12 2Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M12 6.5C12 6.5 15 10 15 12C15 14 13.5 15.5 12 17C10.5 15.5 9 14 9 12C9 10 12 6.5 12 6.5Z"
            fill="currentColor"
          />
          <circle cx="12" cy="12" r="1.5" className="fill-current text-[#FFFCF5]" />
        </svg>
        {/* Glow border ring */}
        <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-[#E59E0A] to-[#F2D9A6] opacity-0 group-hover:opacity-40 blur-xs transition-opacity duration-300" />
      </div>

      {/* Typography with brand colors and hierarchy */}
      <div className="flex flex-col">
        <span className="text-lg font-black tracking-wider text-[#1A1A1A] group-hover:text-[#E59E0A] transition-colors duration-300 font-sans leading-none uppercase">
          HINDUVAHINI
        </span>
        <span className="text-[9px] font-extrabold tracking-[0.28em] text-[#C98A00] mt-1.5 group-hover:text-[#F59E0B] transition-colors duration-300 leading-none uppercase">
          MATRIMONY
        </span>
      </div>
    </a>
  );
}
