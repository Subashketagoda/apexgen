'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2 } from 'lucide-react';

export function HomeMetricsStrip() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-20" />

      {/* Section Header */}
      <div className="mb-14 sm:mb-20 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>REAL APEXGEN CAPABILITY METRICS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
          Precision engineering that <br className="hidden sm:block" />
          <span className="text-gradient-silver font-normal">delivers measurable impact.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl font-normal">
          We build with production-grade Next.js, zero WordPress bloat, verified Google Search Console indexing, and frictionless direct-conversion channels.
        </p>
      </div>

      {/* Bento Grid inspired directly by the reference image's card architecture */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Card 1: Live Core Web Vitals & Real-Time Performance Waveform (MD 7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 p-6 sm:p-8 rounded-3xl studio-card hover:border-white/[0.18] transition-all flex flex-col justify-between relative group overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                Core Web Vitals Audit
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
              Grade 100/100
            </span>
          </div>

          {/* Telemetry Display */}
          <div className="my-6 grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl sm:text-4xl font-light text-white tracking-tight">&lt; 0.4s</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-1">First Contentful Paint</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-light text-white tracking-tight">0 ms</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-1">Total Blocking Time</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-light text-white tracking-tight">0.00</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-1">Cumulative Layout Shift</div>
            </div>
          </div>

          {/* SVG Smooth Telemetry Chart Curve */}
          <div className="relative h-24 w-full pt-2">
            <svg viewBox="0 0 400 90" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,75 C 60,65 100,20 180,45 C 240,65 300,10 400,15 L 400,90 L 0,90 Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M 0,75 C 60,65 100,20 180,45 C 240,65 300,10 400,15"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="180" cy="45" r="4" fill="#ffffff" stroke="#000" strokeWidth="2" />
              <circle cx="400" cy="15" r="5" fill="#ffffff" stroke="#000" strokeWidth="2" />
            </svg>
            <div className="absolute right-0 top-0 px-2 py-0.5 rounded bg-white text-black font-mono text-[10px] font-semibold">
              99.8% Speed Index
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>AUDIT TARGET: GOOGLE SPEED RANKING</span>
            <span className="text-zinc-300">EDGE CDN VERIFIED</span>
          </div>
        </motion.div>

        {/* Card 2: Google Search Console & Schema Integration (MD 5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 p-6 sm:p-8 rounded-3xl studio-card hover:border-white/[0.18] transition-all flex flex-col justify-between relative group overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                Search Authority
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">INDEX READY</span>
          </div>

          {/* Interactive Google Console Pill from Reference Image */}
          <div className="my-6 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center font-bold text-white text-sm">
                  G
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Google Search Console</div>
                  <div className="text-[11px] font-mono text-zinc-400">Rich Snippets & Structured Data</div>
                </div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            {/* Click/Cursor Indicator */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-400">Schema.org JSON-LD</span>
              <span className="text-emerald-400 font-semibold">100% Validated</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>METADATA & ROBOTS</span>
            <span className="text-zinc-300">AUTO-GENERATED SITEMAP</span>
          </div>
        </motion.div>

        {/* Card 3: Direct WhatsApp Inquiries & 0% Platform Commission (MD 5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 p-6 sm:p-8 rounded-3xl studio-card hover:border-white/[0.18] transition-all flex flex-col justify-between relative group overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
              Commercial Conversion
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              DIRECT CHANNEL
            </span>
          </div>

          <div className="my-6">
            <div className="text-4xl sm:text-5xl font-light text-white tracking-tight">0%</div>
            <div className="text-sm font-medium text-zinc-200 mt-1">Platform Commission</div>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              No aggregator cuts, no third-party lock-in. Orders and client inquiries route straight into WhatsApp or booking calendars.
            </p>
          </div>

          {/* Floating Pill Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
              Direct Inquiries
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
              One-Thumb Mobile UX
            </span>
          </div>

          <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>CLIENT OWNERSHIP</span>
            <span className="text-zinc-300">100% DIRECT CHATS</span>
          </div>
        </motion.div>

        {/* Card 4: Modern Next.js 16 Stack & Clean Source Code (MD 7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 p-6 sm:p-8 rounded-3xl studio-card hover:border-white/[0.18] transition-all flex flex-col justify-between relative group overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                Next-Gen Tech Standards
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">NO WP BLOAT</span>
          </div>

          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">100% Custom</div>
              <div className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Handcrafted in Next.js 16, TypeScript & Tailwind CSS. Clean, maintainable, modular codebase with lifetime source ownership.
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">3+ Live Flagships</div>
              <div className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Production-verified client flagships operating with zero downtime and sub-second edge response times.
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>SOURCE CODE ASSET</span>
            <span className="text-zinc-300">LIFETIME CLIENT OWNERSHIP</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
