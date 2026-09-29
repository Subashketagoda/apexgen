'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function InteractiveIndustriesSection() {
  const industries = siteConfig.industries;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>MARKET ALIGNMENT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase">
              BUILT FOR AMBITIOUS BUSINESSES.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We partner with businesses that refuse to look ordinary. Whether an artisanal restaurant, luxury salon, or advisory firm, we engineer digital flagships that command respect.
            </p>
          </div>
        </div>

        {/* Large Interactive Typography List */}
        <div className="mt-12 sm:mt-16 divide-y divide-white/10 border-b border-white/10">
          {industries.map((ind, idx) => {
            const isSelected = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative py-8 sm:py-12 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Industry Title with Hover Brightness & Muted Sibling Effect */}
                  <div className="flex items-baseline space-x-4 sm:space-x-8">
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                      0{idx + 1}
                    </span>
                    <h3
                      className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight uppercase transition-all duration-300 ${
                        isSelected
                          ? 'text-white translate-x-2'
                          : isAnyHovered
                          ? 'text-neutral-700'
                          : 'text-neutral-400'
                      }`}
                    >
                      {ind.name}
                    </h3>
                  </div>

                  {/* Right Side: Description & CTA on Hover */}
                  <div className="lg:max-w-md space-y-2">
                    <p
                      className={`text-sm font-light transition-colors duration-300 ${
                        isSelected ? 'text-neutral-300' : 'text-neutral-500'
                      }`}
                    >
                      {ind.headline}
                    </p>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pt-2"
                        >
                          <Link
                            href="/#contact"
                            className="inline-flex items-center space-x-2 text-xs font-mono text-white uppercase tracking-wider underline underline-offset-4"
                          >
                            <span>DISCUSS A {ind.name} PROJECT</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
