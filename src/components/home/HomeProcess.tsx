'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function HomeProcess() {
  const steps = [
    {
      num: '01',
      name: 'DISCOVER',
      tagline: 'Discovery & Business Goals',
      desc: 'Understand the business, its competitive landscape, target audience psychology, and commercial goals.',
    },
    {
      num: '02',
      name: 'STRATEGY',
      tagline: 'Information Architecture',
      desc: 'Plan the page hierarchy, conversion funnels, copywriting outlines, and seamless user experience journey.',
    },
    {
      num: '03',
      name: 'DESIGN',
      tagline: 'Visual Art Direction',
      desc: 'Create bespoke visual direction, editorial typography, micro-interactions, and high-fidelity Figma prototypes.',
    },
    {
      num: '04',
      name: 'DEVELOPMENT',
      tagline: 'Next.js Engineering',
      desc: 'Build and optimize the website with clean Next.js, sub-second edge rendering, and frictionless checkout/booking systems.',
    },
    {
      num: '05',
      name: 'LAUNCH',
      tagline: 'Quality Assurance & Delivery',
      desc: 'Test, deliver, verify Google Core Web Vitals 95+, configure SEO indexing, and prepare the website for real visitors.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-xs font-mono text-[#FF6B35] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-white uppercase font-mono leading-[1.05]">
            FROM IDEA TO DIGITAL EXPERIENCE.
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            A disciplined 5-stage sprint methodology that turns conceptual ideas into high-conversion production digital platforms.
          </p>
        </div>
      </div>

      {/* Process Connecting Timeline & Cards */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
        {/* Subtle horizontal connecting line on desktop */}
        <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-px bg-gradient-to-r from-[#FF6B35]/30 via-white/10 to-[#FF6B35]/30 pointer-events-none" />

        {steps.map((s, idx) => (
          <div
            key={s.num}
            className="p-8 rounded-2xl bg-[#0F0F12] border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-300 flex flex-col justify-between space-y-8 group relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-mono font-light text-[#FF6B35] group-hover:scale-105 transition-transform inline-block">
                  {s.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#FF6B35] group-hover:shadow-[0_0_10px_#FF6B35] transition-all" />
              </div>

              <div>
                <h3 className="text-xl font-light font-mono text-white uppercase tracking-tight group-hover:text-[#FF6B35] transition-colors">
                  {s.name}
                </h3>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                  {s.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                {s.desc}
              </p>
            </div>

            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest pt-4 border-t border-white/5 flex items-center justify-between">
              <span>SPRINT 0{idx + 1}</span>
              <span className="text-[#FF6B35]">&bull;</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/process"
          className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors group"
        >
          <span>EXPLORE OUR COMPLETE 5-STAGE SPRINT METHODOLOGY</span>
          <ArrowUpRight className="w-4 h-4 text-[#FF6B35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
