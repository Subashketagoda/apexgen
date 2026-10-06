'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, Check, Smartphone, Utensils, Monitor, Building2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { ProjectCaseStudy } from '@/types';
import { ProjectDetailModal } from '@/components/projects/ProjectDetailModal';

export function HomeFeaturedWork() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const cargoPizza = siteConfig.realProjects.find((p) => p.id === 'cargo-pizzeria') || siteConfig.realProjects[0];
  const studio69 = siteConfig.realProjects.find((p) => p.id === '69-studio') || siteConfig.realProjects[1];
  const dinepro = siteConfig.realProjects.find((p) => p.id === 'dinepro-advisors') || siteConfig.realProjects[2];

  return (
    <>
      <section id="work" className="relative py-24 sm:py-36 bg-[#08080a] border-b border-white/[0.08] overflow-hidden">
        {/* Background architectural grid */}
        <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-24 sm:space-y-36">
          
          {/* Section Masthead: Architectural Index */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/[0.08]">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
                <span>[ EXHIBIT // PRODUCTION SPECIMENS ]</span>
              </div>
              <h2 className="text-section-title text-white">
                VERIFIED PRODUCTION BUILDS
              </h2>
            </div>
            <div className="max-w-md space-y-2 font-mono text-xs text-zinc-400">
              <p>
                Each project in our archive is an active production website engineered with custom Next.js architecture, real-time conversion systems, and sub-second edge speeds.
              </p>
              <div className="text-[10px] text-zinc-500 uppercase">
                NO CONCEPT PLACEHOLDERS • ZERO RECYCLED TEMPLATES
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              EXHIBIT 01: CARGO PIZZA (Food & Hospitality / WhatsApp Commerce)
              Asymmetric composition: Left heavy visual, Right architectural docket
             ───────────────────────────────────────────────────────────── */}
          <article className="relative bg-[#0e0f14] border border-white/[0.1] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Visual Showcase (7 cols) */}
              <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[500px] lg:min-h-[580px] bg-[#050507] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#08080a]/90 border border-amber-500/30 text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">
                    01 // GASTRONOMY & COMMERCE
                  </span>
                  <a
                    href={cargoPizza.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:border-[#d4ff00] transition-colors"
                  >
                    <span>{cargoPizza.domain}</span>
                    <ExternalLink className="w-3 h-3 text-[#d4ff00]" />
                  </a>
                </div>

                {/* Primary Screen Device Mockup */}
                <div className="relative my-auto w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl group cursor-pointer bg-black"
                  onClick={() => setActiveModalProject(cargoPizza)}
                >
                  {cargoPizza.videoUrl ? (
                    <video
                      src={cargoPizza.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={cargoPizza.heroImage}
                      alt="Cargo Pizza live production platform"
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Touch Pill */}
                  <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[#08080a]/90 border border-white/[0.2] text-[10px] font-mono text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
                    <span>GALAXY S24 ULTRA RECORDING &bull; LIVE MOBILE COMMERCE</span>
                  </div>
                </div>

                {/* Bottom Spec Footer */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 z-10">
                  <span>HOSTED: GLOBAL EDGE CDN</span>
                  <span>SPEED: 0.74s FCP</span>
                </div>
              </div>

              {/* Architectural Docket (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#0e0f14]">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      WOODFIRED PIZZA FLAGSHIP
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                      {cargoPizza.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    {cargoPizza.overview}
                  </p>

                  {/* Challenge & Commercial Impact Box */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      THE COMMERCIAL PROBLEM SOLVED:
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {cargoPizza.challenge}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      KEY DELIVERABLES
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
                      {cargoPizza.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#d4ff00] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(cargoPizza.technologies || []).map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-[#14161f] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(cargoPizza)}
                    className="btn-volt text-xs py-3.5 px-6 flex items-center gap-2 font-bold cursor-pointer relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-laser-sweep pointer-events-none" />
                    <span className="relative z-10">EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
                  </button>

                  <a
                    href={cargoPizza.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-architectural text-xs py-3.5 px-5 flex items-center gap-2 hover:border-[#d4ff00]/40 transition-colors"
                  >
                    <span>VISIT LIVE</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* ─────────────────────────────────────────────────────────────
              EXHIBIT 02: 69 STUDIO BY SUBHASH (Creative Tech & POS Systems)
              Reverse asymmetric composition: Docket on Left, Deep Visual on Right
             ───────────────────────────────────────────────────────────── */}
          <article className="relative bg-[#0e0f14] border border-white/[0.1] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Architectural Docket (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#0e0f14] order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/[0.08]">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
                      CREATIVE TECHNOLOGY & POS SYSTEMS
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                      {studio69.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    {studio69.overview}
                  </p>

                  {/* Challenge Box */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      SYSTEM CAPABILITY SHOWCASE:
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      Custom inventory & point of sale software showcase paired with obsidian cybernetic motion design and multi-channel lead capture.
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      ENGINEERING SCOPE
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
                      {studio69.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(studio69.technologies || []).map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-[#14161f] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(studio69)}
                    className="btn-volt text-xs py-3.5 px-6 flex items-center gap-2 font-bold cursor-pointer relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-laser-sweep pointer-events-none" />
                    <span className="relative z-10">EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
                  </button>

                  <a
                    href={studio69.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-architectural text-xs py-3.5 px-5 flex items-center gap-2 hover:border-[#00f0ff]/40 transition-colors"
                  >
                    <span>VISIT LIVE</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Visual Showcase (7 cols) */}
              <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[500px] lg:min-h-[580px] bg-[#050507] p-6 sm:p-10 flex flex-col justify-between order-1 lg:order-2">
                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#08080a]/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                    02 // CREATIVE ENGINEERING
                  </span>
                  <a
                    href={studio69.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:border-[#00f0ff] transition-colors"
                  >
                    <span>{studio69.domain}</span>
                    <ExternalLink className="w-3 h-3 text-[#00f0ff]" />
                  </a>
                </div>

                {/* Primary Screen Device Mockup */}
                <div className="relative my-auto w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl group cursor-pointer bg-black"
                  onClick={() => setActiveModalProject(studio69)}
                >
                  <Image
                    src={studio69.heroImage}
                    alt="69 Studio by Subhash production platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Cybernetic Scanline Overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-50">
                    <div className="w-full h-12 bg-gradient-to-b from-transparent via-[#00f0ff]/15 to-transparent animate-scanline" />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#08080a]/90 border border-white/[0.2] text-[10px] font-mono text-zinc-300">
                    OBSIDIAN INTERFACE &bull; BESPOKE POS SOLUTIONS
                  </div>
                </div>

                {/* Bottom Spec Footer */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 z-10">
                  <span>FOUNDER: SUBHASH KETAGODA</span>
                  <span>SPEED: 0.68s FCP</span>
                </div>
              </div>
            </div>
          </article>

          {/* ─────────────────────────────────────────────────────────────
              EXHIBIT 03: DINEPRO ADVISERS (Hospitality Advisory & Booking)
              Asymmetric composition: Left heavy visual, Right architectural docket
             ───────────────────────────────────────────────────────────── */}
          <article className="relative bg-[#0e0f14] border border-white/[0.1] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Visual Showcase (7 cols) */}
              <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[500px] lg:min-h-[580px] bg-[#050507] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#08080a]/90 border border-yellow-500/30 text-[10px] font-mono text-yellow-300 font-bold uppercase tracking-widest">
                    03 // STRATEGIC CONSULTING
                  </span>
                  <a
                    href={dinepro.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:border-[#d4ff00] transition-colors"
                  >
                    <span>{dinepro.domain}</span>
                    <ExternalLink className="w-3 h-3 text-[#d4ff00]" />
                  </a>
                </div>

                {/* Primary Screen Device Mockup */}
                <div className="relative my-auto w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl group cursor-pointer bg-black"
                  onClick={() => setActiveModalProject(dinepro)}
                >
                  <Image
                    src={dinepro.heroImage}
                    alt="DinePro Advisers production platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Cybernetic Scanline Overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-50">
                    <div className="w-full h-12 bg-gradient-to-b from-transparent via-[#d4ff00]/15 to-transparent animate-scanline" />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#08080a]/90 border border-white/[0.2] text-[10px] font-mono text-zinc-300">
                    ADVISORY CATALOG &bull; ONLINE STRATEGY BOOKING
                  </div>
                </div>

                {/* Bottom Spec Footer */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 z-10">
                  <span>DISCIPLINE: RESTAURANT STRATEGY</span>
                  <span>SPEED: 0.79s FCP</span>
                </div>
              </div>

              {/* Architectural Docket (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#0e0f14]">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-yellow-300 uppercase tracking-widest">
                      RESTAURANT & HOSPITALITY ADVISORY
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                      {dinepro.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    {dinepro.overview}
                  </p>

                  {/* Challenge Box */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      CONVERSION ARCHITECTURE:
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {dinepro.challenge}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      PRACTICE AREA DELIVERABLES
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
                      {dinepro.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#d4ff00] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(dinepro.technologies || []).map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-[#14161f] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(dinepro)}
                    className="btn-volt text-xs py-3.5 px-6 flex items-center gap-2 font-bold cursor-pointer relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-laser-sweep pointer-events-none" />
                    <span className="relative z-10">EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
                  </button>

                  <a
                    href={dinepro.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-architectural text-xs py-3.5 px-5 flex items-center gap-2 hover:border-[#d4ff00]/40 transition-colors"
                  >
                    <span>VISIT LIVE</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Full Case Study Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
}
