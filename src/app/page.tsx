'use client';

import React, { useEffect } from 'react';
import { CinematicLoader } from '@/components/ui/CinematicLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/ui/Navbar';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeMarquee } from '@/components/home/HomeMarquee';
import { HomeMetricsStrip } from '@/components/home/HomeMetricsStrip';
import { HomeTrustIntro } from '@/components/home/HomeTrustIntro';
import { HomeServicesSection } from '@/components/home/HomeServicesSection';
import { HomeFeaturedWork } from '@/components/home/HomeFeaturedWork';
import { HomeProcess } from '@/components/home/HomeProcess';
import { HomeWhyApexGen } from '@/components/home/HomeWhyApexGen';
import { HomePricing } from '@/components/home/HomePricing';
import { HomeVisualShowcase } from '@/components/home/HomeVisualShowcase';
import { HomeStudioPhilosophy } from '@/components/home/HomeStudioPhilosophy';
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
      {/* 07 — Cinematic Loading Experience (APEXGEN 00 — 100) */}
      <CinematicLoader />

      {/* 27 — Desktop Contextual Custom Cursor */}
      <CustomCursor />

      {/* 23 — Centralized Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Main Studio Canvas */}
      <div className="relative min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-white selection:text-black">
        {/* 03 — Polished Header & Sticky Navigation */}
        <Navbar />

        <main>
          {/* 04 — Hero: WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD. */}
          <HomeHero />

          {/* Continuous Infinite Marquee Strip */}
          <HomeMarquee />

          {/* Agency Proof & Speed Telemetry Strip */}
          <HomeMetricsStrip />

          {/* 05 — Trust & Intro: YOUR BUSINESS DESERVES MORE THAN JUST A WEBSITE. */}
          <HomeTrustIntro />

          {/* 06 — Services: WHAT WE CREATE (6 Structured Modules) */}
          <HomeServicesSection />

          {/* 07 — Selected Work: SELECTED WORK. REAL DIGITAL EXPERIENCES. */}
          <HomeFeaturedWork />

          {/* 08 — How We Work: FROM IDEA TO DIGITAL EXPERIENCE (5 Sprints) */}
          <HomeProcess />

          {/* 09 — Why ApexGen: BUILT WITH PURPOSE. DESIGNED WITH DETAIL. */}
          <HomeWhyApexGen />

          {/* 10 — Pricing: Starter, Business, Premium & Custom Tiers */}
          <HomePricing />

          {/* 11 — Project Experience / Visual Showcase: Live & Studio Concepts */}
          <HomeVisualShowcase />

          {/* 12 — Studio Philosophy & Standards: Founder Craft Manifesto */}
          <HomeStudioPhilosophy />

          {/* 13 — FAQ Section: 8 Comprehensive Accordions */}
          <HomeFaq />

          {/* 14 — Final CTA: HAVE A PROJECT IN MIND? */}
          <HomeProjectCta />
        </main>

        {/* 25 — Monolithic Luxury Footer */}
        <Footer />
      </div>
    </>
  );
}
