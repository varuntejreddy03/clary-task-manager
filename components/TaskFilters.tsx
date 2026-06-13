"use client";

import { useTaskStore } from "@/store/useTaskStore";
import { Filter } from "@/types/task";

const filters: Filter[] = ["All", "Pending", "Done"];

export default function TaskFilters() {
  const activeFilter = useTaskStore((s) => s.activeFilter);
  const setFilter = useTaskStore((s) => s.setFilter);

  return (
    <div className="flex gap-2" role="group" aria-label="Task filters">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          aria-pressed={activeFilter === f}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === f
              ? "bg-[#050505] text-white shadow-sm"
              : "bg-white text-[#667085] border border-[#E6EEF5] hover:border-[#008B8B] hover:text-[#008B8B]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
