'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function WhyApexGenSection() {
  const shouldReduceMotion = useReducedMotion();

  const principles = [
    { title: 'CUSTOM DESIGN', desc: 'Every layout is tailored to your brand identity. Zero off-the-shelf templates.' },
    { title: 'NO TEMPLATES', desc: 'Handcrafted architecture built from first principles for your specific market position.' },
    { title: 'MOBILE-FIRST', desc: 'Over 80% of your audience visits via mobile. We engineer touch experiences first.' },
    { title: 'PERFORMANCE', desc: 'Sub-second loading times powered by Next.js edge delivery for maximum conversion.' },
    { title: 'SEO READY', desc: 'Clean semantic HTML, Open Graph cards, and structured JSON-LD schemas out of the box.' },
    { title: 'CONVERSION FOCUSED', desc: 'Engineered user flows, clear calls to action, and direct WhatsApp routing that converts.' },
  ];

  return (
    <section id="why" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>STANDARDS &bull; VALUES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white uppercase leading-[0.98]">
            NOT JUST ANOTHER<br />WEBSITE AGENCY.
          </h2>

          <p className="text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl pt-2">
            We combine strategy, design, technology and motion to create digital experiences that feel as strong as the businesses behind them.
          </p>
        </div>

        {/* Animated Typography Reveal Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {principles.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3.5 p-6 sm:p-8 rounded-2xl bg-[#09090e] border border-white/10 hover:border-white/25 transition-all duration-300 group"
            >
              <div className="font-mono text-xs text-neutral-500 group-hover:text-white transition-colors">
                0{idx + 1}
              </div>

              <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white uppercase group-hover:translate-x-1 transition-transform duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
