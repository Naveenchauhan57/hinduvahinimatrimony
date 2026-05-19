import React from "react";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="w-full select-none bg-linear-to-br from-[#050505] via-[#0A0A0F] to-[#111827] border-t border-white/[0.06] relative overflow-hidden">

      {/* Ambient golden glow — top left */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-radial from-[#D4A359]/8 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-radial from-[#F6D27A]/4 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 items-start">

          {/* Column 1: Brand Block */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo Card */}
            <div className="inline-flex bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-fit">
              <Logo />
            </div>

            {/* Description */}
            <p className="text-[15px] leading-8 text-[#A8B2C3] font-medium max-w-[360px]">
              HinduVahini Matrimony is India's premium platform for verified, tradition-aligned matchmaking. We unite advanced AI, rigorous verification, and sacred Vedic compatibility to help families build lifelong bonds.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] hover:text-[#F6D27A] hover:border-[#F6D27A] hover:bg-[#F6D27A]/10 flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] hover:text-[#F6D27A] hover:border-[#F6D27A] hover:bg-[#F6D27A]/10 flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#twitter"
                aria-label="X Twitter"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] hover:text-[#F6D27A] hover:border-[#F6D27A] hover:bg-[#F6D27A]/10 flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Columns Wrapper */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-10">

            {/* Column 2: Need Help? */}
            <div className="flex flex-col gap-5">
              <h5 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6D27A]">
                Need Help?
              </h5>
              <ul className="space-y-3">
                {[
                  { label: "Member Login", href: "#login" },
                  { label: "Sign Up", href: "/register" },
                  { label: "Partner Search", href: "#search" },
                  { label: "Premium Memberships", href: "#premium" },
                  { label: "Customer Support", href: "#support" },
                  { label: "Site Map", href: "#sitemap" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-[#C7CCD7] hover:text-[#F6D27A] transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-5">
              <h5 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6D27A]">
                Company
              </h5>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Careers", href: "#careers" },
                  { label: "Blog", href: "#blog" },
                  { label: "Awards & Recognition", href: "#awards" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-[#C7CCD7] hover:text-[#F6D27A] transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Privacy */}
            <div className="flex flex-col gap-5">
              <h5 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6D27A]">
                Privacy
              </h5>
              <ul className="space-y-3">
                {[
                  { label: "Terms of Use", href: "#terms" },
                  { label: "Privacy Policy", href: "#privacy" },
                  { label: "Safe Tips", href: "#safe" },
                  { label: "Report Misuse", href: "#misuse" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-[#C7CCD7] hover:text-[#F6D27A] transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Mobile Apps */}
            <div className="flex flex-col gap-5">
              <h5 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6D27A]">
                Mobile Apps
              </h5>
              <div className="flex flex-col gap-3">
                {/* App Store */}
                <a
                  href="#app-store"
                  className="flex items-center gap-3 bg-white/[0.04] hover:bg-[#F6D27A]/8 border border-white/10 hover:border-[#F6D27A]/50 hover:shadow-[0_0_20px_rgba(246,210,122,0.08)] text-white py-2.5 px-4 rounded-xl transition-all duration-300 w-full max-w-[170px]"
                >
                  <svg className="w-5 h-5 fill-current text-[#94A3B8] shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.74-1.2 1.88-1.05 2.99 1.12.09 2.26-.58 3-1.43z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider text-[#94A3B8] leading-none">Download on the</span>
                    <span className="text-[12px] font-extrabold text-white leading-none mt-1">App Store</span>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="#play-store"
                  className="flex items-center gap-3 bg-white/[0.04] hover:bg-[#F6D27A]/8 border border-white/10 hover:border-[#F6D27A]/50 hover:shadow-[0_0_20px_rgba(246,210,122,0.08)] text-white py-2.5 px-4 rounded-xl transition-all duration-300 w-full max-w-[170px]"
                >
                  <svg className="w-5 h-5 fill-current text-[#94A3B8] shrink-0" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186A2.22 2.22 0 0 1 3 20.575V3.425c0-.66.216-1.233.609-1.611zm11.236 9.14l2.585-2.585L4.85 1.545a1.86 1.86 0 0 0-1.242-.231l11.237 9.64zm3.87 2.115l-2.822-1.63L13.25 12.01l2.643 2.643 2.822-1.63a1.99 1.99 0 0 0 0-3.386zM4.85 22.455l12.58-7.26-2.585-2.585L3.609 22.25c.348.163.774.24 1.241.205z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider text-[#94A3B8] leading-none">Get it on</span>
                    <span className="text-[12px] font-extrabold text-white leading-none mt-1">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* Bottom Bar */}
      <div className="w-full bg-[#07132B] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#9CA3AF]">
            © 2026 HinduVahini Matrimony. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#9CA3AF]">Passionately created for sacred lifelong bonds.</span>
            <span className="text-red-400 animate-pulse">❤️</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
