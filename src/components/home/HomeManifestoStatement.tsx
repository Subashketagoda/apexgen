'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function HomeManifestoStatement() {
  const comparisons = [
    {
      domain: 'CODEBASE ARCHITECTURE',
      industry: 'Recycled WordPress themes, 40+ third-party plugins, slow database queries.',
      apexgen: 'Clean Next.js App Router, Turbopack, and zero bloated plugins.',
    },
    {
      domain: 'LOADING VELOCITY',
      industry: '3.5s to 6.0s load times resulting in 50%+ bounce rates on mobile.',
      apexgen: 'Sub-second (< 0.8s) worldwide delivery via global Edge CDN routing.',
    },
    {
      domain: 'DESIGN AUTHENTICITY',
      industry: 'Generic corporate templates that make your brand look identical to competitors.',
      apexgen: '100% bespoke art direction crafted specifically for your commercial niche.',
    },
    {
      domain: 'CONVERSION INTENT',
      industry: 'Clumsy email forms that go into spam folders with zero mobile focus.',
      apexgen: 'Direct 1-click WhatsApp checkout funnels and frictionless reservation engines.',
    },
    {
      domain: 'TECHNICAL DISCOVERABILITY',
      industry: 'Ignored or basic meta tags with zero structured data schema.',
      apexgen: 'Google Schema.org JSON-LD (LocalBusiness, Organization) and OpenGraph out of the box.',
    },
    {
      domain: 'STUDIO RELATIONSHIP',
      industry: 'Junior account managers and opaque communication with weeks of silence.',
      apexgen: 'Direct direction and technical partnership with founder Subhash Ketagoda.',
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#08080a] border-b border-white/[0.08] overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-20 sm:space-y-28">
        
        {/* Full-Screen Scale Statement Header */}
        <div className="space-y-8 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
            <span>[ AXIOM // THE APEXGEN DIFFERENCE ]</span>
          </div>

          <h2 className="text-monolith text-white font-black leading-[0.92]">
            <span className="block text-zinc-500">GOOD DESIGN GETS ATTENTION.</span>
            <span className="block text-white">GREAT EXPERIENCES</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#d4ff00]">
              MOVE PEOPLE TO ACT.
            </span>
          </h2>

          <p className="text-lg sm:text-2xl text-zinc-300 font-light max-w-3xl leading-relaxed">
            Most business websites fail not because of aesthetics, but because they are slow, difficult to navigate on mobile, and disconnected from real commercial customer behavior. We engineered ApexGen to solve this.
          </p>
        </div>

        {/* Asymmetrical Ledger: The Standard Agency Way vs. The ApexGen Engine */}
        <div className="bg-[#0e0f14] border border-white/[0.1] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/[0.08] bg-[#14161f] text-xs font-mono">
            <div className="md:col-span-3 p-4 sm:p-6 text-zinc-400 font-bold uppercase tracking-wider">
              ENGINEERING CRITERIA
            </div>
            <div className="md:col-span-4 p-4 sm:p-6 text-zinc-500 border-t md:border-t-0 md:border-l border-white/[0.08] uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-zinc-500" />
              <span>THE STANDARD AGENCY WAY</span>
            </div>
            <div className="md:col-span-5 p-4 sm:p-6 text-[#d4ff00] border-t md:border-t-0 md:border-l border-white/[0.08] uppercase tracking-wider font-bold flex items-center gap-2 bg-[#d4ff00]/[0.03]">
              <ShieldCheck className="w-4 h-4 text-[#d4ff00]" />
              <span>THE APEXGEN STANDARD</span>
            </div>
          </div>

          {/* Ledger Rows */}
          <div className="divide-y divide-white/[0.06]">
            {comparisons.map((c, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm transition-colors hover:bg-white/[0.01]"
              >
                {/* Domain */}
                <div className="md:col-span-3 p-4 sm:p-6 font-mono font-bold text-white flex items-center">
                  <span>{c.domain}</span>
                </div>

                {/* Industry */}
                <div className="md:col-span-4 p-4 sm:p-6 text-zinc-500 font-light leading-relaxed border-t md:border-t-0 md:border-l border-white/[0.06] flex items-center gap-3">
                  <X className="w-4 h-4 text-zinc-600 shrink-0 hidden sm:block" />
                  <span>{c.industry}</span>
                </div>

                {/* ApexGen */}
                <div className="md:col-span-5 p-4 sm:p-6 text-zinc-200 font-medium leading-relaxed border-t md:border-t-0 md:border-l border-white/[0.06] flex items-center gap-3 bg-[#d4ff00]/[0.02]">
                  <Check className="w-4 h-4 text-[#d4ff00] shrink-0 hidden sm:block" />
                  <span>{c.apexgen}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Signature Statement Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0e0f14] border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
              STUDIO CREED &bull; SUBHASH KETAGODA
            </div>
            <div className="text-xl font-bold text-white tracking-tight">
              &ldquo;We partner with a selective roster of brands each quarter to ensure focused creative direction, zero delegation to junior contractors, and sub-second execution.&rdquo;
            </div>
          </div>

          <a
            href="#contact"
            className="btn-volt py-3.5 px-8 text-xs font-mono font-bold whitespace-nowrap"
          >
            <span>RESERVE Q2 ENGAGEMENT</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
