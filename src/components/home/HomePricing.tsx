'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';

export function HomePricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>TRANSPARENT INVESTMENT</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            PRICING
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Predictable milestone pricing with full source code ownership. No hidden monthly builder retainers.
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
                ? 'bg-neutral-900/90 border-2 border-[#FF5E00]/80 shadow-[0_10px_50px_rgba(255,94,0,0.12)]'
                : 'bg-neutral-950/70 border border-white/10 hover:border-white/20'
            }`}
          >
            {plan.badge && (
              <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-[#FF5E00] text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                {plan.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <h3 className="text-2xl font-bold font-mono text-white">
                  {plan.name}
                </h3>
                <span className="text-2xl font-mono font-bold text-[#FF5E00]">
                  {plan.price}
                </span>
              </div>

              <p className="text-sm text-neutral-300 font-light my-6 leading-relaxed">
                {plan.valueProposition}
              </p>

              <div className="space-y-3 mb-8">
                {plan.deliverables.slice(0, 5).map((del, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-neutral-300 font-light">
                    <Check className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
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
                    ? 'bg-[#FF5E00] text-black hover:bg-[#FF7A1A] shadow-[0_0_20px_rgba(255,94,0,0.3)]'
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
      <div className="mt-12 p-8 rounded-3xl bg-neutral-950/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-[#FF5E00] uppercase tracking-widest block mb-1">
            CUSTOM PROJECT
          </span>
          <h4 className="text-xl sm:text-2xl font-light font-mono text-white uppercase">
            Need something different?
          </h4>
          <p className="text-sm text-neutral-400 font-light mt-1">
            We architect tailored multi-phase roadmaps for complex platforms and custom apps.
          </p>
        </div>

        <Link
          href="/contact"
          className="px-7 py-3.5 rounded-full border border-white/20 text-neutral-200 hover:text-black hover:bg-white transition-all text-xs font-mono uppercase tracking-wider font-semibold whitespace-nowrap"
        >
          Start a conversation &rarr;
        </Link>
      </div>
    </section>
  );
}
