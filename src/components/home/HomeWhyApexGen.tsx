'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Smartphone,
  Search,
  Target,
  Code2,
} from 'lucide-react';

export function HomeWhyApexGen() {
  const pillars = [
    {
      title: 'Premium Design',
      icon: Sparkles,
      desc: 'Bespoke Figma art direction, custom kerning, spatial elegance, and distinct visual personality. No generic templates.',
      metric: '100% Bespoke Craft',
    },
    {
      title: 'Performance',
      icon: Zap,
      desc: 'Sub-second edge rendering, zero asset bloat, optimized web fonts, and 99+ Google Core Web Vitals compliance.',
      metric: '< 0.4s Edge Speed',
    },
    {
      title: 'Responsive Development',
      icon: Smartphone,
      desc: 'Engineered from mobile-up. Thumb-friendly navigation, tactile micro-gestures, and seamless responsiveness on all screens.',
      metric: 'Pixel-Perfect Fluidity',
    },
    {
      title: 'SEO Ready',
      icon: Search,
      desc: 'Schema.org JSON-LD entities, semantic HTML5 hierarchy, dynamic sitemaps, and pre-configured Google Search Console discovery.',
      metric: 'Instant Google Indexing',
    },
    {
      title: 'Conversion Focused',
      icon: Target,
      desc: 'Zero-friction inquiry funnels, instant WhatsApp checkout triggers, and strategic psychology that turns traffic into revenue.',
      metric: '0% Commission Channels',
    },
    {
      title: 'Modern Technology',
      icon: Code2,
      desc: 'Engineered with Next.js 16, React 19, TypeScript, and Tailwind CSS. Clean, maintainable source code with full client ownership.',
      metric: 'Lifetime Code Ownership',
    },
  ];

  return (
    <section className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-20" />

      {/* Section Header */}
      <div className="mb-16 sm:mb-24 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>STUDIO DIFFERENTIATION</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.04em] text-white uppercase leading-[0.98]">
          More than <br />
          <span className="text-gradient-silver font-normal">a website.</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          We don’t treat your website like a passive digital brochure. We build high-performance digital infrastructure designed to establish market authority, captivate high-caliber clients, and scale your business.
        </p>
      </div>

      {/* 6 Small Interactive Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl studio-card hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                    STANDARD 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-white tracking-tight uppercase group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">BENCHMARK</span>
                <span className="text-white font-medium">{item.metric}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
