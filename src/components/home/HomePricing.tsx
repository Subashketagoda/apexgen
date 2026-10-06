'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { formatWhatsAppUrl } from '@/lib/utils';

export function HomePricing() {
  const plans = siteConfig.pricingPlans;

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#08080a] border-b border-white/[0.08] overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#d4ff00] uppercase flex items-center gap-2">
              <span>[ 05 // COMMERCIAL FRAMEWORK ]</span>
            </div>
            <h2 className="text-section-title text-white">
              INVESTMENT TIERS
            </h2>
          </div>
          <div className="space-y-1 max-w-md">
            <p className="text-sm sm:text-base text-zinc-300 font-light">
              Clear, transparent LKR pricing with zero hidden surcharges. All tiers include bespoke design, sub-second Next.js code, and dedicated launch support.
            </p>
            <p className="text-xs font-mono text-zinc-500">
              *Custom enterprise quotes available for complex web applications.
            </p>
          </div>
        </div>

        {/* 3 Luxury Architectural Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isPopular = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: isPopular ? -10 : -5 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`relative rounded-2xl flex flex-col justify-between p-7 sm:p-9 transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#12131a] border-2 border-[#d4ff00] shadow-[0_0_40px_rgba(212,255,0,0.18)] -translate-y-2'
                    : 'bg-[#0e0f14] border border-white/[0.08] hover:border-white/[0.25] shadow-[0_12px_36px_rgba(0,0,0,0.7)]'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#d4ff00] text-[#08080a] text-[10px] font-mono font-bold tracking-widest uppercase shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 animate-laser-sweep pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#08080a]" />
                      <span>MOST POPULAR CHOICE</span>
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Price */}
                  <div className="space-y-3 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                        {plan.name}
                      </span>
                      {plan.badge && !isPopular && (
                        <span className="text-[10px] font-mono tracking-wider text-zinc-400 bg-white/[0.05] px-2 py-0.5 rounded">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                        {plan.price}
                      </div>
                      <div className="text-xs font-mono text-zinc-400">
                        TIMELINE: {plan.timeline}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Target Audience */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-300 font-light">
                    <span className="font-mono text-zinc-500 uppercase text-[10px] block mb-1">BEST SUITED FOR:</span>
                    {plan.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      INCLUDED DELIVERABLES
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-[#d4ff00]' : 'text-zinc-400'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-8 border-t border-white/[0.08] space-y-3 mt-8">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pb-2">
                    <span>{plan.revisions}</span>
                    <span>{plan.supportDuration}</span>
                  </div>

                  <a
                    href={`#contact`}
                    className={`w-full py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all relative overflow-hidden group ${
                      isPopular
                        ? 'btn-volt'
                        : 'btn-architectural hover:border-[#d4ff00]'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-laser-sweep pointer-events-none" />
                    )}
                    <span className="relative z-10">SELECT {plan.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
                  </a>

                  <a
                    href={formatWhatsAppUrl(
                      siteConfig.contact.whatsappNumber,
                      `Hello Subhash, I am interested in the ${plan.name} package (${plan.price}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-[11px] font-mono text-zinc-400 hover:text-[#d4ff00] transition-colors flex items-center justify-center gap-1.5 py-1"
                  >
                    <MessageSquare className="w-3 h-3 text-[#d4ff00]" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commercial Disclaimer */}
        <div className="text-center text-xs font-mono text-zinc-500 max-w-xl mx-auto">
          {siteConfig.pricingDisclaimer}
        </div>
      </div>
    </section>
  );
}
