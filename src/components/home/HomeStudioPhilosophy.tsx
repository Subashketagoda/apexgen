'use client';

import React from 'react';
import Link from 'next/link';
import { Quote, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

export function HomeStudioPhilosophy() {
  const commitments = [
    {
      label: 'ZERO TEMPLATES',
      statement: 'Every project begins with a blank Figma canvas and custom typography. We never recycle generic WordPress or web builder themes.',
    },
    {
      label: 'SOURCE CODE OWNERSHIP',
      statement: 'You own 100% of your source code, assets, and domain. No vendor lock-in, no hostage code, and no mandatory monthly builder retainers.',
    },
    {
      label: 'SUB-SECOND EDGE PERFORMANCE',
      statement: 'We engineer with Next.js and global edge CDN infrastructure to guarantee lightning-fast load times for customers worldwide.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Founder Manifesto Quote */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs font-mono text-zinc-300 tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>STUDIO MANIFESTO &bull; FOUNDER COMMITMENT</span>
          </div>

          <div className="relative">
            <Quote className="w-12 h-12 text-white/10 -mb-4 -ml-2" />
            <blockquote className="text-2xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15] tracking-tight uppercase">
              &ldquo;We design websites with the belief that great craft is good business. If a website doesn&apos;t evoke trust in the first 3 seconds, the finest product in the world will go unnoticed.&rdquo;
            </blockquote>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-base font-mono font-medium text-white">
                {siteConfig.founder.name}
              </div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {siteConfig.founder.role} &bull; ApexGen Studio
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider text-zinc-400 hover:text-white uppercase transition-colors group"
            >
              <span>ABOUT THE FOUNDER</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B35] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: 3 Core Client Guarantees */}
        <div className="lg:col-span-5 space-y-4">
          {commitments.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              className="p-6 sm:p-8 rounded-2xl studio-card hover:border-white/[0.2] transition-colors space-y-2 group shadow-lg"
            >
              <div className="text-xs font-mono text-zinc-400 tracking-wider font-semibold group-hover:text-white transition-colors">
                0{i + 1} &bull; {c.label}
              </div>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {c.statement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
