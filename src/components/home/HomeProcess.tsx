'use client';

import React from 'react';
import Link from 'next/link';

export function HomeProcess() {
  const steps = [
    { num: '01', name: 'DISCOVER', desc: 'Commercial positioning, audience psychology, and competitive gap audit.' },
    { num: '02', name: 'DIRECTION', desc: 'Editorial visual trajectory, typographic pairing, and IA wireframing.' },
    { num: '03', name: 'DESIGN', desc: 'Bespoke high-fidelity UI/UX and interactive prototypes in Figma.' },
    { num: '04', name: 'BUILD', desc: 'Handcrafted Next.js, React, and TypeScript code deployed to global edge.' },
    { num: '05', name: 'LAUNCH', desc: 'Lighthouse 95+ speed verification, Schema SEO, and zero-downtime go-live.' },
  ];

  return (
    <section id="process" className="py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>SPRINT CADENCE</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            PROCESS
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            A disciplined, 5-stage sprint methodology that turns complex requirements into sub-second digital flagships.
          </p>
        </div>
      </div>

      {/* 5 Process Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-12">
        {steps.map((s) => (
          <div
            key={s.num}
            className="p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-[#FF5E00]/40 transition-all flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <div className="text-4xl sm:text-5xl font-mono font-light text-[#FF5E00]">
                {s.num}
              </div>
              <h3 className="text-xl font-bold font-mono text-white uppercase">
                {s.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {s.desc}
              </p>
            </div>

            <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest pt-4 border-t border-white/5">
              STAGE COMPLETE &rarr;
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12 text-center">
        <Link
          href="/process"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <span>READ COMPLETE SPRINT METHODOLOGY &rarr;</span>
        </Link>
      </div>
    </section>
  );
}
