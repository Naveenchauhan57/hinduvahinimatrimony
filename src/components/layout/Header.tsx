"use client";

import React, { useState } from "react";
import Logo from "../ui/Logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full h-20 border-b border-[#F2D9A6]/40 backdrop-blur-md shadow-xs transition-all duration-300 select-none"
      style={{ backgroundColor: "#FFFCF5" }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="shrink-0 flex items-center">
          <Logo />
        </div>

        {/* Right Section: Navigation Links & Action Controls (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-semibold text-[#5F5A54] hover:text-[#1A1A1A] transition-colors duration-300 relative group py-1"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E59E0A] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
            <a
              href="#help"
              className="text-sm font-semibold text-[#5F5A54] hover:text-[#1A1A1A] transition-colors duration-300 relative group py-1"
            >
              Help
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E59E0A] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#login"
              className="text-sm font-bold text-[#1A1A1A] hover:text-[#E59E0A] border border-[#F2D9A6] hover:border-[#E59E0A] py-2 px-5 rounded-full transition-all duration-300 bg-white"
            >
              Login
            </a>

            <a
              href="#register"
              className="relative overflow-hidden group bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] text-white font-bold py-2.5 px-6 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm"
            >
              <span className="relative z-10">Register Free</span>
              <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </a>
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2.5 rounded-xl text-[#5F5A54] hover:text-[#1A1A1A] hover:bg-[#F2D9A6]/20 focus:outline-none transition-all"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-20 left-0 w-full border-b border-[#F2D9A6]/50 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200"
          style={{ backgroundColor: "#FFFCF5" }}
        >
          <div className="px-4 pt-3 pb-6 space-y-4 flex flex-col">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-base font-semibold text-[#5F5A54] hover:text-[#1A1A1A] hover:bg-[#F2D9A6]/10 transition-all"
            >
              About Us
            </a>
            <a
              href="#help"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-base font-semibold text-[#5F5A54] hover:text-[#1A1A1A] hover:bg-[#F2D9A6]/10 transition-all"
            >
              Help
            </a>

            <div className="h-px bg-[#F2D9A6]/30 my-2" />

            <div className="flex flex-col gap-3 px-3">
              <a
                href="#login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-base font-bold text-[#1A1A1A] hover:text-[#E59E0A] border border-[#F2D9A6] rounded-full bg-white transition-all"
              >
                Login
              </a>

              <a
                href="#register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-linear-to-r from-[#E59E0A] via-[#F59E0B] to-[#C98A00] text-white font-bold rounded-full shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Register Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
