"use client";

import Image from "next/image";
import { useTaskStore } from "@/store/useTaskStore";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks);
  const activeFilter = useTaskStore((s) => s.activeFilter);
  const clearCompleted = useTaskStore((s) => s.clearCompleted);

  const filtered = tasks.filter((t) => {
    if (activeFilter === "Pending") return t.status === "pending";
    if (activeFilter === "Done") return t.status === "done";
    return true;
  });

  const hasDone = tasks.some((t) => t.status === "done");

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 min-h-[220px]">
        <Image
          src="/clary-mascot.png"
          alt="Clary"
          width={56}
          height={56}
          className="object-contain mb-3 opacity-70"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <p className="text-3xl mb-2">📋</p>
        <p className="text-[#667085] text-sm">No tasks yet. Add your first task.</p>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 min-h-[180px]">
        <p className="text-[#667085] text-sm">No matching tasks for this filter.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {hasDone && (
        <div className="pt-3 text-right">
          <button
            onClick={clearCompleted}
            className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors cursor-pointer"
          >
            Clear completed
          </button>
        </div>
      )}
    </div>
  );
}
