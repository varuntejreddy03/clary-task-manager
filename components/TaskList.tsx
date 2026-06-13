"use client";

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
      <div className="text-center py-14">
        <div className="text-5xl mb-3">🩺</div>
        <p className="text-[#667085] text-sm">No tasks yet. Add your first task.</p>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="text-center py-10">
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
