'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/projects';

export function HomeHero() {
  const [activePreview, setActivePreview] = useState(0);

  // Parallax mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const rotateX = useTransform(springY, [-300, 300], [6, -6]);
  const rotateY = useTransform(springX, [-300, 300], [-6, 6]);

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
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Subtle Ambient Studio Aura (Obsidian + warm low-opacity orange) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF5E00]/[0.06] blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Top Studio Positioning Beacon */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center space-x-3 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
        <span>APEXGEN &bull; INDEPENDENT DIGITAL STUDIO</span>
      </motion.div>

      {/* Centerpiece: Massive Display Typography & Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end my-auto">
        {/* Left Column: Massive Headline (7-col) */}
        <div className="lg:col-span-8 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-light tracking-[-0.045em] text-white uppercase font-mono leading-[0.93]"
          >
            <span>WE DESIGN</span>
            <br />
            <span className="text-white">WEBSITES</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#FF5E00]">
              PEOPLE REMEMBER.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed"
          >
            Premium websites, digital experiences and online systems for ambitious businesses.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Link
              href="/work"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF5E00] hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <span>VIEW OUR WORK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E00]" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Floating Cinematic Case Study Showcase (4-col) */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 hidden sm:block"
        >
          <div className="relative p-4 rounded-3xl bg-neutral-950/80 border border-white/15 backdrop-blur-xl shadow-2xl space-y-4">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pb-2 border-b border-white/10">
              <span className="text-[#FF5E00] uppercase">FEATURED DEPLOYMENT</span>
              <span>0{activePreview + 1} / 03</span>
            </div>

            {/* Real Project Image with Smooth Hover Reveal */}
            <Link
              href={`/work/${activeProject.slug}`}
              className="block relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 group"
            >
              <Image
                src={activeProject.heroImage}
                alt={`${activeProject.title} Preview`}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                <span className="font-semibold uppercase tracking-wider">{activeProject.title}</span>
                <span className="text-[10px] text-neutral-300">{activeProject.category}</span>
              </div>
            </Link>

            {/* Quick Switcher Dots */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center space-x-2">
                {projectsData.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePreview(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activePreview === idx ? 'w-8 bg-[#FF5E00]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Preview ${p.title}`}
                  />
                ))}
              </div>

              <Link
                href={`/work/${activeProject.slug}`}
                className="text-[11px] font-mono text-neutral-400 hover:text-white inline-flex items-center space-x-1"
              >
                <span>EXPLORE</span>
                <ArrowUpRight className="w-3 h-3 text-[#FF5E00]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Studio Philosophy Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.7 }}
        className="pt-12 sm:pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-neutral-500 gap-4"
      >
        <div className="flex items-center space-x-6 tracking-widest uppercase">
          <span>DESIGN</span>
          <span className="text-neutral-700">&bull;</span>
          <span>BUILD</span>
          <span className="text-neutral-700">&bull;</span>
          <span>GROW</span>
        </div>

        <div className="tracking-widest uppercase text-neutral-400">
          SCROLL TO EXPLORE SELECTED WORK &darr;
        </div>
      </motion.div>
    </section>
  );
}
