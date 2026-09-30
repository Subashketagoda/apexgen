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
import { ProcessSection } from '@/components/sections/ProcessSection';
import { WhyApexGenSection } from '@/components/sections/WhyApexGenSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { InquiryFormSection } from '@/components/sections/InquiryFormSection';
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
      {/* Minimalist Cinematic Intro Loader */}
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

          {/* Subtle Ticker Divider */}
          <MarqueeSection />

          {/* 2. Selected Work (Cargo Pizza, 69 Studio, DinePro Advisers) */}
          <SelectedWorkSection />

          {/* 3. Services (6 Core Services) */}
          <ServicePillarsSection />

          {/* 4. Process (5 Scroll-Animated Stages) */}
          <ProcessSection />

          {/* 5. Why ApexGen (Editorial Split Layout) */}
          <WhyApexGenSection />

          {/* 6. Pricing (Starter, Business, Premium) */}
          <PricingSection />

          {/* 7. Dramatic Full-Width CTA Banner */}
          <CtaBannerSection />

          {/* 8. Project Intake Form (Conversion Flow #contact) */}
          <InquiryFormSection />
        </main>

        {/* 9. Minimal Premium Footer */}
        <Footer />
      </div>
    </>
  );
}
