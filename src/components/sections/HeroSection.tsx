'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { InteractiveHeroHeadline } from '@/components/animation/InteractiveHeroHeadline';
import { TextScramble } from '@/components/animation/TextScramble';
import { HeroFloatingShowcase } from '@/components/ui/HeroFloatingShowcase';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked parallax depth for headline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 overflow-hidden bg-[#050507]"
    >
      {/* Background Interactive Ambient Canvas, 3D Mesh, & Subtle Cybernetic Grid */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography, Narrative, CTAs, Service Line */}
          <motion.div
            style={{ y: headlineY, opacity: opacityFade }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Studio Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5"
            >
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="text-xs font-mono tracking-[0.2em] text-neutral-300 uppercase">
                  <TextScramble text="APEXGEN / DIGITAL AGENCY" triggerOnHover={true} />
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                <span>EST. 2026 &bull; COLOMBO</span>
              </div>
            </motion.div>

            {/* Interactive Kinetic Hero Headline */}
            <InteractiveHeroHeadline />

            {/* Exact Required Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-neutral-300 font-light max-w-2xl leading-relaxed text-pretty"
            >
              Premium websites and digital experiences designed, engineered and optimized to help ambitious businesses grow.
            </motion.p>

            {/* Small Service Line Required by Prompt */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
              className="mt-4 sm:mt-5 flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-400 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>WEB DESIGN &bull; DEVELOPMENT &bull; DIGITAL EXPERIENCES</span>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
              className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
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
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_0_35px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer"
                >
                  <span className="relative z-10">Start a Project →</span>
                </Link>
              </MagneticButton>

              {/* Secondary CTA */}
              <MagneticButton
                as="div"
                strength={0.2}
                ariaLabel="View Our Work"
                className="w-full sm:w-auto"
              >
                <Link
                  href="/#work"
                  className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/35 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <span>View Our Work</span>
                  <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Quick Metrics Strip */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: 'easeOut' }}
              className="mt-8 sm:mt-10 pt-5 border-t border-white/[0.08] flex items-center space-x-6 sm:space-x-10 text-xs font-mono"
            >
              <div>
                <span className="text-[10px] tracking-widest text-neutral-500 uppercase block">EXECUTION</span>
                <span className="text-white font-medium">100% BESPOKE</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div>
                <span className="text-[10px] tracking-widest text-neutral-500 uppercase block">LOADING SPEED</span>
                <span className="text-cyan-400 font-medium">&lt;0.5s EDGE</span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div>
                <span className="text-[10px] tracking-widest text-neutral-500 uppercase block">CLIENT RATING</span>
                <span className="text-white font-medium">5.0 / 5.0</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Sophisticated Interactive Project Visual */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center mt-8 lg:mt-0">
            <HeroFloatingShowcase />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 uppercase pt-4 sm:pt-6"
      >
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <span className="hidden sm:inline">HIGH-END DIGITAL FLAGSHIPS &bull; BESPOKE CODE</span>
      </motion.div>
    </section>
  );
}
