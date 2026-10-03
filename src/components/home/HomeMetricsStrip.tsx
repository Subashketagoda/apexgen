'use client';

import React from 'react';
import { Zap, Gauge, Code2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomeMetricsStrip() {
  const metrics = [
    {
      value: '< 1.2s',
      label: 'AVERAGE EDGE LOAD SPEED',
      subtext: 'Engineered on Next.js 15 & global edge CDN',
      icon: Zap,
    },
    {
      value: '99/100',
      label: 'GOOGLE LIGHTHOUSE SCORE',
      subtext: 'Optimal Core Web Vitals & technical SEO',
      icon: Gauge,
    },
    {
      value: '100%',
      label: 'BESPOKE FIGMA CRAFT',
      subtext: 'Tailored from a blank canvas for each brand',
      icon: Code2,
    },
    {
      value: '0%',
      label: 'THEME / PLUGIN LOCK-IN',
      subtext: 'Full source code ownership & lifetime control',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative border-b border-white/10 bg-[#08080A] py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0F0F12]/80 border border-white/10 hover:border-[#FF6B35]/50 transition-colors relative group overflow-hidden cursor-default shadow-lg"
            >
              {/* Subtle top amber highlight bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-white tracking-tight group-hover:text-[#FF6B35] transition-colors">
                  {item.value}
                </span>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FF6B35]/40 group-hover:bg-[#FF6B35]/10 transition-colors">
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:text-[#FF6B35] transition-colors" />
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-mono font-semibold text-neutral-300 tracking-wider uppercase">
                  {item.label}
                </h4>
                <p className="text-[11px] font-sans text-neutral-500 leading-normal">
                  {item.subtext}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
