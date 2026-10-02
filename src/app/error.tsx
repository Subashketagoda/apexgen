'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled studio application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5E00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-xs font-mono text-red-400">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>SYSTEM RUNTIME EXCEPTION</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
          Experience Interrupted.
        </h1>

        <p className="text-sm text-neutral-400 font-light leading-relaxed">
          An unexpected anomaly occurred within the application render cycle. Our automated logging pipeline has registered the event.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#FF5E00] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#FF7A1A] transition-all cursor-pointer shadow-[0_0_20px_rgba(255,94,0,0.3)]"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RETRY RENDER</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-white/20 text-neutral-300 font-mono text-xs uppercase tracking-wider hover:text-white hover:border-white transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
