'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { Layout, Code2, ShoppingBag, Calendar, Zap, TrendingUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Code2,
  ShoppingBag,
  Calendar,
  Zap,
  TrendingUp,
};

export function ServicePillarsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const services = siteConfig.servicesList;

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>CAPABILITIES &bull; BESPOKE EXPERTISE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-white">
              SERVICES
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We design, build, and optimize high-end digital experiences that help businesses look better, communicate better, and scale online.
            </p>
          </div>
        </div>

        {/* 6 Minimalist Luxury Editorial Service Rows */}
        <div className="mt-6 divide-y divide-white/10 border-b border-white/10">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative py-10 sm:py-12 px-2 sm:px-4 transition-colors duration-500 ${
                  isHovered ? 'bg-white/[0.015]' : 'bg-transparent'
                }`}
              >
                {/* Subtle Left Accent Highlight */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 ${
                    isHovered ? 'bg-cyan-400 opacity-100' : 'bg-transparent opacity-0'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left: Number + Minimal Icon */}
                  <div className="lg:col-span-2 flex items-center space-x-4">
                    <span className="font-mono text-xs sm:text-sm text-neutral-500 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/25 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Center: Service Title */}
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white group-hover:text-neutral-100 transition-colors uppercase">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Description & Tags */}
                  <div className="lg:col-span-5 space-y-2.5">
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-400 group-hover:border-white/15 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Far Right: Arrow Action */}
                  <div className="lg:col-span-1 flex lg:justify-end">
                    <Link
                      href="/#contact"
                      aria-label={`Inquire about ${service.title}`}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/5 transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
