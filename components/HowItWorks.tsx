"use client";

const steps = [
  { num: "1", title: "Add Task", desc: "User enters title + priority", icon: "✍️" },
  { num: "2", title: "Zustand Store", desc: "State updates instantly", icon: "⚡" },
  { num: "3", title: "localStorage", desc: "Persisted automatically", icon: "💾" },
  { num: "4", title: "UI Renders", desc: "Components re-render", icon: "🖥️" },
  { num: "5", title: "Page Refresh", desc: "Data survives reload", icon: "🔄" },
];

export default function HowItWorks() {
  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E6EEF5] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5">
      <h3 className="text-xs font-bold text-[#101828] uppercase tracking-wider mb-4 flex items-center gap-2">
        <span className="w-5 h-5 rounded-md bg-[#EBF5FF] flex items-center justify-center text-[10px]">🔁</span>
        How It Works — Data Flow
      </h3>
      <div className="flex flex-col sm:flex-row items-stretch gap-2">
        {steps.map((step, i) => (
          <div key={step.num} className="flex-1 flex flex-col items-center text-center p-3 rounded-xl bg-gradient-to-b from-[#F8FBFF] to-white border border-[#E6EEF5] relative">
            <span className="text-xl mb-1.5">{step.icon}</span>
            <p className="text-[11px] font-bold text-[#101828]">{step.title}</p>
            <p className="text-[10px] text-[#667085] mt-0.5">{step.desc}</p>
            {i < steps.length - 1 && (
              <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#E6EEF5] text-lg z-10">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
