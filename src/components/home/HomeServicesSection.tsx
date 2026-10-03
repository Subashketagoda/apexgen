'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Layout,
  Code2,
  ShoppingBag,
  CalendarCheck,
  Search,
  Workflow,
  Sparkles,
} from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export function HomeServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'Website Design',
      headline: 'Bespoke UI/UX & Brand Digital Flagships',
      description:
        'Premium UI/UX and business-focused website experiences. Custom art direction, typographic hierarchy, and responsive spatial grids that command immediate respect.',
      deliverables: ['Custom Figma Prototypes', 'Editorial Typography Systems', 'Mobile Touch Ergonomics', 'Interactive Design Tokens'],
      slug: '/services/web-design',
      icon: Layout,
      tag: 'DESIGN CRAFT',
    },
    {
      number: '02',
      title: 'Website Development',
      headline: 'Next.js & High-Performance Engineering',
      description:
        'Responsive, fast, modern websites built for real businesses. Sub-second page loads engineered with Next.js, React, TypeScript, and edge CDN infrastructure.',
      deliverables: ['Sub-Second Edge Rendering', 'TypeScript Architecture', 'Mobile Ergonomic Layouts', 'Zero WordPress Bloat'],
      slug: '/services/web-development',
      icon: Code2,
      tag: 'CORE ENGINEERING',
    },
    {
      number: '03',
      title: 'E-commerce',
      headline: 'Digital Stores & Frictionless Checkout',
      description:
        'Online stores and digital shopping experiences designed for maximum conversion. Seamless product catalogues, direct WhatsApp ordering, and secure payment integrations.',
      deliverables: ['Visual Menu & Catalog Architecture', 'Zero-Commission WhatsApp Checkout', 'Instant Order Notifications', 'Payment Gateway Integration'],
      slug: '/services/ecommerce',
      icon: ShoppingBag,
      tag: 'COMMERCIAL COMMERCE',
    },
    {
      number: '04',
      title: 'Booking Systems',
      headline: 'Automated Reservations & Calendars',
      description:
        'Online appointment and reservation systems tailored for salons, restaurants, clinics, and professional services. Eliminates manual scheduling friction.',
      deliverables: ['Real-Time Availability Engine', 'Automated WhatsApp Confirmations', 'Multi-Staff Scheduling', 'Zero Double-Booking Guarantee'],
      slug: '/services/booking-systems',
      icon: CalendarCheck,
      tag: 'BOOKING AUTOMATION',
    },
    {
      number: '05',
      title: 'SEO Optimization',
      headline: 'Technical Search Engine Authority',
      description:
        'Technical SEO and search visibility improvements. Clean semantic HTML, Google Search Console indexing, Schema.org structured data, and sub-second Core Web Vitals.',
      deliverables: ['Google Core Web Vitals 95+', 'Schema.org JSON-LD Structured Data', 'Dynamic XML Sitemaps & Robots', 'Local Sri Lanka SERP Targeting'],
      slug: '/services/seo',
      icon: Search,
      tag: 'ORGANIC VISIBILITY',
    },
    {
      number: '06',
      title: 'Business Automation',
      headline: 'Custom Digital Workflows & Systems',
      description:
        'Custom digital workflows and business systems. Connect your website directly to WhatsApp, automated email dispatch, lead databases, and operational pipelines.',
      deliverables: ['Automated Lead Routing', 'WhatsApp Business API Integration', 'Instant Customer Notification', 'CRM & Spreadsheet Sync'],
      slug: '/services/automation',
      icon: Workflow,
      tag: 'SYSTEMS WORKFLOW',
    },
  ];

  const current = services[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <section id="services" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF6B35] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
            <span>DISCIPLINES &bull; CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            WHAT WE CREATE
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            A comprehensive suite of digital design, software development, and growth capabilities structured to solve real business challenges.
          </p>
        </div>
      </div>

      {/* Editor.lk Inspired Interactive Module Dossier */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Numbered Service Selector List (5 Columns) */}
        <div className="lg:col-span-5 space-y-2">
          {services.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-[#151515] border-[#FF6B35]/50 shadow-[0_10px_30px_rgba(255,107,53,0.1)]'
                    : 'bg-[#0A0A0C] border-white/5 hover:border-white/15 hover:bg-[#0E0E10]'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isSelected ? 'text-[#FF6B35]' : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-mono uppercase tracking-tight transition-colors ${
                        isSelected ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-[#FF6B35] text-black'
                      : 'bg-white/5 text-neutral-500 group-hover:text-white group-hover:bg-white/10'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Visual Composition & Expanded Dossier (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0F0F12] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between h-full space-y-8">
            {/* Top Accent Watermark */}
            <div className="absolute top-6 right-8 text-8xl sm:text-9xl font-mono font-bold text-white/[0.03] select-none pointer-events-none">
              {current.number}
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35]">
                  {current.tag}
                </span>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <CurrentIcon className="w-6 h-6 text-[#FF6B35]" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white uppercase font-mono tracking-tight mb-3">
                  {current.title}
                </h3>
                <p className="text-sm font-mono text-[#FF6B35] uppercase tracking-wider">
                  {current.headline}
                </p>
              </div>

              <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
                {current.description}
              </p>

              {/* Deliverable Highlights */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                  DELIVERED CAPABILITIES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center space-x-2.5 text-xs font-mono text-neutral-300"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action: Explore Full Service */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <Link
                href={current.slug}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#FF6B35] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FFA86B] transition-all shadow-[0_0_25px_rgba(255,107,53,0.3)]"
              >
                <span>EXPLORE {current.title.toUpperCase()}</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </Link>

              <Link
                href="/services"
                className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
              >
                VIEW ALL 6 DISCIPLINES &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
