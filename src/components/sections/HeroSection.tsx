'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { InteractiveHeroHeadline } from '@/components/animation/InteractiveHeroHeadline';
import { TextScramble } from '@/components/animation/TextScramble';
import { Hero3DModeSwitcher } from '@/components/ui/Hero3DModeSwitcher';
import { HeroFloatingShowcase } from '@/components/ui/HeroFloatingShowcase';
import { HeroTrustBadge } from '@/components/ui/HeroTrustBadge';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked parallax depth for headline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden bg-[#050507]"
    >
      {/* Background Interactive Ambient Canvas, 3D Mesh, & Cybernetic Grid */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full mt-2 sm:mt-4 mb-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typography, Story, CTAs, 3D Controls */}
          <motion.div
            style={{ y: headlineY, opacity: opacityFade }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow and Trust Social Proof Row */}
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

              {/* Verified 5.0 Star Trust Badge */}
              <HeroTrustBadge />

              <div className="hidden xl:inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-sm text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Q4 COMMISSIONS OPEN</span>
              </div>
            </motion.div>

            {/* Interactive 3D Kinetic Hero Headline with Iridescent Gradient */}
            <InteractiveHeroHeadline />

            {/* Editorial Supporting Narrative */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: 'easeOut' }}
              className="mt-3.5 sm:mt-4 text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed text-pretty"
            >
              We combine high-level visual direction, cutting-edge Next.js architecture, and fluid 3D motion to engineer bespoke digital flagships that command immediate authority and accelerate business growth.
            </motion.p>

            {/* Disciplines with Hover Scramble */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
              className="mt-3.5 sm:mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono tracking-widest text-neutral-400 uppercase"
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
              className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
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

            {/* Interactive 3D Mode Switcher HUD */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: 'easeOut' }}
              className="mt-5 sm:mt-6 flex items-center"
            >
              <Hero3DModeSwitcher />
            </motion.div>

            {/* Telemetry Metrics Strip */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease: 'easeOut' }}
              className="mt-6 sm:mt-7 pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-xl"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">EDGE SPEED</span>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="text-base sm:text-lg font-mono font-medium text-white">&lt;0.5s</span>
                  <span className="text-[10px] text-cyan-400 font-mono tracking-wider">GLOBAL</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">ENGINEERING</span>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="text-base sm:text-lg font-mono font-medium text-white">100%</span>
                  <span className="text-[10px] text-emerald-400 font-mono tracking-wider">BESPOKE</span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">INQUIRY IMPACT</span>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="text-base sm:text-lg font-mono font-medium text-white">3.5&times;</span>
                  <span className="text-[10px] text-purple-400 font-mono tracking-wider">CONVERSION</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Client Project Showcase Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center mt-6 lg:mt-0">
            <HeroFloatingShowcase />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll & Telemetry Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-500 uppercase pt-4 sm:pt-6"
      >
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <span className="hidden sm:inline">6.9271&deg; N, 79.8612&deg; E &bull; HIGH-END DIGITAL FLAGSHIPS</span>
      </motion.div>
    </section>
  );
}
