'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HomeTrustIntro() {
  const words = ['DIGITAL', 'SHOULD', 'NEVER', 'FEEL', 'ORDINARY.'];

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
    <section id="manifesto" className="relative py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden scroll-mt-24">
      {/* Background Volumetric Glow Accent (Electric Blue & Violet) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-sky-500/[0.04] via-indigo-500/[0.03] to-purple-500/[0.04] blur-[150px] pointer-events-none rounded-full" />

      {/* Section Eyebrow */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
          BRAND MANIFESTO
        </span>
      </div>

      {/* Oversized Editorial Manifesto Headline (Exact Requirement) */}
      <div className="max-w-5xl mb-16 sm:mb-20">
        <h2 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
          {words.map((word, idx) => {
            const isHighlight = word === 'ORDINARY.';
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${
                  isHighlight
                    ? 'bg-gradient-to-r from-white via-sky-200 to-indigo-300 bg-clip-text text-transparent'
                    : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        {/* Supporting Message (Exact Requirement) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg sm:text-2xl text-zinc-300 max-w-3xl font-light leading-relaxed"
        >
          We turn ambitious ideas into carefully crafted digital experiences — combining design, technology, and motion to create meaningful results.
        </motion.p>
      </div>

      {/* 3 Core Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-12 border-t border-white/[0.08]">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl glass-specular border border-white/[0.08] hover:border-white/[0.2] transition-all space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="text-sm text-white font-bold">{pillar.num}</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-400/70" />
            </div>

            <h3 className="text-xl font-light text-white tracking-tight uppercase">
              {pillar.title}
            </h3>

            <div className="text-xs font-mono text-sky-400/90 tracking-wide">
              {pillar.tagline}
            </div>

            <p className="text-xs text-zinc-400 font-normal leading-relaxed pt-2">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
