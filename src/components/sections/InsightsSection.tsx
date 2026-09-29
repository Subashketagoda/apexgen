'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { InsightArticle } from '@/types';
import { ArrowUpRight, Clock, X } from 'lucide-react';

export function InsightsSection() {
  const articles = siteConfig.insights;
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="relative py-28 md:py-40 fine-border-b bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <span>THOUGHT LEADERSHIP</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.04em] text-white">
              STUDIO INSIGHTS
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm md:text-base text-neutral-400 font-light font-mono">
              Editorial perspectives on design strategy, web engineering, conversion psychology, and
              building valuable digital assets.
            </p>
          </div>
        </div>

        {/* 6 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article: InsightArticle, index: number) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer p-8 rounded-2xl bg-[#0a0a0f] border border-white/10 hover:border-white/30 hover:bg-[#0f0f16] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase">
                  <span>{article.category}</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-light tracking-tight text-white group-hover:text-neutral-100 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                <span>READ ARTICLE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Content Window */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] border border-white/15 rounded-2xl shadow-2xl z-10 p-8 sm:p-12 text-[#f4f4f6] space-y-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400 uppercase">
                  <span>{activeArticle.category}</span>
                  <span>&bull;</span>
                  <span>{activeArticle.date}</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white"
                  aria-label="Close article"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300">
                  <span className="text-white font-semibold uppercase">Key Takeaway: </span>
                  {activeArticle.keyTakeaway}
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {activeArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">APEXGEN STUDIO EDITORIAL</span>
                <a
                  href="#contact"
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase font-semibold hover:bg-neutral-200 transition-colors"
                >
                  DISCUSS YOUR STRATEGY &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
