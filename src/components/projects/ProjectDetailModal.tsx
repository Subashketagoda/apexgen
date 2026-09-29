'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCaseStudy } from '@/types';
import {
  X,
  ArrowUpRight,
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
  // Close on ESC key & prevent body scroll
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
        className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 overflow-y-auto"
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
          className="fixed inset-0 bg-[#050507]/90 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[100vh] md:max-h-[92vh] overflow-y-auto bg-[#0a0a0f] border border-white/15 rounded-none md:rounded-2xl shadow-2xl z-10 text-[#f4f4f6] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/10 text-white border border-white/20">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase hidden sm:inline">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/30 text-white transition-colors focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 md:p-10 space-y-12">
            {/* Title & Tagline */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-neutral-500 tracking-[0.2em] uppercase">
                CASE STUDY &bull; {project.year}
              </span>
              <h2
                id="modal-project-title"
                className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white"
              >
                {project.title}
              </h2>
              <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed">
                {project.tagline}
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-neutral-300 border border-white/10"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Showcase Banner */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-8 flex flex-col justify-between shadow-2xl">
              {/* Abstract Mockup Visual Cue */}
              <div className="absolute inset-0 bg-radial-glow opacity-60" />
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>RESPONSIVE VIEWPORT DEMO</span>
                <span>PRODUCTION STAGING</span>
              </div>

              <div className="relative z-10 text-center my-auto space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase bg-white/10 border border-white/20 text-white backdrop-blur-md">
                  {project.category}
                </div>
                <div className="text-2xl sm:text-4xl font-light text-white tracking-wide">
                  {project.title} DIGITAL SUITE
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                  Engineered with Next.js App Router, customized reservation micro-flows, and 60 FPS motion.
                </p>
              </div>

              {/* Metrics Readout */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="relative z-10 grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-center">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg sm:text-2xl font-light text-white">{m.value}</div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Overview, Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>OVERVIEW</span>
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">{project.overview}</p>
              </div>

              <div className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>THE CHALLENGE</span>
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>THE SOLUTION</span>
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features & Design Direction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features List */}
              <div className="space-y-4">
                <h3 className="text-lg font-light tracking-tight text-white flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>KEY SYSTEM FEATURES</span>
                </h3>
                <div className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-300 font-mono"
                    >
                      <span className="text-neutral-500">0{idx + 1}</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Creative Direction & Aesthetic */}
              <div className="space-y-4">
                <h3 className="text-lg font-light tracking-tight text-white flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>CREATIVE DIRECTION & SYSTEM</span>
                </h3>
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-3 text-xs font-mono text-neutral-300">
                  <p className="leading-relaxed">{project.creativeDirection || project.designApproach}</p>
                  {project.designSystem && (
                    <>
                      <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-neutral-500">Typography: </span>
                          <span className="text-white">{project.designSystem.typography}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500">Mood: </span>
                          <span className="text-white">{project.designSystem.mood}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 pt-1">
                        <span className="text-[11px] text-neutral-500">Palette:</span>
                        <div className="flex space-x-1.5">
                          {project.designSystem.palette.map((color, i) => (
                            <div
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-white/20"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Production Stack & Business Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
              {project.technologies && project.technologies.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-white" />
                    <span>PRODUCTION STACK</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.expectedOutcomes && project.expectedOutcomes.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.isReal ? 'VERIFIED CAPABILITIES' : 'EXPECTED BUSINESS IMPACT'}</span>
                  </h4>
                  <div className="space-y-2">
                    {project.expectedOutcomes.map((outcome, idx) => (
                      <div key={idx} className="text-xs text-neutral-300 flex items-start space-x-2">
                        <span className="text-emerald-400 font-mono">&rarr;</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Modal CTA */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-neutral-900 to-black border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-lg font-light text-white">
                  {project.isReal ? 'Experience the live deployed project' : 'Inspired by this digital direction?'}
                </div>
                <p className="text-xs text-neutral-400 font-mono">
                  {project.isReal
                    ? `Live production build active at ${project.liveUrl}`
                    : `We build customized flagships like ${project.title} for ambitious brands.`}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
                  >
                    <span>VIEW LIVE PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-5 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  START A SIMILAR BUILD &rarr;
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
