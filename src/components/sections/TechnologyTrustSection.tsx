'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Cpu, Gauge, Sparkles } from 'lucide-react';

const technologies = [
  { name: 'Next.js', category: 'Production Framework', note: 'App Router & Edge' },
  { name: 'React', category: 'Interface Architecture', note: 'Component State' },
  { name: 'TypeScript', category: 'Type Safety', note: 'Strict Standards' },
  { name: 'Tailwind CSS', category: 'Design System', note: 'Zero-Runtime CSS' },
  { name: 'Node.js', category: 'Backend Runtimes', note: 'Scalable APIs' },
  { name: 'Firebase', category: 'Realtime Infrastructure', note: 'Auth & Data' },
  { name: 'Supabase', category: 'Postgres & Edge', note: 'Relational Systems' },
  { name: 'Vercel', category: 'Global Edge CDN', note: 'Sub-Second Routing' },
];

const trustPillars = [
  {
    title: 'SELECTED CLIENT WORK',
    desc: 'Every project in our portfolio is a real, operational digital flagship driving customer revenue.',
    icon: Sparkles,
  },
  {
    title: 'REAL PROJECTS',
    desc: 'No theoretical redesigns or speculative concepts. 100% verified production deployments.',
    icon: ShieldCheck,
  },
  {
    title: 'CUSTOM EXPERIENCES',
    desc: 'Bespoke art direction from first principles. Zero generic templates or off-the-shelf site builders.',
    icon: Cpu,
  },
  {
    title: 'PERFORMANCE FOCUSED',
    desc: 'Sub-second edge loading speeds, accessible semantic markup, and top-tier Core Web Vitals.',
    icon: Gauge,
  },
];

export function TechnologyTrustSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 space-y-28 sm:space-y-36">
        {/* ============================================================ */}
        {/* 11. TECHNOLOGY SECTION                                        */}
        {/* ============================================================ */}
        <div className="space-y-12 sm:space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>TECHNICAL FOUNDATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-[#F5F5F5] uppercase leading-[0.95]">
                BUILT WITH<br />
                <span className="text-[#8A8A8A]">MODERN TECHNOLOGY.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#8A8A8A] font-light max-w-md leading-relaxed">
              We engineer with battle-tested enterprise tools to guarantee maximum security, raw execution speed, and effortless long-term scalability.
            </p>
          </div>

          {/* Minimalist Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-white/25 transition-all duration-300 group space-y-3"
              >
                <div className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest">
                  0{idx + 1}
                </div>
                <div className="text-xl sm:text-2xl font-light text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  {tech.category}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 pt-1 border-t border-white/[0.06]">
                  {tech.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 12. SOCIAL PROOF / TRUST SECTION                             */}
        {/* ============================================================ */}
        <div className="space-y-12 sm:space-y-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>INTEGRITY &amp; STANDARDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-[#F5F5F5] uppercase leading-[0.95]">
                VERIFIED CREDIBILITY.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#8A8A8A] font-light max-w-md leading-relaxed">
              We never fabricate testimonials or vanity statistics. Our reputation is grounded in genuine production flagships delivered for real businesses.
            </p>
          </div>

          {/* Trust Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-7 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-white/25 transition-all duration-300 space-y-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-white uppercase tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
