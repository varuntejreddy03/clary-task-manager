import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task, Priority, Filter, TaskStore } from "@/types/task";

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      activeFilter: "All",
      hasHydrated: false,
      addTask: (title, priority) =>
        set((state) => ({
          tasks: [
            {
              id: typeof crypto !== "undefined" && crypto.randomUUID
                ? crypto.randomUUID()
                : Date.now().toString(),
              title: title.trim(),
              priority,
              status: "pending",
              createdAt: Date.now(),
            },
            ...state.tasks,
          ],
        })),
      toggleDone: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id
              ? { ...t, status: t.status === "pending" ? "done" : "pending" }
              : t
          ),
        })),
      setFilter: (filter) => set({ activeFilter: filter }),
      clearCompleted: () =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.status !== "done"),
        })),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "clary-task-store",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
