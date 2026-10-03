'use client';

import React from 'react';
import Link from 'next/link';
import { Quote, ArrowUpRight, ShieldCheck } from 'lucide-react';
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
    <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Founder Manifesto Quote */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-xs font-mono text-[#FF6B35] tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STUDIO MANIFESTO &bull; FOUNDER COMMITMENT</span>
          </div>

          <div className="relative">
            <Quote className="w-12 h-12 text-[#FF6B35]/20 -mb-4 -ml-2" />
            <blockquote className="text-2xl sm:text-4xl md:text-5xl font-light font-mono text-white leading-[1.15] tracking-tight uppercase">
              &ldquo;We design websites with the belief that great craft is good business. If a website doesn&apos;t evoke trust in the first 3 seconds, the finest product in the world will go unnoticed.&rdquo;
            </blockquote>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <div className="text-base font-mono font-medium text-white">
                {siteConfig.founder.name}
              </div>
              <div className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider">
                {siteConfig.founder.role} &bull; ApexGen Studio
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider text-neutral-400 hover:text-white uppercase transition-colors"
            >
              <span>ABOUT THE FOUNDER</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B35]" />
            </Link>
          </div>
        </div>

        {/* Right Column: 3 Core Client Guarantees */}
        <div className="lg:col-span-5 space-y-4">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F0F12] border border-white/10 hover:border-[#FF6B35]/40 transition-colors space-y-2 group"
            >
              <div className="text-xs font-mono text-[#FF6B35] tracking-wider font-semibold">
                0{i + 1} &bull; {c.label}
              </div>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {c.statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
