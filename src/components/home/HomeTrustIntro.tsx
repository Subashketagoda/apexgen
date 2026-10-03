'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, Cpu, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomeTrustIntro() {
  const pillars = [
    {
      num: '01',
      title: 'DESIGN WITH INTENTION',
      tagline: 'Visual Craft & Editorial Restraint',
      icon: Compass,
      description:
        'We reject generic templates. Every layout, typographic rhythm, and interaction is tailored from blank canvas to reflect the authentic caliber of your business.',
    },
    {
      num: '02',
      title: 'ENGINEERED FOR SPEED',
      tagline: 'Next.js & Edge Performance',
      icon: Cpu,
      description:
        'Sub-second page transitions, zero page bloat, and rock-solid mobile ergonomics. Websites engineered to run flawlessly on every screen, everywhere in the world.',
    },
    {
      num: '03',
      title: 'COMMERCIAL ARCHITECTURE',
      tagline: 'Conversion & Technical Authority',
      icon: Target,
      description:
        'A website must generate inquiries, reservations, and sales. We design frictionless booking funnels, direct WhatsApp checkouts, and rigorous SEO foundations.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-hidden">
      {/* Background ambient accent */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#FF6B35] blur-[150px] pointer-events-none rounded-full"
      />

      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl space-y-6 mb-20 sm:mb-28"
      >
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-xs font-mono text-[#FF6B35] tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
          <span>STUDIO PHILOSOPHY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-white uppercase font-mono leading-[1.05]">
          YOUR BUSINESS DESERVES MORE THAN JUST A WEBSITE.
        </h2>

        <p className="text-base sm:text-xl text-neutral-400 font-sans leading-relaxed max-w-3xl">
          Most business websites are treated like digital business cards—static, forgotten, and indistinguishable from competitors. At ApexGen, we approach digital development as high-precision craft: uniting world-class design, modern engineering, and commercial strategy to build platforms that elevate brands and drive tangible growth.
        </p>
      </motion.div>

      {/* 3 Strategic Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 rounded-2xl bg-[#0F0F11] border border-white/10 hover:border-[#FF6B35]/50 transition-colors flex flex-col justify-between space-y-8 group relative overflow-hidden shadow-xl"
            >
              {/* Subtle hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#FF6B35] tracking-widest font-bold">
                    {pillar.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FF6B35]/40 group-hover:bg-[#FF6B35]/10 transition-colors">
                    <Icon className="w-4 h-4 text-neutral-300 group-hover:text-[#FF6B35] transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-light text-white uppercase font-mono tracking-tight group-hover:text-[#FF6B35] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
                    {pillar.tagline}
                  </p>
                </div>

                <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center text-xs font-mono tracking-wider text-neutral-500 group-hover:text-white transition-colors relative z-10">
                <span>CRAFTED IN COLOMBO &bull; SCALED GLOBALLY</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Direct Invitation Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <Link
          href="/about"
          className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors group"
        >
          <span>LEARN MORE ABOUT OUR METHODOLOGY &amp; STANDARDS</span>
          <ArrowUpRight className="w-4 h-4 text-[#FF6B35] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
