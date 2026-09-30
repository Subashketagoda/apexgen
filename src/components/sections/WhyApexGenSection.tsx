'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export function WhyApexGenSection() {
  const shouldReduceMotion = useReducedMotion();
  const highlights = siteConfig.whyReasons;

  return (
    <section id="why" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Typography */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>STANDARDS &bull; FIRST PRINCIPLES</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.04em] text-white leading-[1.0] uppercase">
              Not just another website.
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed pt-2">
              ApexGen creates custom digital experiences instead of relying on generic templates. Every line of code, typography pairing, and user journey is tailored to give your business an unfair commercial advantage.
            </p>

            <div className="pt-4 flex items-center space-x-3 text-xs font-mono text-neutral-500 uppercase">
              <span className="text-white">APEXGEN</span>
              <span>&bull;</span>
              <span>BESPOKE ENGINEERING</span>
            </div>
          </div>

          {/* Right Column: Highlights Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-7 rounded-2xl bg-[#08080c] border border-white/10 hover:border-white/25 transition-all duration-300 group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-light tracking-tight text-white uppercase group-hover:translate-x-0.5 transition-transform">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
