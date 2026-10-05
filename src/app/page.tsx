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
      <div className="relative min-h-screen bg-[#040406] text-[#F5F5F7] selection:bg-white selection:text-black">
        {/* Navigation */}
        <Navbar />

        <main>
          {/* Hero Section */}
          <HomeHero />

          {/* Monochromatic Tech Marquee Strip */}
          <HomeMarquee />

          {/* Statement & Intro: WE DON'T JUST BUILD WEBSITES. */}
          <HomeTrustIntro />

          {/* Selected Work: Cargo Pizza, 69 Studio, DinePro Advisors */}
          <HomeFeaturedWork />

          {/* Services: 6 Structured Disciplines */}
          <HomeServicesSection />

          {/* Premium UI Cards: Core Web Vitals, Google Search, Conversion */}
          <HomeMetricsStrip />

          {/* Process: 01-05 Product Workflow */}
          <HomeProcess />

          {/* Why ApexGen: MORE THAN A WEBSITE */}
          <HomeWhyApexGen />

          {/* Pricing: Starter, Business, Premium SaaS Cards */}
          <HomePricing />

          {/* Studio Philosophy: Founder Craft Manifesto */}
          <HomeStudioPhilosophy />

          {/* FAQ Section: Clean Dark Accordions */}
          <HomeFaq />

          {/* Final CTA: LET'S BUILD SOMETHING EXCEPTIONAL */}
          <HomeProjectCta />
        </main>

        {/* Monolithic Luxury Footer with Large APEXGEN Wordmark */}
        <Footer />
      </div>
    </>
  );
}
