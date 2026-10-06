'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Mail, Phone, MapPin, Clock, CheckCircle2, Loader2, Sparkles, Send } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { formatWhatsAppUrl } from '@/lib/utils';
import confetti from 'canvas-confetti';

export function HomeProjectCta() {
  const [selectedTier, setSelectedTier] = useState<string>('Business (LKR 89,900+)');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Design', 'Web Development']);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const tiers = [
    'Starter (LKR 49,900+)',
    'Business (LKR 89,900+)',
    'Premium (LKR 149,900+)',
    'Custom Scope',
  ];

  const serviceOptions = [
    'Web Design',
    'Web Development',
    'E-Commerce',
    'Booking Systems',
    'Automation',
    'SEO & Performance',
  ];

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const generateWhatsAppMessage = () => {
    return (
      `*NEW INQUIRY — APEXGEN DIGITAL STUDIO*\n\n` +
      `*Client Name:* ${formData.name.trim()}\n` +
      `*Company / Brand:* ${formData.company.trim() || 'Independent'}\n` +
      `*Phone / WhatsApp:* ${formData.phone.trim()}\n` +
      `*Email:* ${formData.email.trim() || 'Not specified'}\n\n` +
      `*Estimated Investment Tier:* ${selectedTier}\n` +
      `*Required Capabilities:*\n${selectedServices.map((s) => `• ${s}`).join('\n')}\n\n` +
      `*Project Vision / Notes:*\n${formData.notes.trim() || 'Ready to discuss requirements'}\n\n` +
      `_Submitted via apexgen.website intake terminal_`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and phone/WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    const message = generateWhatsAppMessage();
    const whatsappUrl = formatWhatsAppUrl(siteConfig.contact.whatsappNumber, message);

    try {
      // 01: Send to API in background for logging
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tier: selectedTier,
          services: selectedServices,
          source: 'home_intake_terminal',
        }),
      }).catch(() => {
        // Fallback gracefully even if offline
      });

      // 02: Open WhatsApp directly with formatted message
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }

      // 03: Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#d4ff00', '#ffffff', '#00f0ff'],
      });

      setIsSuccess(true);
    } catch {
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenWhatsAppDirect = () => {
    const message = generateWhatsAppMessage();
    const url = formatWhatsAppUrl(siteConfig.contact.whatsappNumber, message);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#08080a] overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#d4ff00] uppercase flex items-center gap-2">
              <span>[ 06 // DIRECT WHATSAPP INTAKE ]</span>
            </div>
            <h2 className="text-section-title text-white">
              START A PROJECT
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-md">
            Fill in your project brief below. Upon submission, your requirements will be instantly linked directly to Subhash Ketagoda on WhatsApp for rapid consultation.
          </p>
        </div>

        {/* Dual Column Layout: Left Intake Terminal, Right Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Intake Terminal (8 cols) */}
          <div className="lg:col-span-8 bg-[#0e0f14] border border-white/[0.1] rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative">
            <div className="absolute top-6 right-6 text-[10px] font-mono text-[#d4ff00] tracking-widest uppercase hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
              <span>DIRECT WHATSAPP LINKED</span>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#d4ff00]/10 border border-[#d4ff00] flex items-center justify-center text-[#d4ff00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    INQUIRY LINKED TO WHATSAPP
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Your inquiry details have been formatted and directed to Subhash Ketagoda on WhatsApp. If WhatsApp did not launch automatically, click the button below.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleOpenWhatsAppDirect}
                    className="btn-volt py-3.5 px-8 text-xs flex items-center gap-2 font-bold cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>OPEN WHATSAPP CHAT NOW</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </button>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn-architectural py-3.5 px-6 text-xs cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 01: Tier Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase flex items-center justify-between">
                    <span>01. SELECT ESTIMATED INVESTMENT TIER</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {tiers.map((t) => {
                      const isSel = selectedTier === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTier(t)}
                          className={`p-3 rounded-lg border text-left text-xs font-mono transition-all cursor-pointer ${
                            isSel
                              ? 'bg-[#d4ff00] text-[#08080a] border-[#d4ff00] font-bold shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                              : 'bg-white/[0.03] text-zinc-300 border-white/[0.08] hover:border-white/[0.2]'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 02: Services Multi-Select */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    02. SELECT REQUIRED CAPABILITIES
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((svc) => {
                      const isChecked = selectedServices.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                            isChecked
                              ? 'bg-white text-[#08080a] border-white font-bold'
                              : 'bg-white/[0.02] text-zinc-400 border-white/[0.08] hover:border-white/[0.2]'
                          }`}
                        >
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 03: Contact Details Grid */}
                <div className="space-y-4 pt-2">
                  <label className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
                    03. YOUR DETAILS
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">YOUR NAME *</span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dilshan Perera"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4ff00]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">COMPANY / BUSINESS NAME</span>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Coastal Hospitality Group"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4ff00]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">WHATSAPP / PHONE NUMBER *</span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +94 77 123 4567"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4ff00]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">EMAIL ADDRESS</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. dilshan@brand.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4ff00]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">PROJECT VISION / NOTES</span>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe what you are looking to build, target launch date, and key features..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4ff00] resize-none"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-xs font-mono text-rose-400 bg-rose-500/10 p-3 rounded border border-rose-500/20">
                    {errorMessage}
                  </p>
                )}

                {/* Submission Controls with WhatsApp Linkage */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-volt py-4 px-8 text-xs flex items-center justify-center gap-2 cursor-pointer font-bold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>LINKING TO WHATSAPP...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4" />
                        <span>SEND INQUIRY VIA WHATSAPP</span>
                        <ArrowUpRight className="w-4 h-4 ml-0.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenWhatsAppDirect}
                    className="text-xs font-mono text-zinc-400 hover:text-[#d4ff00] transition-colors flex items-center justify-center gap-1.5 py-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#d4ff00]" />
                    <span>Quick chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Studio Direct Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Channel Card */}
            <div className="bg-[#0e0f14] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="text-[10px] font-mono tracking-widest text-[#d4ff00] uppercase">
                DIRECT CHANNELS
              </div>

              <div className="space-y-4">
                <a
                  href={formatWhatsAppUrl(
                    siteConfig.contact.whatsappNumber,
                    'Hello Subhash, I would like to inquire about building a website with ApexGen.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4ff00]/40 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-[#d4ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-zinc-400">WHATSAPP OFFICIAL</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#d4ff00] transition-colors">
                      {siteConfig.contact.whatsappDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4ff00]/40 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#d4ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-zinc-400">EMAIL INQUIRIES</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#d4ff00] transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <MapPin className="w-5 h-5 text-[#d4ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-zinc-400">STUDIO HEADQUARTERS</div>
                    <div className="text-sm font-bold text-white">
                      {siteConfig.contact.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <Clock className="w-5 h-5 text-[#d4ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-zinc-400">CONSULTATION HOURS</div>
                    <div className="text-sm font-bold text-white">
                      {siteConfig.contact.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Q2 Cohort Availability Note */}
            <div className="bg-[#12131a] border border-white/[0.1] rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4ff00]">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
                <span>Q2 2026 ENGAGEMENTS OPEN</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                To guarantee extreme creative focus and sub-second execution speeds, we partner with a limited roster of 4 commercial clients per quarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
