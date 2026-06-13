export type Priority = "Low" | "Medium" | "High";
export type Status = "pending" | "done";
export type Filter = "All" | "Pending" | "Done";

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  createdAt: number;
}

export interface TaskStore {
  tasks: Task[];
  activeFilter: Filter;
  hasHydrated: boolean;
  addTask: (title: string, priority: Priority) => void;
  toggleDone: (id: string) => void;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
  setHasHydrated: (value: boolean) => void;
}
