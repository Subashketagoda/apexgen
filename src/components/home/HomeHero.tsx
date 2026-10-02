'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Lock, ExternalLink } from 'lucide-react';
import { projectsData } from '@/data/projects';

export function HomeHero() {
  const [activePreview, setActivePreview] = useState(0);
  const [colomboTime, setColomboTime] = useState('');

  // Live Colombo Studio Time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setColomboTime(`${timeStr} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smooth mouse parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 24 });

  const rotateX = useTransform(springY, [-300, 300], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const activeProject = projectsData[activePreview];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* High-End Architectural Background Matrix & Subtle Gradient Spotlights */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#FF5E00]/[0.08] via-[#FF7A1A]/[0.04] to-transparent blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/[0.02] blur-[120px] rounded-full" />
        {/* Subtle Architectural Corner Crosshairs */}
        <div className="absolute top-8 left-8 text-neutral-800 font-mono text-xs">+</div>
        <div className="absolute top-8 right-8 text-neutral-800 font-mono text-xs">+</div>
        <div className="absolute bottom-8 left-8 text-neutral-800 font-mono text-xs">+</div>
        <div className="absolute bottom-8 right-8 text-neutral-800 font-mono text-xs">+</div>
      </div>

      {/* Top Studio Beacon: Live Colombo Time & Availability status */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between text-xs font-mono tracking-widest text-neutral-400 uppercase gap-4 pb-8 border-b border-white/10"
      >
        <div className="flex items-center space-x-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E00] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5E00]" />
          </span>
          <span className="text-white font-semibold">APEXGEN DIGITAL STUDIO</span>
          <span className="text-neutral-600 hidden sm:inline">&bull;</span>
          <span className="text-neutral-400 hidden sm:inline">COLOMBO, SRI LANKA</span>
        </div>

        <div className="flex items-center space-x-4 text-[11px] text-neutral-400">
          <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300">
            {colomboTime || 'COLOMBO IST'}
          </span>
          <span className="hidden md:inline-block text-[#FF7A1A]">
            COMMISSIONING SELECT Q4 PROJECTS
          </span>
        </div>
      </motion.div>

      {/* Centerpiece: Massive Typography + 3D Interactive Live Browser Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center my-auto py-10">
        {/* Left Column: Massive Headline & Rationale (7-col) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest uppercase text-[#FF5E00] bg-[#FF5E00]/10 border border-[#FF5E00]/25 px-3 py-1 rounded-full"
            >
              <span>INDEPENDENT DIGITAL ATELIER</span>
              <span>&bull;</span>
              <span>EST. 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-light tracking-[-0.045em] text-white uppercase font-mono leading-[0.92]"
            >
              <span>WE DESIGN</span>
              <br />
              <span className="text-white">WEBSITES</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF5E00]">
                PEOPLE REMEMBER.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl md:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed"
          >
            Premium websites, digital experiences and online systems for ambitious businesses. Built with zero recycled templates.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <Link
              href="/work"
              className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF5E00] hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <span>VIEW OUR WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF5E00]" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Browser Mockup with Real Live Website Screenshot (5-col) */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          {/* Luxury Browser Window Frame */}
          <div className="relative rounded-3xl bg-[#09090b] border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(255,94,0,0.08)] overflow-hidden">
            {/* Browser Title Bar / Chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-white/10 backdrop-blur-md">
              {/* Traffic Lights */}
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              </div>

              {/* URL Pill showing actual live domain */}
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300">
                <Lock className="w-3 h-3 text-[#27C93F]" />
                <span className="text-white font-semibold">https://{activeProject.domain}</span>
              </div>

              {/* External Link */}
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                title={`Open ${activeProject.title} live`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Real Screenshot Viewport */}
            <Link
              href={`/work/${activeProject.slug}`}
              className="block relative aspect-[16/10] overflow-hidden bg-black group"
            >
              <Image
                src={activeProject.heroImage}
                alt={`${activeProject.title} Live Website Screenshot`}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />

              {/* Overlaid Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#FF5E00] uppercase block">
                    {activeProject.category}
                  </span>
                  <h3 className="text-xl font-bold font-mono text-white uppercase drop-shadow-md">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-mono text-white flex items-center space-x-1.5 backdrop-blur-md">
                  <span>CASE STUDY</span>
                  <ArrowRight className="w-3 h-3 text-[#FF5E00]" />
                </div>
              </div>
            </Link>

            {/* Interactive Project Switcher Footer */}
            <div className="p-3 bg-neutral-950 border-t border-white/10 flex items-center justify-between gap-2">
              <div className="flex items-center space-x-1.5">
                {projectsData.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePreview(idx)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      activePreview === idx
                        ? 'bg-[#FF5E00] text-black font-bold shadow-[0_0_15px_rgba(255,94,0,0.4)]'
                        : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    0{idx + 1} {p.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-neutral-400 hover:text-white inline-flex items-center space-x-1 whitespace-nowrap pl-2"
              >
                <span>VISIT LIVE</span>
                <ArrowUpRight className="w-3 h-3 text-[#FF5E00]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Metrics Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.6 }}
        className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-neutral-400"
      >
        <div>
          <span className="text-white text-lg font-bold block">&lt; 0.8s</span>
          <span className="text-neutral-500 uppercase tracking-widest text-[11px]">Sub-Second Edge LCP</span>
        </div>
        <div>
          <span className="text-white text-lg font-bold block">100%</span>
          <span className="text-neutral-500 uppercase tracking-widest text-[11px]">Bespoke Next.js Code</span>
        </div>
        <div>
          <span className="text-white text-lg font-bold block">0%</span>
          <span className="text-neutral-500 uppercase tracking-widest text-[11px]">Recycled Templates</span>
        </div>
        <div>
          <span className="text-[#FF5E00] text-lg font-bold block">3 FLAGSHIPS</span>
          <span className="text-neutral-500 uppercase tracking-widest text-[11px]">Active Production Clients</span>
        </div>
      </motion.div>
    </section>
  );
}
