import { useState, useRef } from "react";
import { Users, Zap, TrendingUp } from "lucide-react";

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const features = [
  { icon: Users, label: "Collaborate", sub: "Across institutions and borders" },
  { icon: Zap, label: "Innovate", sub: "Solutions for real world challenges" },
  { icon: TrendingUp, label: "Impact", sub: "Creating lasting community change" },
];

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="bg-[#FDFAF8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: Video Player — 60% */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(16,42,91,0.12)] bg-[#0A1128]"
              style={{ aspectRatio: "16/9" }}
            >
              {/* Video element */}
              <video
                ref={videoRef}
                src="/images/neil-video.mp4"
                className="w-full h-full object-cover"
                controls={playing}
                playsInline
                poster="/images/neil-bg0.jpg"
              />

              {/* Dark overlay + play button — hidden when playing */}
              {!playing && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group transition-all duration-300"
                  style={{ background: "rgba(0,0,0,0.35)" }}
                  onClick={handlePlay}
                >
                  {/* Play button circle */}
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] group-hover:outline group-hover:outline-4 group-hover:outline-[#F57C20] transition-all duration-300 group-hover:scale-110">
                    <PlayIcon />
                  </div>

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#F57C20] mb-1">Watch our story</p>
                    <p className="text-xl font-bold leading-snug tracking-tight text-white">Building Africa's<br />Innovation Future</p>
                    <p className="text-xs text-white/80 mt-1">See how NEIL is empowering institutions and driving meaningful impact</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Our Story — 40% */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] font-bold tracking-widest text-[#F57C20] uppercase bg-[#FFF7F2] border border-[#ECE7E2] px-3 py-1 rounded-full">
              OUR STORY
            </span>

            <h2 className="text-3xl font-bold text-[#1B2559] mt-4 leading-tight tracking-tight">
              Empowering Change<br />
              <span className="text-[#F57C20]">Through Collaboration</span>
            </h2>

            <p className="text-[#667085] text-xs leading-relaxed mt-4">
              NEIL is a pan-African network of universities, partners and innovators working together
              to strengthen entrepreneurial ecosystems and drive sustainable socio-economic transformation
              across the continent.
            </p>

            {/* 3 Feature icons */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex flex-col items-start text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF7F2] border border-[#ECE7E2] flex items-center justify-center text-[#F57C20] mb-3 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <p className="text-[11px] font-bold text-[#1B2559] leading-none mb-1">{f.label}</p>
                    <p className="text-[9px] text-[#98A2B3] font-semibold leading-snug">{f.sub}</p>
                  </div>
                );
              })}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#1F2B6C] text-[#1F2B6C] text-xs font-bold hover:bg-[#1F2B6C] hover:text-white transition-all duration-200 group">
              Watch Our Story
              <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
