'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code2, ShoppingBag, Calendar, Zap, TrendingUp, ArrowUpRight, MessageSquare, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { formatWhatsAppUrl } from '@/lib/utils';

export function HomeServicesSection() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const services = [
    {
      number: '01',
      title: 'WEB DESIGN',
      subtitle: 'Visual Direction & Interface Architecture',
      description: 'Bespoke UI/UX designed around brand prestige, user psychology, and conversion journeys. Zero off-the-shelf templates.',
      icon: Layout,
      tags: ['Bespoke UI/UX', 'Art Direction', 'Design Systems', 'Micro-Interactions'],
      deliverables: [
        'Custom Figma visual architecture',
        'Mobile-first touch interfaces',
        'Kinetic micro-animations & state feedback',
        'Comprehensive brand design systems',
      ],
      idealFor: 'Brands wanting a distinctive, unforgettable digital identity.',
    },
    {
      number: '02',
      title: 'WEB DEVELOPMENT',
      subtitle: 'Next.js Turbopack & Sub-Second Engineering',
      description: 'Fast, responsive, and resilient web platforms engineered with Next.js, React, TypeScript, and edge runtime deployment.',
      icon: Code2,
      tags: ['Next.js App Router', 'Clean TypeScript', 'Sub-Second Speed', 'Scalable Code'],
      deliverables: [
        'Production Next.js codebase with Turbopack',
        'Global Edge CDN deployment via Vercel',
        '100% responsive cross-device fidelity',
        'Clean, modular, maintainable TypeScript',
      ],
      idealFor: 'Businesses requiring bulletproof speed, security, and scalability.',
    },
    {
      number: '03',
      title: 'E-COMMERCE',
      subtitle: 'Frictionless Commerce & WhatsApp Funnels',
      description: 'Conversion-focused digital storefronts optimized for rapid product discovery, local payment gateways, and direct WhatsApp checkout.',
      icon: ShoppingBag,
      tags: ['Frictionless Checkout', 'WhatsApp Commerce', 'Product Discovery', 'High Conversion'],
      deliverables: [
        'Streamlined visual product catalogs',
        '1-click direct WhatsApp ordering',
        'Payment gateway integration ready',
        'Mobile cart & checkout optimization',
      ],
      idealFor: 'Retailers, boutique brands, and restaurants selling directly.',
    },
    {
      number: '04',
      title: 'BOOKING & SYSTEMS',
      subtitle: 'Custom Reservation & Business Workflows',
      description: 'Tailored reservation engines and intake workflows that replace tedious back-and-forth messaging with seamless client scheduling.',
      icon: Calendar,
      tags: ['Reservation Engines', 'Client Intake Forms', 'Custom Workflows', 'Scheduling Sync'],
      deliverables: [
        'Real-time date/time reservation picker',
        'Automated intake questionnaire forms',
        'Instant confirmation & calendar sync',
        'Admin dashboard & lead notifications',
      ],
      idealFor: 'Consultants, dining flagships, clinics, and professional practices.',
    },
    {
      number: '05',
      title: 'AUTOMATION',
      subtitle: 'Operational Efficiency & API Integrations',
      description: 'Connected digital workflows that automatically route customer inquiries, send notifications, and eliminate manual repetitive tasks.',
      icon: Zap,
      tags: ['API Integrations', 'Lead Routing', 'Automated Notifications', 'Efficiency'],
      deliverables: [
        'Custom webhook & API connections',
        'Automated WhatsApp/Email lead alerts',
        'Google Sheets / CRM data synchronization',
        'Operational task reduction',
      ],
      idealFor: 'Growing teams wanting to scale customer response times without extra staff.',
    },
    {
      number: '06',
      title: 'SEO & PERFORMANCE',
      subtitle: 'Technical Optimization & Core Web Vitals',
      description: 'Rigorous engineering for search discoverability, Google Rich Results schema, and sub-second Core Web Vitals scores.',
      icon: TrendingUp,
      tags: ['Core Web Vitals 95+', 'Schema.org JSON-LD', 'Search Visibility', 'Edge Caching'],
      deliverables: [
        'Schema.org structured data (Organization, LocalBusiness)',
        'Automated XML sitemaps & dynamic OpenGraph cards',
        'Lighthouse performance 90+ score guarantee',
        'Search engine indexing optimization',
      ],
      idealFor: 'Businesses wanting organic visibility and top-tier Google rankings.',
    },
  ];

  const currentService = services[selectedServiceIndex];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#08080a] border-b border-white/[0.08] overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#d4ff00] uppercase flex items-center gap-2">
              <span>[ 02 // CAPABILITIES MATRIX ]</span>
            </div>
            <h2 className="text-section-title text-white">
              WHAT WE BUILD
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-md">
            Comprehensive digital capabilities engineered to make businesses look superior, communicate clearly, and convert daily visitors into revenue.
          </p>
        </div>

        {/* Dual Column Capabilities Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 6 Interactive Service Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((item, idx) => {
              const isSelected = selectedServiceIndex === idx;
              const Icon = item.icon;

              return (
                <button
                  key={item.number}
                  onClick={() => setSelectedServiceIndex(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#12131a] border-[#d4ff00] shadow-[0_0_24px_rgba(212,255,0,0.12)]'
                      : 'bg-[#0e0f14]/80 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#12131a]/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isSelected ? 'text-[#d4ff00]' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h3
                        className={`text-base sm:text-lg font-black tracking-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 hidden sm:block">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-lg border transition-colors ${
                      isSelected
                        ? 'bg-[#d4ff00] text-[#08080a] border-[#d4ff00]'
                        : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Architectural Detail Terminal (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0e0f14] border border-white/[0.12] rounded-2xl p-6 sm:p-10 space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
              >
                {/* Decorative technical stamp */}
                <div className="absolute top-6 right-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase hidden sm:block">
                  SPEC // APX-{currentService.number}
                </div>

                {/* Head */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#d4ff00]">
                    <span>SERVICE {currentService.number}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{currentService.subtitle}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {currentService.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    KEY DELIVERABLES
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentService.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-300"
                      >
                        <Check className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Ideal For */}
                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-2">
                    {currentService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#12131a] border border-white/[0.1] text-[11px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-zinc-400">
                    <span className="text-zinc-500 font-mono">IDEAL FOR: </span>
                    {currentService.idealFor}
                  </div>
                </div>

                {/* Direct Action Trigger */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={formatWhatsAppUrl(
                      siteConfig.contact.whatsappNumber,
                      `Hello ApexGen, I would like to inquire about your ${currentService.title} service.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-volt py-3.5 px-6 text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>INQUIRE ABOUT {currentService.title}</span>
                  </a>

                  <a
                    href="#contact"
                    className="btn-architectural py-3.5 px-6 text-xs flex items-center justify-center gap-2"
                  >
                    <span>START A PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
