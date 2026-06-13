"use client";

import Image from "next/image";

const chips = ["Next.js", "TypeScript", "Zustand", "localStorage", "Tailwind CSS"];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#EBF5FF] via-white to-[#E0F7FA] border border-[#E6EEF5] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 md:p-8">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#1E73FF]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#008B8B]/5 rounded-full blur-2xl" />

      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="AskFirst Logo" width={28} height={28} className="rounded-md" />
            <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider">AskFirst · Clary Team</span>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#101828]">
              🩺 Clary Task Manager
            </h1>
            <p className="text-[#667085] text-sm mt-2 leading-relaxed max-w-lg">
              A healthcare-inspired mini task workflow built with Next.js, Zustand, and localStorage.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 text-[11px] font-semibold bg-white/80 border border-[#E6EEF5] rounded-full text-[#667085]"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => scrollTo("task-form")}
              className="px-5 py-2.5 bg-[#050505] text-white text-xs font-semibold rounded-full hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-[#050505]/30 focus:ring-offset-2 transition-all cursor-pointer shadow-sm"
            >
              ✚ Add first task
            </button>
            <button
              onClick={() => scrollTo("component-breakdown")}
              className="px-5 py-2.5 bg-white text-[#101828] text-xs font-semibold rounded-full border border-[#E6EEF5] hover:border-[#008B8B] hover:text-[#008B8B] focus:outline-none focus:ring-2 focus:ring-[#008B8B]/20 transition-all cursor-pointer"
            >
              🧩 View components
            </button>
          </div>
        </div>

        {/* Mascot area */}
        <div className="hidden md:flex items-center justify-center w-36 h-36 rounded-2xl bg-gradient-to-br from-[#E0F7FA]/60 to-[#EBF5FF]/60 border border-[#E6EEF5] shrink-0">
          <span className="text-6xl">🩺</span>
        </div>
      </div>
    </section>
  );
}
