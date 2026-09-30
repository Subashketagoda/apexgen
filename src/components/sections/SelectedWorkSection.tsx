'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export function SelectedWorkSection() {
  const shouldReduceMotion = useReducedMotion();
  const projects = siteConfig.realProjects;

  const project1 = projects[0]; // Cargo Pizza — cargopizzeria.online
  const project2 = projects[1]; // 69 Studio by Subash — 69studiobysubash.online
  const project3 = projects[2]; // DinePro Advisers — dineproadvisors.online

  return (
    <section id="work" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>SELECTED WORK &bull; REAL CLIENT FLAGSHIPS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              SELECTED WORK
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Bespoke websites engineered for real ambitious businesses. Handcrafted art direction, sub-second speed, and conversion-focused UX.
            </p>
          </div>
        </div>

        {/* Large Asymmetric Editorial Rhythm */}
        <div className="mt-16 sm:mt-24 space-y-28 sm:space-y-36">
          {/* ========================================================================= */}
          {/* PROJECT 01 — CARGO PIZZA (Full-Width Cinematic Showcase)                  */}
          {/* ========================================================================= */}
          {project1 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group space-y-7"
            >
              {/* Image Frame with Subtle Zoom, Fine Animated Border & Cursor View */}
              <Link
                href={`/work/${project1.slug}`}
                data-cursor="project"
                className="relative block w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 group-hover:border-white/30 transition-colors duration-500 bg-[#090a0f] cursor-pointer"
              >
                <Image
                  src={project1.heroImage}
                  alt={`${project1.title} Website Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Project Number Watermark */}
                <div className="absolute top-6 sm:top-10 left-6 sm:left-10 font-mono text-6xl sm:text-8xl md:text-9xl font-light text-white/15 select-none pointer-events-none">
                  01
                </div>

                {/* Live Domain Pill */}
                <div className="absolute top-6 right-6 hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{project1.domain || 'cargopizzeria.online'}</span>
                </div>

                {/* Hover CTA Pill */}
                <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <span>View Project →</span>
                </div>
              </Link>

              {/* Editorial Meta Details & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
                <div className="md:col-span-5 space-y-2">
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    <span>01</span>
                    <span>&bull;</span>
                    <span className="text-neutral-400">{project1.category}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    <Link href={`/work/${project1.slug}`}>
                      {project1.title}
                    </Link>
                  </h3>
                </div>

                <div className="md:col-span-4 space-y-3">
                  <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    {project1.description}
                  </p>
                  {/* Technology & Service Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project1.technologies?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-center space-x-4">
                  <a
                    href={project1.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors py-1.5 px-3 rounded-full border border-white/10 hover:border-white/30"
                  >
                    <span>cargopizzeria.online</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                  <Link
                    href={`/work/${project1.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-mono text-white uppercase tracking-wider hover:underline underline-offset-4 group/link"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PROJECT 02 — 69 STUDIO BY SUBASH (Asymmetric Split Layout)                 */}
          {/* ========================================================================= */}
          {project2 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
            >
              {/* Left Column: Editorial Details & Tags */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    <span>02</span>
                    <span>&bull;</span>
                    <span className="text-neutral-400">{project2.category}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    <Link href={`/work/${project2.slug}`}>
                      {project2.title}
                    </Link>
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {project2.projectType}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  {project2.description}
                </p>

                {/* Technology & Service Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project2.technologies?.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/work/${project2.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all group/btn"
                  >
                    <span>View Project →</span>
                  </Link>
                  <a
                    href={project2.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors py-2 px-3 rounded-full border border-white/10 hover:border-white/30"
                  >
                    <span>69studiobysubash.online</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <Link
                  href={`/work/${project2.slug}`}
                  data-cursor="project"
                  className="relative block w-full aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 group-hover:border-white/30 transition-colors duration-500 bg-[#090a0f] cursor-pointer"
                >
                  <Image
                    src={project2.heroImage}
                    alt={`${project2.title} Website Screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-6 left-6 font-mono text-6xl sm:text-8xl font-light text-white/15 select-none pointer-events-none">
                    02
                  </div>
                  <div className="absolute bottom-6 right-6 flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <span>View Project →</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PROJECT 03 — DINEPRO ADVISERS (Asymmetric Layout)                         */}
          {/* ========================================================================= */}
          {project3 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
            >
              {/* Left Column: Visual Preview */}
              <div className="lg:col-span-7">
                <Link
                  href={`/work/${project3.slug}`}
                  data-cursor="project"
                  className="relative block w-full aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 group-hover:border-white/30 transition-colors duration-500 bg-[#090a0f] cursor-pointer"
                >
                  <Image
                    src={project3.heroImage}
                    alt={`${project3.title} Website Screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-6 left-6 font-mono text-6xl sm:text-8xl font-light text-white/15 select-none pointer-events-none">
                    03
                  </div>
                  <div className="absolute bottom-6 right-6 flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <span>View Project →</span>
                  </div>
                </Link>
              </div>

              {/* Right Column: Editorial Details & Tags */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    <span>03</span>
                    <span>&bull;</span>
                    <span className="text-neutral-400">{project3.category}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    <Link href={`/work/${project3.slug}`}>
                      {project3.title}
                    </Link>
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {project3.projectType}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  {project3.description}
                </p>

                {/* Technology & Service Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project3.technologies?.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/work/${project3.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all group/btn"
                  >
                    <span>View Project →</span>
                  </Link>
                  <a
                    href={project3.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors py-2 px-3 rounded-full border border-white/10 hover:border-white/30"
                  >
                    <span>dineproadvisors.online</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
