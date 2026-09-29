'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { MagneticButton } from '@/components/animation/MagneticButton';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked parallax depth for headline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const headlineLines = [
    'WE BUILD',
    'DIGITAL EXPERIENCES',
    'THAT MOVE BUSINESSES',
    'FORWARD.',
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[96vh] flex flex-col justify-between pt-36 sm:pt-44 pb-12 overflow-hidden bg-[#050507]"
    >
      {/* Background Interactive Ambient Canvas & Noise */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full my-auto">
        <motion.div style={{ y: headlineY, opacity: opacityFade }} className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center space-x-3 mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-mono tracking-[0.2em] text-neutral-300 uppercase">
                APEXGEN / DIGITAL STUDIO
              </span>
            </div>
          </motion.div>

          {/* Huge Staggered Line-by-Line Headline */}
          <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-6xl md:text-8xl lg:text-[6.5rem] font-light tracking-[-0.04em] leading-[0.98] sm:leading-[0.96] text-white uppercase text-balance">
            {headlineLines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-0.5">
                <motion.span
                  className="block will-change-transform"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { y: '105%', opacity: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { y: '0%', opacity: 1 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line === 'DIGITAL EXPERIENCES' ? (
                    <span className="text-shimmer font-normal">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Below Headline: Disciplines */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base font-mono tracking-widest text-neutral-400 uppercase"
          >
            <span>Web Design</span>
            <span className="text-neutral-600">&times;</span>
            <span>Development</span>
            <span className="text-neutral-600">&times;</span>
            <span>Digital Experiences</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: 'easeOut' }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <MagneticButton
              as="div"
              strength={0.25}
              ariaLabel="Start a project with ApexGen"
              className="w-full sm:w-auto"
            >
              <Link
                href="/#contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                  START A PROJECT
                </span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>

            {/* Secondary CTA */}
            <MagneticButton
              as="div"
              strength={0.2}
              ariaLabel="View ApexGen work"
              className="w-full sm:w-auto"
            >
              <Link
                href="/#work"
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>VIEW OUR WORK</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-600 uppercase pt-8"
      >
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <span className="hidden sm:inline">HIGH-END DIGITAL EXPERIENCES</span>
      </motion.div>
    </section>
  );
}
