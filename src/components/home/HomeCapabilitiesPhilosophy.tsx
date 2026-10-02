'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HomeCapabilitiesPhilosophy() {
  return (
    <section className="py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Typography Manifesto (7-col) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>STUDIO PHILOSOPHY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.035em] text-white uppercase font-mono leading-[1.05]">
            GOOD DESIGN GETS ATTENTION.
            <br />
            <span className="text-[#FF7A1A]">GREAT EXPERIENCES MOVE PEOPLE.</span>
          </h2>

          <div className="text-xl sm:text-2xl font-mono text-neutral-400 font-light leading-relaxed">
            DESIGN FIRST. EXPERIENCE SECOND. TECHNOLOGY THIRD.
          </div>

          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
            We reject the template-driven, cookie-cutter approach that dominates the web design industry. We believe a digital flagship should be an extension of your brand’s highest standards—crafted with spatial elegance, intuitive interaction, and sub-second execution.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#FF5E00] transition-colors"
            >
              <span>READ THE STUDIO PHILOSOPHY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: The 3 Core Pillars (5-col) */}
        <div className="lg:col-span-5 space-y-6 lg:pt-8">
          {[
            {
              number: '01',
              title: 'DESIGN',
              summary: 'Bespoke Art Direction & UI/UX Craft',
              detail: 'Tailored visual systems designed from scratch in Figma with zero recycled templates.',
            },
            {
              number: '02',
              title: 'BUILD',
              summary: 'Next.js & Software Architecture',
              detail: 'Sub-second response times, clean TypeScript code, and robust edge infrastructure.',
            },
            {
              number: '03',
              title: 'GROW',
              summary: 'Search Authority & Automation',
              detail: 'Core Web Vitals 95+ score, valid Schema JSON-LD, and frictionless inquiry routing.',
            },
          ].map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-2xl bg-neutral-950/70 border border-white/10 hover:border-[#FF5E00]/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="text-[#FF5E00] font-bold">PILLAR {pillar.number}</span>
                <span className="uppercase tracking-widest">{pillar.title}</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-white uppercase">
                {pillar.summary}
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
