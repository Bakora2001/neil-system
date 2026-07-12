import { Shield, Activity, Award, Network, Globe2 } from "lucide-react";

// Building Entrepreneurial Institutions — flowing journey with bezier curve connector
const STEPS = [
  {
    num: "01",
    color: "#F57C20",
    icon: Shield,
    title: "Institutional Leadership",
    desc: "Empowering leaders to drive change",
    bg: "bg-[#FFF7F2]",
  },
  {
    num: "02",
    color: "#1F2B6C",
    icon: Activity,
    title: "Research Commercialisation",
    desc: "Turning ideas into real business",
    bg: "bg-blue-50/50",
  },
  {
    num: "03",
    color: "#F57C20",
    icon: Award,
    title: "Student Innovation",
    desc: "Nurturing the next generation",
    bg: "bg-[#FFF7F2]",
  },
  {
    num: "04",
    color: "#1F2B6C",
    icon: Network,
    title: "Strategic Partnerships",
    desc: "Building a connected innovation ecosystem",
    bg: "bg-blue-50/50",
  },
  {
    num: "05",
    color: "#F57C20",
    icon: Globe2,
    title: "Sustainable Impact",
    desc: "Driving socio-economic transformation",
    bg: "bg-[#FFF7F2]",
  },
];

export function ApproachSteps() {
  return (
    <section className="py-20 px-6 bg-[#F6F1EB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-[10px] font-bold tracking-widest text-[#F57C20] uppercase bg-white border border-[#ECE7E2] px-3 py-1 rounded-full">
            THE NEIL APPROACH
          </span>
        </div>
        <h2 className="text-3xl font-bold text-[#1B2559] text-center mt-3 mb-3 tracking-tight">
          Building Entrepreneurial Institutions for Africa's Future
        </h2>
        <p className="text-[#667085] text-xs text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Our collaborative approach unites academia, industry, and government to co-create solutions
          for institutional transformation, capacity building, and research commercialisation.
        </p>

        {/* Journey with flowing bezier line */}
        <div className="relative">
          {/* SVG Bezier Curve connecting all steps */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ top: "75px" }}>
            <svg
              className="w-full"
              viewBox="0 0 1100 100"
              fill="none"
              preserveAspectRatio="none"
              style={{ height: "100px" }}
            >
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F57C20" />
                  <stop offset="25%" stopColor="#1F2B6C" />
                  <stop offset="50%" stopColor="#F57C20" />
                  <stop offset="75%" stopColor="#1F2B6C" />
                  <stop offset="100%" stopColor="#F57C20" />
                </linearGradient>
              </defs>
              <path
                d="M 110 20 C 200 80, 310 0, 385 20 C 460 40, 570 80, 660 20 C 750 -30, 840 80, 935 20 C 990 0, 1010 40, 1070 20"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="8 4"
              />
            </svg>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Number circle */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold mb-4 shadow-[0_6px_20px_rgba(16,42,91,0.12)] border-[3px] border-white relative z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.num}
                  </div>

                  {/* Process card — circle */}
                  <div className="w-[140px] h-[140px] rounded-full bg-white border border-[#ECE7E2] shadow-md flex flex-col items-center justify-center gap-2 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.bg}`} style={{ color: step.color }}>
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="text-[12px] font-bold text-[#1B2559] leading-snug">{step.title}</h3>
                  <p className="text-[10px] text-[#667085] font-semibold mt-1 leading-snug">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
