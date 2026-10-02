'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { formatPlanWhatsAppUrl } from '@/lib/utils';
import Link from 'next/link';

interface Plan {
  id: string;
  name: string;
  price: string;
  category: string;
  scope: string;
  tagline: string;
  isPopular?: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: 'LKR 49,900+',
    category: 'TIER 01 / ESSENTIAL',
    scope: '1–3 Pages',
    tagline: 'Business websites designed to establish immediate market credibility.',
    features: [
      '1–3 pages',
      'Custom UI/UX',
      'Responsive design',
      'Basic animations',
      'Contact / WhatsApp',
      'Basic SEO',
    ],
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: 'LKR 89,900+',
    category: 'TIER 02 / FLAGSHIP',
    scope: '5–8 Pages',
    tagline: 'Comprehensive digital flagship engineered to present complex services and capture leads.',
    isPopular: true,
    features: [
      '5–8 pages',
      'Advanced UI/UX',
      'Advanced animations',
      'Analytics',
      'CMS / booking',
      'Advanced SEO',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 'LKR 149,900+',
    category: 'TIER 03 / BESPOKE',
    scope: '8–15+ Pages',
    tagline: 'The pinnacle of custom digital craft with bespoke motion, full CMS, and booking systems.',
    features: [
      '8–15+ pages',
      'Premium experience',
      'Advanced animations',
      'CMS',
      'Booking systems',
      'Advanced SEO',
      'Custom functionality',
    ],
  },
];

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string>('business');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050505] scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
              <span>INVESTMENT &bull; TRANSPARENT PROPOSALS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-[#F5F5F5]">
              PRICING
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
              Transparent project scopes. Full codebase ownership, sub-second Next.js architecture, and zero recurring template fees.
            </p>
          </div>
        </div>

        {/* Horizontal Expanding Comparison Interface */}
        <div className="mt-16 sm:mt-20 flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                layout={!shouldReduceMotion}
                onMouseEnter={() => setSelectedPlan(plan.id)}
                onClick={() => setSelectedPlan(plan.id)}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                  isSelected
                    ? 'lg:flex-[1.3] bg-[#0C0E14] border-2 border-[#FF5E00]/50 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(255,94,0,0.15)]'
                    : 'lg:flex-[0.85] bg-[#08080C] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular / Active Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 rounded-full bg-white text-black font-mono text-[9px] uppercase font-bold tracking-widest">
                    MOST POPULAR
                  </div>
                )}

                {plan.id === 'premium' && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 rounded-full bg-[#FF5E00] text-black font-mono text-[9px] uppercase font-bold tracking-widest">
                    BESPOKE FLAGSHIP
                  </div>
                )}

                <div className="space-y-6">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <span className="text-[10px] font-mono tracking-widest text-[#8A8A8A] uppercase">
                      {plan.category}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-[#FF5E00] px-2 py-0.5 rounded-full bg-white/[0.04]">
                      {plan.scope}
                    </span>
                  </div>

                  {/* Plan Name & Price */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-[#F5F5F5] uppercase tracking-tight">
                      {plan.name}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-light text-white tracking-tight font-mono mt-3">
                      {plan.price}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                    <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                      DELIVERABLES:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-2.5 text-xs sm:text-sm font-mono text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#FF5E00] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-8 mt-8 border-t border-white/[0.08]">
                  <Link
                    href="/#contact"
                    className={`w-full py-3.5 px-6 rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                      isSelected
                        ? 'bg-white text-black hover:bg-neutral-200 shadow-xl'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span>START A PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={formatPlanWhatsAppUrl(plan.name, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full border border-white/10 bg-transparent hover:bg-white/5 text-[#8A8A8A] hover:text-white font-mono text-[11px] uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#FF5E00]" />
                    <span>INQUIRE VIA WHATSAPP</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote & Custom Quotation */}
        <div className="mt-12 text-center space-y-2 text-xs font-mono text-[#8A8A8A]">
          <p>Prices are starting estimates. Final quote is customized to your exact project scope and features.</p>
          <p>
            Require custom enterprise architecture or booking integrations?{' '}
            <Link href="/#contact" className="text-white hover:text-[#FF5E00] underline underline-offset-4 transition-colors">
              Request a Bespoke Quotation &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
