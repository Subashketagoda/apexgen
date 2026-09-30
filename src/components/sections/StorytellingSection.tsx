'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function StorytellingSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll typography transformations across 3 narrative beats
  const opacityBeat1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.15]);
  const opacityBeat2 = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0.15, 1, 0.15]);
  const opacityBeat3 = useTransform(scrollYProgress, [0.55, 0.75, 1], [0.15, 1, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] bg-[#050505] text-[#F5F5F5] border-b border-white/10"
    >
      {/* Sticky presentation screen */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 sm:p-12 md:p-20 overflow-hidden">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>APEXGEN MANIFESTO</span>
          </div>
          <span>03 ACTS OF CRAFT</span>
        </div>

        {/* Center: Scroll-Based Huge Typography Reveals */}
        <div className="max-w-[1400px] mx-auto w-full my-auto space-y-8 sm:space-y-12">
          {/* BEAT 1: NOT JUST A WEBSITE. */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: opacityBeat1 }}
            className="transition-opacity duration-300"
          >
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#8A8A8A] uppercase mb-2">
              ACT I &bull; THE REJECTION OF TEMPLATES
            </div>
            <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] uppercase leading-[0.9]">
              NOT JUST<br />
              <span className="text-[#8A8A8A]">A WEBSITE.</span>
            </h2>
          </motion.div>

          {/* BEAT 2: A DIGITAL EXPERIENCE. */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: opacityBeat2 }}
            className="transition-opacity duration-300"
          >
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#8A8A8A] uppercase mb-2">
              ACT II &bull; THE STANDARD OF EXCELLENCE
            </div>
            <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] uppercase leading-[0.9]">
              A DIGITAL<br />
              <span className="text-gradient-iridescent">EXPERIENCE.</span>
            </h2>
          </motion.div>

          {/* BEAT 3: BUILT FOR YOUR BUSINESS. */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: opacityBeat3 }}
            className="transition-opacity duration-300"
          >
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#8A8A8A] uppercase mb-2">
              ACT III &bull; COMMERCIAL IMPACT
            </div>
            <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] uppercase leading-[0.9]">
              BUILT FOR<br />
              <span className="text-white">YOUR BUSINESS.</span>
            </h2>
          </motion.div>
        </div>

        {/* Bottom Editorial Narrative Note */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between text-xs font-mono text-[#8A8A8A] border-t border-white/10 pt-4 gap-4">
          <p className="max-w-md font-light leading-relaxed">
            Generic website builders make every company look interchangeable. We engineer custom digital flagships from first principles with uncompromising art direction.
          </p>
          <div className="tracking-widest uppercase text-cyan-400">
            SCROLL TO CONTINUE &darr;
          </div>
        </div>
      </div>
    </section>
  );
}
