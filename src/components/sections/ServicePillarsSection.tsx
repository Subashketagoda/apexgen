'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ServicePillarsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();
  const pillars = siteConfig.servicePillars;

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>CAPABILITIES &bull; CORE DISCIPLINES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              WHAT WE DO
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We engineer bespoke digital flagships combining creative direction, cutting-edge code, and conversion architecture.
            </p>
          </div>
        </div>

        {/* 3 Interactive Large Typography Rows */}
        <div className="mt-8 divide-y divide-white/10 border-b border-white/10">
          {pillars.map((pillar, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={pillar.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(index)}
                className={`group relative py-10 sm:py-16 transition-colors duration-500 ${
                  isHovered ? 'bg-white/[0.02]' : 'bg-transparent'
                }`}
              >
                {/* Dynamic animated line accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-white pointer-events-none"
                  initial={{ width: '0%' }}
                  animate={{ width: isHovered ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Number + Massive Typography */}
                  <div className="lg:col-span-6 flex items-baseline space-x-6 sm:space-x-8">
                    <motion.span
                      animate={!shouldReduceMotion && isHovered ? { x: 8, color: '#ffffff' } : { x: 0 }}
                      transition={{ type: 'spring', damping: 20 }}
                      className="font-mono text-2xl sm:text-3xl font-light text-neutral-500 group-hover:text-white transition-colors duration-300"
                    >
                      {pillar.number}
                    </motion.span>

                    <div className="space-y-2">
                      <h3 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                        {pillar.category}
                      </p>
                    </div>
                  </div>

                  {/* Right: Sub-disciplines list & Overview */}
                  <div className="lg:col-span-6 space-y-6 lg:pl-8">
                    <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      {pillar.fullDesc}
                    </p>

                    {/* Sub-disciplines List */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
                        SERVICES INCLUDED:
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {pillar.subDisciplines.map((item) => (
                          <span
                            key={item}
                            className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300 group-hover:border-white/20 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-2">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center space-x-2 text-xs font-mono text-white uppercase tracking-wider group-hover:underline underline-offset-4"
                      >
                        <span>INQUIRE FOR {pillar.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
