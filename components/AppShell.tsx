"use client";

import Image from "next/image";
import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-lg border-b border-[#E6EEF5] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AskFirst" width={32} height={32} className="rounded-lg" />
            <div>
              <p className="text-sm font-bold text-[#101828] leading-tight">Clary Task Manager</p>
              <p className="text-[10px] text-[#667085]">AskFirst · React Engineer Task</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://varuntej.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold text-[#667085] rounded-full border border-[#E6EEF5] hover:border-[#1E73FF] hover:text-[#1E73FF] transition-all"
            >
              🌐 Portfolio
            </a>
            <a
              href="https://github.com/varuntejreddy03"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold text-[#667085] rounded-full border border-[#E6EEF5] hover:border-[#101828] hover:text-[#101828] transition-all"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              localStorage synced
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-5 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center py-5 border-t border-[#E6EEF5] bg-white/50">
        <p className="text-[11px] text-[#667085]">
          Built by <span className="font-semibold text-[#101828]">VarunTej Reddy N</span> · React Engineer Task · AskFirst / Clary
        </p>
      </footer>
    </div>
  );
}
