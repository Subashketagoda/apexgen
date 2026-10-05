'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site';

interface FaqItem {
  question: string;
  answer: string;
}

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How much does a bespoke website cost?',
      answer:
        'Our transparent investment tiers start at LKR 49,900 for a bespoke Starter website (1–3 pages), LKR 89,900 for our studio-recommended Business flagship (5–8 pages with booking/inquiry workflows), and LKR 149,900+ for full-scale Premium platforms with complex catalogs or custom logic. Full source code ownership is included with zero monthly builder lock-in.',
    },
    {
      question: 'What is the project delivery timeline?',
      answer:
        'Our sprint timelines are disciplined and predictable: Starter builds deliver in 5–7 business days, Business flagships in 10–14 business days, and complex Premium platforms typically take 2–3 weeks depending on custom integration requirements.',
    },
    {
      question: 'Do you create 100% custom designs?',
      answer:
        'Yes, unconditionally. Every ApexGen website starts from a completely blank Figma canvas. We develop tailored visual identities, editorial typography hierarchies, and bespoke user flows specifically for your commercial niche. We never use recycled templates or pre-made themes.',
    },
    {
      question: 'Are websites mobile-first and responsive?',
      answer:
        'Every single interface is engineered mobile-first. Over 70% of web traffic in Sri Lanka and globally originates from smartphones; our layouts are tested rigorously for thumb reach, touch ergonomics, fluid typography, and sub-second load times across every device size.',
    },
    {
      question: 'Is technical SEO and Google Indexing included?',
      answer:
        'Yes, technical SEO is baked into our engineering core. We implement semantic HTML5, Schema.org JSON-LD structured data (Organization, LocalBusiness, Breadcrumbs, FAQ), dynamic XML sitemaps, robots directives, OpenGraph meta previews, and Core Web Vitals optimization so your site is ready for Google search indexing.',
    },
    {
      question: 'Can you redesign an existing website without losing SEO rank?',
      answer:
        'Yes. We specialize in transforming slow, outdated, or template-bound WordPress/Wix sites into modern, high-speed Next.js platforms. During migration, we carefully structure 301 redirects and preserve your domain authority so your Google ranking is protected.',
    },
    {
      question: 'Do you provide ongoing support and warranty?',
      answer:
        'All client projects include a 30-day post-launch technical warranty covering bug fixes and minor adjustments. Beyond delivery, we provide optional maintenance, hosting and domain DNS management, performance monitoring, and continuous feature expansion packages.',
    },
    {
      question: 'How do we start a project?',
      answer:
        'You can begin immediately by clicking "Start a Project" and completing our 2-minute project questionnaire. Alternatively, you can start a conversation directly with our studio leadership on WhatsApp at +94 77 028 9139. We respond with a tailored proposal within 24 hours.',
    },
  ];

  return (
    <section id="faq" className="py-28 sm:py-36 lg:py-48 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08] scroll-mt-24 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-20" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/[0.08] gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>CLARITY & ASSURANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] text-white uppercase leading-[1.05]">
            Your questions, <br />
            <span className="text-gradient-silver font-normal">answered transparently.</span>
          </h2>
        </div>

        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
            'Hello ApexGen Studio, I have a question regarding your web design and development services.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all self-start md:self-auto"
        >
          <MessageCircle className="w-3.5 h-3.5 text-zinc-400" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

      {/* Sleek Accordion Cards matching Reference Image Philosophy */}
      <div className="mt-12 sm:mt-16 max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                isOpen
                  ? 'studio-card-elevated border-white/[0.2]'
                  : 'studio-card border-white/[0.06] hover:border-white/[0.14]'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-6 sm:p-7 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-light text-white tracking-tight pr-6">
                  {faq.question}
                </span>
                <div
                  className={`p-1.5 rounded-full border transition-transform duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-white text-black border-white rotate-180'
                      : 'bg-white/[0.04] text-zinc-400 border-white/[0.08]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-white/[0.06] text-sm text-zinc-400 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
