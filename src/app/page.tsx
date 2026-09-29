'use client';

import React, { useEffect } from 'react';
import { CinematicLoader } from '@/components/ui/CinematicLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/ui/Navbar';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { SelectedWorkSection } from '@/components/sections/SelectedWorkSection';
import { ServicePillarsSection } from '@/components/sections/ServicePillarsSection';
import { InteractiveIndustriesSection } from '@/components/sections/InteractiveIndustriesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { WhyApexGenSection } from '@/components/sections/WhyApexGenSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { InquiryFormSection } from '@/components/sections/InquiryFormSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);
  return (
    <>
      {/* 0-100% Minimalist Cinematic Intro Loader */}
      <CinematicLoader />

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* WhatsApp Quick Action */}
      <WhatsAppButton />

      {/* Main Page Layout */}
      <div className="relative min-h-screen bg-[#050507] text-[#f4f4f6] selection:bg-white selection:text-black">
        <Navbar />

        <main>
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Marquee immediately after hero */}
          <MarqueeSection />

          {/* 3. Selected Work (Cargo Pizzeria, 69 Studio, DinePro Advisors) */}
          <SelectedWorkSection />

          {/* 4. What We Do (Design, Technology, Growth) */}
          <ServicePillarsSection />

          {/* 5. Built for Ambitious Businesses (Industries) */}
          <InteractiveIndustriesSection />

          {/* 6. From Idea to Digital Experience (5-Phase Process Timeline) */}
          <ProcessSection />

          {/* 7. Not Just Another Website Agency (Why ApexGen) */}
          <WhyApexGenSection />

          {/* 8. Pricing (Starter, Business, Premium, Custom Projects) */}
          <PricingSection />

          {/* 9. Huge Cinematic Closing CTA Banner */}
          <CtaBannerSection />

          {/* 10. Project Intake Enquiry Form */}
          <InquiryFormSection />

          {/* 11. We Build With Purpose (About) */}
          <AboutSection />
        </main>

        {/* 12. Studio Footer */}
        <Footer />
      </div>
    </>
  );
}
