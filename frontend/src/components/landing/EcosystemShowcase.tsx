import { Sparkles, ArrowRight, Compass, Cpu, Heart } from "lucide-react";

const SPOTLIGHTS = [
  {
    category: "TTOaaS",
    title: "Strathmore University Launches Tech Transfer Office",
    desc: "Facilitating intellectual property protection and research commercialisation for 5+ local university spin-off startups.",
    icon: Cpu,
    metric: "5+ Spin-offs Enabled",
    color: "#F57C20",
    bg: "bg-[#FFF7F2]",
  },
  {
    category: "Venture Builder",
    title: "Academic Research Secures $150K Seed Funding",
    desc: "A digital agricultural platform founded by Kenyan researchers successfully transitioned from classroom research to market viability.",
    icon: Compass,
    metric: "$150,000 Raised",
    color: "#1F2B6C",
    bg: "bg-blue-50/50",
  },
  {
    category: "Community",
    title: "IoT Soil Sensor Wins Pan-African Hackathon",
    desc: "NEIL student innovators designed an affordable soil moisture tracking grid, receiving global mentorship and corporate partner support.",
    icon: Sparkles,
    metric: "1st Place Award",
    color: "#F57C20",
    bg: "bg-[#FFF7F2]",
  },
];

export function EcosystemShowcase() {
  return (
    <section className="bg-[#FDFAF8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 text-left">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-widest text-[#F57C20] uppercase bg-[#FFF7F2] border border-[#ECE7E2] px-3 py-1 rounded-full">
              ECOSYSTEM SPOTLIGHTS
            </span>
            <h2 className="text-3xl font-bold text-[#1B2559] mt-4 leading-tight tracking-tight">
              Innovation in Action
            </h2>
            <p className="text-[#667085] text-xs mt-2 leading-relaxed">
              Real-world success stories, collaborative breakthroughs, and entrepreneurial milestones from member institutions, faculty researchers, and student innovators across the pan-African network.
            </p>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#1F2B6C] hover:text-[#F57C20] transition-colors group">
            Explore Network Directory
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Spotlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPOTLIGHTS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-[24px] border border-[#ECE7E2] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Category tag & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md"
                      style={{ color: s.color, backgroundColor: s.color + "12" }}
                    >
                      {s.category}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.bg}`} style={{ color: s.color }}>
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[14px] font-bold text-[#1B2559] leading-snug tracking-tight mb-2">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#667085] text-[11px] font-semibold leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Metric footer */}
                <div className="pt-4 border-t border-[#ECE7E2] flex items-center justify-between">
                  <span className="text-[10.5px] font-bold text-[#1B2559]">{s.metric}</span>
                  <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1">
                    Verified <Heart size={10} className="fill-red-500 text-red-500" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
