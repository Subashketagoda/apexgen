'use client';

import React, { useEffect } from 'react';
import { CinematicLoader } from '@/components/ui/CinematicLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/ui/Navbar';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeMetricsStrip } from '@/components/home/HomeMetricsStrip';
import { HomeIntroduction } from '@/components/home/HomeIntroduction';
import { HomeMarquee3D } from '@/components/home/HomeMarquee3D';
import { HomeFeaturedWork } from '@/components/home/HomeFeaturedWork';
import { HomeServicesSection } from '@/components/home/HomeServicesSection';
import { HomeManifestoStatement } from '@/components/home/HomeManifestoStatement';
import { HomeProcess } from '@/components/home/HomeProcess';
import { HomePricing } from '@/components/home/HomePricing';
import { HomeTechEcosystem } from '@/components/home/HomeTechEcosystem';
import { HomeFaq } from '@/components/home/HomeFaq';
import { HomeProjectCta } from '@/components/home/HomeProjectCta';
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
      {/* 01 — Cinematic Loading Experience (APEXGEN 00 — 100) */}
      <CinematicLoader />

      {/* 02 — Contextual Custom Cursor */}
      <CustomCursor />

      {/* 03 — Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Main Studio Canvas: Cinematic Black Digital Universe */}
      <div className="relative min-h-screen bg-[#050507] text-[#F5F5F7] selection:bg-white selection:text-black">
        {/* Navigation */}
        <Navbar />

        <main>
          {/* Section 1: Hero — Signature 3D Centerpiece Digital Core + Editorial Headline */}
          <HomeHero />

          {/* Section 2: Metrics Strip — Single Sleek Rounded Glass Card */}
          <HomeMetricsStrip />

          {/* Section 3: Introduction — "WE DON'T BUILD WEBSITES. WE BUILD DIGITAL PRESENCE." */}
          <HomeIntroduction />

          {/* Section 4: 3D Marquee — Multi-Layer Infinite Typography System */}
          <HomeMarquee3D />

          {/* Section 5: Selected Work — Asymmetric Editorial Art Gallery */}
          <HomeFeaturedWork />

          {/* Section 6: Services — Enormous Interactive Vertical List (01–06) with 3D Visual Reveal */}
          <HomeServicesSection />

          {/* Section 7: Manifesto — Full-Screen Black Statement ("DESIGN IS NOT DECORATION...") */}
          <HomeManifestoStatement />

          {/* Section 8: Process — Futuristic Vertical Timeline with Glowing Tracking Line */}
          <HomeProcess />

          {/* Section 9: Pricing — Three Large Vertical Luxury Panels */}
          <HomePricing />

          {/* Section 10: Technology Ecosystem — Spatial 3D Floating Arrangement */}
          <HomeTechEcosystem />

          {/* Section 11: FAQ Accordions */}
          <HomeFaq />

          {/* Section 12: Final CTA — "LET'S BUILD WHAT'S NEXT." Full Viewport Portal */}
          <HomeProjectCta />
        </main>

        {/* Monolithic Luxury Footer */}
        <Footer />
      </div>
    </>
  );
}
