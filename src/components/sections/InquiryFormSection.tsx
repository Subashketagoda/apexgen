'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  AlertCircle,
  Mail,
  MapPin,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatWhatsAppUrl } from '@/lib/utils';

export function InquiryFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    whatsapp: '',
    currentWebsite: '',
    projectType: 'New Website',
    budgetRange: 'LKR 50K–100K',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadRef, setLeadRef] = useState<string | null>(null);

  const projectTypes = [
    'New Website',
    'Website Redesign',
    'E-commerce',
    'Booking Website',
    'Web Application',
    'Other',
  ];

  const budgetOptions = [
    'Under LKR 50K',
    'LKR 50K–100K',
    'LKR 100K–250K',
    'LKR 250K+',
    'Not sure',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          currentWebsite: formData.currentWebsite,
          serviceNeeded: [formData.projectType],
          budgetRange: formData.budgetRange,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry.');
      }

      setIsSuccess(true);
      setLeadRef(result.leadId || `AG-${Date.now().toString().slice(-6)}`);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#cccccc', '#888888'],
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred. Please connect via WhatsApp.';
      setErrorMsg(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getCustomWhatsAppMessage = () => {
    return `Hello ApexGen! My name is ${formData.name || 'a client'} from ${
      formData.businessName || 'my business'
    }. Project Type: ${formData.projectType}. Budget: ${
      formData.budgetRange
    }. Details: ${formData.message || 'N/A'}`;
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050507] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Positioning */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>START A PROJECT</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-light tracking-[-0.04em] text-white">
                LET&apos;S TALK.
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                Tell us about your brand, requirements and timeline. We respond to every serious project inquiry within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-neutral-500" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-neutral-500" />
                <a
                  href={formatWhatsAppUrl(siteConfig.contact.whatsappNumber, 'Hello ApexGen, I would like to inquire about a website project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span>{siteConfig.contact.location}</span>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Card */}
            <div className="p-6 rounded-2xl bg-[#09090e] border border-white/10 space-y-3">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                PREFER IMMEDIATE CHAT?
              </span>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Message our studio directors directly on WhatsApp for expedited project scoping.
              </p>
              <a
                href={formatWhatsAppUrl(siteConfig.contact.whatsappNumber, 'Hi ApexGen, I would like to discuss a website project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-white underline underline-offset-4 pt-1"
              >
                <span>OPEN WHATSAPP CHAT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#08080c] border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                        INQUIRY RECEIVED
                      </h3>
                      <p className="text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. We have logged your project details (Reference: <span className="font-mono text-white">{leadRef}</span>) and our studio team will follow up within 24 hours.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={formatWhatsAppUrl(siteConfig.contact.whatsappNumber, getCustomWhatsAppMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>CONFIRM ON WHATSAPP</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            name: '',
                            businessName: '',
                            email: '',
                            whatsapp: '',
                            currentWebsite: '',
                            projectType: 'New Website',
                            budgetRange: 'LKR 50K–100K',
                            message: '',
                          });
                        }}
                        className="px-6 py-3 rounded-full border border-white/15 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white transition-colors"
                      >
                        SUBMIT ANOTHER
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Subhash Ketagoda"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                          BUSINESS / BRAND
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Your Brand or Company"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                        />
                      </div>
                    </div>

                    {/* Email & WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                          WHATSAPP NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="+94 77 123 4567"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                        />
                      </div>
                    </div>

                    {/* Current Website (optional) */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                        CURRENT WEBSITE (OPTIONAL)
                      </label>
                      <input
                        type="url"
                        value={formData.currentWebsite}
                        onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                      />
                    </div>

                    {/* Project Type Options */}
                    <div className="space-y-3">
                      <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                        PROJECT TYPE
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {projectTypes.map((type) => {
                          const isSelected = formData.projectType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectType: type })}
                              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-white text-black font-semibold'
                                  : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white'
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Range Options */}
                    <div className="space-y-3">
                      <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                        BUDGET RANGE
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {budgetOptions.map((b) => {
                          const isSelected = formData.budgetRange === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budgetRange: b })}
                              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-white text-black font-semibold'
                                  : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tell us about your project */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                        TELL US ABOUT YOUR PROJECT
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details regarding your goals, target audience, preferred timeline, or inspirations..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono resize-none"
                      />
                    </div>

                    {/* Submit Button: START THE PROJECT → */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full min-h-[48px] py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(255,255,255,0.2)] disabled:opacity-50 cursor-pointer"
                      >
                        <span>{loading ? 'TRANSMITTING...' : 'START THE PROJECT →'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
