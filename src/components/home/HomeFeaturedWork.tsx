'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';

export function HomeFeaturedWork() {
  const cargoPizza = projectsData.find((p) => p.slug === 'cargo-pizza') || projectsData[0];
  const studio69 = projectsData.find((p) => p.slug === '69-studio') || projectsData[1];
  const dinePro = projectsData.find((p) => p.slug === 'dinepro-advisors') || projectsData[2];

  return (
    <section id="work" className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/[0.08] gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>SELECTED CLIENT FLAGSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] text-white uppercase leading-[1.05]">
            Selected work. <br />
            <span className="text-gradient-silver font-normal">Real digital experiences.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Real production digital experiences engineered by ApexGen. Handcrafted with zero templates for market authority, conversion, and global speed.
        </p>
      </div>

      {/* Editorial Composition with Visual Rhythm */}
      <div className="mt-20 sm:mt-28 space-y-32 sm:space-y-44">

        {/* ========================================================
            PROJECT 01: CARGO PIZZA — Huge Heroic Immersive Showcase
            ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl studio-card hover:border-white/[0.22] transition-all p-6 sm:p-10 lg:p-12 overflow-hidden"
        >
          {/* Top Project Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div className="flex items-center space-x-4 text-xs font-mono">
              <span className="text-base text-white font-bold">01</span>
              <span className="text-zinc-600">/</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
                {cargoPizza.category}
              </span>
              <span className="text-zinc-600 hidden sm:inline">/</span>
              <span className="text-zinc-400 hidden sm:inline">{cargoPizza.client}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={cargoPizza.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all"
              >
                <span>Live Flagship</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Project Title & Narrative */}
          <div className="my-8 max-w-3xl space-y-3">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase group-hover:text-zinc-200 transition-colors">
              {cargoPizza.title}
            </h3>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              {cargoPizza.description}
            </p>
          </div>

          {/* Huge Viewport-Dominating Screenshot */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#07070a] border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.8)] my-8">
            <Image
              src={cargoPizza.heroImage || cargoPizza.thumbnail}
              alt={cargoPizza.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Highlights & Technology Pills */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {cargoPizza.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/work/${cargoPizza.slug}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs tracking-wide hover:bg-zinc-200 transition-all self-start lg:self-auto shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.article>


        {/* ========================================================
            PROJECT 02: 69 STUDIO — Asymmetric Offset Studio Presentation
            ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left: Offset Editorial Details Card (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl studio-card hover:border-white/[0.22] transition-all space-y-6">
            <div className="flex items-center space-x-4 text-xs font-mono">
              <span className="text-base text-white font-bold">02</span>
              <span className="text-zinc-600">/</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
                {studio69.category}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight uppercase group-hover:text-zinc-200 transition-colors">
                {studio69.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                {studio69.description}
              </p>
            </div>

            {/* Delivered Features */}
            <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
              {studio69.deliveredFeatures.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {studio69.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href={`/work/${studio69.slug}`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs tracking-wide hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={studio69.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <span>Visit Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right: Asymmetric Large Screenshot Showcase (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/11] rounded-3xl overflow-hidden studio-card border border-white/[0.1] shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
            <Image
              src={studio69.heroImage || studio69.thumbnail}
              alt={studio69.title}
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.article>


        {/* ========================================================
            PROJECT 03: DINEPRO ADVISORS — Large Immersive Corporate Platform
            ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl studio-card hover:border-white/[0.22] transition-all p-6 sm:p-10 lg:p-12 overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div className="flex items-center space-x-4 text-xs font-mono">
              <span className="text-base text-white font-bold">03</span>
              <span className="text-zinc-600">/</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
                {dinePro.category}
              </span>
              <span className="text-zinc-600 hidden sm:inline">/</span>
              <span className="text-zinc-400 hidden sm:inline">{dinePro.client}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={dinePro.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all"
              >
                <span>Live Platform</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Project Title & Narrative */}
          <div className="my-8 max-w-3xl space-y-3">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase group-hover:text-zinc-200 transition-colors">
              {dinePro.title}
            </h3>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              {dinePro.description}
            </p>
          </div>

          {/* Wide Panoramic Screenshot */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#07070a] border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.8)] my-8">
            <Image
              src={dinePro.heroImage || dinePro.thumbnail}
              alt={dinePro.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Highlights & Technologies */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {dinePro.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/work/${dinePro.slug}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs tracking-wide hover:bg-zinc-200 transition-all self-start lg:self-auto shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.article>

      </div>
    </section>
  );
}
