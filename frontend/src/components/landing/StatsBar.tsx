import type { HomeStats } from "@ndip/shared/types";
import { Building2, Globe2, Handshake, CheckCircle2, Rocket } from "lucide-react";

const STAT_ITEMS = [
  { icon: Building2, label: "Member Institutions", color: "#F57C20", border: "border-[#F57C20]", bg: "bg-[#FFF7F2]" },
  { icon: Globe2, label: "Countries Reached", color: "#1F2B6C", border: "border-[#1F2B6C]", bg: "bg-blue-50/50" },
  { icon: Handshake, label: "Partners & Collaborators", color: "#F57C20", border: "border-[#F57C20]", bg: "bg-[#FFF7F2]" },
  { icon: CheckCircle2, label: "Completed Projects", color: "#1F2B6C", border: "border-[#1F2B6C]", bg: "bg-blue-50/50" },
  { icon: Rocket, label: "Active Programs", color: "#F57C20", border: "border-[#F57C20]", bg: "bg-[#FFF7F2]" },
];

interface Props {
  stats: HomeStats;
}

export function StatsBar({ stats }: Props) {
  const values = [
    `${stats.memberInstitutions}+`,
    `${stats.countriesReached}+`,
    `${stats.partnersCollaborators}+`,
    `${stats.completedProjects}+`,
    `${stats.activePrograms}+`,
  ];

  return (
    <section className="bg-white border-y border-[#ECE7E2] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {STAT_ITEMS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-3 bg-white rounded-[30px] border border-[#ECE7E2] py-8 px-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Circular icon */}
                <div
                  className={`w-[72px] h-[72px] rounded-full border-2 ${s.border} ${s.bg} flex items-center justify-center text-[#1F2B6C] shrink-0 shadow-sm`}
                  style={{ color: s.color }}
                >
                  <Icon size={28} strokeWidth={2} />
                </div>
                {/* Number */}
                <p className="text-3xl font-bold leading-none tracking-tight" style={{ color: s.color }}>
                  {values[i]}
                </p>
                {/* Label */}
                <p className="text-[10px] font-bold text-[#667085] text-center leading-snug tracking-wide uppercase">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
