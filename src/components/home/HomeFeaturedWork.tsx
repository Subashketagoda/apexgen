'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomeFeaturedWork() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-16 sm:py-28 px-4 sm:px-8 md:px-12 max-w-[1600px] mx-auto scroll-mt-24">
      <div className="absolute inset-0 section-works-bg rounded-[2rem] pointer-events-none z-0" />
      <div className="absolute left-[10%] top-[8%] w-[480px] h-[480px] rounded-full bg-[#8B5CF6]/10 blur-[130px] pointer-events-none z-0" />

      {/* Editorial Exhibition Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between pb-10 sm:pb-16 border-b border-white/[0.08] gap-6 sm:gap-8 mb-12 sm:mb-24">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-[#8B8B96] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>02 / SELECTED WORK • ART GALLERY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-[6.4vw] font-black tracking-tight text-[#F5F5F7] uppercase leading-[0.92]">
            Selected work. <br />
            <span className="text-gradient-silver">Real digital experiences.</span>
          </h2>
        </div>

        <div className="max-w-md space-y-4">
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Every digital flagship is conceived as a bespoke spatial art piece. Zero generic templates. Built with rigorous Next.js 16 edge architecture for category leaders.
          </p>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            FOUR PRODUCTION CASE STUDIES // LIVE CLIENTS
          </div>
        </div>
      </div>

      {/* ASYMMETRIC GALLERY LAYOUT */}
      <div className="relative z-10 space-y-16 sm:space-y-28">
        
        {/* ========================================================
            PROJECT 01: CARGO PIZZA
            Composition: 70% Viewport Width Visual on Left + Vertical Metadata on Right
           ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setHoveredProject('cargo-pizza')}
          onMouseLeave={() => setHoveredProject(null)}
          data-cursor="open"
          className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Ambient Lighting on Hover */}
          <div className="absolute -inset-10 bg-amber-500/5 rounded-3xl blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Left: 70% Dominant Visual */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden glass-project-frame group-hover:border-[#8B5CF6]/45 transition-all duration-700">
              <Image
                src="/images/projects/cargo-pizzeria-real.png"
                alt="Cargo Pizza Digital Flagship"
                fill
                sizes="(max-width: 1280px) 100vw, 1100px"
                className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Verified Tag Badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>DIRECT WHATSAPP ORDERING ENGINE</span>
              </div>
            </div>
          </div>

          {/* Right: Vertical Editorial Metadata & Big Typography */}
          <div className="lg:col-span-4 space-y-8 relative z-10">
            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-500">
              <span className="text-xl text-white font-bold">01</span>
              <span>//</span>
              <span className="text-amber-400 uppercase tracking-widest">FOOD & COMMERCE</span>
              <span>•</span>
              <span>2024</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-4xl sm:text-6xl font-light text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                CARGO <br />
                <span className="font-normal text-amber-200">PIZZA.</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                A cinematic restaurant flagship featuring instant dynamic menu curation, zero-commission WhatsApp cart checkout, and sub-second edge distribution.
              </p>
            </div>

            {/* Vertical Specs Metadata */}
            <div className="space-y-2 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">CLIENT</span>
                <span className="text-white">CARGO PIZZA COLOMBO</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">ARCHITECTURE</span>
                <span className="text-white">NEXT.JS 16 • TAILWIND</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">COMMISSION CUT</span>
                <span className="text-emerald-400">0% SAVED</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://cargopizzeria.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-physical text-xs font-mono text-zinc-200 hover:text-white"
              >
                <span>LIVE PLATFORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/work/cargo-pizza"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-physical-white text-xs font-mono font-bold tracking-wider"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.article>


        {/* ========================================================
            PROJECT 02: 69 STUDIO
            Composition: Inverted Layout — Right 65% Visual + Left Monumental Typography
           ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setHoveredProject('69-studio')}
          onMouseLeave={() => setHoveredProject(null)}
          data-cursor="open"
          className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Ambient Lighting on Hover */}
          <div className="absolute -inset-10 bg-[#3B82F6]/10 rounded-3xl blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Left: Monumental Offset Typography & Specs */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1 relative z-10">
            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-500">
              <span className="text-xl text-[#F5F5F7] font-bold">02</span>
              <span>//</span>
              <span className="text-[#3B82F6] uppercase tracking-widest">CREATIVE AGENCY</span>
              <span>•</span>
              <span>2024</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-4xl sm:text-6xl font-light text-white uppercase tracking-tight group-hover:-translate-x-2 transition-transform duration-500">
                69 <br />
                <span className="font-normal text-sky-200">STUDIO.</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                A dark obsidian creative agency showcase. Built with tactile spatial typography, responsive 3D perspective grids, and ultra-fluid micro-interactions.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">CLIENT</span>
                <span className="text-white">69 STUDIO CREATIVE</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">AESTHETIC</span>
                <span className="text-white">SPATIAL OBSIDIAN</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">MOTION</span>
                <span className="text-sky-300">GPU ACCELERATED</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://69studiobysubash.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-physical text-xs font-mono text-zinc-200 hover:text-white"
              >
                <span>LIVE PLATFORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/work/69-studio"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-physical-white text-xs font-mono font-bold tracking-wider"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Viewport Visual Frame */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden glass-project-frame group-hover:border-[#3B82F6]/45 transition-all duration-700">
              <Image
                src="/images/projects/69-studio-real.png"
                alt="69 Studio Flagship"
                fill
                sizes="(max-width: 1280px) 100vw, 1000px"
                className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-sky-300">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>SPATIAL 3D DIGITAL SHOWCASE</span>
              </div>
            </div>
          </div>
        </motion.article>


        {/* ========================================================
            PROJECT 03: DINEPRO ADVISERS
            Composition: Monumental Wide Panoramic Visual + Bottom Coordinates Strip
           ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setHoveredProject('dinepro-advisors')}
          onMouseLeave={() => setHoveredProject(null)}
          data-cursor="open"
          className="group relative space-y-8"
        >
          <div className="absolute -inset-10 bg-yellow-500/5 rounded-3xl blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Panoramic Wide Visual (75% Viewport Dominance) */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[1.6rem] overflow-hidden glass-project-frame group-hover:border-[#8B5CF6]/40 transition-all duration-700">
            <Image
              src="/images/projects/dinepro-advisors-real.png"
              alt="DinePro Advisers Luxury Advisory"
              fill
              sizes="(max-width: 1600px) 100vw, 1500px"
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

            {/* Overlaid Headline & Client */}
            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
              <div className="space-y-2">
                <div className="text-xs font-mono text-yellow-400 uppercase tracking-widest">
                  03 // HOSPITALITY CONSULTING FLAGSHIP
                </div>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight">
                  DINEPRO <span className="font-normal text-yellow-100">ADVISERS.</span>
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://dineproadvisors.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full btn-physical text-xs font-mono text-white flex items-center gap-2"
                >
                  <span>LIVE PLATFORM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/work/dinepro-advisors"
                  className="px-6 py-2.5 rounded-full btn-physical-white text-xs font-mono font-bold tracking-wider flex items-center gap-2"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>


        {/* ========================================================
            PROJECT 04: NOT AMANTHA PERERA
            Composition: Split Asymmetric Spread + Media Platform Feel
           ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setHoveredProject('not-amantha-perera')}
          onMouseLeave={() => setHoveredProject(null)}
          data-cursor="open"
          className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="absolute -inset-10 bg-[#8B5CF6]/10 rounded-3xl blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Left: 70% Viewport Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden glass-project-frame group-hover:border-[#8B5CF6]/45 transition-all duration-700">
              <Image
                src="/images/projects/not-amantha-perera.png"
                alt="Not Amantha Perera Content Platform"
                fill
                sizes="(max-width: 1280px) 100vw, 1000px"
                className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-violet-300">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>CONTENT ARCHITECTURE & BRAND FLAGSHIP</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Direct Link */}
          <div className="lg:col-span-5 space-y-8 relative z-10">
            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-500">
              <span className="text-xl text-[#F5F5F7] font-bold">04</span>
              <span>//</span>
              <span className="text-[#8B5CF6] uppercase tracking-widest">PERSONAL BRAND & MEDIA</span>
              <span>•</span>
              <span>2024</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-4xl sm:text-6xl font-light text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                NOT AMANTHA <br />
                <span className="font-normal text-violet-200">PERERA.</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                A bespoke personal media and content flagship. Tailored with clean mobile ergonomics, fluid video embeds, and sub-second edge distribution.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">PLATFORM</span>
                <span className="text-white">NOTAMANTHAPERERA.ONLINE</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-500">ERGONOMICS</span>
                <span className="text-white">100% FLUID MOBILE FIRST</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://notamanthaperera.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-physical text-xs font-mono text-zinc-200 hover:text-white"
              >
                <span>LIVE PLATFORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/work/not-amantha-perera"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-physical-white text-xs font-mono font-bold tracking-wider"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  );
}
