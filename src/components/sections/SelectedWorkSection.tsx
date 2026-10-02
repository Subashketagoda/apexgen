'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  number: string;
  total: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  image: string;
  liveUrl: string;
  domain: string;
  isReversed?: boolean;
}

function ProjectCard({
  number,
  total,
  title,
  slug,
  tags,
  description,
  image,
  liveUrl,
  domain,
  isReversed = false,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 18, y: y * 18 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center group ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Visual Preview (Occupies 7 Columns) */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <Link
          href={`/work/${slug}`}
          data-cursor="project"
          className="relative block w-full aspect-[16/10] sm:aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-700 bg-[#090a0f] cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Parallax / Cursor-shift Image Container */}
          <motion.div
            style={
              shouldReduceMotion
                ? {}
                : {
                    x: mouseOffset.x,
                    y: mouseOffset.y,
                  }
            }
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="relative w-[105%] h-[105%] -left-[2.5%] -top-[2.5%]"
          >
            <Image
              src={image}
              alt={`${title} Preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority
            />
          </motion.div>

          {/* Vignette dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-black/30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

          {/* Watermark Number */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 font-mono text-5xl sm:text-7xl font-light text-white/15 select-none pointer-events-none group-hover:text-[#FF5E00]/30 transition-colors duration-500">
            {number}
          </div>

          {/* Top Right: Live Domain Badge */}
          <div className="absolute top-6 right-6 flex items-center space-x-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{domain}</span>
          </div>

          {/* Overlay Arrow Tag */}
          <div className="absolute bottom-6 right-6 hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 group-hover:scale-105">
            <span>VIEW PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>

      {/* Editorial Information Column (Occupies 5 Columns) */}
      <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="space-y-3">
          {/* Project Number: 01 / 03 */}
          <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
            <span className="text-[#FF5E00] font-medium">PROJECT {number}</span>
            <span>&bull;</span>
            <span>{number} / {total}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors uppercase">
            <Link href={`/work/${slug}`}>
              {title}
            </Link>
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-3 flex flex-wrap items-center gap-4">
          <Link
            href={`/work/${slug}`}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] group/link"
          >
            <span>VIEW PROJECT &rarr;</span>
          </Link>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-neutral-400 hover:text-white hover:border-[#FF5E00]/40 transition-all uppercase"
          >
            <span>{domain}</span>
            <ExternalLink className="w-3 h-3 text-[#FF5E00]" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWorkSection() {
  const projects = [
    {
      number: '01',
      total: '03',
      title: 'CARGO PIZZA',
      slug: 'cargo-pizzeria',
      tags: ['WEB DESIGN', 'DEVELOPMENT', 'E-COMMERCE'],
      description:
        'A high-performance woodfired restaurant flagship engineered around visual menu discovery, mobile touch ordering, and direct WhatsApp customer conversion.',
      image: '/images/projects/cargo-pizzeria-screenshot.jpg',
      liveUrl: 'https://cargopizzeria.online/',
      domain: 'cargopizzeria.online',
      isReversed: false,
    },
    {
      number: '02',
      total: '03',
      title: '69 STUDIO',
      slug: '69-studio',
      tags: ['BRANDING', 'WEB DESIGN', 'DEVELOPMENT'],
      description:
        'A cinematic dark digital showcase created for creative technology practice 69 Studio, highlighting custom POS software, bespoke web development, and digital art.',
      image: '/images/projects/69-studio-screenshot.png',
      liveUrl: 'https://69studiobysubash.online/',
      domain: '69studiobysubash.online',
      isReversed: true,
    },
    {
      number: '03',
      total: '03',
      title: 'DINEPRO ADVISERS',
      slug: 'dinepro-advisors',
      tags: ['BUSINESS WEBSITE', 'UI/UX', 'DEVELOPMENT'],
      description:
        'A luxury hospitality advisory platform engineered for authority, structured consulting practice breakdowns, and direct strategy consultation booking.',
      image: '/images/projects/dinepro-advisors-screenshot.png',
      liveUrl: 'https://dineproadvisors.online/',
      domain: 'dineproadvisors.online',
      isReversed: false,
    },
  ];

  return (
    <section id="work" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050505] scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>SELECTED WORK &bull; REAL CLIENT FLAGSHIPS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-[-0.04em] text-[#F5F5F5]">
              SELECTED WORK
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-lg sm:text-2xl text-[#F5F5F5] font-light leading-snug tracking-tight uppercase">
              DIGITAL EXPERIENCES<br />BUILT TO BE REMEMBERED.
            </p>
          </div>
        </div>

        {/* Editorial Portfolio Flow */}
        <div className="mt-16 sm:mt-24 space-y-28 sm:space-y-36">
          {projects.map((proj) => (
            <ProjectCard key={proj.number} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
