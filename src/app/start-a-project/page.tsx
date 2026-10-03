'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { siteConfig } from '@/data/site';
import { trackInquirySubmit, trackWhatsAppClick, trackFormStart } from '@/lib/analytics';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

export default function StartAProjectPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);

  useEffect(() => {
    trackFormStart('start_a_project_brief');
  }, []);

  const [formData, setFormData] = useState({
    // Step 01: Service
    requiredService: 'Website',
    // Step 02: Budget
    budgetRange: 'LKR 89,900–149,900',
    // Step 03: Timeline
    projectTimeline: '2–4 weeks',
    // Step 04: Project Details
    businessName: '',
    referenceWebsite: '',
    projectDescription: '',
    // Step 05: Contact
    name: '',
    email: '',
    whatsapp: '',
    // Honeypot trap
    _hp: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);

  // Step 01 Options
  const serviceOptions = [
    'Website',
    'E-commerce',
    'Website Redesign',
    'Booking System',
    'SEO',
    'Automation',
    'Custom',
  ];

  // Step 02 Options
  const budgetOptions = [
    'Under LKR 49,900',
    'LKR 49,900–89,900',
    'LKR 89,900–149,900',
    'LKR 149,900+',
    'Custom',
  ];

  // Step 03 Options
  const timelineOptions = [
    'ASAP',
    '2–4 weeks',
    '1–3 months',
    'Flexible',
  ];

  const handleNext = () => {
    setErrorMsg(null);

    // Validation per step
    if (currentStep === 4) {
      if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
        setErrorMsg('Please share a brief description of your project (at least 10 characters).');
        return;
      }
    }

    if (currentStep === 5) {
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
        setErrorMsg('Please enter a valid work email address.');
        return;
      }
    }

    if (currentStep < 6) {
      setCurrentStep((prev) => ((prev + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7));
    }
  };

  const handleBack = () => {
    setErrorMsg(null);
    if (currentStep > 1 && currentStep < 7) {
      setCurrentStep((prev) => ((prev - 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to transmit project brief.');
      }

      const assignedId = data.leadId || `AG-${Date.now().toString(36).toUpperCase()}`;
      setLeadId(assignedId);
      setCurrentStep(7);
      trackInquirySubmit(formData.requiredService, formData.budgetRange);

      confetti({
        particleCount: 80,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#FF5E00', '#FFA86B', '#FFFFFF', '#D44E00'],
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppForwardUrl = () => {
    const text = encodeURIComponent(
      `Hello ApexGen Studio!\n\n` +
      `I have submitted a project brief on apexgen.website (Ref: ${leadId || 'New Lead'}).\n\n` +
      `• Name: ${formData.name}\n` +
      `• Business: ${formData.businessName || 'Independent'}\n` +
      `• Looking For: ${formData.requiredService}\n` +
      `• Budget: ${formData.budgetRange}\n` +
      `• Timeline: ${formData.projectTimeline}\n\n` +
      `Looking forward to connecting!`
    );
    const cleanNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#FF5E00] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      <main className="pt-32 sm:pt-40 pb-28 sm:pb-36 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Header Progress */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase block mb-3">
              {currentStep < 7 ? `STEP 0${currentStep} / 06` : 'BRIEF CONFIRMED'}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white uppercase font-mono">
              {currentStep === 1 && 'What are you looking for?'}
              {currentStep === 2 && 'What is your budget?'}
              {currentStep === 3 && 'What is your target timeline?'}
              {currentStep === 4 && 'Tell us about the project.'}
              {currentStep === 5 && 'How can we reach you?'}
              {currentStep === 6 && 'Review your project brief.'}
              {currentStep === 7 && 'THANK YOU.'}
            </h1>
            {currentStep < 7 && (
              <div className="w-48 h-[2px] bg-white/10 rounded-full mx-auto mt-6 overflow-hidden">
                <div
                  className="h-full bg-[#FF5E00] transition-all duration-300 ease-out"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                />
              </div>
            )}
          </div>

          {/* Error Notice */}
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center space-x-2.5 mb-8">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 01 — WHAT ARE YOU LOOKING FOR? */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceOptions.map((opt) => {
                  const isSelected = formData.requiredService === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, requiredService: opt })}
                      className={`p-6 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-neutral-900 border-[#FF5E00] text-white shadow-[0_0_25px_rgba(255,94,0,0.2)]'
                          : 'bg-neutral-950/60 border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      <span className="font-mono text-base uppercase">{opt}</span>
                      {isSelected && <Check className="w-5 h-5 text-[#FF5E00]" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 hover:bg-[#FF7A1A] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,94,0,0.3)]"
                >
                  <span>CONTINUE TO BUDGET</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 02 — BUDGET */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {budgetOptions.map((opt) => {
                  const isSelected = formData.budgetRange === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, budgetRange: opt })}
                      className={`w-full p-6 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-neutral-900 border-[#FF5E00] text-white shadow-[0_0_25px_rgba(255,94,0,0.2)]'
                          : 'bg-neutral-950/60 border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      <span className="font-mono text-base">{opt}</span>
                      {isSelected && <Check className="w-5 h-5 text-[#FF5E00]" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white transition-colors"
                >
                  &larr; BACK
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 hover:bg-[#FF7A1A] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,94,0,0.3)]"
                >
                  <span>CONTINUE TO TIMELINE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 03 — TIMELINE */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {timelineOptions.map((opt) => {
                  const isSelected = formData.projectTimeline === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectTimeline: opt })}
                      className={`p-6 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-neutral-900 border-[#FF5E00] text-white shadow-[0_0_25px_rgba(255,94,0,0.2)]'
                          : 'bg-neutral-950/60 border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      <span className="font-mono text-base uppercase">{opt}</span>
                      {isSelected && <Check className="w-5 h-5 text-[#FF5E00]" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white transition-colors"
                >
                  &larr; BACK
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 hover:bg-[#FF7A1A] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,94,0,0.3)]"
                >
                  <span>CONTINUE TO PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 04 — PROJECT DETAILS */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-neutral-400 uppercase block">
                  BUSINESS OR BRAND NAME
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Acme Hospitality, Studio 44"
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-950 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-[#FF5E00] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-neutral-400 uppercase block">
                  EXISTING OR INSPIRATION WEBSITE (OPTIONAL)
                </label>
                <input
                  type="url"
                  value={formData.referenceWebsite}
                  onChange={(e) => setFormData({ ...formData, referenceWebsite: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-950 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-[#FF5E00] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-neutral-300 uppercase block">
                  PROJECT DESCRIPTION &amp; GOALS <span className="text-[#FF5E00]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Tell us about your brand, what you need to build, target audience, and key functionality..."
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-950 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-[#FF5E00] transition-colors resize-none"
                />
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white transition-colors"
                >
                  &larr; BACK
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 hover:bg-[#FF7A1A] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,94,0,0.3)]"
                >
                  <span>CONTINUE TO CONTACT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 05 — CONTACT */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-neutral-300 uppercase block">
                  YOUR NAME <span className="text-[#FF5E00]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Subash Ketagoda"
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-950 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-[#FF5E00] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-neutral-300 uppercase block">
                  WORK EMAIL <span className="text-[#FF5E00]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. subash@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-950 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-[#FF5E00] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono tracking-widest text-neutral-400 uppercase block">
                  WHATSAPP / PHONE NUMBER (RECOMMENDED)
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+94 77 123 4567"
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-950 border border-white/10 text-sm font-mono text-white focus:outline-none focus:border-[#FF5E00] transition-colors"
                />
              </div>

              {/* Honeypot hidden input */}
              <input
                type="text"
                name="_hp"
                value={formData._hp}
                onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white transition-colors"
                >
                  &larr; BACK
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 hover:bg-[#FF7A1A] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,94,0,0.3)]"
                >
                  <span>REVIEW BRIEF</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 06 — REVIEW */}
          {currentStep === 6 && (
            <motion.div
              key="step-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl bg-neutral-950/80 border border-white/10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono tracking-widest text-[#FF5E00] uppercase">
                    BRIEF SUMMARY
                  </span>
                  <span className="text-xs font-mono text-neutral-500 uppercase">
                    CONFIDENTIAL
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono">
                  <div>
                    <span className="text-neutral-500 text-xs block">SERVICE:</span>
                    <span className="text-white font-semibold">{formData.requiredService}</span>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-xs block">BUDGET:</span>
                    <span className="text-[#FF5E00] font-semibold">{formData.budgetRange}</span>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-xs block">TIMELINE:</span>
                    <span className="text-white font-semibold">{formData.projectTimeline}</span>
                  </div>

                  <div>
                    <span className="text-neutral-500 text-xs block">BUSINESS:</span>
                    <span className="text-white font-semibold">{formData.businessName || 'Independent'}</span>
                  </div>

                  <div className="sm:col-span-2">
                    <span className="text-neutral-500 text-xs block">CONTACT:</span>
                    <span className="text-white">{formData.name} ({formData.email}) {formData.whatsapp && `• ${formData.whatsapp}`}</span>
                  </div>

                  <div className="sm:col-span-2 pt-2 border-t border-white/5">
                    <span className="text-neutral-500 text-xs block mb-1">DESCRIPTION:</span>
                    <p className="text-neutral-300 text-xs leading-relaxed font-sans">{formData.projectDescription}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={loading}
                  className="px-6 py-3.5 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white transition-colors"
                >
                  &larr; EDIT
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 hover:bg-[#FF7A1A] transition-all cursor-pointer shadow-[0_0_25px_rgba(255,94,0,0.35)] disabled:opacity-50"
                >
                  <span>{loading ? 'TRANSMITTING...' : 'TRANSMIT PROJECT BRIEF →'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 07 — SUCCESS */}
          {currentStep === 7 && (
            <motion.div
              key="step-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-14 rounded-3xl bg-neutral-950 border border-[#FF5E00]/40 text-center space-y-8"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF5E00]/10 border border-[#FF5E00]/40 flex items-center justify-center mx-auto text-[#FF5E00]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-light text-white uppercase font-mono">
                  THANK YOU.
                </h2>
                <p className="text-lg text-[#FF7A1A] font-mono">
                  We&apos;ll review your project and get back to you within 24 hours.
                </p>
                <p className="text-xs font-mono text-neutral-500">
                  Brief Reference: {leadId || 'AG-RECEIVED'}
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppForwardUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('start_project_success')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all shadow-[0_0_25px_rgba(255,94,0,0.35)] flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>FORWARD BRIEF TO WHATSAPP</span>
                </a>

                <Link
                  href="/work"
                  className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white transition-colors"
                >
                  EXPLORE SELECTED WORK
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
