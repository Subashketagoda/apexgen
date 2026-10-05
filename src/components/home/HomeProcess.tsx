'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function HomeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      duration: 'Sprint 01',
      tagline: 'Discovery & Commercial Objectives',
      desc: 'Deep-dive into your business model, competitive landscape, target client psychology, and commercial milestones.',
      deliverables: ['Competitive Gap Audit', 'Brand Positioning Dossier', 'Technical Discovery Matrix'],
    },
    {
      num: '02',
      title: 'Strategy',
      duration: 'Sprint 02',
      tagline: 'Information Architecture & Wireframes',
      desc: 'Architecting page hierarchies, high-conversion user pathways, editorial messaging direction, and key action funnels.',
      deliverables: ['Site Architecture Sitemap', 'Conversion Funnel Blueprint', 'Content Outline Strategy'],
    },
    {
      num: '03',
      title: 'Design',
      duration: 'Sprint 03',
      tagline: 'Bespoke Figma UI/UX & Art Direction',
      desc: 'Crafting custom art direction, refined typography hierarchies, spatial layout systems, and fluid micro-interaction models.',
      deliverables: ['High-Fidelity Figma Prototypes', 'Interactive Component Systems', 'Mobile Touch Ergonomics'],
    },
    {
      num: '04',
      title: 'Develop',
      duration: 'Sprint 04',
      tagline: 'Next.js 16 Edge Engineering',
      desc: 'Hand-coding the platform in Next.js 16 with zero WordPress bloat, sub-second edge CDN caching, and WhatsApp/booking flows.',
      deliverables: ['Type-Safe Next.js Architecture', 'Framer Motion Micro-Interactions', 'Direct WhatsApp / Booking Engine'],
    },
    {
      num: '05',
      title: 'Launch',
      duration: 'Sprint 05',
      tagline: 'Audit, Search Indexing & Go-Live',
      desc: 'Rigorous cross-device testing, Google Core Web Vitals 99+ audit, Schema.org verification, and seamless domain launch.',
      deliverables: ['Google Search Console Indexing', 'Full Source Code Transfer', 'Post-Launch Warranty & Support'],
    },
  ];

  return (
    <section id="process" className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/[0.08] gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>PRODUCT WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] text-white uppercase leading-[1.05]">
            The craft process. <br />
            <span className="text-gradient-silver font-normal">From concept to production.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          A disciplined 5-phase engineering workflow that turns ambitious ideas into high-conversion digital experiences.
        </p>
      </div>

      {/* Process Connecting Timeline & Step Cards */}
      <div className="mt-16 sm:mt-24 relative">
        {/* Animated Connecting Line on Desktop */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-white/[0.1] z-0">
          <motion.div
            className="h-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* 5 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-400 flex flex-col justify-between ${
                  isActive
                    ? 'studio-card-elevated border-white/[0.25] shadow-[0_20px_45px_rgba(0,0,0,0.8)] -translate-y-2'
                    : 'studio-card opacity-75 hover:opacity-100'
                }`}
              >
                <div>
                  {/* Step Beacon Node */}
                  <div className="flex items-center justify-between pb-6">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-white text-black'
                          : isCompleted
                          ? 'bg-white/[0.1] text-white'
                          : 'bg-white/[0.04] text-zinc-500'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                      {step.duration}
                    </span>
                  </div>

                  {/* Step Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight uppercase">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1 mb-4">
                    {step.tagline}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-1.5">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] font-mono text-zinc-400">
                      <span className="text-zinc-600 shrink-0">›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
