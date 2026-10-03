'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Lock, CheckCircle2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';

export function HomeFeaturedWork() {
  return (
    <section id="work" className="py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-6"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF6B35] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
            <span>PORTFOLIO &bull; CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-white uppercase font-mono leading-[1.05]">
            SELECTED WORK. REAL DIGITAL EXPERIENCES.
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Real production digital experiences engineered by ApexGen. Handcrafted for prestige, conversion, and global speed.
          </p>
        </div>
      </motion.div>

      {/* Cinematic Project Presentations */}
      <div className="divide-y divide-white/10">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            data-cursor="view"
            className="py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
          >
            {/* Left: Project Metadata & Editorial Info (5-col) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-4 text-xs font-mono text-neutral-400 uppercase tracking-widest">
                <span className="text-[#FF6B35] font-bold text-sm">0{index + 1}</span>
                <span>/</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                  {project.category}
                </span>
                <span>/</span>
                <span>{project.year}</span>
              </div>

              <h3 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase font-mono group-hover:text-[#FF6B35] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-base text-neutral-300 font-light leading-relaxed">
                {project.description}
              </p>

              {/* Delivered Highlights */}
              <div className="space-y-2 pt-2">
                {project.deliveredFeatures.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF6B35] hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white hover:border-white transition-all"
                >
                  <Globe className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>VISIT LIVE SITE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Right: Realistic Safari/Chrome Browser Frame with Real Screenshot (7-col) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#09090b] border border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,107,53,0.08)] group-hover:border-[#FF6B35]/50 transition-all duration-500">
                {/* Browser Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  </div>

                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300 max-w-[260px] truncate">
                    <Lock className="w-3 h-3 text-[#27C93F] shrink-0" />
                    <span className="text-white truncate">https://{project.domain}</span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#27C93F] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
                    <span className="hidden sm:inline">LIVE</span>
                  </div>
                </div>

                {/* Real Website Screenshot */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-black"
                >
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} — ${project.category} website designed and engineered by ApexGen and Subhash Ketagoda`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-white flex items-center space-x-1.5">
                    <span>EXPLORE PROJECT</span>
                    <ArrowRight className="w-3 h-3 text-[#FF6B35]" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="pt-12 text-center border-t border-white/10">
        <Link
          href="/work"
          className="inline-flex items-center space-x-2 px-8 py-4 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
        >
          <span>EXPLORE COMPLETE PORTFOLIO DOSSIER</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
