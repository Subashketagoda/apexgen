'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const processSteps = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the business, commercial objectives, competitive landscape, and audience mental models.',
    deliverable: 'Strategic Architecture & Roadmap',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Create the experience. Editorial visual language, fluid micro-interactions, and responsive design systems.',
    deliverable: 'Interactive High-Fidelity Prototype',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Engineer the product. Next.js 15, clean TypeScript, sub-second edge routing, and bulletproof security.',
    deliverable: 'Production Codebase & CMS',
  },
  {
    number: '04',
    title: 'LAUNCH',
    description: 'Deploy and optimize. Google Lighthouse 90+ performance audit, Schema.org SEO, and seamless live launch.',
    deliverable: 'Global Edge Deployment & Analytics',
  },
  {
    number: '05',
    title: 'GROW',
    description: 'Improve and scale. Data-driven conversion rate optimization, technical support, and continuous feature sprints.',
    deliverable: 'Dedicated Partnership & Sprints',
  },
];

export function ProcessSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal motion transform
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section
      ref={targetRef}
      id="process"
      className="relative min-h-[260vh] bg-[#050505] border-b border-white/10"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-white/10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>THE METHODOLOGY &bull; 05 PHASES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#F5F5F5] uppercase">
              PROCESS
            </h2>
          </div>

          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
            SCROLL TO INSPECT PHASES &rarr;
          </div>
        </div>

        {/* Horizontal Moving Cards Track */}
        <div className="relative my-auto overflow-hidden py-8">
          <motion.div
            style={shouldReduceMotion ? {} : { x }}
            className="flex items-stretch space-x-6 sm:space-x-10 will-change-transform"
          >
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="w-[82vw] sm:w-[480px] lg:w-[540px] shrink-0 rounded-2xl sm:rounded-3xl p-8 sm:p-12 bg-[#0B0B0B] border border-white/10 flex flex-col justify-between space-y-8 group hover:border-white/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="space-y-6">
                  {/* Phase Number Header */}
                  <div className="flex items-baseline justify-between pb-6 border-b border-white/[0.08]">
                    <span className="font-mono text-3xl sm:text-5xl font-light text-cyan-400">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#8A8A8A] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Pill */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-300">
                    {step.deliverable}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/80 group-hover:scale-150 transition-transform" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
          <span>01 DISCOVER</span>
          <span>02 DESIGN</span>
          <span>03 BUILD</span>
          <span>04 LAUNCH</span>
          <span className="text-cyan-400 font-medium">05 GROW</span>
        </div>
      </div>
    </section>
  );
}
