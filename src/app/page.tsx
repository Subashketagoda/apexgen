'use client';

import React, { useEffect } from 'react';
import { CinematicLoader } from '@/components/ui/CinematicLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/ui/Navbar';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeMarquee3D } from '@/components/home/HomeMarquee3D';
import { HomeFeaturedWork } from '@/components/home/HomeFeaturedWork';
import { HomeServicesSection } from '@/components/home/HomeServicesSection';
import { HomeManifestoStatement } from '@/components/home/HomeManifestoStatement';
import { HomeProcess } from '@/components/home/HomeProcess';
import { HomePricing } from '@/components/home/HomePricing';
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
      {/* 01: Minimalist Studio Intro Loader */}
      <CinematicLoader />

      {/* 02: Architectural Custom Cursor */}
      <CustomCursor />

      {/* 03: Floating Direct WhatsApp Trigger */}
      <WhatsAppButton />

      {/* Main Architectural Studio Canvas */}
      <div className="relative min-h-screen bg-[#08080a] text-[#f5f5f7] selection:bg-[#d4ff00] selection:text-[#08080a]">
        {/* Navigation Dock */}
        <Navbar />

        <main>
          {/* Section 01: Command Deck Hero */}
          <HomeHero />

          {/* Section 02: Architectural Kinetic Ticker */}
          <HomeMarquee3D />

          {/* Section 03: Selected Work & Production Archive (Cargo Pizza, 69 Studio, DinePro) */}
          <HomeFeaturedWork />

          {/* Section 04: Capabilities & Services Matrix (01–06) */}
          <HomeServicesSection />

          {/* Section 05: Studio Manifesto & Why ApexGen (6 Core Principles) */}
          <HomeManifestoStatement />

          {/* Section 06: Sprint Pipeline (Discover, Design, Build, Launch, Grow) */}
          <HomeProcess />

          {/* Section 07: Investment Tiers (Starter, Business, Premium) */}
          <HomePricing />

          {/* Section 08: Studio Clarity FAQ */}
          <HomeFaq />

          {/* Section 09: Project Intake Terminal & Direct Channels */}
          <HomeProjectCta />
        </main>

        {/* Monolithic Studio Footer */}
        <Footer />
      </div>
    </>
  );
}
