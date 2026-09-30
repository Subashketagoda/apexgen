'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { InteractiveHeroHeadline } from '@/components/animation/InteractiveHeroHeadline';
import { TextScramble } from '@/components/animation/TextScramble';

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

  return (
    <section
      ref={containerRef}
      className="relative min-h-[76vh] lg:min-h-[82vh] flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden bg-[#050507]"
    >
      {/* Background Interactive Ambient Canvas & Noise */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full mt-2 sm:mt-3 mb-auto">
        <motion.div style={{ y: headlineY, opacity: opacityFade }} className="max-w-5xl">
          {/* Eyebrow with Live Studio Pulse and Scramble Effect */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4"
          >
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/25 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono tracking-[0.2em] text-neutral-300 uppercase">
                <TextScramble text="APEXGEN / DIGITAL STUDIO" triggerOnHover={true} />
              </span>
            </div>
            <div className="hidden sm:inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-sm text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>COLOMBO [IST] &bull; Q4 COMMISSIONS OPEN</span>
            </div>
          </motion.div>

          {/* Interactive 3D Kinetic Hero Headline */}
          <InteractiveHeroHeadline />

          {/* Below Headline: Interactive Disciplines with Hover Scramble */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            className="mt-5 sm:mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase"
          >
            <span className="hover:text-white transition-colors cursor-default">
              <TextScramble text="Web Design" triggerOnHover={true} />
            </span>
            <span className="text-neutral-600 select-none">&times;</span>
            <span className="hover:text-white transition-colors cursor-default">
              <TextScramble text="Development" triggerOnHover={true} />
            </span>
            <span className="text-neutral-600 select-none">&times;</span>
            <span className="hover:text-white transition-colors cursor-default">
              <TextScramble text="Digital Experiences" triggerOnHover={true} />
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: 'easeOut' }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto"
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
                className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02] shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:shadow-[0_0_45px_rgba(255,255,255,0.5)] active:scale-95 cursor-pointer"
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
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/50 hover:scale-[1.02] transition-all duration-300 active:scale-95 cursor-pointer"
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
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-600 uppercase pt-4 sm:pt-6"
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
