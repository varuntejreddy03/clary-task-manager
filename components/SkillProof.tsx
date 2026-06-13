"use client";

const skills = [
  "Component architecture",
  "Zustand global state",
  "localStorage persist",
  "TypeScript types",
  "Form validation",
  "Conditional rendering",
  "Responsive UI",
  "Accessibility",
  "Deploy-ready code",
];

export default function SkillProof() {
  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-[#E6EEF5] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5">
      <h3 className="text-xs font-bold text-[#101828] uppercase tracking-wider mb-4 flex items-center gap-2">
        <span className="w-5 h-5 rounded-md bg-[#EBF5FF] flex items-center justify-center text-[10px]">⚡</span>
        Skills Demonstrated
      </h3>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gradient-to-r from-[#F8FBFF] to-[#F0FDFA] border border-[#E6EEF5]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#008B8B]" />
            <span className="text-xs text-[#101828] font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
