'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { trackInquirySubmit, trackWhatsAppClick } from '@/lib/analytics';

export function InquiryFormSection() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    requiredService: 'Website Design & Development',
    budgetRange: 'LKR 89,900+ (Business)',
    projectTimeline: 'Standard (2–4 weeks)',
    projectDescription: '',
    referenceWebsite: '',
    _hp: '', // Honeypot spam trap
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadRef, setLeadRef] = useState<string | null>(null);

  const services = [
    'Website Design & Development',
    'Website Redesign',
    'E-commerce & WhatsApp Commerce',
    'Booking & Reservation System',
    'Technical SEO & Performance',
    'Business Process Automation',
  ];

  const budgetOptions = [
    'LKR 49,900+ (Starter)',
    'LKR 89,900+ (Business)',
    'LKR 149,900+ (Premium)',
    'Custom / Enterprise',
    'Undecided / Flexible',
  ];

  const timelineOptions = [
    'Fast Track (< 2 weeks)',
    'Standard (2–4 weeks)',
    'Flexible (1–2 months)',
  ];

  const validateStep1 = () => {
    setErrorMsg(null);
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    setErrorMsg(null);
    if (!formData.requiredService) {
      setErrorMsg('Please select a required service.');
      return false;
    }
    if (!formData.budgetRange) {
      setErrorMsg('Please select an estimated budget range.');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    setErrorMsg(null);
    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      setErrorMsg('Please provide a brief description of your project goals (at least 10 characters).');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setErrorMsg(null);
    if (currentStep === 3) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry.');
      }

      setIsSuccess(true);
      const assignedLeadId = result.leadId || `AG-${Date.now().toString(36).toUpperCase()}`;
      setLeadRef(assignedLeadId);
      trackInquirySubmit(formData.requiredService, formData.budgetRange);

      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#FF5E00', '#FFA86B', '#FFFFFF', '#D44E00'],
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred. Please connect via WhatsApp.';
      setErrorMsg(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getCustomWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello ApexGen Studio!\n\n` +
      `I have submitted a project inquiry on apexgen.website (Ref: ${leadRef || 'New Lead'}).\n\n` +
      `• Name: ${formData.name}\n` +
      `• Business: ${formData.businessName || 'Independent'}\n` +
      `• Service: ${formData.requiredService}\n` +
      `• Budget: ${formData.budgetRange}\n` +
      `• Timeline: ${formData.projectTimeline}\n\n` +
      `Looking forward to discussing next steps!`
    );
    const cleanNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 md:py-44 border-b border-white/10 bg-[#050505] scroll-mt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#FF5E00]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Pitch & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00] animate-pulse" />
                <span>COMMISSION A DIGITAL FLAGSHIP</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.04em] text-[#F5F5F5] uppercase">
                START A PROJECT
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
              We partner with an exclusive roster of businesses each quarter to engineer high-performance web experiences. Complete the 3-step project brief below or reach out directly.
            </p>

            {/* Direct Studio Channels Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#090A0E] border border-white/10 space-y-5 shadow-2xl">
              <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase pb-2 border-b border-white/[0.08]">
                DIRECT STUDIO DIRECTORY
              </div>

              <div className="space-y-3.5">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20ApexGen%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20new%20website%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors group p-2 rounded-xl hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center text-[#FF5E00] group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase">OFFICIAL WHATSAPP</span>
                    <span className="text-white font-medium">{siteConfig.contact.whatsappDisplay}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center space-x-3.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors group p-2 rounded-xl hover:bg-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase">DIRECT EMAIL</span>
                    <span className="text-white font-medium">{siteConfig.contact.email}</span>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 text-xs font-mono text-neutral-300 p-2">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase">HEADQUARTERS</span>
                    <span className="text-neutral-300">{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] text-[10px] font-mono text-neutral-500 flex items-center justify-between">
                <span>HOURS: {siteConfig.contact.hours}</span>
                <span className="text-[#FF5E00]">SLOT AVAILABILITY: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Step Client Conversion Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 sm:p-11 bg-[#090A0E] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* Success Confirmation Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF5E00]/20 border border-[#FF5E00]/50 text-[#FF5E00] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,94,0,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#FF5E00] font-mono text-[11px] tracking-widest uppercase">
                        REF ID: {leadRef}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
                        INQUIRY TRANSMITTED
                      </h3>
                      <p className="text-sm font-mono text-neutral-400 max-w-md mx-auto leading-relaxed">
                        Thank you, {formData.name}. Your project brief has been registered in our engineering pipeline. A creative director will review your requirements within 24 hours.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href={getCustomWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('inquiry_success_dialog')}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FF5E00] text-white hover:bg-[#FF7A1A] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 transition-all shadow-[0_0_25px_rgba(255,94,0,0.4)]"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>PING VIA WHATSAPP WITH BRIEF</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSuccess(false);
                          setCurrentStep(1);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            businessName: '',
                            requiredService: 'Website Design & Development',
                            budgetRange: 'LKR 89,900+ (Business)',
                            projectTimeline: 'Standard (2–4 weeks)',
                            projectDescription: '',
                            referenceWebsite: '',
                            _hp: '',
                          });
                        }}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
                      >
                        SUBMIT ANOTHER INQUIRY
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Multi-Step Intake Form */
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* HoneyPot Spam trap (invisible to human users) */}
                    <input
                      type="text"
                      name="_hp"
                      value={formData._hp}
                      onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Step Progress Header */}
                    <div className="pb-6 border-b border-white/[0.08] space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase">
                        <span className="text-[#FF5E00] font-semibold">
                          STEP 0{currentStep} / 03
                        </span>
                        <span className="text-neutral-400">
                          {currentStep === 1 && 'CLIENT IDENTITY'}
                          {currentStep === 2 && 'SCOPE & BUDGET'}
                          {currentStep === 3 && 'PROJECT VISION'}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FF5E00] to-[#FFA86B] transition-all duration-400 ease-out"
                          style={{ width: `${(currentStep / 3) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Error Notice */}
                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center space-x-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Step 1: Client & Contact Info */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-5"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase block">
                            YOUR NAME <span className="text-[#FF5E00]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Alexander Vance"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF5E00] focus:ring-1 focus:ring-[#FF5E00] transition-colors font-mono"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase block">
                            WORK EMAIL <span className="text-[#FF5E00]">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF5E00] focus:ring-1 focus:ring-[#FF5E00] transition-colors font-mono"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                              PHONE / WHATSAPP <span className="text-neutral-500">(OPTIONAL)</span>
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+94 77 123 4567"
                              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                              BUSINESS NAME <span className="text-neutral-500">(OPTIONAL)</span>
                            </label>
                            <input
                              type="text"
                              value={formData.businessName}
                              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                              placeholder="e.g. Lumina Hospitality"
                              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                            />
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="button"
                            onClick={handleNext}
                            className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                          >
                            <span>CONTINUE TO SCOPE</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Project Scope & Budget/Timeline */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-6"
                      >
                        {/* Service Selection */}
                        <div className="space-y-2.5">
                          <label className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase block">
                            REQUIRED SERVICE <span className="text-[#FF5E00]">*</span>
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {services.map((service) => {
                              const isSelected = formData.requiredService === service;
                              return (
                                <button
                                  key={service}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, requiredService: service })}
                                  className={`p-3 rounded-xl text-left text-xs font-mono transition-all cursor-pointer border ${
                                    isSelected
                                      ? 'bg-white/[0.08] border-[#FF5E00] text-white shadow-[0_0_15px_rgba(255,94,0,0.15)]'
                                      : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:text-white hover:border-white/25'
                                  }`}
                                >
                                  {service}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Budget Range */}
                        <div className="space-y-2.5">
                          <label className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase block">
                            TARGET BUDGET RANGE <span className="text-[#FF5E00]">*</span>
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {budgetOptions.map((opt) => {
                              const isSelected = formData.budgetRange === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, budgetRange: opt })}
                                  className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                                    isSelected
                                      ? 'bg-[#FF5E00] border-[#FF5E00] text-white font-semibold shadow-[0_0_15px_rgba(255,94,0,0.3)]'
                                      : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Project Timeline */}
                        <div className="space-y-2.5">
                          <label className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase block">
                            DESIRED LAUNCH TIMELINE <span className="text-[#FF5E00]">*</span>
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {timelineOptions.map((opt) => {
                              const isSelected = formData.projectTimeline === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, projectTimeline: opt })}
                                  className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                                    isSelected
                                      ? 'bg-white text-black font-semibold border-white'
                                      : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>BACK</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleNext}
                            className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                          >
                            <span>CONTINUE TO DETAILS</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Project Vision & References */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-5"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase block">
                            PROJECT DESCRIPTION &amp; GOALS <span className="text-[#FF5E00]">*</span>
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={formData.projectDescription}
                            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                            placeholder="Describe your current business, target audience, core objectives, and any required integrations..."
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF5E00] focus:ring-1 focus:ring-[#FF5E00] transition-colors font-mono resize-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                            EXISTING OR INSPIRATION WEBSITE <span className="text-neutral-500">(OPTIONAL)</span>
                          </label>
                          <input
                            type="url"
                            value={formData.referenceWebsite}
                            onChange={(e) => setFormData({ ...formData, referenceWebsite: e.target.value })}
                            placeholder="https://example.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
                          />
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-neutral-400 flex items-center space-x-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#FF5E00] shrink-0" />
                          <span>Confidentiality guaranteed. Your brief is reviewed strictly by ApexGen studio directors.</span>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={handleBack}
                            disabled={loading}
                            className="px-5 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors cursor-pointer disabled:opacity-50"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>BACK</span>
                          </button>

                          <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-4 rounded-full bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-all cursor-pointer shadow-[0_0_25px_rgba(255,94,0,0.35)] disabled:opacity-50"
                          >
                            <span>{loading ? 'TRANSMITTING BRIEF...' : 'TRANSMIT PROJECT BRIEF →'}</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
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
