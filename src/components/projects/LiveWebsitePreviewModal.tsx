'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  RotateCw,
  Smartphone,
  Tablet,
  Monitor,
  Lock,
  Loader2,
} from 'lucide-react';

interface LiveWebsitePreviewModalProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export function LiveWebsitePreviewModal({
  url,
  title,
  onClose,
}: LiveWebsitePreviewModalProps) {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  // Close on Escape key & disable body scroll
  useEffect(() => {
    if (!url) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [url, onClose]);

  if (!url) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleDeviceChange = (mode: DeviceMode) => {
    setIsLoading(true);
    setDevice(mode);
  };

  const cleanDomain = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[150] flex flex-col bg-[#050507]/95 backdrop-blur-2xl text-[#f4f4f6]"
        role="dialog"
        aria-modal="true"
        aria-label={`Live preview of ${title}`}
      >
        {/* Top Control Navigation Bar */}
        <header className="h-16 px-4 sm:px-6 bg-[#09090e] border-b border-white/10 flex items-center justify-between shrink-0 z-10 gap-3">
          {/* Left: Project Title & Live Status */}
          <div className="flex items-center space-x-3 min-w-0">
            <span className="flex items-center space-x-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>LIVE PREVIEW</span>
            </span>
            <span className="text-xs sm:text-sm font-light text-white truncate hidden md:inline">
              {title}
            </span>
          </div>

          {/* Center: Device Switcher & URL Bar */}
          <div className="flex items-center space-x-3 max-w-xl flex-1 justify-center">
            {/* Device Viewport Selector */}
            <div className="flex items-center p-1 rounded-full bg-black/60 border border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => handleDeviceChange('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  device === 'desktop'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleDeviceChange('tablet')}
                title="Tablet View (768px)"
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  device === 'tablet'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleDeviceChange('mobile')}
                title="Mobile View (390px)"
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  device === 'mobile'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Interactive Browser Address Pill */}
            <div className="hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-neutral-300 min-w-0 max-w-xs truncate shadow-inner">
              <Lock className="w-3 h-3 text-white shrink-0" />
              <span className="truncate text-[11px]">{cleanDomain}</span>
            </div>

            {/* Refresh Button */}
            <button
              type="button"
              onClick={handleRefresh}
              title="Refresh Live View"
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Open in new window & Close */}
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all text-xs font-mono uppercase tracking-wider text-neutral-300"
            >
              <span>OPEN SITE</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition-colors text-white cursor-pointer"
              aria-label="Close preview modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Device Viewport Canvas */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8 bg-[#050507]">
          <div
            className={`relative h-full transition-all duration-400 ease-out flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black ${
              device === 'mobile'
                ? 'w-[390px] max-h-[844px]'
                : device === 'tablet'
                ? 'w-[768px] max-h-[1024px]'
                : 'w-full max-w-7xl max-h-[92vh]'
            }`}
          >
            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#070709] space-y-3">
                <Loader2 className="w-6 h-6 animate-spin text-white" />
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  CONNECTING TO EDGE ENVIRONMENT...
                </span>
              </div>
            )}

            {/* Embedded Live Web Application */}
            <iframe
              key={`${url}-${iframeKey}-${device}`}
              src={url}
              title={`Live Preview of ${title}`}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
