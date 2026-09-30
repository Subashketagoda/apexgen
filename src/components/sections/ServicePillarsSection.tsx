'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    number: '01',
    title: 'WEB DESIGN',
    tagline: 'Visual Direction & Interface Design',
    description:
      'We craft bespoke visual languages that command immediate respect. Editorial typography, micro-interactions, and responsive design systems that turn visitors into brand advocates.',
    metrics: '99% Bespoke Craft',
    tags: ['Art Direction', 'UI/UX Design', 'Design Systems', 'Micro-Interactions'],
  },
  {
    number: '02',
    title: 'WEB DEVELOPMENT',
    tagline: 'Next.js & Clean Architecture',
    description:
      'Sub-second loading times powered by Next.js, React, TypeScript, and edge runtimes. Clean, scalable code engineered without bloated site builders or third-party dependencies.',
    metrics: '<0.5s Global Edge',
    tags: ['Next.js Architecture', 'TypeScript', 'Fluid 3D Motion', 'Sub-Second Speed'],
  },
  {
    number: '03',
    title: 'E-COMMERCE',
    tagline: 'Frictionless Conversion Engines',
    description:
      'Conversion-optimized digital commerce flagships with direct WhatsApp ordering, seamless checkout flows, and rapid mobile purchasing that maximize transaction volume.',
    metrics: '+140% Conversion Lift',
    tags: ['WhatsApp Commerce', 'Product Discovery', 'Checkout Optimization', 'Mobile First'],
  },
  {
    number: '04',
    title: 'BOOKING SYSTEMS',
    tagline: 'Bespoke Business Workflows',
    description:
      'Tailored reservation engines, appointment scheduling, and client intake workflows designed to eliminate back-and-forth friction and capture high-value appointments.',
    metrics: 'Automated 24/7 Intake',
    tags: ['Reservation Engines', 'Calendar Sync', 'Intake Architecture', 'Instant Confirmation'],
  },
  {
    number: '05',
    title: 'AUTOMATION',
    tagline: 'Digital Operational Workflows',
    description:
      'Eliminate repetitive tasks through custom API webhooks, automated WhatsApp notifications, CRM lead routing, and database synchronization that give your team hours back.',
    metrics: 'Zero Manual Repetition',
    tags: ['API Integrations', 'Lead Dispatch', 'WhatsApp Alerts', 'Operational Efficiency'],
  },
  {
    number: '06',
    title: 'SEO & PERFORMANCE',
    tagline: 'Core Web Vitals & Search Authority',
    description:
      'Technical search engine optimization built into the foundation. Structured JSON-LD schemas, Google Lighthouse 90+ standards, and semantic HTML for market discoverability.',
    metrics: '95+ Lighthouse Score',
    tags: ['Core Web Vitals', 'Schema.org JSON-LD', 'Search Visibility', 'Edge Caching'],
  },
];

export function ServicePillarsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const activeService = services[hoveredIdx];

  return (
    <section
      id="services"
      className="relative min-h-screen py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050505] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>CAPABILITIES &bull; FULL-SPECTRUM ENGINEERING</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-[#F5F5F5]">
              SERVICES
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
              We design, build, and optimize high-end digital flagships for ambitious businesses. Hover to inspect capabilities.
            </p>
          </div>
        </div>

        {/* Full-Screen Interactive List Split */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Service List */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-b border-white/10">
            {services.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              const hasHover = hoveredIdx !== null;

              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => setHoveredIdx(idx)}
                  className={`group relative py-7 sm:py-9 transition-all duration-300 cursor-pointer ${
                    hasHover && !isHovered ? 'opacity-25 blur-[0.5px]' : 'opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline space-x-6 sm:space-x-8">
                      <span
                        className={`font-mono text-sm sm:text-base transition-colors duration-300 ${
                          isHovered ? 'text-cyan-400 font-semibold' : 'text-[#8A8A8A]'
                        }`}
                      >
                        {item.number}
                      </span>

                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-light tracking-tight transition-all duration-300 uppercase ${
                          isHovered ? 'text-white translate-x-2' : 'text-[#8A8A8A]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div className="hidden sm:flex items-center space-x-2">
                      <span
                        className={`text-[11px] font-mono tracking-wider uppercase transition-colors ${
                          isHovered ? 'text-cyan-400' : 'text-transparent'
                        }`}
                      >
                        {item.metrics}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-all duration-300 ${
                          isHovered ? 'text-white translate-x-1 -translate-y-1 opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Spotlight Visual Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl p-7 sm:p-9 bg-[#0B0B0B] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] space-y-6"
              >
                {/* Ambient glow accent */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                    CAPABILITY {activeService.number}
                  </span>
                  <span className="text-xs font-mono text-white/90 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {activeService.metrics}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl sm:text-3xl font-light text-white tracking-tight uppercase">
                    {activeService.title}
                  </h4>
                  <p className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                    {activeService.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
                  {activeService.description}
                </p>

                {/* Tags */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                    DELIVERABLES:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center space-x-2 text-xs font-mono text-white hover:text-cyan-400 uppercase tracking-wider transition-colors group/cta"
                  >
                    <span>INQUIRE FOR {activeService.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
