'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { formatWhatsAppUrl } from '@/lib/utils';

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
        'Yes, unconditionally. Every ApexGen website starts from a completely blank canvas. We develop tailored visual identities, editorial typography hierarchies, and bespoke user flows specifically for your commercial niche. We never use recycled templates or pre-made themes.',
    },
    {
      question: 'Are websites mobile-first and responsive?',
      answer:
        'Every single interface is engineered mobile-first. Over 80% of web traffic in Sri Lanka and globally originates from smartphones; our layouts are tested rigorously for thumb reach, touch ergonomics, fluid typography, and sub-second load times across every device size.',
    },
    {
      question: 'Is technical SEO and Google Indexing included?',
      answer:
        'Yes, technical SEO is baked into our engineering core. We implement semantic HTML5, Schema.org JSON-LD structured data (Organization, LocalBusiness), dynamic XML sitemaps, robots directives, OpenGraph meta previews, and Core Web Vitals optimization so your site is ready for Google search indexing.',
    },
    {
      question: 'Can you redesign an existing website without losing SEO rank?',
      answer:
        'Yes. We specialize in transforming slow, outdated, or template-bound WordPress/Wix sites into modern, high-speed Next.js platforms. During migration, we carefully structure 301 redirects and preserve your domain authority so your Google ranking is protected.',
    },
    {
      question: 'Do you provide ongoing support and warranty?',
      answer:
        'All client projects include a post-launch technical warranty covering bug fixes and minor adjustments. Beyond delivery, we provide optional maintenance, hosting and domain DNS management, performance monitoring, and continuous feature expansion packages.',
    },
    {
      question: 'How do we start a project?',
      answer:
        `You can begin immediately by completing our project intake terminal above. Alternatively, you can start a conversation directly with our studio leadership on WhatsApp at ${siteConfig.contact.whatsappDisplay}. We respond with a tailored proposal within 24 hours.`,
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#08080a] border-b border-white/[0.08] overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#d4ff00] uppercase flex items-center gap-2">
              <span>[ 07 // FREQUENTLY ASKED QUESTIONS ]</span>
            </div>
            <h2 className="text-section-title text-white">
              STUDIO CLARITY
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-md">
            Everything you need to know about our craftsmanship, delivery milestones, pricing terms, and ongoing support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#12131a] border-[#d4ff00]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                    : 'bg-[#0e0f14] border-white/[0.08] hover:border-white/[0.18]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs font-mono text-zinc-500">
                      0{index + 1}
                    </span>
                    <span
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#d4ff00]' : 'text-zinc-500'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="text-center pt-4">
          <a
            href={formatWhatsAppUrl(
              siteConfig.contact.whatsappNumber,
              'Hello Subhash, I have a specific question about an ApexGen website project.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#d4ff00] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>HAVE AN UNANSWERED QUESTION? ASK SUBHASH DIRECTLY ON WHATSAPP →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
