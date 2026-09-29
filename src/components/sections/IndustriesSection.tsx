'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import {
  Scissors,
  Sparkles,
  Utensils,
  Coffee,
  Camera,
  Dumbbell,
  Building,
  Layers,
  UserCheck,
  Flame,
  ArrowUpRight,
} from 'lucide-react';

const industryIcons: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-4 h-4 text-white" />,
  Sparkles: <Sparkles className="w-4 h-4 text-white" />,
  Utensils: <Utensils className="w-4 h-4 text-white" />,
  Coffee: <Coffee className="w-4 h-4 text-white" />,
  Camera: <Camera className="w-4 h-4 text-white" />,
  Dumbbell: <Dumbbell className="w-4 h-4 text-white" />,
  Building: <Building className="w-4 h-4 text-white" />,
  Layers: <Layers className="w-4 h-4 text-white" />,
  UserCheck: <UserCheck className="w-4 h-4 text-white" />,
  Flame: <Flame className="w-4 h-4 text-white" />,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 md:py-32 fine-border-b bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-white">
            BUILT FOR MODERN BUSINESSES
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-base md:text-lg">
            Every vertical has distinct conversion patterns. We engineer tailored digital journeys
            engineered for your specific commercial format.
          </p>
        </div>

        {/* 10 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {siteConfig.industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="p-6 rounded-xl bg-[#0c0c11] border border-white/10 hover:border-white/30 hover:bg-[#111118] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/25 transition-colors">
                    {industryIcons[industry.icon]}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">0{index + 1}</span>
                </div>

                <h3 className="text-base font-light tracking-tight text-white mb-1">
                  {industry.name}
                </h3>
                <div className="text-[11px] font-mono text-neutral-400 uppercase mb-3">
                  {industry.category}
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-[11px] font-mono text-neutral-500 group-hover:text-white flex items-center space-x-1 transition-colors"
                >
                  <span>PLAN BUILD</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
