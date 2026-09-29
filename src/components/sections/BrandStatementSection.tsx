'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export function BrandStatementSection() {
  const statement = siteConfig.brandStatement;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Big typography background parallax
  const bgTextY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.015, 0.04, 0.015]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 fine-border-b bg-[#050507] overflow-hidden"
    >
      {/* 16 — Big Typography Parallax in Background */}
      {!shouldReduceMotion && (
        <motion.div
          style={{ y: bgTextY, opacity: bgTextOpacity }}
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-mono text-[14vw] font-black uppercase text-white tracking-widest whitespace-nowrap overflow-hidden"
          aria-hidden="true"
        >
          EXPERIENCE
        </motion.div>
      )}

      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="space-y-12">
          {/* Subtle Category Marker */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-500">
              CORE PHILOSOPHY &bull; APEXGEN
            </span>
          </motion.div>

          {/* Master Large Statement with Masked Line Reveals */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-white leading-[1.08] uppercase">
            <span className="block overflow-hidden py-1">
              <motion.span
                className="block"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, filter: 'blur(8px)' }}
                whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                GOOD DESIGN GETS ATTENTION.
              </motion.span>
            </span>

            <span className="block overflow-hidden py-1">
              <motion.span
                className="block font-semibold bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, filter: 'blur(8px)' }}
                whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                GREAT DIGITAL EXPERIENCES
              </motion.span>
            </span>

            <span className="block overflow-hidden py-1">
              <motion.span
                className="block italic font-serif font-light text-neutral-300"
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '110%', opacity: 0, filter: 'blur(8px)' }}
                whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                MOVE PEOPLE.
              </motion.span>
            </span>
          </h2>

          {/* Supporting Narrative */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 text-xs font-mono tracking-widest text-neutral-500 uppercase flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>HOW WE OPERATE</span>
            </div>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="md:col-span-8 text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed text-balance"
            >
              {statement.lead}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
