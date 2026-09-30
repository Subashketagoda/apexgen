'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Lock,
  ExternalLink,
  RotateCw,
  Globe,
  Maximize2,
  Image as ImageIcon,
  Loader2,
} from 'lucide-react';
import { LiveWebsitePreviewModal } from './LiveWebsitePreviewModal';

interface CaseStudyLiveSectionProps {
  slug: string;
  title: string;
  liveUrl?: string;
  heroImage: string;
  isReal?: boolean;
}

export function CaseStudyLiveSection({
  slug,
  title,
  liveUrl,
  heroImage,
  isReal,
}: CaseStudyLiveSectionProps) {
  const [activeTab, setActiveTab] = useState<'screenshot' | 'live'>(
    isReal && liveUrl ? 'live' : 'screenshot'
  );
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [showSimulator, setShowSimulator] = useState(false);

  const cleanDomain = liveUrl
    ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `apexgen.website/work/${slug}`;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <>
      <div className="mt-16 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#101018] to-black shadow-2xl">
        {/* Browser Top Navigation Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-black/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400 backdrop-blur-md">
          {/* Traffic light dots & Mode Switcher */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {liveUrl && (
              <div className="flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10 ml-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('live')}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors flex items-center space-x-1.5 ${
                    activeTab === 'live'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Globe className="w-3 h-3" />
                  <span>INTERACTIVE LIVE</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('screenshot')}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors flex items-center space-x-1.5 ${
                    activeTab === 'screenshot'
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>HQ SCREENSHOT</span>
                </button>
              </div>
            )}
          </div>

          {/* Browser Address Bar */}
          <div className="flex items-center space-x-2">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-neutral-200 hover:text-white hover:border-white/30 transition-colors"
              >
                <Lock className="w-3 h-3 text-emerald-400" />
                <span className="text-[11px]">{cleanDomain}</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            ) : (
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400">
                <Lock className="w-3 h-3 text-neutral-500" />
                <span className="text-[11px]">{cleanDomain}</span>
              </div>
            )}

            {liveUrl && activeTab === 'live' && (
              <button
                type="button"
                onClick={handleRefresh}
                title="Refresh Live View"
                className="p-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors"
              >
                <RotateCw className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Right Status Pill & Device Simulator Launcher */}
          <div className="flex items-center space-x-2.5">
            {liveUrl && (
              <button
                type="button"
                onClick={() => setShowSimulator(true)}
                className="px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] uppercase tracking-wider flex items-center space-x-1.5 transition-all active:scale-95 cursor-pointer"
              >
                <Maximize2 className="w-3 h-3 text-emerald-400" />
                <span>DEVICE SIMULATOR</span>
              </button>
            )}

            <div className="flex items-center space-x-2 text-xs">
              {isReal ? (
                <span className="text-emerald-400 flex items-center space-x-1.5 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">LIVE ON EDGE</span>
                </span>
              ) : (
                <span className="text-neutral-500 uppercase font-mono text-[11px]">
                  CONCEPT LAB
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Viewport Content */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-950 overflow-hidden">
          {activeTab === 'screenshot' || !liveUrl ? (
            <div className="relative w-full h-full group">
              <Image
                src={heroImage}
                alt={`${title} Website Showcase`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 pointer-events-none" />

              {liveUrl && (
                <div className="absolute bottom-6 right-6 z-10 flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('live')}
                    className="px-4 py-2 rounded-full bg-emerald-500 text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center space-x-1.5 shadow-xl cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>LAUNCH INTERACTIVE VIEW</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="relative w-full h-full bg-[#050507]">
              {isLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050507]/90 backdrop-blur-md space-y-3">
                  <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
                  <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
                    CONNECTING TO LIVE EDGE DEPLOYMENT...
                  </span>
                </div>
              )}

              <iframe
                key={iframeKey}
                src={liveUrl}
                title={`${title} Live Website`}
                onLoad={() => setIsLoading(false)}
                className="w-full h-full border-0 bg-[#050507]"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-modals"
                loading="eager"
              />
            </div>
          )}
        </div>
      </div>

      {/* Device Simulator Modal */}
      {showSimulator && liveUrl && (
        <LiveWebsitePreviewModal
          url={liveUrl}
          title={title}
          onClose={() => setShowSimulator(false)}
        />
      )}
    </>
  );
}
