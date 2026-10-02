'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function HeroFloatingShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = siteConfig.realProjects;
  const currentProject = projects[currentIndex];

  const [isHovered, setIsHovered] = useState(false);

  // Subtle auto-advance when not interacting
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, projects.length]);

  return (
    <div
      className="relative w-full max-w-[430px] lg:max-w-[460px] group/showcase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle ApexGen Orange / Obsidian Glow Halo */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF5E00]/20 via-transparent to-[#FF8533]/15 rounded-[28px] blur-2xl opacity-60 group-hover/showcase:opacity-90 transition-opacity duration-700 pointer-events-none" />

      {/* Main Architectural Browser Viewport */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[22px] border border-white/10 bg-[#08080c]/90 backdrop-blur-2xl p-4 shadow-[0_30px_70px_rgba(0,0,0,0.85)] group hover:border-[#FF5E00]/30 transition-all duration-500"
      >
        {/* Browser Top Chrome */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
          {/* Traffic Lights */}
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>

          {/* Simulated Address Bar */}
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-neutral-400 max-w-[210px] truncate select-none">
            <Lock className="w-2.5 h-2.5 text-[#FF5E00] shrink-0" />
            <span className="truncate">{currentProject.domain || currentProject.liveUrl?.replace('https://', '')}</span>
          </div>

          {/* Production Status */}
          <div className="flex items-center space-x-1 text-[10px] font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline text-neutral-300">LIVE</span>
          </div>
        </div>

        {/* Project Thumbnail with Zoom & AnimatePresence */}
        <Link
          href={`/work/${currentProject.slug}`}
          className="block group/screen relative overflow-hidden rounded-[14px] aspect-[16/10] bg-[#0d0e14] border border-white/[0.08] cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
            >
              <Image
                src={currentProject.heroImage}
                alt={currentProject.title}
                fill
                sizes="(max-width: 640px) 380px, 460px"
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/screen:scale-105"
              />
              {/* Subtle top & bottom shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080c]/80 via-transparent to-black/30 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Hover View Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-black font-mono text-[11px] uppercase tracking-wider font-semibold shadow-2xl transition-transform duration-300 group-hover/screen:scale-105">
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Category Chip */}
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-wider text-neutral-300 uppercase">
              {currentProject.category}
            </span>
          </div>
        </Link>

        {/* Project Meta Info */}
        <div className="flex items-center justify-between pt-3.5">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-mono tracking-wider text-white uppercase font-medium">
                {currentProject.title}
              </h4>
            </div>
            <p className="text-[11px] font-mono text-neutral-400 tracking-wide">
              {currentProject.projectType || currentProject.industry}
            </p>
          </div>

          <a
            href={currentProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-[#FF5E00]/50 text-[10px] font-mono tracking-wider text-neutral-300 hover:text-white uppercase transition-all duration-300"
          >
            <span>LIVE</span>
            <ExternalLink className="w-3 h-3 text-[#FF5E00]" />
          </a>
        </div>

        {/* Tabs for 3 Real Flagships */}
        <div className="grid grid-cols-3 gap-1.5 pt-3.5 mt-3.5 border-t border-white/[0.08]">
          {projects.map((p, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={p.id}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(idx);
                }}
                className={`py-1.5 px-2 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.08] border border-[#FF5E00]/40 shadow-[0_0_12px_rgba(255,94,0,0.15)]'
                    : 'bg-transparent border border-transparent hover:bg-white/[0.03]'
                }`}
              >
                <div className="text-[9px] font-mono tracking-widest text-neutral-500">
                  0{idx + 1}
                </div>
                <div
                  className={`text-[10px] font-mono tracking-wider uppercase truncate ${
                    isActive ? 'text-white font-medium' : 'text-neutral-400'
                  }`}
                >
                  {p.title.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Floating Bottom Sub-telemetry Pill */}
      <div className="flex items-center justify-between px-3 pt-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
        <div className="flex items-center space-x-1.5">
          <ShieldCheck className="w-3 h-3 text-[#FF5E00]" />
          <span>PRODUCTION VERIFIED</span>
        </div>
        <span>SUB-SECOND EDGE</span>
      </div>
    </div>
  );
}
