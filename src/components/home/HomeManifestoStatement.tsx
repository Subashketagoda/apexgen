'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HomeManifestoStatement() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Stage 1: "DESIGN IS NOT DECORATION."
  // Stage 2: "IT IS HOW PEOPLE EXPERIENCE YOUR BUSINESS."
  const phase1Opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.45, 0.52], [0, 1, 1, 0]);
  const phase1Scale = useTransform(scrollYProgress, [0.05, 0.45], [0.95, 1.05]);

  const phase2Opacity = useTransform(scrollYProgress, [0.55, 0.68, 0.88, 0.98], [0, 1, 1, 0.8]);
  const phase2Scale = useTransform(scrollYProgress, [0.55, 0.95], [0.95, 1.04]);

  return (
    <div
      ref={containerRef}
      className="relative h-[240vh] bg-[#050507] text-[#F5F5F7] selection:bg-white selection:text-black border-t border-b border-white/[0.06]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 sm:px-12">
        {/* Subtle cinematic technical background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.07)_0%,transparent_70%)] pointer-events-none" />

        {/* Ambient fine coordinates */}
        <div className="absolute top-10 left-10 flex items-center space-x-3 text-[11px] font-mono text-[#8B8B96] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
          <span>APEXGEN MANIFESTO // 04</span>
        </div>
        <div className="absolute bottom-10 right-10 text-[11px] font-mono text-[#8B8B96] hidden sm:block">
          CRAFTED IN COLOMBO / DEPLOYED GLOBALLY
        </div>

        {/* PHASE 1: DESIGN IS NOT DECORATION */}
        <motion.div
          style={{ opacity: phase1Opacity, scale: phase1Scale }}
          className="absolute text-center max-w-5xl mx-auto space-y-4 px-4"
        >
          <div className="text-[12px] font-mono tracking-widest text-[#8B8B96] uppercase mb-4">
            AXIOM 01
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7vw] font-black uppercase tracking-tight leading-[0.95]">
            <span className="block text-[#8B8B96]">DESIGN</span>
            <span className="block text-zinc-500">IS</span>
            <span className="block text-red-400/90 font-mono tracking-normal">NOT</span>
            <span className="block text-[#F5F5F7] drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">DECORATION.</span>
          </h2>
        </motion.div>

        {/* PHASE 2: IT IS HOW PEOPLE EXPERIENCE YOUR BUSINESS */}
        <motion.div
          style={{ opacity: phase2Opacity, scale: phase2Scale }}
          className="absolute text-center max-w-6xl mx-auto space-y-6 px-4"
        >
          <div className="text-[12px] font-mono tracking-widest text-[#3B82F6] uppercase mb-4">
            AXIOM 02
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.5vw] font-black uppercase tracking-tight leading-[0.98]">
            <span className="block text-[#8B8B96]">IT IS</span>
            <span className="block text-[#F5F5F7]">HOW PEOPLE</span>
            <span className="block bg-gradient-to-r from-[#3B82F6] via-[#C084FC] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              EXPERIENCE
            </span>
            <span className="block text-[#F5F5F7]">YOUR BUSINESS.</span>
          </h2>
          <p className="text-sm sm:text-base font-mono text-[#8B8B96] uppercase tracking-widest max-w-xl mx-auto pt-4">
            Every click, every transition, every frame either earns customer trust or forfeits it.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
