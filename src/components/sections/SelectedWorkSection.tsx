'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { ArrowUpRight } from 'lucide-react';

export function SelectedWorkSection() {
  const shouldReduceMotion = useReducedMotion();
  const projects = siteConfig.realProjects;

  const project1 = projects[0]; // Cargo Pizzeria
  const project2 = projects[1]; // 69 Studio
  const project3 = projects[2]; // DinePro Advisors

  return (
    <section id="work" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>SELECTED WORK &bull; PRODUCTION BUILDS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              SELECTED WORK
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Real websites engineered for ambitious businesses. Built with bespoke art direction, sub-second speed, and high customer conversion.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Projects Rhythm */}
        <div className="mt-16 sm:mt-24 space-y-24 sm:space-y-36">
          {/* ========================================================================= */}
          {/* PROJECT 01 — CARGO PIZZERIA (Full-Width Visually Dominant)                 */}
          {/* ========================================================================= */}
          {project1 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group space-y-6"
            >
              {/* Image Container with Zoom and Custom Cursor View Overlay */}
              <Link
                href={`/work/${project1.slug}`}
                data-cursor="project"
                className="relative block w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0a0a0f] cursor-pointer"
              >
                <Image
                  src={project1.heroImage}
                  alt={`${project1.title} Website Presentation`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Project Number Watermark */}
                <div className="absolute top-6 sm:top-10 left-6 sm:left-10 font-mono text-6xl sm:text-8xl md:text-9xl font-light text-white/20 select-none pointer-events-none">
                  01
                </div>

                {/* Hover CTA pill overlay */}
                <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              {/* Editorial Meta Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-4">
                <div className="md:col-span-6 space-y-2">
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    <span>01</span>
                    <span>&bull;</span>
                    <span>{project1.category}</span>
                    <span>&bull;</span>
                    <span>{project1.projectType}</span>
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-light tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    <Link href={`/work/${project1.slug}`}>
                      {project1.title}
                    </Link>
                  </h3>
                </div>

                <div className="md:col-span-4 space-y-3">
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {project1.description}
                  </p>
                </div>

                <div className="md:col-span-2 flex md:justify-end">
                  <a
                    href={project1.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors py-1 border-b border-white/20 hover:border-white"
                  >
                    <span>LIVE SITE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PROJECT 02 — 69 STUDIO (Offset Asymmetrical Layout)                       */}
          {/* ========================================================================= */}
          {project2 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
            >
              {/* Left Column: Editorial Details */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    <span>02</span>
                    <span>&bull;</span>
                    <span>{project2.category}</span>
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-light tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    <Link href={`/work/${project2.slug}`}>
                      {project2.title}
                    </Link>
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 uppercase">
                    {project2.projectType}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  {project2.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/work/${project2.slug}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={project2.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors py-2 border-b border-white/20 hover:border-white"
                  >
                    <span>LIVE SITE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <Link
                  href={`/work/${project2.slug}`}
                  data-cursor="project"
                  className="relative block w-full aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0a0a0f] cursor-pointer"
                >
                  <Image
                    src={project2.heroImage}
                    alt={`${project2.title} Website Presentation`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 font-mono text-6xl sm:text-8xl font-light text-white/20 select-none pointer-events-none">
                    02
                  </div>
                  <div className="absolute bottom-6 right-6 flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PROJECT 03 — DINEPRO ADVISORS (Large Visual Presentation)                  */}
          {/* ========================================================================= */}
          {project3 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group space-y-6"
            >
              {/* Image Container with Zoom and Custom Cursor View Overlay */}
              <Link
                href={`/work/${project3.slug}`}
                data-cursor="project"
                className="relative block w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0a0a0f] cursor-pointer"
              >
                <Image
                  src={project3.heroImage}
                  alt={`${project3.title} Website Presentation`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 sm:top-10 left-6 sm:left-10 font-mono text-6xl sm:text-8xl md:text-9xl font-light text-white/20 select-none pointer-events-none">
                  03
                </div>
                <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              {/* Editorial Meta Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-4">
                <div className="md:col-span-6 space-y-2">
                  <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    <span>03</span>
                    <span>&bull;</span>
                    <span>{project3.category}</span>
                    <span>&bull;</span>
                    <span>{project3.projectType}</span>
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-light tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    <Link href={`/work/${project3.slug}`}>
                      {project3.title}
                    </Link>
                  </h3>
                </div>

                <div className="md:col-span-4 space-y-3">
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {project3.description}
                  </p>
                </div>

                <div className="md:col-span-2 flex md:justify-end">
                  <a
                    href={project3.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors py-1 border-b border-white/20 hover:border-white"
                  >
                    <span>LIVE SITE</span>
                    <ArrowUpRight className="w-3 h-3" />
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
