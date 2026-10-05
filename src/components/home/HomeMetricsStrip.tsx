'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, MousePointer, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function HomeMetricsStrip() {
  const [activeTimeframe, setActiveTimeframe] = useState<'30D' | '7D' | 'Realtime'>('30D');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const timeframeData = {
    '30D': { stat: '+142%', label: 'Inquiry Velocity', visits: '48.2k', rate: '8.4%' },
    '7D': { stat: '+88%', label: 'Mobile Conversion', visits: '12.8k', rate: '7.9%' },
    'Realtime': { stat: '+240%', label: 'Instant Chat Velocity', visits: '3.4k', rate: '11.2%' },
  };

  const currentData = timeframeData[activeTimeframe];

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-20" />

      {/* Section Header */}
      <div className="mb-14 sm:mb-20 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>PRODUCTION-PROVEN CAPABILITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
          Bespoke architecture that <br className="hidden sm:block" />
          <span className="text-gradient-silver font-normal">delivers measurable results.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl font-normal leading-relaxed">
          Inspired by the high-density telemetry standards of global digital flagships: sub-second edge performance, instant direct inquiries, and complete client asset ownership.
        </p>
      </div>

      {/* Bento Grid Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        
        {/* ========================================================
            CARD 1 (TOP LEFT, 5 cols): Customer Stats & Timeframe Switcher
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full glass-specular">
            <div>
              {/* Header with Filter Pills */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                    Customer Stats
                  </span>
                </div>

                {/* Filter Switcher Pills */}
                <div className="flex items-center p-0.5 rounded-full bg-black/50 border border-white/[0.08]">
                  {(['30D', '7D', 'Realtime'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTimeframe(t)}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-all cursor-pointer ${
                        activeTimeframe === t
                          ? 'bg-white text-black font-semibold shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Big Telemetry Number */}
              <div className="my-6">
                <div className="text-4xl sm:text-5xl font-light text-white tracking-tight font-mono">
                  {currentData.stat}
                </div>
                <div className="text-xs font-medium text-zinc-300 mt-1.5 flex items-center gap-2">
                  <span>{currentData.label}</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Verified
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Direct inquiry growth across live client flagships compared to generic template websites.
                </p>
              </div>

              {/* Metric Progress Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>Inquiry Retention</span>
                  <span className="text-white font-medium">96.8%</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-zinc-400 to-white rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '96.8%' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom micro-strip */}
            <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>ZERO BOUNCE MOBILE UX</span>
              <span className="text-zinc-300">100% DIRECT FLOW</span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ========================================================
            CARD 2 (TOP RIGHT, 7 cols): Glowing Curved Telemetry Chart
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full glass-specular">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2.5">
                  <Zap className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                    Sub-Second Performance Waveform
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25 font-semibold">
                  Speed Grade 100/100
                </span>
              </div>

              {/* 3 Telemetry Data Nodes */}
              <div className="my-6 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">&lt; 0.4s</div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1">First Contentful Paint</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">0 ms</div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1">Total Blocking Time</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">0.00</div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1">Layout Shift (CLS)</div>
                </div>
              </div>

              {/* Glowing Curved Telemetry Line with Floating Tag */}
              <div className="relative h-28 w-full pt-4">
                <svg viewBox="0 0 500 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                    </linearGradient>
                    <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Gradient Area */}
                  <path
                    d="M 0,80 C 80,75 140,25 240,55 C 340,80 400,15 500,20 L 500,100 L 0,100 Z"
                    fill="url(#chartGlow)"
                  />
                  {/* Glowing Stroke */}
                  <path
                    d="M 0,80 C 80,75 140,25 240,55 C 340,80 400,15 500,20"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glowBlur)"
                  />
                  
                  {/* Glowing Anchor Points */}
                  <circle cx="240" cy="55" r="4.5" fill="#ffffff" stroke="#000" strokeWidth="2" />
                  <circle cx="500" cy="20" r="5.5" fill="#ffffff" stroke="#000" strokeWidth="2" />
                </svg>

                {/* Floating Glass Metric Bubble at Peak */}
                <div className="absolute right-4 -top-1 px-3 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>12.8k views • +120%</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>GLOBAL CDN EDGE DISTRIBUTION</span>
              <span className="text-zinc-300">TURBOPACK 16 READY</span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ========================================================
            CARD 3 (BOTTOM LEFT, 6 cols): Google Search Console with Animated 3D Pointer
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full glass-specular">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                    Search Engine Authority
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">INDEX READY</span>
              </div>

              {/* Interactive Console Card with Cursor Pointer Graphic */}
              <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.09] relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.14] flex items-center justify-center font-bold text-white text-base">
                      G
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Google Search Console</div>
                      <div className="text-[11px] font-mono text-zinc-400">Structured Data & JSON-LD</div>
                    </div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>

                {/* Simulated Sync Button with Glowing 3D Cursor Pointer */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between relative">
                  <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.18] text-xs font-mono text-zinc-200 shadow-inner">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Sync Console Ready</span>

                    {/* Animated 3D Cursor pointer hovering */}
                    <motion.div
                      animate={{
                        x: [0, 4, 0],
                        y: [0, -3, 0],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -bottom-3 -right-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    >
                      <MousePointer className="w-5 h-5 fill-white stroke-black" />
                    </motion.div>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    100% Validated
                  </span>
                </div>
              </div>

              {/* Schema Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                  Schema.org JSON-LD
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                  Automated XML Sitemaps
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                  OpenGraph & Twitter Cards
                </span>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>SEARCH VISIBILITY</span>
              <span className="text-zinc-300">PERFECT RICH SNIPPETS</span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ========================================================
            CARD 4 (BOTTOM RIGHT, 6 cols): THE SIGNATURE 3D ISOMETRIC STACKED CARDS DECK
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between h-full glass-specular overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                    Next-Gen Tech Standards
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">NO WP BLOAT</span>
              </div>

              {/* 3D Isometric Cascading Stacked Cards Deck */}
              <div 
                className="my-6 relative h-[190px] w-full perspective-1000 flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Stack Card 1 (Back, lowest) */}
                <motion.div
                  animate={hoveredCard ? { y: -36, scale: 0.94 } : { y: -18, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute w-[92%] sm:w-[94%] p-3.5 rounded-xl bg-[#08080c] border border-white/[0.08] shadow-2xl flex items-center justify-between"
                  style={{
                    transform: 'rotateX(8deg) rotateY(-4deg)',
                    zIndex: 1,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white/[0.08] flex items-center justify-center text-[10px] font-bold text-zinc-300">
                      N
                    </div>
                    <span className="text-xs font-mono text-zinc-300 font-medium">Bespoke Next.js 16 Turbo</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Sub-second Edge</span>
                </motion.div>

                {/* Stack Card 2 (Middle) */}
                <motion.div
                  animate={hoveredCard ? { y: -6, scale: 0.97 } : { y: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute w-[95%] sm:w-[96%] p-3.5 rounded-xl bg-[#0e0e16] border border-white/[0.12] shadow-2xl flex items-center justify-between"
                  style={{
                    transform: 'rotateX(8deg) rotateY(-4deg)',
                    zIndex: 2,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono text-white font-medium">Zero WordPress Plugins</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">0 Vulnerabilities</span>
                </motion.div>

                {/* Stack Card 3 (Front, prominent) */}
                <motion.div
                  animate={hoveredCard ? { y: 24, scale: 1.02 } : { y: 18, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute w-full p-4 rounded-xl glass-specular border border-white/[0.22] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.06)] flex items-center justify-between"
                  style={{
                    transform: 'rotateX(8deg) rotateY(-4deg)',
                    zIndex: 3,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white text-black font-bold flex items-center justify-center text-xs shadow-md">
                      0%
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Direct WhatsApp Inquiries</div>
                      <div className="text-[10px] font-mono text-zinc-400">Instant Customer Handshake</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white bg-white/[0.1] px-2 py-0.5 rounded-full border border-white/20 font-semibold">
                    Live
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>LIFETIME CODEBASE ASSET</span>
              <span className="text-zinc-300">100% CLIENT OWNERSHIP</span>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
