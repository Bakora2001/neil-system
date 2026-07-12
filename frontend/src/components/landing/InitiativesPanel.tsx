import { Cpu, Zap, GraduationCap, Coins, Building2 } from "lucide-react";

// Programs/Initiatives section with orbit diagram on right + list on left
const PROGRAMS = [
  {
    title: "TTOaaS",
    desc: "Share Technology Office: IP protection, commercialisation, and startup formation",
    icon: Cpu,
    color: "#F57C20",
    bg: "bg-[#FFF7F2]",
  },
  {
    title: "Venture Builder Program",
    desc: "This training equips venture-ready ventures through strategic alignment and partnerships",
    icon: Zap,
    color: "#1F2B6C",
    bg: "bg-blue-50/50",
  },
  {
    title: "Student-Led Innovation",
    desc: "Empowering students to build impactful solutions and ventures",
    icon: GraduationCap,
    color: "#F57C20",
    bg: "bg-[#FFF7F2]",
  },
  {
    title: "Innovation Fund",
    desc: "Seed funding for promising innovations and early-stage initiatives across Africa",
    icon: Coins,
    color: "#1F2B6C",
    bg: "bg-blue-50/50",
  },
  {
    title: "Institutional Support",
    desc: "Building capacity of universities to set up and strengthen their TTOs and Innovation ecosystems",
    icon: Building2,
    color: "#F57C20",
    bg: "bg-[#FFF7F2]",
  },
];

// Orbit positions (angle in degrees) for 5 satellite programs
const ORBIT_ANGLES = [72, 144, 216, 288, 360];

export function InitiativesPanel() {
  return (
    <section className="bg-[#FDFAF8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text + Program List */}
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#F57C20] uppercase bg-[#FFF7F2] border border-[#ECE7E2] px-3 py-1 rounded-full">
              OUR INITIATIVES
            </span>
            <h2 className="text-3xl font-bold text-[#1B2559] mt-4 mb-3 leading-tight tracking-tight">
              Programs Driving<br />
              <span className="text-[#F57C20]">Innovation & Impact</span>
            </h2>
            <p className="text-[#667085] text-xs leading-relaxed mb-8">
              From strengthening Technology Transfer Offices to empowering student innovation,
              our programs are sustainable, just ready for impact.
            </p>

            <div className="space-y-4">
              {PROGRAMS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-[#ECE7E2] shadow-sm hover:shadow-md transition-all duration-200 group text-left"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm ${p.bg}`}
                      style={{ color: p.color }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#1B2559] leading-none mb-1">{p.title}</p>
                      <p className="text-[10px] text-[#667085] font-semibold leading-snug">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-left">
              <button className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1F2B6C] text-white text-xs font-bold hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Explore All Programs →
              </button>
            </div>
          </div>

          {/* RIGHT: Orbit Diagram */}
          <div className="flex items-center justify-center">
            <div className="relative w-[420px] h-[420px]">
              {/* Outer orbit ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
                <circle
                  cx="210" cy="210" r="170"
                  stroke="#ECE7E2"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  fill="none"
                />
              </svg>

              {/* Center NEIL Logo circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[130px] h-[130px] rounded-full bg-white border-2 border-[#ECE7E2] shadow-xl flex items-center justify-center">
                  <img
                    src="/images/neil-logo.png"
                    alt="NEIL"
                    className="w-[90px] h-auto object-contain"
                  />
                </div>
              </div>

              {/* Satellite program nodes */}
              {PROGRAMS.map((p, i) => {
                const angle = (((ORBIT_ANGLES[i] ?? 0) * Math.PI) / 180);
                const r = 170;
                const cx = 210 + r * Math.cos(angle);
                const cy = 210 + r * Math.sin(angle);
                const color = p.color;
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${cx}px`,
                      top: `${cy}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Dotted connector line drawn via SVG on top */}
                    <svg
                      className="absolute pointer-events-none"
                      style={{
                        left: "50%",
                        top: "50%",
                        width: `${r}px`,
                        height: `${r}px`,
                        overflow: "visible",
                        zIndex: 0,
                      }}
                    >
                      <line
                        x1="0" y1="0"
                        x2={210 - cx} y2={210 - cy}
                        stroke={color}
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.4"
                      />
                    </svg>

                    {/* Node bubble */}
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={20} />
                    </div>
                    <p className="text-[9px] font-bold text-[#1B2559] mt-1.5 text-center leading-tight max-w-[70px]">
                      {p.title}
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
