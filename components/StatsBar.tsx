"use client";

import { useTaskStore } from "@/store/useTaskStore";

export default function StatsBar() {
  const tasks = useTaskStore((s) => s.tasks);
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;
  const pending = total - done;
  const high = tasks.filter((t) => t.priority === "High").length;

  const stats = [
    { label: "Total", value: total, color: "from-[#EBF5FF] to-white", text: "text-[#1E73FF]" },
    { label: "Pending", value: pending, color: "from-[#FFF7ED] to-white", text: "text-amber-600" },
    { label: "Done", value: done, color: "from-[#ECFDF5] to-white", text: "text-emerald-600" },
    { label: "High Priority", value: high, color: "from-[#FEF2F2] to-white", text: "text-red-500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className={`bg-gradient-to-br ${s.color} rounded-xl p-4 border border-[#E6EEF5]`}
        >
          <p className={`text-2xl font-bold ${s.text}`}>{s.value}</p>
          <p className="text-xs text-[#667085] font-medium mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
