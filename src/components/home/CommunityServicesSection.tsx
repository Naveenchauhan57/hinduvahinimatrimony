import React from "react";

const columns = [
  {
    heading: "North India",
    links: [
      "Brahmin Shaadi",
      "Rajput Shaadi",
      "Agarwal Shaadi",
      "Kayastha Shaadi",
      "Punjabi Shaadi",
      "Marwari Shaadi",
    ],
  },
  {
    heading: "West India",
    links: [
      "Gujarati Shaadi",
      "Marathi Shaadi",
      "Jain Shaadi",
      "Sindhi Shaadi",
      "Kutchi Shaadi",
    ],
  },
  {
    heading: "South India",
    links: [
      "Tamil Shaadi",
      "Telugu Shaadi",
      "Kannada Shaadi",
      "Malayalee Shaadi",
      "Nair Shaadi",
      "Reddy Shaadi",
    ],
  },
  {
    heading: "Special Services",
    links: [
      "NRI Shaadi",
      "Elite Shaadi",
      "Second Marriage",
      "Divorcee Matrimony",
      "More Communities",
    ],
    isSpecial: true,
  },
];

export default function CommunityServicesSection() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#FFFCF5] to-[#FFFFFF] py-16 border-t border-[#F2E7D3]/60 overflow-hidden select-none">
      {/* Ambient golden glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial from-[#E0A100]/6 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#E59E0A]/10 border border-[#E59E0A]/20">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C98A00] leading-none">
              Sacred Branches
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B132B] tracking-tight leading-[1.05] mb-3">
            Community Matrimony Services
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#E0A100] to-[#D4A359] rounded-full mb-4" />
          <p className="text-base md:text-xl text-slate-500 font-semibold max-w-3xl leading-relaxed">
            Discover specialized matrimonial services across India's most respected communities and traditions.
          </p>
        </div>

        {/* Main Premium Card */}
        <div className="relative w-full bg-white/95 rounded-2xl border border-[#E8D7B0] shadow-[0_24px_80px_rgba(212,163,89,0.08)] p-8 md:p-10 overflow-hidden">

          {/* Thin top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-[#E0A100] via-[#D4A359] to-[#C98A00] rounded-t-2xl" />

          {/* Top-right badge */}
          <div className="absolute top-5 right-5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider text-white bg-linear-to-r from-[#E0A100] to-[#D4A359] shadow-[0_4px_15px_rgba(212,163,89,0.35)]">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              35+ Communities
            </span>
          </div>

          {/* 4-Column Community Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-2">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">

                {/* Column Region Heading */}
                <div className="flex items-center gap-3 pb-3 border-b border-[#F0E4C5]">
                  <div className="w-1 h-4 rounded-full bg-linear-to-b from-[#E0A100] to-[#D4A359] shrink-0" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A359]">
                    {col.heading}
                  </h4>
                </div>

                {/* Links */}
                <ul className="space-y-3">
                  {col.links.map((link) => {
                    const isMore = link === "More Communities";
                    return (
                      <li key={link}>
                        <a
                          href={`#service-${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`text-[14px] font-medium transition-all duration-200 flex items-center gap-1.5 group
                            ${isMore
                              ? "text-[#C58900] font-bold hover:text-[#E0A100]"
                              : "text-[#475569] hover:text-[#C58900]"
                            }`}
                        >
                          <svg
                            className="w-3 h-3 shrink-0 stroke-current opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="group-hover:underline underline-offset-4 decoration-[#D4A359]/50">
                            {link}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom footer row */}
          <div className="mt-8 pt-5 border-t border-[#F0E4C5]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[12.5px] text-slate-400 font-semibold">
              All communities are verified and actively moderated.
            </p>
            <a
              href="/register"
              className="text-[12.5px] font-black text-[#C58900] hover:text-[#E0A100] uppercase tracking-widest transition-colors duration-200 flex items-center gap-1.5 group"
            >
              Create Free Profile
              <svg
                className="w-3.5 h-3.5 stroke-current group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
