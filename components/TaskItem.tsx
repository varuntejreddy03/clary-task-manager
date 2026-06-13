"use client";

import { Task } from "@/types/task";
import { useTaskStore } from "@/store/useTaskStore";

const priorityStyles = {
  Low: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Medium: "bg-amber-50 text-amber-700 border-amber-100",
  High: "bg-red-50 text-red-600 border-red-100",
};

export default function TaskItem({ task }: { task: Task }) {
  const toggleDone = useTaskStore((s) => s.toggleDone);
  const isDone = task.status === "done";

  const timeAgo = () => {
    const diff = Date.now() - task.createdAt;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E6EEF5] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md transition-all ${
        isDone ? "opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => toggleDone(task.id)}
        className="w-4.5 h-4.5 rounded border-gray-300 accent-[#008B8B] cursor-pointer"
        aria-label={`Mark "${task.title}" as ${isDone ? "pending" : "done"}`}
      />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${isDone ? "line-through text-[#667085]" : "text-[#101828]"}`}>
          {task.title}
        </p>
        <p className="text-[10px] text-[#667085] mt-0.5">{timeAgo()}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${priorityStyles[task.priority]}`}>
          {task.priority}
        </span>
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
          isDone
            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
            : "bg-gray-50 text-[#667085] border-gray-100"
        }`}>
          {isDone ? "Done" : "Pending"}
        </span>
      </div>
      <button
        onClick={() => toggleDone(task.id)}
        className="text-[10px] font-medium text-[#008B8B] hover:underline cursor-pointer shrink-0"
      >
        {isDone ? "Undo" : "Complete"}
      </button>
    </div>
  );
}
