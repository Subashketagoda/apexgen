'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'DISCOVER',
    phase: 'PHASE 01',
    description:
      'We deconstruct your business model, commercial objectives, competitive positioning, and target user mental models to define an unassailable digital strategy.',
    deliverable: 'Strategic Architecture & Technical Roadmap',
    duration: 'Week 01',
    bullets: [
      'Commercial Objective Alignment',
      'Competitor & Market Differentiation Audit',
      'Information Architecture Mapping',
      'Tech Stack & Integration Scoping',
    ],
  },
  {
    number: '02',
    title: 'DESIGN',
    phase: 'PHASE 02',
    description:
      'We craft a bespoke aesthetic identity. Editorial typography, responsive design systems, micro-interactions, and high-fidelity interactive prototypes designed to command authority.',
    deliverable: 'Interactive High-Fidelity Prototype & System',
    duration: 'Week 02',
    bullets: [
      'Art Direction & Custom Visual Language',
      'Figma High-Fidelity Prototyping',
      'Mobile-First Layout Engineering',
      'Design Token & Typography System',
    ],
  },
  {
    number: '03',
    title: 'BUILD',
    phase: 'PHASE 03',
    description:
      'We engineer the flagship. Next.js 15, clean TypeScript, fluid motion, edge runtimes, and bulletproof security — zero bloated templates or slow page builders.',
    deliverable: 'Production Codebase & CMS Integration',
    duration: 'Week 03',
    bullets: [
      'Next.js 15 & React Architecture',
      'Strict TypeScript Engineering',
      'Fluid Micro-Animations & 3D WebGL',
      'Custom Headless CMS & Webhooks',
    ],
  },
  {
    number: '04',
    title: 'LAUNCH',
    phase: 'PHASE 04',
    description:
      'We audit, harden, and deploy. Google Lighthouse 90+ performance benchmark, Schema.org structured SEO, and zero-downtime global edge CDN propagation.',
    deliverable: 'Global Edge Deployment & Verified SEO',
    duration: 'Week 04',
    bullets: [
      'Sub-Second Core Web Vitals Audit',
      'Structured JSON-LD Schema & Meta Tags',
      'Cross-Device & Cross-Browser Testing',
      'Live Edge Deployment on Vercel/Cloud',
    ],
  },
  {
    number: '05',
    title: 'GROW',
    phase: 'PHASE 05',
    description:
      'We partner with your team post-launch. Data-driven conversion rate optimization, direct feature sprints, and dedicated technical maintenance.',
    deliverable: 'Dedicated Partnership & Growth Sprints',
    duration: 'Ongoing',
    bullets: [
      'Conversion Rate Optimization (CRO)',
      'Analytics & User Flow Monitoring',
      'Feature Sprints & Workflow Automations',
      'Priority Technical & Security Support',
    ],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = processSteps[activeStep];

  return (
    <section
      id="process"
      className="relative py-28 sm:py-36 md:py-44 bg-[#050505] border-b border-white/10 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>THE METHODOLOGY &bull; 05 PHASES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#F5F5F5] uppercase">
              PROCESS
            </h2>
          </div>

          {/* Phase Control Buttons */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() =>
                setActiveStep((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))
              }
              aria-label="Previous phase"
              className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveStep((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))
              }
              aria-label="Next phase"
              className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 py-8 border-b border-white/10">
          {processSteps.map((s, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={s.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'bg-white/[0.08] border border-cyan-400/40 shadow-[0_0_20px_rgba(0,240,255,0.08)]'
                    : 'bg-[#0B0B0B] border border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between pb-1 font-mono text-xs">
                  <span className={isCurrent ? 'text-cyan-400 font-bold' : 'text-neutral-500'}>
                    {s.number}
                  </span>
                  <span className="text-[10px] text-neutral-500 uppercase">{s.duration}</span>
                </div>
                <div
                  className={`text-sm sm:text-base font-light tracking-wide uppercase truncate ${
                    isCurrent ? 'text-white font-medium' : 'text-neutral-400'
                  }`}
                >
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="mt-10 sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 sm:p-14 bg-[#0B0B0B] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden space-y-10"
            >
              {/* Subtle Ambient Backing */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left: Phase Title & Summary */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-4xl sm:text-6xl font-light text-cyan-400">
                      {step.number}
                    </span>
                    <div>
                      <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase block">
                        {step.phase}
                      </span>
                      <h3 className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-[#8A8A8A] font-light leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                        PRIMARY DELIVERABLE:
                      </span>
                      <span className="text-sm font-mono text-neutral-200">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Key Milestones / Bullets */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase pb-2 border-b border-white/[0.08]">
                    PHASE DELIVERABLES &amp; RIGOR
                  </div>
                  <div className="space-y-3">
                    {step.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center space-x-3 text-sm font-mono text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
