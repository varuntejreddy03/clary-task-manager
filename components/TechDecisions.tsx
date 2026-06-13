"use client";

const decisions = [
  {
    tech: "Zustand over Redux",
    reason: "Zero boilerplate, ~1KB bundle, built-in persist middleware. Perfect for this scope.",
  },
  {
    tech: "Next.js App Router",
    reason: "Modern React patterns, file-based routing, production-ready SSR/SSG support.",
  },
  {
    tech: "localStorage persist",
    reason: "No backend needed. Data stays in the browser, survives refresh, instant read/write.",
  },
  {
    tech: "Tailwind CSS",
    reason: "Rapid styling, consistent design tokens, zero CSS file management overhead.",
  },
  {
    tech: "TypeScript",
    reason: "Full type safety on store, components, and props. Catches bugs at compile time.",
  },
];

export default function TechDecisions() {
  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E6EEF5] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5">
      <h3 className="text-xs font-bold text-[#101828] uppercase tracking-wider mb-4 flex items-center gap-2">
        <span className="w-5 h-5 rounded-md bg-[#EBF5FF] flex items-center justify-center text-[10px]">🧠</span>
        Technical Decisions
      </h3>
      <div className="space-y-2.5">
        {decisions.map((d) => (
          <div key={d.tech} className="p-3 rounded-xl bg-[#F8FBFF] border border-[#E6EEF5]">
            <p className="text-[11px] font-bold text-[#101828]">{d.tech}</p>
            <p className="text-[11px] text-[#667085] mt-0.5 leading-relaxed">{d.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
