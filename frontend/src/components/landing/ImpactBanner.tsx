import { Handshake, Building2, CheckSquare, Users } from "lucide-react";

// Impact banner — "Stronger Together, Greater Impact" with large stat circles
const IMPACT_STATS = [
  { num: "14+", label: "Partner\nOrganisations", icon: Handshake, color: "#F57C20", bg: "bg-[#FFF7F2]" },
  { num: "11+", label: "Member\nInstitutions", icon: Building2, color: "#1F2B6C", bg: "bg-blue-50/50" },
  { num: "4+",  label: "Completed\nProjects", icon: CheckSquare, color: "#F57C20", bg: "bg-[#FFF7F2]" },
  { num: "50+", label: "Partners &\nCollaborators", icon: Users, color: "#1F2B6C", bg: "bg-blue-50/50" },
];

export function ImpactBanner() {
  return (
    <section className="bg-[#F6F1EB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Text */}
          <div className="lg:col-span-4 text-left">
            <h2 className="text-3xl font-bold text-[#1B2559] leading-tight mb-4 tracking-tight">
              Stronger Together,<br />
              <span className="text-[#F57C20]">Greater Impact</span>
            </h2>
            <p className="text-[#667085] text-xs leading-relaxed mb-8">
              Our members and partners are at the heart of everything we do.
              Together, we are shaping the future of innovation in Africa.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#1F2B6C] text-[#1F2B6C] text-xs font-bold hover:bg-[#1F2B6C] hover:text-white transition-all duration-200">
              View Our Partners →
            </button>
          </div>

          {/* RIGHT: Impact stat circles */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {IMPACT_STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 bg-white rounded-[30px] border border-[#ECE7E2] py-8 px-4 shadow-sm hover:shadow-md transition-all duration-200 group hover:-translate-y-1"
                  >
                    {/* Circular icon */}
                    <div
                      className={`w-[72px] h-[72px] rounded-full flex items-center justify-center border-2 border-white shadow-sm ${s.bg}`}
                      style={{ color: s.color }}
                    >
                      <Icon size={26} />
                    </div>
                    {/* Number */}
                    <p className="text-3xl font-bold tracking-tight" style={{ color: s.color }}>
                      {s.num}
                    </p>
                    {/* Label */}
                    <p className="text-[10px] font-bold text-[#667085] text-center leading-snug tracking-wide uppercase whitespace-pre-line">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
