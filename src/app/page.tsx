'use client';

import React, { useEffect } from 'react';
import { CinematicLoader } from '@/components/ui/CinematicLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/ui/Navbar';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeFeaturedWork } from '@/components/home/HomeFeaturedWork';
import { HomeCapabilitiesPhilosophy } from '@/components/home/HomeCapabilitiesPhilosophy';
import { HomeServicesShowcase } from '@/components/home/HomeServicesShowcase';
import { HomeProcess } from '@/components/home/HomeProcess';
import { HomePricing } from '@/components/home/HomePricing';
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

      {/* 27 — Desktop Contextual Custom Cursor (VIEW, OPEN, DRAG, EXPLORE) */}
      <CustomCursor />

      {/* 23 — Centralized Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Main Studio Canvas */}
      <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-white selection:text-black">
        {/* 08 — Premium Minimal / Sticky Navigation */}
        <Navbar />

        <main>
          {/* 09, 10 — Hero: Dominant Typography + Real Floating Showcase + Mouse Parallax */}
          <HomeHero />

          {/* 11, 12 — Selected Work: Flagship Case Studies (Cargo Pizza, 69 Studio, DinePro) */}
          <HomeFeaturedWork />

          {/* Studio Capabilities & Philosophy */}
          <HomeCapabilitiesPhilosophy />

          {/* 17 — Services: DESIGN • BUILD • GROW Interactive Dossier */}
          <HomeServicesShowcase />

          {/* 20 — Process: 5-Stage Sprint Cadence (01-05) */}
          <HomeProcess />

          {/* 21 — Pricing: Starter (49.9k), Business (89.9k), Premium (149.9k) & Custom */}
          <HomePricing />

          {/* Project Commission Call-To-Action */}
          <HomeProjectCta />
        </main>

        {/* 25 — Monolithic Luxury Footer */}
        <Footer />
      </div>
    </>
  );
}
