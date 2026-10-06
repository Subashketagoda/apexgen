'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  PenTool,
  Monitor,
  Sparkles,
  Compass,
  Layers,
  Box,
  CheckCircle2,
  Cpu,
  Zap,
} from 'lucide-react';

export function HomeCapabilitiesAndTools() {
  const capabilities = [
    {
      icon: PenTool,
      title: 'UI/UX DESIGN',
      description: 'Crafting intuitive, user-centered interfaces that drive engagement and delight.',
    },
    {
      icon: Monitor,
      title: 'WEB DESIGN',
      description: 'Designing responsive, modern websites that communicate brand and purpose.',
    },
    {
      icon: Sparkles,
      title: 'BRANDING',
      description: 'Building visual identities that connect, inspire, and leave a lasting impression.',
    },
    {
      icon: Compass,
      title: 'INTERACTION DESIGN',
      description: 'Creating smooth, meaningful interactions that enhance the user experience.',
    },
    {
      icon: Layers,
      title: 'DESIGN SYSTEMS',
      description: 'Building scalable design systems that ensure consistency and efficiency.',
    },
    {
      icon: Box,
      title: 'PROTOTYPING',
      description: 'Turning ideas into interactive prototypes to validate and accelerate solutions.',
    },
  ];

  const tools = [
    { name: 'Figma', category: 'Interface Design' },
    { name: 'Next.js 16', category: 'Edge Framework' },
    { name: 'React 19', category: 'Component Engine' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'Tailwind CSS', category: 'Design Tokens' },
    { name: 'Framer Motion', category: 'Micro-Physics' },
    { name: 'Spline 3D', category: 'Spatial Shaders' },
    { name: 'Vercel Edge', category: 'Global Delivery' },
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================
            LEFT COLUMN (7 cols): CORE CAPABILITIES
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 rounded-3xl glass-specular p-8 sm:p-10 border border-white/[0.1] shadow-2xl space-y-8"
        >
          {/* Header */}
          <div className="pb-6 border-b border-white/[0.08]">
            <h2 className="text-xs sm:text-sm font-mono tracking-widest text-zinc-300 uppercase font-medium">
              CORE CAPABILITIES
            </h2>
          </div>

          {/* 6 Capabilities in a 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-3 group">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/[0.08] group-hover:border-white/[0.18] transition-colors">
                    <Icon className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xs font-mono font-semibold tracking-wider text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================
            RIGHT COLUMN (5 cols): TWO STACKED CARDS
            ======================================================== */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Top Card: TOOLS & TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl glass-specular p-8 sm:p-9 border border-white/[0.1] shadow-2xl space-y-6"
          >
            <div className="pb-4 border-b border-white/[0.08]">
              <h2 className="text-xs sm:text-sm font-mono tracking-widest text-zinc-300 uppercase font-medium">
                TOOLS & TECHNOLOGIES
              </h2>
            </div>

            {/* Tools Grid (2 columns x 4 rows) */}
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#d4ff00]/40 hover:bg-white/[0.06] transition-colors flex items-center gap-3 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-zinc-300 group-hover:text-[#d4ff00] group-hover:bg-[#d4ff00]/10 transition-colors shrink-0">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-semibold text-white group-hover:text-[#d4ff00] transition-colors truncate">{tool.name}</div>
                    <div className="text-[10px] font-mono text-zinc-400 truncate">{tool.category}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Card: STANDARDS & VERIFIED BENCHMARKS (Matches "Certifications & Education" from Photo) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl glass-specular p-7 sm:p-8 border border-white/[0.1] shadow-2xl space-y-5"
          >
            <div className="pb-3 border-b border-white/[0.08]">
              <h2 className="text-xs font-mono tracking-widest text-zinc-300 uppercase font-medium">
                STANDARDS & BENCHMARKS
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Google Core Web Vitals 99+ Speed</div>
                  <div className="text-[11px] font-mono text-zinc-400">Sub-second edge deployment & 100% SEO indexing</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-8 h-8 rounded-lg bg-white/[0.08] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Bespoke Codebase Asset Ownership</div>
                  <div className="text-[11px] font-mono text-zinc-400">Next.js 16 architecture • Zero WordPress template bloat</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
