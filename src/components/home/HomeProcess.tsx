'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function HomeProcess() {
  const steps = siteConfig.processSteps;

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#08080a] border-b border-white/[0.08] overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#d4ff00] uppercase flex items-center gap-2">
              <span>[ 04 // SPRINT PIPELINE ]</span>
            </div>
            <h2 className="text-section-title text-white">
              HOW WE DELIVER
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-md">
            A battle-tested 5-phase engineering pipeline designed for zero scope-drift, rapid feedback loops, and sub-second launch velocity.
          </p>
        </div>

        {/* 5-Step Architectural Sprint Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {/* Animated Laser Datum Connection Beam (Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#d4ff00]/30 to-transparent pointer-events-none z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0e0f14] border border-white/[0.08] hover:border-[#d4ff00]/50 hover:bg-[#12131a] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_36px_rgba(212,255,0,0.08)] relative z-10"
            >
              <div className="space-y-4">
                {/* Step Index & Phase */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-radar-ring absolute inline-flex h-full w-full rounded-full bg-[#d4ff00] opacity-0 group-hover:opacity-75 transition-opacity" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff00]" />
                    </span>
                    <span className="text-xs font-mono font-bold text-[#d4ff00]">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase group-hover:text-zinc-300 transition-colors">
                    {step.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#d4ff00] transition-colors tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  DELIVERABLES
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-[#d4ff00] font-mono leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Speed Guarantee Banner */}
        <div className="p-6 rounded-xl bg-[#12131a] border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
            <span>AVERAGE TURNAROUND: 7 TO 14 BUSINESS DAYS FROM DEPOSIT TO PRODUCTION</span>
          </div>
          <a
            href="#contact"
            className="text-[#d4ff00] hover:underline flex items-center gap-1 uppercase tracking-wider font-bold"
          >
            <span>LOCK IN YOUR LAUNCH WINDOW →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
