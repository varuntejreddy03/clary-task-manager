"use client";

import { useEffect, useState } from "react";
import { useTaskStore } from "@/store/useTaskStore";

export default function LocalStorageViewer() {
  const [rawData, setRawData] = useState<string>("");
  const [expanded, setExpanded] = useState(false);
  const tasks = useTaskStore((s) => s.tasks);
  const activeFilter = useTaskStore((s) => s.activeFilter);

  useEffect(() => {
    const data = localStorage.getItem("clary-task-store");
    setRawData(data || "");
  }, [tasks, activeFilter]);

  if (!rawData) return null;

  const parsed = (() => {
    try { return JSON.parse(rawData); }
    catch { return null; }
  })();

  const taskCount = parsed?.state?.tasks?.length ?? 0;

  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E6EEF5] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold text-[#101828] uppercase tracking-wider flex items-center gap-2">
          <span className="w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center text-[10px]">💾</span>
          Browser Storage Proof
        </h3>
        <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
          {taskCount} task{taskCount !== 1 ? "s" : ""} persisted
        </span>
      </div>

      <p className="text-[11px] text-[#667085] mb-3 leading-relaxed">
        This proves tasks are stored in <code className="text-[#101828] font-semibold bg-gray-50 px-1 rounded">localStorage</code> and survive page refresh.
      </p>

      <div className="flex flex-wrap gap-3 text-xs text-[#667085]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1E73FF]" />
          <span>Key: <code className="text-[#101828] font-semibold">clary-task-store</code></span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Filter: <code className="text-[#101828] font-semibold">{parsed?.state?.activeFilter ?? "—"}</code></span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Version: <code className="text-[#101828] font-semibold">{parsed?.version ?? 0}</code></span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-[#E6EEF5]">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[11px] font-medium text-[#667085] hover:text-[#1E73FF] transition-colors cursor-pointer"
        >
          {expanded ? "▾ Hide" : "▸ Show"} raw JSON data
        </button>
        {expanded && (
          <pre className="mt-2 p-3 rounded-xl bg-[#0f172a] text-[#e2e8f0] text-[10px] leading-relaxed overflow-x-auto max-h-44 font-mono">
            {JSON.stringify(parsed, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
