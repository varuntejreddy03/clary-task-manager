"use client";

import { useTaskStore } from "@/store/useTaskStore";
import AppShell from "@/components/AppShell";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TaskForm from "@/components/TaskForm";
import TaskFilters from "@/components/TaskFilters";
import TaskList from "@/components/TaskList";
import SkillProof from "@/components/SkillProof";
import ComponentBreakdown from "@/components/ComponentBreakdown";
import LocalStorageViewer from "@/components/LocalStorageViewer";

export default function Home() {
  const hasHydrated = useTaskStore((s) => s.hasHydrated);

  if (!hasHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-6 h-6 border-2 border-[#008B8B] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-[#667085]">Syncing tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <AppShell>
      {/* Hero - full width */}
      <Hero />

      {/* Two-column layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Left / Main column */}
        <div className="space-y-5">
          <StatsBar />

          <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-[#E6EEF5] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <TaskForm />
          </section>

          <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-[#E6EEF5] shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-4">
            <TaskFilters />
            <TaskList />
          </section>

          <LocalStorageViewer />
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <SkillProof />
          <ComponentBreakdown />
        </div>
      </div>
    </AppShell>
  );
}
