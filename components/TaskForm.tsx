"use client";

import { useState } from "react";
import { useTaskStore } from "@/store/useTaskStore";
import { Priority } from "@/types/task";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [error, setError] = useState("");
  const addTask = useTaskStore((s) => s.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    addTask(title, priority);
    setTitle("");
    setPriority("Medium");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} id="task-form" className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="task-title" className="sr-only">Task title</label>
          <input
            id="task-title"
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => { setTitle(e.target.value); if (error) setError(""); }}
            className="w-full px-4 py-2.5 rounded-full border border-[#E6EEF5] bg-white focus:outline-none focus:ring-2 focus:ring-[#008B8B]/30 focus:border-[#008B8B] transition placeholder:text-[#667085]/60 text-sm"
          />
        </div>
        <div>
          <label htmlFor="task-priority" className="sr-only">Priority</label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-[#E6EEF5] bg-white focus:outline-none focus:ring-2 focus:ring-[#008B8B]/30 transition text-sm"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 bg-[#050505] text-white text-sm font-semibold rounded-full hover:bg-[#222] focus:outline-none focus:ring-2 focus:ring-[#050505]/30 focus:ring-offset-2 transition-all cursor-pointer shadow-sm"
        >
          Add Task
        </button>
      </div>
      {error && <p className="text-red-500 text-xs font-medium" role="alert">{error}</p>}
      <p className="text-xs text-[#667085]">
        Tasks are saved automatically in your browser.
      </p>
    </form>
  );
}
