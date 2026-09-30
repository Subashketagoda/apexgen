'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const progressScaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const steps = siteConfig.processSteps;

  return (
    <section id="process" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>THE PROCESS &bull; 5 STAGES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              PROCESS
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              From initial discovery to post-launch growth. A disciplined execution methodology engineered for transparency, velocity, and measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Horizontal Card Row on Large Screens, Vertical Connected Timeline on Mobile */}
        <div ref={containerRef} className="mt-16 sm:mt-24 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#08080c] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group min-h-[260px]"
            >
              {/* Top Accent Node */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <span className="font-mono text-2xl font-light text-neutral-500 group-hover:text-cyan-400 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                    STAGE 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white uppercase mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  {index === 4 ? 'CONTINUOUS' : `PHASE 0${index + 1}`}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
