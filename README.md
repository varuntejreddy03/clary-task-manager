# 🩺 Clary Task Manager

<p align="center">
  <img src="public/logo.png" alt="AskFirst Logo" width="64" />
</p>

<p align="center">
  <strong>A healthcare-inspired mini task workflow app</strong><br/>
  Built for the <em>AskFirst · Clary Team — React Engineer</em> interview task.
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-deployment">Deployment</a>
</p>

---

## 🚀 Live Demo

> 🔗 **[View on Vercel →](#)** _(replace with your Vercel URL after deploy)_

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | React framework with file-based routing |
| **TypeScript** | Full type safety across components & store |
| **Tailwind CSS 4** | Utility-first styling with custom Clary theme |
| **Zustand** | Lightweight global state management |
| **Zustand persist** | localStorage persistence middleware |

> ✅ No backend. No database. No Redux. No unnecessary UI libraries.

---

## ✨ Features

| Feature | Status |
|---|:---:|
| Add tasks with title + priority (Low / Medium / High) | ✅ |
| Toggle task status (pending ↔ done) | ✅ |
| Filter tasks: All, Pending, Done | ✅ |
| Persistent storage via localStorage | ✅ |
| Clear completed tasks | ✅ |
| Stats dashboard (Total, Pending, Done, High Priority) | ✅ |
| localStorage data viewer (visible proof of persistence) | ✅ |
| Empty state handling with contextual messages | ✅ |
| Form validation with inline error messages | ✅ |
| Responsive dashboard layout (mobile + desktop) | ✅ |
| AskFirst / Clary branding & healthcare theme | ✅ |
| Hydration-safe rendering (no SSR mismatch) | ✅ |
| Component breakdown & skill proof in UI | ✅ |

---

## 💾 Data Persistence

This app uses **Zustand persist middleware** to store all tasks and the active filter in the browser's `localStorage`.

- Store key: `clary-task-store`
- **Tasks survive page refresh** — no data is lost
- The `LocalStorageViewer` component provides visible proof in the UI
- Hydration is handled safely using `onRehydrateStorage` callback to prevent Next.js SSR mismatch

---

## 🏗 Architecture

### File Structure

```
├── app/
│   ├── globals.css          # Tailwind imports + Clary theme + decorative blobs
│   ├── layout.tsx           # Root layout with metadata & font
│   └── page.tsx             # Main page — 2-column dashboard layout
├── components/
│   ├── AppShell.tsx         # Top navbar + max-width container + footer
│   ├── Hero.tsx             # Branded hero card with CTA buttons & tech chips
│   ├── StatsBar.tsx         # 4 stat cards computed from Zustand store
│   ├── TaskForm.tsx         # Input, priority select, validation, addTask
│   ├── TaskFilters.tsx      # All / Pending / Done filter pills
│   ├── TaskList.tsx         # Filtered task list + empty states
│   ├── TaskItem.tsx         # Single task card with toggle, badges, time
│   ├── SkillProof.tsx       # Skills demonstrated panel
│   ├── ComponentBreakdown.tsx # Component explanation for interview
│   └── LocalStorageViewer.tsx # Live localStorage data proof
├── store/
│   └── useTaskStore.ts      # Zustand store with persist middleware
├── types/
│   └── task.ts              # TypeScript interfaces & types
└── public/
    └── logo.png             # AskFirst / Clary logo
```

### Component Responsibility

| Component | What it does |
|---|---|
| `AppShell` | Dashboard layout shell — navbar, content area, footer |
| `Hero` | Branded hero with logo, title, subtitle, tech chips, CTA buttons |
| `TaskForm` | Controlled form with validation — calls `addTask` on submit |
| `StatsBar` | Derives total / pending / done / high-priority counts from store |
| `TaskFilters` | Pill buttons that set `activeFilter` in Zustand |
| `TaskList` | Applies filter, renders `TaskItem` list or empty state |
| `TaskItem` | Displays one task — title, priority badge, status, toggle, time |
| `SkillProof` | Lists skills demonstrated for the interviewer |
| `ComponentBreakdown` | Explains each component in interview language |
| `LocalStorageViewer` | Shows live localStorage key, stored tasks count, raw JSON |

---

## 🧠 State Management — Zustand Store

```ts
interface TaskStore {
  tasks: Task[];
  activeFilter: "All" | "Pending" | "Done";
  hasHydrated: boolean;

  addTask(title: string, priority: Priority): void;
  toggleDone(id: string): void;
  setFilter(filter: Filter): void;
  clearCompleted(): void;
  setHasHydrated(value: boolean): void;
}
```

### Why Zustand?

- Zero boilerplate vs Redux
- Built-in `persist` middleware for localStorage
- Works perfectly with Next.js App Router
- Tiny bundle size (~1KB)

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/varuntejreddy03/clary-task-manager.git
cd clary-task-manager

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:3000**

---

## 🌐 Deployment

### Deploy to Vercel (recommended)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Framework is auto-detected as **Next.js**
5. Click **Deploy**
6. Share the live URL ✅

---

## ✅ Interview Checklist

| Requirement | Implemented |
|---|:---:|
| Add task with title validation | ✅ |
| Priority selection (Low / Medium / High) | ✅ |
| Filter tasks (All / Pending / Done) | ✅ |
| Toggle done / pending | ✅ |
| Zustand for state management | ✅ |
| localStorage persistence via Zustand persist | ✅ |
| Tasks survive page refresh | ✅ |
| Visible proof of localStorage storage | ✅ |
| Responsive mobile + desktop layout | ✅ |
| Dashboard-style two-column layout | ✅ |
| Component explanation in UI | ✅ |
| AskFirst / Clary branding | ✅ |
| No backend / no database | ✅ |
| TypeScript throughout | ✅ |
| Clean, production-quality code | ✅ |
| Deployed to Vercel | ⬜ _(add URL above)_ |

---

## 👤 Author

Built by **VarunTej Reddy N** for the AskFirst · Clary Team React Engineer position.

---

<p align="center">
  <em>Thank you for reviewing my submission! 🙌</em>
</p>
