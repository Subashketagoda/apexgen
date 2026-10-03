'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { trackStartProjectClick } from '@/lib/analytics';
import { projectsData } from '@/data/projects';
import { ArrowUpRight, Lock, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentProject = projectsData[activeIdx] || projectsData[0];

  // Auto-cycle through the 3 real client flagships
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % projectsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] flex items-center justify-center">
      <HeroBackground />

      {/* Radial lighting glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF6B35] blur-[180px] rounded-full pointer-events-none"
      />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-12 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typography & Brand Direction (7-col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-xs font-mono text-[#FF6B35] tracking-wider uppercase backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span>APEXGEN &bull; DIGITAL DESIGN STUDIO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,6.5vw,6.5rem)] font-light leading-[0.94] tracking-[-0.05em] text-white font-mono uppercase"
            >
              WE BUILD DIGITAL
              <br />
              <span className="text-white/40">EXPERIENCES THAT</span>
              <br />
              MOVE BUSINESSES FORWARD.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="max-w-2xl text-base sm:text-xl text-neutral-300 font-sans leading-relaxed"
            >
              From premium business websites to custom digital systems, ApexGen transforms business ideas into powerful online experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/work"
                className="
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  text-xs
                  font-semibold
                  tracking-wider
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#FF6B35]
                  hover:scale-105
                  active:scale-95
                  font-mono
                  uppercase
                  shadow-[0_0_30px_rgba(255,255,255,0.25)]
                "
              >
                EXPLORE OUR WORK
              </Link>

              <Link
                href="/start-a-project"
                onClick={() => trackStartProjectClick('home_hero')}
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  px-8
                  py-4
                  text-xs
                  font-semibold
                  tracking-wider
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#FF6B35]/60
                  hover:bg-[#FF6B35]/10
                  hover:text-[#FF6B35]
                  hover:scale-105
                  active:scale-95
                  font-mono
                  uppercase
                  backdrop-blur-md
                "
              >
                START A PROJECT
              </Link>
            </motion.div>

            {/* Quick Studio Trust Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-neutral-400"
            >
              <div className="flex items-center space-x-2">
                <Zap className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Next.js Edge Speed</span>
              </div>
              <span className="text-white/20">&bull;</span>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Bespoke Figma UI/UX</span>
              </div>
              <span className="text-white/20">&bull;</span>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Zero Recycled Themes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating 3D Showcase with Gentle Levitation Motion (5-col) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Animated Halo Backdrop Glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.85, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 bg-gradient-to-tr from-[#FF6B35]/30 via-transparent to-white/10 rounded-[36px] blur-3xl opacity-70 pointer-events-none"
            />

            {/* Continuous Gentle Levitation Container */}
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl border border-white/15 bg-[#0C0C0E]/95 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(255,107,53,0.12)] hover:border-white/30 transition-colors"
            >
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/90" />
                </div>

                {/* Simulated URL bar */}
                <div className="flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300 max-w-[220px] truncate">
                  <Lock className="w-3 h-3 text-[#27C93F] shrink-0" />
                  <span className="text-white truncate">https://{currentProject.domain}</span>
                </div>

                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#27C93F] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Real Project Image Viewport */}
              <Link
                href={`/work/${currentProject.slug}`}
                className="block relative aspect-[16/10] overflow-hidden rounded-2xl bg-black border border-white/10 group/img"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentProject.heroImage}
                      alt={`${currentProject.title} — Real Production Website`}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                  </motion.div>
                </AnimatePresence>

                {/* Hover overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </span>
                </div>

                {/* Bottom Left: Project Title */}
                <div className="absolute bottom-3 left-3 z-10">
                  <div className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white flex items-center space-x-2">
                    <span className="text-[#FF6B35] font-bold">{currentProject.title}</span>
                    <span className="text-white/40">&bull;</span>
                    <span className="text-neutral-400">{currentProject.category}</span>
                  </div>
                </div>
              </Link>

              {/* Interactive Thumbnail Switchers */}
              <div className="pt-4 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                  FEATURED WORK:
                </span>
                <div className="flex items-center gap-2">
                  {projectsData.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        activeIdx === idx
                          ? 'bg-[#FF6B35] text-black font-semibold shadow-[0_0_15px_rgba(255,107,53,0.4)]'
                          : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
                      }`}
                    >
                      {p.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating Performance Tag with subtle hover/float */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 hidden sm:flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl bg-[#111115] border border-white/15 shadow-2xl backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-white">99/100 Edge Speed</span>
              </motion.div>

              {/* Floating Live Flagships Badge */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-5 -right-5 hidden sm:flex items-center space-x-2 px-4 py-2 rounded-2xl bg-[#111115] border border-[#FF6B35]/40 shadow-2xl backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span className="text-xs font-mono text-white">Live Client Flagships</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Grain Overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          mix-blend-screen
          bg-[url('/noise.png')]
        "
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-2.5">
          <span className="text-[9px] tracking-[0.3em] text-white/30 font-mono">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-gradient-to-b from-[#FF6B35] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

export { Hero as HomeHero };
