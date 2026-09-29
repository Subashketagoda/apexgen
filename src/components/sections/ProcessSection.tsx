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

  return (
    <section id="process" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>THE SPRINT &bull; 5 PHASES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              FROM IDEA<br />TO DIGITAL EXPERIENCE.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              A structured execution process engineered to eliminate unnecessary friction and deliver a production-ready website that drives measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Scroll-based Progressive Timeline */}
        <div ref={containerRef} className="relative mt-16 sm:mt-24 ml-3 sm:ml-6 md:ml-10 space-y-12 sm:space-y-16">
          {/* Base Background Track Line */}
          <div className="absolute left-0 top-3 bottom-6 w-[2px] bg-white/10 -translate-x-1/2" />

          {/* Animated Filling Progress Line */}
          {!shouldReduceMotion && (
            <motion.div
              style={{ scaleY: progressScaleY }}
              className="absolute left-0 top-3 bottom-6 w-[2px] bg-white origin-top -translate-x-1/2 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            />
          )}

          {siteConfig.processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 sm:pl-12 md:pl-16 group"
            >
              {/* Step Node */}
              <div className="absolute -left-[9px] top-4 w-[18px] h-[18px] rounded-full bg-[#050507] border-2 border-white/30 group-hover:border-white group-hover:scale-125 transition-all duration-300 flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Step Card Content */}
              <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#09090e] border border-white/10 hover:border-white/25 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 mb-4 border-b border-white/10 gap-2">
                  <div className="flex items-baseline space-x-4">
                    <span className="font-mono text-xl sm:text-2xl font-light text-neutral-500 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
                      {step.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    PHASE 0{index + 1}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  {step.description}
                </p>

                {step.deliverables && (
                  <div className="flex flex-wrap gap-2.5 pt-6 mt-6 border-t border-white/5">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
