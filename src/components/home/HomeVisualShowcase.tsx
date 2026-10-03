'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  category: string;
  title: string;
  type: 'LIVE' | 'CONCEPT';
  badge: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl?: string;
  domain?: string;
  caseStudyUrl?: string;
  features: string[];
}

export function HomeVisualShowcase() {
  const [filter, setFilter] = useState<'ALL' | 'HOSPITALITY' | 'SALON' | 'CORPORATE' | 'COMMERCE' | 'SYSTEMS'>('ALL');

  const items: ShowcaseItem[] = [
    {
      id: 'cargo-pizza',
      category: 'HOSPITALITY',
      title: 'Restaurant & Dining Experience',
      type: 'LIVE',
      badge: 'LIVE PRODUCTION FLAGSHIP',
      tagline: 'Cargo Pizza — Wood-Fired Pizzeria',
      description: 'Appetite-inducing visual menu architecture, food photography presentation, and zero-commission WhatsApp checkout.',
      image: '/images/projects/cargo-pizzeria-real.png',
      liveUrl: 'https://cargopizzeria.online/',
      domain: 'cargopizzeria.online',
      caseStudyUrl: '/work/cargo-pizza',
      features: ['Visual Food Menu', 'Direct WhatsApp Cart', 'Mobile Order Routing'],
    },
    {
      id: '69-studio',
      category: 'SALON',
      title: 'Luxury Salon & Grooming',
      type: 'LIVE',
      badge: 'LIVE PRODUCTION FLAGSHIP',
      tagline: '69 Studio — Luxury Grooming Lounge',
      description: 'Monochromatic dark editorial aesthetic with appointment intake and premium VIP service presentation.',
      image: '/images/projects/69-studio-real.png',
      liveUrl: 'https://69studiobysubash.online/',
      domain: '69studiobysubash.online',
      caseStudyUrl: '/work/69-studio',
      features: ['Editorial Service Menu', 'Online Slot Booking', 'Direct WhatsApp Intake'],
    },
    {
      id: 'dinepro-advisors',
      category: 'CORPORATE',
      title: 'Business & Advisory Flagship',
      type: 'LIVE',
      badge: 'LIVE PRODUCTION FLAGSHIP',
      tagline: 'DinePro Advisors — Hospitality Advisory',
      description: 'Corporate authority and high-trust positioning engineered for international hospitality management consultants.',
      image: '/images/projects/dinepro-advisors-real.png',
      liveUrl: 'https://dineproadvisors.online/',
      domain: 'dineproadvisors.online',
      caseStudyUrl: '/work/dinepro-advisors',
      features: ['Corporate Identity', 'Strategic Lead Funnel', 'High-Trust Positioning'],
    },
    {
      id: 'concept-ecommerce',
      category: 'COMMERCE',
      title: 'E-commerce Shopping Experience',
      type: 'CONCEPT',
      badge: 'STUDIO CONCEPT & DESIGN SYSTEM',
      tagline: 'Apex Retail — Modern Store Concept',
      description: 'Minimalist high-contrast product catalog with instant drawer cart, size selectors, and frictionless checkout.',
      image: '/brand/apexgen-brand-kit.png',
      features: ['Instant Drawer Cart', 'Dynamic Product Filter', 'Mobile First UX'],
    },
    {
      id: 'concept-booking',
      category: 'SYSTEMS',
      title: 'Interactive Booking Interface',
      type: 'CONCEPT',
      badge: 'STUDIO CONCEPT & DESIGN SYSTEM',
      tagline: 'Apex Reserve — Time-Slot Scheduling Engine',
      description: 'Fluid calendar UI for time slot reservations, automated confirmations, and zero double-booking architecture.',
      image: '/brand/apexgen-icon.png',
      features: ['Real-Time Calendar', 'Zero Double-Booking', 'WhatsApp Alerts'],
    },
    {
      id: 'concept-dashboard',
      category: 'SYSTEMS',
      title: 'Custom Business Dashboard',
      type: 'CONCEPT',
      badge: 'STUDIO CONCEPT & DESIGN SYSTEM',
      tagline: 'Apex Flow — Operational Lead & Inquiry Dashboard',
      description: 'Clean admin interface for monitoring incoming customer leads, website telemetry, and conversion analytics.',
      image: '/brand/apexgen-brand-kit.png',
      features: ['Telemetry Charts', 'Inquiry Inbox', 'Instant CSV Export'],
    },
  ];

  const filteredItems = filter === 'ALL' ? items : items.filter((it) => it.category === filter);

  return (
    <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[#FF6B35]/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-xs font-mono text-[#FF6B35] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
            <span>DIGITAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-white uppercase font-mono leading-[1.05]">
            PROJECT EXPERIENCES WE BUILD
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            From high-conversion restaurant websites to bespoke booking engines and digital stores. Real production deployments and studio concept prototypes.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="pt-10 flex flex-wrap gap-2.5 sm:gap-3">
        {(['ALL', 'HOSPITALITY', 'SALON', 'CORPORATE', 'COMMERCE', 'SYSTEMS'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === tab
                ? 'bg-[#FF6B35] text-black font-semibold shadow-[0_0_20px_rgba(255,107,53,0.3)]'
                : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Showcase Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-[#0F0F12] border border-white/10 overflow-hidden hover:border-[#FF6B35]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
          >
            {/* Visual Viewport */}
            <div className="relative aspect-[16/10] bg-black overflow-hidden border-b border-white/10">
              <Image
                src={item.image}
                alt={`${item.title} — ApexGen`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold flex items-center space-x-1.5 ${
                    item.type === 'LIVE'
                      ? 'bg-[#27C93F]/20 border border-[#27C93F]/40 text-[#27C93F]'
                      : 'bg-white/10 border border-white/20 text-neutral-300 backdrop-blur-md'
                  }`}
                >
                  {item.type === 'LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />}
                  <span>{item.badge}</span>
                </span>
              </div>

              {/* Domain bar for live */}
              {item.domain && (
                <div className="absolute bottom-4 left-4 right-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-neutral-300 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 truncate">
                    <Lock className="w-3 h-3 text-[#27C93F]" />
                    <span className="truncate">{item.domain}</span>
                  </div>
                  <span className="text-[10px] text-[#27C93F] uppercase tracking-wider">LIVE</span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="p-7 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] block">
                  {item.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-light font-mono text-white uppercase tracking-tight group-hover:text-[#FF6B35] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Features pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.features.map((feat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/10 text-neutral-300 flex items-center space-x-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#FF6B35]" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                {item.caseStudyUrl ? (
                  <Link
                    href={item.caseStudyUrl}
                    className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-[#FF6B35] transition-colors"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B35]" />
                  </Link>
                ) : (
                  <Link
                    href="/start-a-project"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-[#FF6B35] hover:text-white transition-colors"
                  >
                    <span>BUILD THIS CONCEPT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-neutral-300 hover:text-white hover:border-white transition-colors"
                  >
                    VISIT LIVE &rarr;
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
