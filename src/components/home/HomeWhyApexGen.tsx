'use client';

import React from 'react';
import {
  Palette,
  Smartphone,
  Users2,
  Zap,
  Search,
  MessageSquareCheck,
  ShieldCheck,
  Check,
} from 'lucide-react';

export function HomeWhyApexGen() {
  const highlights = [
    {
      title: 'Custom Visual Direction',
      icon: Palette,
      desc: 'Bespoke typography, tailored color palettes, and unique interface tokens designed from scratch in Figma. Zero recycled templates.',
    },
    {
      title: 'Responsive Mobile Ergonomics',
      icon: Smartphone,
      desc: 'Layouts engineered specifically for thumb navigation, touch targets, and rapid single-hand interaction on any smartphone viewport.',
    },
    {
      title: 'User-Focused Experiences',
      icon: Users2,
      desc: 'Intuitive navigation paths, clear typographic hierarchy, and low cognitive friction designed to guide casual visitors into paying clients.',
    },
    {
      title: 'Sub-Second Performance',
      icon: Zap,
      desc: 'Built on Next.js edge architecture with sub-second page transitions, automated asset optimization, and zero bloated plugins.',
    },
    {
      title: 'SEO-Ready Foundations',
      icon: Search,
      desc: 'Full Schema.org JSON-LD structured data, dynamic XML sitemaps, semantic HTML5, and Google Core Web Vitals 95+ compliance.',
    },
    {
      title: 'Direct, Clear Communication',
      icon: MessageSquareCheck,
      desc: 'Transparent sprint updates and direct communication with studio leadership via WhatsApp and email. No agency bureaucracy.',
    },
    {
      title: 'Ongoing Support & Warranty',
      icon: ShieldCheck,
      desc: 'Post-launch technical warranty, DNS/domain supervision, uptime monitoring, and proactive continuous maintenance options.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF6B35]/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="max-w-4xl space-y-6 mb-20 sm:mb-28">
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-xs font-mono text-[#FF6B35] tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
          <span>WHY APEXGEN</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-white uppercase font-mono leading-[1.05]">
          BUILT WITH PURPOSE. DESIGNED WITH DETAIL.
        </h2>

        <p className="text-base sm:text-xl text-neutral-400 font-sans leading-relaxed max-w-3xl">
          Every decision we make—from typography kerning to serverless function latency—is made to elevate your brand&apos;s perception and maximize conversion. Here is what defines our studio practice.
        </p>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-[#0F0F12] border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-300 space-y-5 group ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FF6B35]/40 transition-colors">
                  <Icon className="w-5 h-5 text-neutral-300 group-hover:text-[#FF6B35] transition-colors" />
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#FF6B35]">
                  <Check className="w-3.5 h-3.5" />
                  <span>VERIFIED CRAFT</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-light font-mono text-white uppercase tracking-tight group-hover:text-[#FF6B35] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
