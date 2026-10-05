'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ChromeStar } from '@/components/ui/ChromeStar';

export function HomeTrustIntro() {
  const statementWords = [
    'WE',
    "DON'T",
    'JUST',
    'BUILD',
    'WEBSITES.',
    'WE',
    'BUILD',
    'DIGITAL',
    'EXPERIENCES',
    'PEOPLE',
    'REMEMBER.',
  ];

  const pillars = [
    {
      num: '01',
      title: 'Bespoke Architectural Craft',
      tagline: 'Zero generic templates or shortcuts',
      description:
        'Every line of code and visual interaction is custom-engineered from the ground up to reflect the unrivaled caliber and distinct character of your brand.',
    },
    {
      num: '02',
      title: 'Next-Gen Speed & Stability',
      tagline: 'Sub-second edge execution',
      description:
        'Powered by Next.js 16 and globally distributed edge infrastructure, delivering instantaneous page transitions, 99+ Core Web Vitals, and seamless mobile ergonomics.',
    },
    {
      num: '03',
      title: 'Commercial Conversion Engine',
      tagline: 'Engineered to generate high-value briefs',
      description:
        'A website must generate inquiries, orders, and contracts. We integrate frictionless WhatsApp checkout flows, automated booking funnels, and corporate-grade SEO.',
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute right-0 top-12 opacity-30 pointer-events-none hidden lg:block">
        <ChromeStar size={120} delay={0.4} />
      </div>

      {/* Section Eyebrow */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
          STUDIO MANIFESTO & PHILOSOPHY
        </span>
      </div>

      {/* Huge Oversized Editorial Typography with Word-by-Word Scroll Reveal */}
      <div className="max-w-5xl mb-24 sm:mb-32">
        <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-[-0.035em] text-white uppercase leading-[1.08] flex flex-wrap gap-x-4 gap-y-2">
          {statementWords.map((word, idx) => {
            const isHighlight = word === 'DIGITAL' || word === 'EXPERIENCES' || word === 'REMEMBER.';
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${
                  isHighlight ? 'text-white font-medium text-gradient-silver' : 'text-zinc-400'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 max-w-2xl text-base sm:text-xl text-zinc-400 leading-relaxed font-normal"
        >
          Most agency websites look and feel like identical templates. At ApexGen, we engineer bespoke digital environments that command immediate market authority, outpace competitors, and convert casual visitors into lifetime clients.
        </motion.p>
      </div>

      {/* 3 Core Editorial Cards with Refined Charcoal Aesthetics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="p-8 sm:p-10 rounded-2xl studio-card hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-8 group relative overflow-hidden"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-white/[0.03] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <span className="text-xs font-mono text-zinc-500 tracking-widest font-semibold group-hover:text-white transition-colors">
                  {pillar.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  STANDARD
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono tracking-wide text-zinc-500">
                  {pillar.tagline}
                </p>
              </div>

              <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <span>EXPLORE CAPABILITY</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
