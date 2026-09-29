'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FolderKanban,
  Users,
  Inbox,
  Receipt,
  FileText,
  ShieldAlert,
  Database,
  ArrowLeft,
} from 'lucide-react';

type TabType = 'leads' | 'projects' | 'clients' | 'invoices' | 'proposals';

interface ModuleItem {
  id: TabType;
  name: string;
  icon: React.ReactNode;
  count: string;
}

export default function AdminPortalPage() {
  const [activeTab, setActiveTab] = useState<TabType>('leads');

  const modules: ModuleItem[] = [
    { id: 'leads', name: 'Leads & Inquiries', icon: <Inbox className="w-4 h-4" />, count: 'API Ready' },
    { id: 'projects', name: 'Active Projects', icon: <FolderKanban className="w-4 h-4" />, count: '3 Concept Builds' },
    { id: 'clients', name: 'Clients', icon: <Users className="w-4 h-4" />, count: 'Schema Ready' },
    { id: 'proposals', name: 'Proposals', icon: <FileText className="w-4 h-4" />, count: 'Schema Ready' },
    { id: 'invoices', name: 'Invoices', icon: <Receipt className="w-4 h-4" />, count: 'Schema Ready' },
  ];

  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f6] font-mono p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
              title="Return to Studio Homepage"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="text-xs text-neutral-500 tracking-widest uppercase">
                APEXGEN STUDIO OS
              </div>
              <h1 className="text-2xl font-light text-white">ADMINISTRATION ARCHITECTURE</h1>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>STAGING / DB CONNECTION READY</span>
          </div>
        </div>

        {/* Integration Blueprint Banner */}
        <div className="p-6 rounded-2xl bg-[#0c0c12] border border-white/10 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-neutral-300">
            <Database className="w-4 h-4 text-white" />
            <span className="font-semibold uppercase">Architecture Notice: Backend Decoupling</span>
          </div>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Per production specifications, this portal does not display mock or fabricated client
            data. All core schemas (<code className="text-neutral-200">LeadRecord</code>,{' '}
            <code className="text-neutral-200">ClientRecord</code>,{' '}
            <code className="text-neutral-200">ProjectRecord</code>,{' '}
            <code className="text-neutral-200">InvoiceRecord</code>, and{' '}
            <code className="text-neutral-200">ProposalRecord</code>) are defined in{' '}
            <code className="text-neutral-200">src/types/admin.ts</code> and ready to bind with
            Supabase, Firebase Firestore, or a Prisma Postgres instance.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                activeTab === mod.id
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {mod.icon}
              <span>{mod.name}</span>
              <span className="text-[10px] opacity-60">({mod.count})</span>
            </button>
          ))}
        </div>

        {/* Active Module Panel */}
        <div className="p-8 rounded-2xl bg-[#0b0b10] border border-white/10 min-h-[300px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-light text-white uppercase tracking-wider">
                Module: /{activeTab}
              </h2>
              <span className="text-xs text-neutral-500">
                STATUS: READY FOR ENVIRONMENT HOOKS
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs text-neutral-400">
              <div className="text-white">Quick Integration Steps:</div>
              <div>1. Set up your project at Supabase or Firebase Console.</div>
              <div>2. Populate <code className="text-neutral-200">.env.local</code> with your API credentials.</div>
              <div>3. Inquiries submitted through the main contact form already route through <code className="text-neutral-200">/api/inquiry</code>.</div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
            <span>ApexGen Studio &bull; Internal Control Plane</span>
            <Link href="/" className="text-neutral-400 hover:text-white underline">
              Back to Public Studio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
