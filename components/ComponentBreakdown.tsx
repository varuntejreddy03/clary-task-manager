"use client";

const components = [
  { name: "TaskForm", desc: "Handles input, priority selection, validation, and calls addTask." },
  { name: "StatsBar", desc: "Calculates total, pending, done, and high priority counts from store." },
  { name: "TaskFilters", desc: "Updates activeFilter in Zustand state instantly." },
  { name: "TaskList", desc: "Filters tasks and renders task cards or empty states." },
  { name: "TaskItem", desc: "Displays a single task and toggles pending/done." },
  { name: "useTaskStore", desc: "Central Zustand store for tasks, filters, actions, and persistence." },
  { name: "Hydration", desc: "Prevents Next.js localStorage mismatch before client state loads." },
];

export default function ComponentBreakdown() {
  return (
    <div id="component-breakdown" className="rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E6EEF5] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5">
      <h3 className="text-xs font-bold text-[#101828] uppercase tracking-wider mb-4 flex items-center gap-2">
        <span className="w-5 h-5 rounded-md bg-[#EBF5FF] flex items-center justify-center text-[10px]">🧩</span>
        Component Breakdown
      </h3>
      <div className="space-y-2.5">
        {components.map((c) => (
          <div key={c.name} className="p-3 rounded-xl bg-[#F8FBFF] border border-[#E6EEF5]">
            <code className="text-[11px] font-bold text-[#1E73FF] bg-white px-2 py-0.5 rounded border border-blue-100">
              {c.name}
            </code>
            <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
