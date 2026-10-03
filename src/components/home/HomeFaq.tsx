'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
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
      question: 'How much does a website cost?',
      answer:
        'Our transparent investment tiers start at LKR 49,900 for a bespoke Starter website (1–3 pages), LKR 89,900 for our studio-recommended Business flagship (5–8 pages with booking/inquiry workflows), and LKR 149,900+ for full-scale Premium platforms with complex catalogs or custom logic. Full source code ownership is included with zero monthly builder lock-in.',
    },
    {
      question: 'How long does a website take?',
      answer:
        'Our sprint timelines are disciplined and predictable: Starter builds deliver in 5–7 business days, Business flagships in 10–14 business days, and complex Premium platforms typically take 2–4 weeks depending on custom integration requirements.',
    },
    {
      question: 'Do you create custom designs?',
      answer:
        'Yes, unconditionally. Every ApexGen website starts from a completely blank Figma canvas. We develop tailored visual identities, editorial typography hierarchies, and bespoke user flows specifically for your commercial niche. We never use recycled templates or pre-made themes.',
    },
    {
      question: 'Are websites mobile responsive?',
      answer:
        'Every single interface is engineered mobile-first. Over 70% of web traffic in Sri Lanka and globally originates from smartphones; our layouts are tested rigorously for thumb reach, touch ergonomics, fluid typography, and sub-second load times across every device size.',
    },
    {
      question: 'Do you provide SEO?',
      answer:
        'Yes, technical SEO is baked into our engineering core. We implement semantic HTML5, Schema.org JSON-LD structured data (Organization, LocalBusiness, Breadcrumbs, FAQ), dynamic XML sitemaps, robots directives, OpenGraph meta previews, and Core Web Vitals optimization so your site is ready for Google search indexing.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer:
        'Yes. We specialize in transforming slow, outdated, or template-bound WordPress/Wix sites into modern, high-speed Next.js platforms. During migration, we carefully structure 301 redirects and preserve your domain authority so your Google ranking is protected.',
    },
    {
      question: 'Do you provide maintenance?',
      answer:
        'All client projects include a 30-day post-launch technical warranty covering bug fixes and minor adjustments. Beyond delivery, we provide optional maintenance, hosting and domain DNS management, performance monitoring, and continuous feature expansion packages.',
    },
    {
      question: 'How can I start a project?',
      answer:
        'You can begin immediately by clicking "Start a Project" and completing our 2-minute project questionnaire. Alternatively, you can start a conversation directly with our studio leadership on WhatsApp at +94 77 028 9139. We respond with a tailored proposal within 24 hours.',
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 scroll-mt-20 relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/3 w-[500px] h-[350px] bg-[#FF6B35] blur-[160px] pointer-events-none rounded-full"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between pb-16 sm:pb-20 border-b border-white/10 gap-8"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-xs font-mono text-[#FF6B35] tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARITY &bull; TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[-0.04em] text-white uppercase font-mono leading-[1.05]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            Direct answers to the most common questions clients ask before embarking on a digital collaboration with ApexGen.
          </p>
        </div>
      </motion.div>

      {/* Accordion List */}
      <div className="mt-12 sm:mt-16 divide-y divide-white/10">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 sm:py-8 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-4 sm:space-x-6 pr-4">
                  <span className="font-mono text-xs text-neutral-500 font-semibold group-hover:text-[#FF6B35] transition-colors">
                    0{idx + 1}
                  </span>
                  <h3
                    className={`text-lg sm:text-2xl font-light font-mono uppercase tracking-tight transition-colors ${
                      isOpen ? 'text-[#FF6B35]' : 'text-white group-hover:text-[#FF6B35]'
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-[#FF6B35] text-black' : 'bg-white/5 text-neutral-400 group-hover:text-white'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 sm:pt-8 pl-8 sm:pl-12 max-w-4xl">
                      <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Direct Contact Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 p-8 rounded-3xl bg-[#0F0F12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
      >
        <div className="space-y-1">
          <h4 className="text-xl font-light font-mono text-white uppercase">
            Have a question not listed here?
          </h4>
          <p className="text-sm text-neutral-400 font-sans">
            Our creative directors are available on WhatsApp for direct consultations.
          </p>
        </div>

        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
            'Hello ApexGen, I have a specific question about your web design services.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-[#FF6B35] hover:scale-105 active:scale-95 transition-all text-xs font-mono uppercase tracking-wider font-semibold flex items-center space-x-2 shrink-0 shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>CHAT ON WHATSAPP</span>
        </a>
      </motion.div>
    </section>
  );
}
