'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Maximize2,
  RotateCw,
  Globe,
  Loader2,
} from 'lucide-react';

interface InteractiveCardPreviewProps {
  liveUrl?: string;
  heroImage: string;
  title: string;
  accentColor?: string;
  category: string;
  aspectClass?: string;
  onOpenModal?: (url: string, title: string) => void;
}

export function InteractiveCardPreview({
  liveUrl,
  heroImage,
  title,
  accentColor = '#10b981',
  category,
  aspectClass = 'aspect-[4/3] sm:aspect-[16/10]',
  onOpenModal,
}: InteractiveCardPreviewProps) {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const handleToggleLive = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!liveUrl) return;
    if (!isLive) {
      setIsLoading(true);
      setIsLive(true);
    } else {
      setIsLive(false);
      setIsLoading(false);
    }
  };

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!liveUrl) return;
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleLaunchModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!liveUrl) return;
    if (onOpenModal) {
      onOpenModal(liveUrl, title);
    } else {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`relative ${aspectClass} w-full overflow-hidden border-b border-white/10 bg-black/90 group/preview`}
    >
      {/* 1. Static Screenshot Mode */}
      {!isLive ? (
        <div
          onClick={handleToggleLive}
          className="relative w-full h-full cursor-pointer group/screen"
          title="Click to activate live website interaction & menu"
        >
          <Image
            src={heroImage}
            alt={`${title} Live Website Preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/preview:opacity-30 transition-opacity duration-500" />
          <div
            className="absolute inset-0 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${accentColor}18 0%, transparent 70%)`,
            }}
          />

          {/* Central Hover Prompt Badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="px-4 py-2 rounded-full bg-black/85 border border-emerald-400/40 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-md flex items-center space-x-2 shadow-[0_0_25px_rgba(16,185,129,0.3)] transform translate-y-2 group-hover/preview:translate-y-0 transition-transform">
              <Globe className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>CLICK TO INTERACT LIVE &bull; TEST MENU</span>
            </div>
          </div>
        </div>
      ) : (
        /* 2. Real Interactive Live Iframe Mode */
        <div className="relative w-full h-full bg-[#050507]">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050507]/90 backdrop-blur-sm space-y-2">
              <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                LOADING LIVE SITE...
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

      {/* Top Category Badge */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-none">
        <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider uppercase bg-black/60 text-white border border-white/20 backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Floating Control Toolbar (Live / Screenshot / Fullscreen) */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center space-x-2">
        {/* Toggle Live Interactive Mode */}
        <button
          type="button"
          onClick={handleToggleLive}
          className={`px-3 py-1.5 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold backdrop-blur-md border shadow-lg flex items-center space-x-1.5 transition-all duration-300 active:scale-95 cursor-pointer ${
            isLive
              ? 'bg-emerald-500 text-black border-emerald-400 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
              : 'bg-black/80 text-white border-white/25 hover:bg-white hover:text-black hover:border-white'
          }`}
          title={isLive ? 'Switch to static image' : 'Interact with live website inside card'}
        >
          {isLive ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
              <span>LIVE ACTIVE &bull; ✕</span>
            </>
          ) : (
            <>
              <Globe className="w-3 h-3 text-emerald-400" />
              <span>INTERACT LIVE</span>
            </>
          )}
        </button>

        {/* Reload if in live mode */}
        {isLive && (
          <button
            type="button"
            onClick={handleRefresh}
            title="Refresh Live Iframe"
            className="p-1.5 rounded-full bg-black/80 border border-white/20 text-neutral-300 hover:text-white backdrop-blur-md transition-colors"
          >
            <RotateCw className="w-3 h-3" />
          </button>
        )}

        {/* Fullscreen Simulator Modal Launch */}
        <button
          type="button"
          onClick={handleLaunchModal}
          title="Open Device Simulator & Fullscreen Preview"
          className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-black/80 border border-white/20 text-neutral-300 hover:text-white hover:bg-white/10 backdrop-blur-md transition-colors flex items-center space-x-1 font-mono text-[10px] uppercase"
        >
          <Maximize2 className="w-3 h-3 text-emerald-400" />
          <span className="hidden sm:inline">SIMULATOR</span>
        </button>
      </div>
    </div>
  );
}
