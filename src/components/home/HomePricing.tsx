'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';

export function HomePricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#FF6B35]/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF6B35] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
            <span>TRANSPARENT INVESTMENT</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            PRICING
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            Predictable milestone investment with full source code ownership. Zero monthly theme lock-in or surprise fees.
          </p>
        </div>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-12">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
              plan.isPopular
                ? 'bg-[#121216] border-2 border-[#FF6B35] shadow-[0_15px_60px_rgba(255,107,53,0.18)] scale-[1.02]'
                : 'bg-[#0E0E11] border border-white/10 hover:border-white/20 shadow-xl'
            }`}
          >
            {plan.badge && (
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-[#FF6B35] text-black text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                {plan.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <h3 className="text-2xl font-bold font-mono text-white">
                  {plan.name}
                </h3>
                <span className="text-2xl font-mono font-bold text-[#FF6B35]">
                  {plan.price}
                </span>
              </div>

              <p className="text-sm text-neutral-300 font-sans my-6 leading-relaxed">
                {plan.valueProposition}
              </p>

              <div className="space-y-3 mb-8">
                {plan.deliverables.slice(0, 5).map((del, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-neutral-300 font-sans">
                    <Check className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <Link
                href={plan.ctaHref}
                className={`w-full py-4 rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  plan.isPopular
                    ? 'bg-[#FF6B35] text-black hover:bg-[#FFA86B] shadow-[0_0_25px_rgba(255,107,53,0.35)]'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                <span>{plan.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Project Callout */}
      <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#0E0E12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-1">
          <span className="text-xs font-mono text-[#FF6B35] uppercase tracking-widest block font-semibold">
            CUSTOM ENTERPRISE &amp; SYSTEMS
          </span>
          <h4 className="text-xl sm:text-2xl font-light font-mono text-white uppercase">
            Need something tailored or complex?
          </h4>
          <p className="text-sm text-neutral-400 font-sans">
            We architect bespoke digital platforms, specialized booking engines, and custom integrations.
          </p>
        </div>

        <Link
          href="/contact"
          className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white hover:text-black hover:bg-white transition-all text-xs font-mono uppercase tracking-wider font-semibold whitespace-nowrap shadow-lg shrink-0"
        >
          Start a conversation &rarr;
        </Link>
      </div>
    </section>
  );
}
