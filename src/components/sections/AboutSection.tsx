'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const focusAreas = [
    {
      title: 'DESIGN',
      desc: 'Bespoke art direction, editorial hierarchy, and intentional whitespace that command immediate attention.',
    },
    {
      title: 'TECHNOLOGY',
      desc: 'Production Next.js codebases, clean component architecture, and high reliability across all platforms.',
    },
    {
      title: 'MOTION',
      desc: 'Fluid 60fps micro-gestures and cinematic easing that make digital experiences feel alive.',
    },
    {
      title: 'PERFORMANCE',
      desc: 'Sub-second edge delivery, optimized assets, and zero layout shift for peak responsiveness.',
    },
    {
      title: 'BUSINESS OUTCOMES',
      desc: 'Engineered conversion funnels, clear calls to action, and direct customer inquiry channels.',
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Overview */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>THE STUDIO</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase leading-[0.98]">
              WE BUILD WITH<br />PURPOSE.
            </h2>

            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              APEXGEN is a premium web design, development and digital experience agency that builds high-end websites for ambitious businesses.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We operate at the intersection of aesthetic discipline and technical rigor. Every project is built from first principles without generic templates or brittle site-builders, creating digital flagships that elevate brand authority and drive tangible commercial engagement.
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-black">
                <Image
                  src="/brand/apexgen-icon.png"
                  alt="ApexGen Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                APEXGEN STUDIO &bull; DIGITAL EXPERIENCES
              </div>
            </div>
          </div>

          {/* Right Column: 5 Studio Disciplines */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6">
              CORE DISCIPLINES
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {focusAreas.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="py-6 group"
                >
                  <div className="flex items-baseline space-x-4 mb-2">
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed pl-8">
                    {item.desc}
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
