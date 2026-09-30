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
import { StorytellingSection } from '@/components/sections/StorytellingSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TechnologyTrustSection } from '@/components/sections/TechnologyTrustSection';
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
      {/* 1. Cinematic Loading Experience: APEXGEN, DIGITAL EXPERIENCES, [──────── 100%] */}
      <CinematicLoader />

      {/* 2. Interactive Desktop Custom Cursor (Morphs to VIEW PROJECT →) */}
      <CustomCursor />

      {/* WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Main Page Layout */}
      <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-white selection:text-black">
        {/* 2. Minimal Floating Navigation */}
        <Navbar />

        <main>
          {/* 3 & 4. Hero Section — The Main Experience & Scroll Transition */}
          <HeroSection />

          {/* 7. Subtle Infinite Marquee: DESIGN — DEVELOP — LAUNCH — GROW */}
          <MarqueeSection />

          {/* 5 & 6. Selected Work — Editorial Portfolio & Interactive Previews */}
          <SelectedWorkSection />

          {/* 8. Services — Digital Capabilities (Full-screen interactive list with spotlight) */}
          <ServicePillarsSection />

          {/* 9. "Not Just a Website" Storytelling Presentation */}
          <StorytellingSection />

          {/* 10. Process — Cinematic Horizontal Process (01-05) */}
          <ProcessSection />

          {/* 11 & 12. Technology & Verified Social Proof / Trust */}
          <TechnologyTrustSection />

          {/* 13. Pricing — Premium Expanding Horizontal Proposal Interface */}
          <PricingSection />

          {/* 14. Final CTA — Almost completely black, LET'S BUILD SOMETHING IMPOSSIBLE TO IGNORE. */}
          <CtaBannerSection />

          {/* Direct Lead Intake Form for #contact */}
          <InquiryFormSection />
        </main>

        {/* 15. Minimal Luxury Footer with Massive Watermark */}
        <Footer />
      </div>
    </>
  );
}
