'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Lock,
  Clock,
  Send,
  Database,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  previewType: 'image' | 'code' | 'flow' | 'booking' | 'seo';
  previewImage?: string;
  previewDomain?: string;
  previewBadge?: string;
  caseStudyLink?: string;
}

export function HomeServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'Website Design',
      headline: 'Bespoke UI/UX & Brand Digital Flagships',
      description:
        'Custom art direction, editorial typographic hierarchy, and responsive spatial grids that command immediate respect. Designed from a blank canvas in Figma with zero templates.',
      deliverables: [
        'Custom High-Fidelity Figma Prototypes',
        'Editorial Typography & Kerning Systems',
        'Mobile Ergonomic Touch Layouts',
        'Custom Interactive Design Tokens',
      ],
      slug: '/services/web-design',
      icon: Layout,
      tag: 'DESIGN CRAFT',
      previewType: 'image',
      previewImage: '/images/projects/69-studio-real.png',
      previewDomain: '69studiobysubash.online',
      previewBadge: '69 STUDIO — LUXURY ATELIER',
      caseStudyLink: '/work/69-studio',
    },
    {
      number: '02',
      title: 'Website Development',
      headline: 'Next.js & High-Performance Engineering',
      description:
        'Sub-second page loads engineered with Next.js 15, React, TypeScript, and edge CDN infrastructure. Built with clean, maintainable code you own outright with zero monthly theme lock-in.',
      deliverables: [
        'Sub-Second Edge CDN Rendering',
        'TypeScript Production Architecture',
        'Optimal Mobile Layout Ergonomics',
        'Zero Bloated WordPress Themes',
      ],
      slug: '/services/web-development',
      icon: Code2,
      tag: 'CORE ENGINEERING',
      previewType: 'image',
      previewImage: '/images/projects/dinepro-advisors-real.png',
      previewDomain: 'dineproadvisors.online',
      previewBadge: 'DINEPRO ADVISORS — GLOBAL SPEED',
      caseStudyLink: '/work/dinepro-advisors',
    },
    {
      number: '03',
      title: 'E-commerce',
      headline: 'Digital Stores & WhatsApp Checkout',
      description:
        'Online stores and digital shopping experiences designed for maximum conversion. Seamless product catalogues, zero-commission direct WhatsApp ordering, and local/global payment integrations.',
      deliverables: [
        'Visual Food & Product Architecture',
        'Zero-Commission WhatsApp Checkout',
        'Instant Automated Order Notifications',
        'Payment Gateway Readiness',
      ],
      slug: '/services/ecommerce',
      icon: ShoppingBag,
      tag: 'COMMERCIAL COMMERCE',
      previewType: 'image',
      previewImage: '/images/projects/cargo-pizzeria-real.png',
      previewDomain: 'cargopizzeria.online',
      previewBadge: 'CARGO PIZZA — FOOD COMMERCE',
      caseStudyLink: '/work/cargo-pizza',
    },
    {
      number: '04',
      title: 'Booking Systems',
      headline: 'Automated Reservations & Calendars',
      description:
        'Online appointment and reservation systems tailored for salons, restaurants, clinics, and professional services. Eliminates phone tag and double-bookings with automated WhatsApp alerts.',
      deliverables: [
        'Real-Time Slot Availability Engine',
        'Automated WhatsApp Confirmations',
        'Multi-Staff Service Calendars',
        'Zero Double-Booking Architecture',
      ],
      slug: '/services/booking-systems',
      icon: CalendarCheck,
      tag: 'BOOKING AUTOMATION',
      previewType: 'booking',
      previewBadge: 'APEX RESERVE — CALENDAR ENGINE',
    },
    {
      number: '05',
      title: 'SEO Optimization',
      headline: 'Technical Search Engine Authority',
      description:
        'Comprehensive technical SEO from day one. Clean semantic HTML, Google Search Console indexation, Schema.org JSON-LD structured data, and sub-second Core Web Vitals 99+ compliance.',
      deliverables: [
        'Google Core Web Vitals 95+ Compliance',
        'Schema.org JSON-LD Rich Snippets',
        'Automated Dynamic XML Sitemaps',
        'Local Sri Lanka Google SERP Dominance',
      ],
      slug: '/services/seo',
      icon: Search,
      tag: 'ORGANIC VISIBILITY',
      previewType: 'seo',
      previewBadge: 'GOOGLE SEARCH CONSOLE VERIFIED',
    },
    {
      number: '06',
      title: 'Business Automation',
      headline: 'Custom Digital Workflows & Systems',
      description:
        'Connect your website directly to your business operations. Automated WhatsApp dispatch, lead databases, instant email routing, and spreadsheet synchronization without manual effort.',
      deliverables: [
        'Automated Lead Intake & Routing',
        'Direct WhatsApp Business Alerts',
        'Google Sheets & CRM Auto-Sync',
        'Instant Multi-Channel Notification',
      ],
      slug: '/services/automation',
      icon: Workflow,
      tag: 'SYSTEMS WORKFLOW',
      previewType: 'flow',
      previewBadge: 'APEX FLOW — AUTOMATION ENGINE',
    },
  ];

  const current = services[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <section id="services" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#FF6B35]/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-8"
      >
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
      </motion.div>

      {/* Interactive Dossier Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
      >
        {/* Left Column: Numbered Service Selector List (5 Columns) */}
        <div className="lg:col-span-5 space-y-2.5">
          {services.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-[#151518] border-[#FF6B35]/60 shadow-[0_10px_35px_rgba(255,107,53,0.12)]'
                    : 'bg-[#0A0A0D] border-white/5 hover:border-white/20 hover:bg-[#0E0E12]'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#FF6B35] text-black shadow-[0_0_15px_rgba(255,107,53,0.4)]'
                        : 'bg-white/5 text-neutral-400 group-hover:text-white border border-white/5'
                    }`}
                  >
                    {item.number}
                  </div>
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-mono uppercase tracking-tight transition-colors ${
                        isSelected ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mt-0.5">
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
          <div className="p-7 sm:p-10 rounded-3xl bg-[#0F0F13] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] relative overflow-hidden flex flex-col justify-between space-y-8 min-h-[580px]">
            {/* Top Bar: Tag & Icon */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] font-semibold">
                  {current.tag}
                </span>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  DISCIPLINE {current.number} / 06
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <CurrentIcon className="w-6 h-6 text-[#FF6B35]" />
              </div>
            </div>

            {/* Middle: Interactive Visual Showcase Viewport */}
            <div className="rounded-2xl border border-white/10 bg-black overflow-hidden relative shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Visual Header / Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 text-xs">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-neutral-300">
                      <Lock className="w-2.5 h-2.5 text-[#27C93F]" />
                      <span>{current.previewDomain ? `https://${current.previewDomain}` : 'apexgen.systems'}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#FF6B35] uppercase font-semibold">
                      {current.previewBadge}
                    </span>
                  </div>

                  {/* Dynamic Viewport Content based on previewType */}
                  {current.previewType === 'image' && current.previewImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden group/img">
                      <Image
                        src={current.previewImage}
                        alt={`${current.title} — ApexGen Live Showcase`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      {current.caseStudyLink && (
                        <div className="absolute bottom-3 right-3">
                          <Link
                            href={current.caseStudyLink}
                            className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white hover:text-[#FF6B35] transition-colors"
                          >
                            <span>EXPLORE CASE STUDY</span>
                            <ArrowUpRight className="w-3 h-3 text-[#FF6B35]" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}

                  {current.previewType === 'booking' && (
                    <div className="p-6 bg-gradient-to-br from-[#0E0E12] to-black space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center space-x-2">
                          <CalendarCheck className="w-4 h-4 text-[#FF6B35]" />
                          <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                            APPOINTMENT RESERVATION ENGINE
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#27C93F] px-2 py-0.5 rounded bg-[#27C93F]/10 border border-[#27C93F]/30">
                          LIVE ENGINE
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['10:00 AM', '01:30 PM', '04:00 PM'].map((time, i) => (
                          <div
                            key={i}
                            className={`p-2.5 rounded-xl border text-center text-xs font-mono ${
                              i === 1
                                ? 'bg-[#FF6B35]/20 border-[#FF6B35] text-white font-semibold'
                                : 'bg-white/5 border-white/10 text-neutral-400'
                            }`}
                          >
                            <Clock className="w-3 h-3 mx-auto mb-1 text-neutral-400" />
                            <span>{time}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center space-x-2 text-neutral-300">
                          <Send className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>Instant WhatsApp Confirmation Alert</span>
                        </div>
                        <span className="text-[10px] text-neutral-500">SYNCED</span>
                      </div>
                    </div>
                  )}

                  {current.previewType === 'seo' && (
                    <div className="p-6 bg-gradient-to-br from-[#0E0E12] to-black space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center space-x-2">
                          <Search className="w-4 h-4 text-[#FF6B35]" />
                          <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                            GOOGLE SEARCH CONSOLE TELEMETRY
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#27C93F] px-2 py-0.5 rounded bg-[#27C93F]/10 border border-[#27C93F]/30">
                          99/100 CWV
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                        <div className="flex items-center space-x-2 text-[11px] font-mono text-[#27C93F]">
                          <span>https://www.apexgen.website</span>
                          <span className="text-neutral-500">&rsaquo;</span>
                          <span className="text-neutral-400">services</span>
                        </div>
                        <h4 className="text-sm font-sans font-medium text-white">
                          ApexGen — Premium Website Design &amp; Digital Experience Agency Sri Lanka
                        </h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          Colombo digital agency founded by Subhash Ketagoda. High-performance Next.js websites, bespoke UI/UX design, WhatsApp commerce, and booking systems.
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1">
                        <span>SCHEMA: Organization, WebSite, LocalBusiness</span>
                        <span className="text-[#27C93F]">INDEXED &bull; SSL 100%</span>
                      </div>
                    </div>
                  )}

                  {current.previewType === 'flow' && (
                    <div className="p-6 bg-gradient-to-br from-[#0E0E12] to-black space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center space-x-2">
                          <Workflow className="w-4 h-4 text-[#FF6B35]" />
                          <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                            AUTOMATED WORKFLOW PIPELINE
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#27C93F] px-2 py-0.5 rounded bg-[#27C93F]/10 border border-[#27C93F]/30">
                          ACTIVE
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                          <Layers className="w-4 h-4 mx-auto text-[#FF6B35]" />
                          <div className="text-[11px] text-white">Website Lead</div>
                          <div className="text-[9px] text-neutral-500">Trigger: Form</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#FF6B35]/20 border border-[#FF6B35] space-y-1">
                          <Send className="w-4 h-4 mx-auto text-[#FF6B35]" />
                          <div className="text-[11px] text-white font-semibold">WhatsApp Alert</div>
                          <div className="text-[9px] text-neutral-300">Instant &lt; 2s</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                          <Database className="w-4 h-4 mx-auto text-emerald-400" />
                          <div className="text-[11px] text-white">CRM Auto-Sync</div>
                          <div className="text-[9px] text-neutral-500">Google Sheets</div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description & Deliverables */}
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-white uppercase font-mono tracking-tight mb-2">
                  {current.title}
                </h3>
                <p className="text-sm font-mono text-[#FF6B35] uppercase tracking-wider">
                  {current.headline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                {current.description}
              </p>

              {/* Deliverable Highlights */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                  DELIVERABLE HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center space-x-2.5 text-xs font-mono text-neutral-300 hover:border-white/20 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
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
      </motion.div>
    </section>
  );
}
