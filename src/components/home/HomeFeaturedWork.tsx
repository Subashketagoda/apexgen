'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/projects';

export function HomeFeaturedWork() {
  return (
    <section id="work" className="py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase font-mono">
            FLAGSHIPS
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Digital experiences designed and built by ApexGen. Handcrafted for commercial conversion and brand prestige.
          </p>
        </div>
      </div>

      {/* Cinematic Project Presentations */}
      <div className="divide-y divide-white/10">
        {projectsData.map((project, index) => (
          <article
            key={project.id}
            data-cursor="view"
            className="py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
          >
            {/* Left: Project Metadata & Editorial Info (5-col) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <span className="text-[#FF5E00] font-bold">0{index + 1}</span>
                <span>/</span>
                <span>{project.category}</span>
                <span>/</span>
                <span>{project.year}</span>
              </div>

              <h3 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase font-mono group-hover:text-[#FF7A1A] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-base text-neutral-400 font-light leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center space-x-6">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#FF5E00] transition-colors py-2"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors py-2"
                >
                  <span>VISIT LIVE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E00]" />
                </a>
              </div>
            </div>

            {/* Right: Immersive Editorial Visual Hero (7-col) */}
            <div className="lg:col-span-7">
              <Link
                href={`/work/${project.slug}`}
                className="block relative aspect-[16/10] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-[#FF5E00]/40 transition-all duration-500 shadow-2xl"
              >
                <Image
                  src={project.heroImage}
                  alt={`${project.title} Showcase`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-white flex items-center space-x-2">
                  <span>{project.domain}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E00]" />
                </div>
              </Link>
            </div>
          </article>
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
