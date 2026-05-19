import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import FounderMessageSection from "@/components/home/FounderMessageSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import FAQSection from "@/components/home/FAQSection";
import ExploreProfilesSection from "@/components/home/ExploreProfilesSection";
import CommunityServicesSection from "@/components/home/CommunityServicesSection";
import WhyHinduVahiniSection from "@/components/home/WhyHinduVahiniSection";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HinduVahini Matrimony | Sacred Connections for a Lifetime",
  description:
    "Find your life partner through verified Hindu profiles, Vedic compatibility, and trusted family values. #1 Trusted Hindu Matrimony Platform.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFCF5] font-sans antialiased overflow-x-hidden">
      {/* 1. Header (Sticky navigation bar) */}
      <Header />

      {/* Main content wrapper containing other sections */}
      <main className="grow">
        {/* 2. Hero Section (including centered headlines, CTA, background couple image, and bottom trust bar) */}
        <HeroSection />

        {/* 3. Experience Section (3 premium feature cards & VIP matchmaking banner) */}
        <ExperienceSection />

        {/* 4. Founder Message Section (vision, values, and trust statement) */}
        <FounderMessageSection />

        {/* 5. Success Stories Section (verified matrimony success matches) */}
        <SuccessStoriesSection />

        {/* 6. FAQ Section (interactive Astro & security questions accordion) */}
        <FAQSection />

        {/* 7. Explore Profiles Section (interactive community/region explore cards) */}
        <ExploreProfilesSection />

        {/* 8. Community Services Section (Brahmin, Rajput, Agarwal Shaadi links card) */}
        <CommunityServicesSection />

        {/* 9. Why HinduVahini Section (Rich brand introduction text card) */}
        <WhyHinduVahiniSection />
      </main>

      {/* 10. Footer (Need Help, Company, Security, Services, Social columns and Copyright bottom bar) */}
      <Footer />
    </div>
  );
}
