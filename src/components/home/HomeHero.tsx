'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';
import { trackStartProjectClick } from '@/lib/analytics';
import { Hero3DScene } from '@/components/ui/Hero3DScene';

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], ['0px', '-36px']);
  const contentOp = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const glowOp = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  const smoothBgY = useSpring(bgY, { stiffness: 70, damping: 24 });
  const smoothContY = useSpring(contentY, { stiffness: 70, damping: 24 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] lg:min-h-screen pt-20 sm:pt-22 lg:pt-24 pb-8 flex flex-col justify-between overflow-hidden bg-[#050507]"
    >
      <motion.div
        style={reduceMotion ? undefined : { y: smoothBgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/atmosphere/cinematic-world.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[68%_42%] opacity-80 ${reduceMotion ? '' : 'hero-world-kenburns'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#050507]/85 sm:from-[#050507] via-[#050507]/60 sm:via-[#050507]/78 to-[#050507]/40 sm:to-[#050507]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]/50" />
      </motion.div>

      <motion.div
        style={{ opacity: glowOp }}
        className="absolute top-[8%] right-[-6%] w-[72vw] max-w-[820px] h-[72vw] max-h-[820px] rounded-full bg-gradient-radial from-[#3B82F6]/35 via-[#8B5CF6]/18 to-transparent blur-[90px] pointer-events-none z-[1]"
      />
      <div className="absolute bottom-[-12%] left-[-8%] w-[520px] h-[420px] rounded-full bg-[#8B5CF6]/18 blur-[110px] pointer-events-none z-[1]" />

      <Hero3DScene />

      <div className="absolute inset-0 pointer-events-none z-[3] mix-blend-overlay opacity-[0.045] film-grain" />
      <div className="hero-vignette z-[3]" />

      <motion.div
        style={reduceMotion ? undefined : { y: smoothContY, opacity: contentOp }}
        className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 w-full mt-2 sm:mt-4 mb-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h1 className="text-[34px] xs:text-4xl sm:text-6xl md:text-[80px] lg:text-[96px] xl:text-[108px] font-black tracking-tight leading-[0.92] sm:leading-[0.88] text-[#F5F5F7] uppercase drop-shadow-[0_2px_16px_rgba(5,5,7,0.7)]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                We build
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block text-gradient-silver"
              >
                digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block bg-gradient-to-r from-white via-[#C084FC] to-[#3B82F6] bg-clip-text text-transparent"
              >
                experiences
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white/90"
              >
                that move businesses forward.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.78 }}
              className="text-sm sm:text-lg md:text-xl text-zinc-300/90 max-w-xl leading-relaxed drop-shadow-[0_1px_8px_rgba(5,5,7,0.8)]"
            >
              From premium business websites to custom digital systems, ApexGen transforms business ideas into powerful online experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.92 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-0"
            >
              <Link
                href="/work"
                className="group inline-flex items-center justify-center space-x-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full btn-cta-primary text-xs font-mono font-bold tracking-wider w-full sm:w-auto"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/start-a-project"
                onClick={() => trackStartProjectClick('hero_primary')}
                className="group inline-flex items-center justify-center space-x-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full btn-physical text-xs font-mono font-semibold tracking-wider text-zinc-200 hover:text-white w-full sm:w-auto"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block min-h-[420px]" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 w-full flex items-end justify-between text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-500 pt-6 sm:pt-4"
      >
        <span className="text-zinc-400">Design. Build. Grow.</span>
        <Link href="#overview" className="group inline-flex flex-col items-center gap-1.5 sm:gap-2 text-zinc-400 hover:text-white">
          <span>Scroll</span>
          <span className="relative h-8 sm:h-10 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-white to-transparent animate-[light-trail-y_2.6s_ease-in-out_infinite]" />
          </span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[3] bg-gradient-to-b from-transparent via-[#050507]/70 to-[#050507]" />
    </section>
  );
}
