'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCaseStudy } from '@/types';
import {
  X,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Code2,
  TrendingUp,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08080a]/92 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-[#0e0f14] border border-white/[0.12] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 text-[#f5f5f7] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0e0f14]/95 backdrop-blur-md border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/30">
                {project.badge || 'PRODUCTION'}
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase hidden sm:inline">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.15] hover:border-white/[0.3] text-white transition-colors focus:outline-none cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Title & Tagline */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#d4ff00] tracking-[0.2em] uppercase">
                ARCHIVE SPEC // {project.year}
              </div>
              <h2
                id="modal-project-title"
                className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase"
              >
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-light max-w-3xl leading-relaxed">
                {project.tagline || project.description}
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.services?.map((srv) => (
                  <span
                    key={srv}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Real Project Screenshot Banner */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.1] bg-[#050507] shadow-2xl">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14]/80 via-transparent to-transparent pointer-events-none" />
              
              {project.liveUrl && (
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-volt py-2.5 px-5 text-xs flex items-center gap-2"
                  >
                    <span>OPEN LIVE WEBSITE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Overview, Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-xs font-mono text-[#d4ff00] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                  <span>OVERVIEW</span>
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>THE CHALLENGE</span>
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>THE SOLUTION</span>
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Features & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.08]">
              {/* Features List */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest uppercase text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4ff00]" />
                  <span>DELIVERED SYSTEM CAPABILITIES</span>
                </h3>
                <div className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-300"
                    >
                      <span className="text-[#d4ff00] font-mono">0{idx + 1}</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest uppercase text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-white" />
                  <span>TECHNICAL STACK & ARCHITECTURE</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#12131a] border border-white/[0.1] text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.designApproach && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400 font-light leading-relaxed">
                    <span className="font-mono text-zinc-500 uppercase block mb-1">DESIGN PHILOSOPHY</span>
                    {project.designApproach}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Modal CTA */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#12131a] border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-base sm:text-lg font-bold text-white">
                  Inspired by the {project.title} digital experience?
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  We engineer bespoke platforms tailored to your commercial audience.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-volt py-3 px-6 text-xs flex items-center gap-2"
                  >
                    <span>VISIT LIVE SITE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={onClose}
                  className="btn-architectural py-3 px-6 text-xs"
                >
                  START A PROJECT
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
