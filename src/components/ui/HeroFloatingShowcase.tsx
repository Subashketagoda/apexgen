'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function HeroFloatingShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = siteConfig.realProjects;
  const currentProject = projects[currentIndex];

  // Auto-cycle through projects every 7 seconds if user isn't hovering
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 6500);
    return () => clearInterval(interval);
  }, [isHovered, projects.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative group/showcase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Prismatic Cyan / Fuchsia Ambient Glow Aura */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-fuchsia-500/25 rounded-[32px] blur-2xl opacity-60 group-hover/showcase:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Mini Floating Telemetry Chip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -top-3.5 -right-3.5 z-20 hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-[#090d16]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,240,255,0.25)] text-[10px] font-mono tracking-wider text-cyan-300 select-none pointer-events-none"
      >
        <Sparkles className="w-2.5 h-2.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
        <span>PROD VERIFIED &bull; 60FPS</span>
      </motion.div>

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-[24px] border border-white/15 bg-[#08080f]/85 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(56,189,248,0.08)] group/card hover:border-white/30 transition-all duration-500"
      >
        {/* Top Header Tag */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3.5">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase font-medium">
              FEATURED CLIENT WORK
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
              0{currentIndex + 1}/0{projects.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project Thumbnail Image with AnimatePresence */}
        <Link
          href={`/work/${currentProject.slug}`}
          className="block group/preview relative overflow-hidden rounded-[18px] aspect-[16/10] bg-[#12121c] border border-white/10 mb-4 cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45 }}
              className="relative w-full h-full"
            >
              <Image
                src={currentProject.heroImage}
                alt={currentProject.title}
                fill
                sizes="(max-width: 640px) 360px, 400px"
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
              />
              {/* Vignette gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-transparent to-transparent opacity-65 group-hover/preview:opacity-35 transition-opacity duration-300" />
            </motion.div>
          </AnimatePresence>

          {/* View Pill Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-black font-mono text-[11px] font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(255,255,255,0.5)]">
              <Eye className="w-3.5 h-3.5" />
              <span>EXPLORE CASE STUDY</span>
            </span>
          </div>

          {/* Project Type Badge Tag */}
          <div className="absolute bottom-2.5 left-2.5 z-10">
            <span className="inline-block px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono tracking-wider text-neutral-300 uppercase">
              {(currentProject.projectType || currentProject.category).split('/')[0].trim()}
            </span>
          </div>
        </Link>

        {/* Project Info & Quick Action Link */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm sm:text-base font-mono tracking-wider text-white uppercase font-medium">
              {currentProject.title}
            </h4>
            <p className="text-[11px] font-mono text-neutral-400 tracking-wide mt-0.5">
              {currentProject.industry}
            </p>
          </div>
          <Link
            href={`/work/${currentProject.slug}`}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-cyan-500/40 text-[11px] font-mono tracking-wider text-cyan-400 hover:text-cyan-300 uppercase transition-all duration-300"
          >
            <span>CASE STUDY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-1.5 mt-3.5 pt-3 border-t border-white/5">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
