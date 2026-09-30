'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, TrendingUp } from 'lucide-react';

const acts = [
  {
    number: '01',
    act: 'ACT I',
    badge: 'THE REJECTION OF TEMPLATES',
    headline: 'NOT JUST',
    highlight: 'A WEBSITE.',
    description:
      'Generic website builders and drag-and-drop templates make every company look interchangeable. We engineer custom digital flagships from first principles with uncompromising art direction.',
    icon: Sparkles,
    color: 'from-neutral-400 to-white',
  },
  {
    number: '02',
    act: 'ACT II',
    badge: 'THE STANDARD OF CRAFT',
    headline: 'A DIGITAL',
    highlight: 'EXPERIENCE.',
    description:
      'We combine editorial typography, sub-second edge runtimes, and fluid 3D micro-interactions to create digital spaces that command immediate prestige and respect.',
    icon: Shield,
    color: 'from-cyan-400 to-blue-400',
  },
  {
    number: '03',
    act: 'ACT III',
    badge: 'COMMERCIAL IMPACT',
    headline: 'BUILT FOR',
    highlight: 'YOUR BUSINESS.',
    description:
      'A great digital flagship is a commercial growth engine. Designed to elevate brand positioning, capture high-value customer leads, and convert traffic into long-term enterprise value.',
    icon: TrendingUp,
    color: 'from-white to-cyan-300',
  },
];

export function StorytellingSection() {
  const [activeAct, setActiveAct] = useState(0);
  const current = acts[activeAct];

  return (
    <section className="relative py-28 sm:py-36 md:py-44 bg-[#050505] text-[#F5F5F5] border-b border-white/10 overflow-hidden">
      {/* Ambient background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Top Header & Navigation Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-12 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>APEXGEN MANIFESTO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] uppercase text-white">
              PHILOSOPHY OF CRAFT
            </h2>
          </div>

          {/* Interactive Act Switcher Tabs */}
          <div className="flex items-center space-x-2 bg-[#0B0B0B] p-1.5 rounded-full border border-white/10">
            {acts.map((item, idx) => {
              const isActive = activeAct === idx;
              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveAct(idx)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'text-[#8A8A8A] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="hidden sm:inline">{item.act} &bull; </span>
                  <span>{item.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center: Stage Presentation Card */}
        <div className="mt-12 sm:mt-16 min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="flex items-center space-x-3 text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase">
                <span>{current.act}</span>
                <span>&bull;</span>
                <span>{current.badge}</span>
              </div>

              {/* Huge Monolithic Headline */}
              <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-light tracking-[-0.04em] uppercase leading-[0.92]">
                {current.headline}
                <br />
                <span
                  className={
                    activeAct === 1
                      ? 'text-gradient-iridescent'
                      : activeAct === 2
                      ? 'text-white'
                      : 'text-[#8A8A8A]'
                  }
                >
                  {current.highlight}
                </span>
              </h3>

              {/* Editorial Description & Next Act Control */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 pt-8 border-t border-white/10 items-end">
                <p className="md:col-span-8 text-base sm:text-xl text-[#8A8A8A] font-light leading-relaxed max-w-3xl">
                  {current.description}
                </p>

                <div className="md:col-span-4 flex items-center md:justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveAct((prev) => (prev + 1) % acts.length)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black font-mono text-xs uppercase tracking-wider transition-all duration-300 group cursor-pointer"
                  >
                    <span>
                      {activeAct === acts.length - 1 ? 'REPLAY ACT I' : 'NEXT ACT'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
