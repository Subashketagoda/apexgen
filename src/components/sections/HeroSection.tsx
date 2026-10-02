'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { InteractiveHeroHeadline } from '@/components/animation/InteractiveHeroHeadline';
import { MagneticButton } from '@/components/animation/MagneticButton';
import { HeroFloatingShowcase } from '@/components/ui/HeroFloatingShowcase';
import { Hero3DModeSwitcher } from '@/components/ui/Hero3DModeSwitcher';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax for deep background recession
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 overflow-hidden bg-[#050505] text-[#F5F5F5]"
    >
      {/* Background 3D Abstract Digital Environment & Grid */}
      <HeroBackground />

      {/* Main Experience Container */}
      <motion.div
        style={shouldReduceMotion ? {} : { scale: heroScale, opacity: heroOpacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full my-auto flex flex-col justify-center"
      >
        {/* Eyebrow: APEXGEN / DIGITAL STUDIO */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center space-x-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5E00]" />
            </span>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#F5F5F5] uppercase">
              APEXGEN / DIGITAL STUDIO
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#8A8A8A] uppercase">
            <span>&bull;</span>
            <span>AWARD-LEVEL DIGITAL FLAGSHIPS</span>
          </div>
        </motion.div>

        {/* Massive Cinematic Headline */}
        <InteractiveHeroHeadline containerRef={containerRef} />

        {/* Narrative, Interactive 3D Controls & Floating Showcase */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative, CTA, 3D Switcher */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-sm sm:text-base text-[#8A8A8A] font-light max-w-xl leading-relaxed"
            >
              We combine high-level visual direction, bespoke Next.js engineering, and fluid motion to architect digital experiences that command immediate authority.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton as="div" strength={0.25} ariaLabel="Start a project">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 cursor-pointer"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>

              <Link
                href="/#work"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-[#FF5E00]/40 transition-all cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-3 h-3 text-[#FF5E00]" />
              </Link>
            </motion.div>

            {/* Interactive 3D Mode HUD Switcher */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="pt-2 flex items-center"
            >
              <Hero3DModeSwitcher />
            </motion.div>
          </div>

          {/* Right Column: Floating Real Projects Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroFloatingShowcase />
          </div>
        </div>
      </motion.div>

      {/* Bottom Left & Bottom Right Telemetry */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full flex items-end justify-between pt-6 sm:pt-8 text-[11px] font-mono tracking-widest uppercase">
        {/* Bottom Left: DESIGN, DEVELOPMENT, EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="space-y-1 text-[#8A8A8A]"
        >
          <div className="hover:text-white transition-colors">DESIGN</div>
          <div className="hover:text-white transition-colors">DEVELOPMENT</div>
          <div className="text-cyan-400 font-medium">EXPERIENCE</div>
        </motion.div>

        {/* Bottom Right: SCROLL TO EXPLORE ↓ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <Link
            href="/#work"
            className="group inline-flex items-center space-x-2 text-[#8A8A8A] hover:text-white transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 group-hover:translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
