'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '@/data/pricing';
import { trackStartProjectClick } from '@/lib/analytics';

export function HomePricing() {

  return (
    <section id="pricing" className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/[0.08] gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>TRANSPARENT VALUE PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] text-white uppercase leading-[1.05]">
            Transparent pricing. <br />
            <span className="text-gradient-silver font-normal">Predictable investment.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Fixed sprint scopes with full source code ownership. Zero recurring template fees, zero agency markups, and sub-second edge deployment.
        </p>
      </div>

      {/* 3 Premium SaaS Pricing Cards matching Reference Image Philosophy */}
      <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {pricingPlans.map((plan, idx) => {
          const isHighlighted = plan.id === 'premium'; // Premium has strongest visual emphasis per prompt

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 relative overflow-hidden ${
                isHighlighted
                  ? 'studio-card-elevated border-white/[0.28] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.08)]'
                  : 'studio-card hover:border-white/[0.18]'
              }`}
            >
              {/* Highlight badge for Flagship / Studio Recommended */}
              {plan.badge && (
                <div className="absolute top-5 right-6">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold ${
                      isHighlighted
                        ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                        : 'bg-white/[0.08] text-zinc-300 border border-white/[0.12]'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Tier Name & Timeline */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <h3 className="text-xl font-light text-white tracking-tight uppercase">
                    {plan.name}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {plan.timeline}
                  </span>
                </div>

                {/* Price Display */}
                <div className="my-8">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight font-mono">
                    {plan.price}
                  </div>
                  <div className="text-xs text-zinc-400 font-normal mt-2 leading-relaxed">
                    {plan.valueProposition}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                    INCLUDED DELIVERABLES
                  </span>
                  {plan.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-normal">
                      <div className="p-0.5 rounded-full bg-white/[0.08] text-white shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer & CTA */}
              <div className="mt-10 pt-6 border-t border-white/[0.06] space-y-4">
                <Link
                  href={plan.ctaHref}
                  onClick={() => trackStartProjectClick(`pricing_${plan.id}`)}
                  className={`w-full py-4 rounded-full text-xs font-mono tracking-wider uppercase font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-98'
                      : 'bg-white/[0.06] border border-white/[0.12] text-white hover:bg-white hover:text-black hover:scale-[1.02] active:scale-98'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="text-center text-[11px] font-mono text-zinc-400">
                  Ideal for: {plan.idealFor}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
