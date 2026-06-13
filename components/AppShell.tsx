"use client";

import Image from "next/image";
import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navbar */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-[#E6EEF5]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AskFirst" width={32} height={32} className="rounded-lg" />
            <div>
              <p className="text-sm font-bold text-[#101828] leading-tight">Clary Task Manager</p>
              <p className="text-[10px] text-[#667085]">AskFirst · React Engineer Task</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex px-2.5 py-1 text-[10px] font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
              ● localStorage synced
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-5 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center text-[11px] text-[#667085] py-5 border-t border-[#E6EEF5] bg-white/50">
        Built for AskFirst · Clary Team React Engineer Task
      </footer>
    </div>
  );
}
