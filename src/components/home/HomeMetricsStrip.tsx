'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  { code: '01', title: 'Design', copy: 'Custom visual direction for your brand.' },
  { code: '02', title: 'Build', copy: 'Fast, responsive websites engineered to last.' },
  { code: '03', title: 'Grow', copy: 'SEO-ready foundations and ongoing support options.' },
];

export function HomeMetricsStrip() {
  return (
    <section id="overview" className="relative py-6 sm:py-10 px-4 sm:px-8 md:px-12 max-w-[1600px] mx-auto scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] glass-specular border border-white/[0.08] px-6 sm:px-10 py-8 sm:py-10"
      >
        <div className="absolute -right-16 -top-20 w-72 h-72 rounded-full bg-[#3B82F6]/16 blur-[90px]" />
        <div className="absolute -left-10 bottom-[-40%] w-64 h-64 rounded-full bg-[#8B5CF6]/14 blur-[80px]" />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/[0.07]">
          {pillars.map((item) => (
            <div key={item.code} className="md:px-8 first:md:pl-0 last:md:pr-0 space-y-2">
              <p className="text-[11px] font-mono tracking-[0.2em] text-[#3B82F6]">{item.code}</p>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
