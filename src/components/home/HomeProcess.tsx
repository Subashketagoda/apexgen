'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, TrendingUp, Terminal } from 'lucide-react';

export function HomeProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const processStages = [
    {
      code: '01',
      title: 'DISCOVER',
      phase: 'PHASE // STRATEGY & INTEL',
      coordinates: 'SYS_LAT: 06°55\'55"N // SECTOR_01',
      keywords: ['STRATEGY', 'AUDIENCE', 'POSITIONING', 'CONVERSION FUNNEL'],
      description:
        'We deconstruct your business model, competitive landscape, customer psychology, and high-value conversion targets before a single pixel is drawn.',
      icon: Search,
      spec: 'METHOD: QUALITATIVE STAKEHOLDER MAPPING & AUDIENCE TAXONOMY',
    },
    {
      code: '02',
      title: 'DESIGN',
      phase: 'PHASE // ART DIRECTION & ARCHITECTURE',
      coordinates: 'SYS_LAT: 06°55\'56"N // SECTOR_02',
      keywords: ['DESIGN SYSTEM', 'TYPOGRAPHY', '3D VISUALS', 'SPATIAL PROTOTYPES'],
      description:
        'Crafting an authoritative, bespoke digital identity. Sculpting high-contrast visual tension, editorial typography, custom micro-interactions, and 3D centerpieces.',
      icon: PenTool,
      spec: 'DELIVERABLE: 100% BESPOKE FIGMA SYSTEM + INTERACTION DIRECTORY',
    },
    {
      code: '03',
      title: 'BUILD',
      phase: 'PHASE // TURBOPACK EDGE ENGINEERING',
      coordinates: 'SYS_LAT: 06°55\'57"N // SECTOR_03',
      keywords: ['NEXT.JS 16', 'REACT 19', 'TYPESCRIPT', 'THREE.JS / SHADERS'],
      description:
        'Zero bloated CMS plugins. Pure edge-rendered Next.js 16 with rigorous TypeScript typing, sub-second TTFB, and 99+ Core Web Vitals across mobile and desktop.',
      icon: Code2,
      spec: 'STACK: DISTRIBUTED EDGE RUNTIME • 100% CLIENT SOURCE CODE OWNERSHIP',
    },
    {
      code: '04',
      title: 'LAUNCH',
      phase: 'PHASE // PRODUCTION DEPLOYMENT',
      coordinates: 'SYS_LAT: 06°55\'58"N // SECTOR_04',
      keywords: ['SCHEMA.ORG', 'DNS HARDENING', 'GSC VERIFIED', 'ZERO DOWNTIME'],
      description:
        'Flawless production deployment with custom domain routing, SSL/TLS handshake optimization, Google Search Console entity indexing, and automated sitemaps.',
      icon: Rocket,
      spec: 'AUDIT: 100/100 LIGHTHOUSE RUN • FULL SEO ENTITY VALIDATION',
    },
    {
      code: '05',
      title: 'GROW',
      phase: 'PHASE // TELEMETRY & SCALE',
      coordinates: 'SYS_LAT: 06°55\'59"N // SECTOR_05',
      keywords: ['DIRECT WHATSAPP', 'HEATMAPS', 'CONVERSION RATE', 'ENGINEER SUPPORT'],
      description:
        'Continuous telemetry monitoring, direct customer acquisition optimization, conversion testing, and dedicated ongoing technical guardianship.',
      icon: TrendingUp,
      spec: 'RESULT: SUSTAINED DIGITAL AUTHORITY & CONTINUOUS HIGH REVENUE',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="process"
      className="py-32 sm:py-48 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto scroll-mt-24 relative"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-white/[0.08] gap-8 mb-24 sm:mb-32">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-[#8B8B96] uppercase">
            <Terminal className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>04 / DISCIPLINED ENGINEERING PIPELINE</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[7vw] font-black tracking-tight text-[#F5F5F7] uppercase leading-[0.92]">
            OUR <br />
            <span className="text-gradient-silver">PROCESS.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#8B8B96] font-light leading-relaxed">
          Not a marketing template. A battle-tested creative engineering operating system designed for deterministic quality and zero project delays.
        </p>
      </div>

      {/* Futuristic Vertical Timeline with Glowing Tracking Line */}
      <div className="relative pl-6 sm:pl-16 md:pl-24">
        {/* Continuous Background Vertical Line */}
        <div className="absolute left-2 sm:left-6 md:left-8 top-0 bottom-0 w-[1.5px] bg-white/[0.08]" />

        {/* Dynamic Glowing Active Traveling Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-2 sm:left-6 md:left-8 top-0 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#C084FC] shadow-[0_0_14px_rgba(59,130,246,0.65)] origin-top"
        />

        {/* Process Stages */}
        <div className="space-y-20 sm:space-y-32">
          {processStages.map((stage, idx) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.code}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Node Anchor on the vertical line */}
                <div className="absolute -left-[30px] sm:-left-[46px] md:-left-[54px] top-2 w-5 h-5 rounded-full bg-[#050507] border-2 border-white/20 group-hover:border-[#8B5CF6] group-hover:shadow-[0_0_16px_rgba(139,92,246,0.8)] transition-all duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#22D3EE]" />
                </div>

                {/* Stage Content Card: Engineering Aesthetic */}
                <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0B10]/95 border border-white/[0.08] group-hover:border-[#8B5CF6]/35 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-6">
                  {/* Top Technical Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] text-xs font-mono text-zinc-500">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-bold text-[#F5F5F7] group-hover:text-[#3B82F6] transition-colors">
                        {stage.code}
                      </span>
                      <span>//</span>
                      <span className="text-zinc-400 uppercase tracking-widest">{stage.phase}</span>
                    </div>

                    <div className="text-[11px] text-zinc-600 hidden sm:block">
                      {stage.coordinates}
                    </div>
                  </div>

                  {/* Title & Keywords */}
                  <div className="space-y-4">
                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight">
                      {stage.title}
                    </h3>

                    {/* Keywords Tag Grid */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {stage.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-300 uppercase"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-3xl">
                    {stage.description}
                  </p>

                  {/* Engineering Specification Footnote */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center space-x-2 text-[11px] font-mono text-zinc-500">
                    <span className="text-[#3B82F6]">&gt;</span>
                    <span>{stage.spec}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
