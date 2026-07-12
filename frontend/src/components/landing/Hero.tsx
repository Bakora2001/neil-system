import { useState, useEffect, useRef } from "react";
import { ArrowRight, Users } from "lucide-react";

// ── Background images ──────────────────────────────────────────────────────
const BG_IMAGES = [
  "/images/neil-bg0.jpg",
  "/images/neil-bg.jpg",
  "/images/neil-bg2.jpg",
  "/images/neil-bg3.webp",
];

// ── Typewriter hook ────────────────────────────────────────────────────────
type TwPhase = "typing" | "pause" | "erasing";

function useTypewriter(text: string, speed = 52, pauseMs = 3200, eraseSpeed = 28) {
  const [chars, setChars] = useState("");
  const [phase, setPhase] = useState<TwPhase>("typing");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (chars.length < text.length) {
        timer = setTimeout(() => setChars(text.slice(0, chars.length + 1)), speed);
      } else {
        timer = setTimeout(() => setPhase("pause"), pauseMs);
      }
    } else if (phase === "pause") {
      timer = setTimeout(() => setPhase("erasing"), 200);
    } else {
      // erasing
      if (chars.length > 0) {
        timer = setTimeout(() => setChars(text.slice(0, chars.length - 1)), eraseSpeed);
      } else {
        timer = setTimeout(() => setPhase("typing"), 400);
      }
    }

    return () => clearTimeout(timer);
  }, [chars, phase, text, speed, pauseMs, eraseSpeed]);

  return { chars, isTyping: phase === "typing" };
}

const AVATAR_COLORS = ["#ef9d4a", "#1A237E", "#4CAF50", "#E91E63", "#9C27B0", "#FF7043"];

const FULL_TEXT = "Transforming Institutions into Innovation Powerhouses";

export function Hero() {
  // ── Background slideshow ────────────────────────────────────────────────
  const [bgIndex, setBgIndex] = useState(0);
  const [bgVisible, setBgVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setBgVisible(false);
      setTimeout(() => {
        setBgIndex((i) => (i + 1) % BG_IMAGES.length);
        setBgVisible(true);
      }, 700);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // ── Typewriter ──────────────────────────────────────────────────────────
  const { chars } = useTypewriter(FULL_TEXT, 52, 3200, 28);

  // Split the typed chars into parts for styling
  const PART1 = "Transforming Institutions into ";       // navy/white
  const PART2 = "Innovation";                            // orange


  const p1End = Math.min(chars.length, PART1.length);
  const p2Start = PART1.length;
  const p2End = Math.min(chars.length, PART1.length + PART2.length);
  const p3Start = PART1.length + PART2.length;
  const p3End = Math.min(chars.length, FULL_TEXT.length);

  const seg1 = chars.slice(0, p1End);
  const seg2 = chars.length > p2Start ? chars.slice(p2Start, p2End) : "";
  const seg3 = chars.length > p3Start ? chars.slice(p3Start, p3End) : "";

  // ── 3-D tilt & Overlapping Circles states ──────────────────────────────
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hoveredCircle, setHoveredCircle] = useState<"left" | "right" | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-white">

      {/* ── Animated background ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          key={bgIndex}
          src={BG_IMAGES[bgIndex]}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            opacity: bgVisible ? 1 : 0,
            transition: "opacity 700ms ease-in-out",
          }}
        />
        {/* Dark blue overlay to bring out white text while displaying the background image clearly */}
        <div className="absolute inset-0 bg-[#1A237E]/75" />
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-16 pb-8">

        {/* LEFT: Text */}
        <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          {/* Typewriter headline */}
          <h1 className="text-[2.4rem] sm:text-[2.7rem] font-extrabold leading-[1.18] text-white min-h-[9rem]">
            <span>{seg1}</span>
            {seg2 && <span className="text-[#ef9d4a]">{seg2}</span>}
            {seg3 && <span className="text-white">{seg3}</span>}
            {/* Blinking cursor */}
            <span
              aria-hidden
              className="inline-block w-[3px] h-[0.8em] bg-[#ef9d4a] ml-0.5 rounded-sm animate-pulse"
              style={{
                verticalAlign: "middle",
              }}
            />
          </h1>

          <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-white/90">
            NEIL empowers universities to embed entrepreneurial thinking across teaching,
            research, and strategy. Together, we build innovation-driven institutions that
            create impact and transform communities.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ef9d4a] text-white font-semibold text-sm shadow-lg hover:brightness-95 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Explore Our Programs <ArrowRight size={16} />
            </a>
            <a
              href="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#1A237E] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Become a Member <Users size={16} />
            </a>
          </div>

          {/* Trust avatars */}
          <div className="mt-8">
            <p className="text-xs font-medium text-white/70 mb-3">
              Trusted by institutions across Africa
            </p>
            <div className="flex items-center -space-x-2">
              {AVATAR_COLORS.map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color, zIndex: 10 - i }}
                />
              ))}
              <div
                className="w-9 h-9 rounded-full border-2 border-white bg-[#1A237E] text-white text-[10px] font-bold flex items-center justify-center shadow-sm"
                style={{ zIndex: 4 }}
              >
                +30
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Overlapping circular photos with orange swoosh + dot grid */}
        <div
          ref={cardRef}
          className="relative flex items-center justify-center h-[480px] w-full"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setTilt({ x: 0, y: 0 });
          }}
        >
          {/* Orange blob / swoosh behind circle */}
          <svg
            className="absolute z-0 w-[80%] h-[80%] right-[-2%] bottom-[0%]"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden
          >
            <ellipse
              cx="220"
              cy="230"
              rx="190"
              ry="170"
              fill="#ef9d4a"
              opacity="0.85"
              style={{ transform: "rotate(-12deg)", transformOrigin: "center" }}
            />
          </svg>

          {/* Dot grid — top right */}
          <div className="absolute z-0 top-5 right-1 opacity-90">
            <svg width="90" height="70" viewBox="0 0 90 70" fill="none" aria-hidden>
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 14 + 7}
                    cy={row * 14 + 7}
                    r="3.5"
                    fill="#ef9d4a"
                  />
                ))
              )}
            </svg>
          </div>

          {/* Overlapping animated image circles */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Circle 1 (Left / Primary) */}
            <div
              onMouseEnter={() => setHoveredCircle("left")}
              onMouseLeave={() => setHoveredCircle(null)}
              className="absolute transition-all duration-500 ease-out rounded-full overflow-hidden border-8 border-white shadow-2xl cursor-pointer"
              style={{
                width: "320px",
                height: "320px",
                top: "8%",
                left: "4%",
                zIndex: hoveredCircle === "left" ? 30 : hoveredCircle === "right" ? 10 : 20,
                transform: hoveredCircle === "left"
                  ? "scale(1.06) translate(6px, -6px)"
                  : hoveredCircle === "right"
                  ? "scale(0.94) opacity(0.85)"
                  : hovered
                  ? `perspective(800px) rotateY(${tilt.x * 0.5}deg) rotateX(${-tilt.y * 0.3}deg) translate(0px, 0px)`
                  : "scale(1) translate(0px, 0px)",
              }}
            >
              <img
                src="/images/neil-bg0.jpg"
                alt="NEIL members collaborating"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Circle 2 (Right / Secondary) */}
            <div
              onMouseEnter={() => setHoveredCircle("right")}
              onMouseLeave={() => setHoveredCircle(null)}
              className="absolute transition-all duration-500 ease-out rounded-full overflow-hidden border-8 border-white shadow-2xl cursor-pointer"
              style={{
                width: "280px",
                height: "280px",
                bottom: "8%",
                right: "4%",
                zIndex: hoveredCircle === "right" ? 30 : 10,
                transform: hoveredCircle === "right"
                  ? "scale(1.08) translate(-6px, 6px)"
                  : hoveredCircle === "left"
                  ? "scale(0.92) opacity(0.8)"
                  : hovered
                  ? `perspective(800px) rotateY(${tilt.x * 0.4}deg) rotateX(${-tilt.y * 0.2}deg) translate(0px, 0px)`
                  : "scale(1) translate(0px, 0px)",
              }}
            >
              <img
                src="/images/neil-bg2.jpg"
                alt="NEIL innovation hub"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Floating stat badge */}
          <div className="absolute z-20 bottom-14 left-0 bg-white rounded-2xl px-4 py-3 shadow-xl border border-orange-100">
            <p className="text-[10px] font-medium text-gray-400">Active Programs</p>
            <p className="text-xl font-extrabold text-[#1A237E]">5+</p>
          </div>
        </div>
      </div>

      {/* Slideshow dots indicator */}
      <div className="relative z-10 flex justify-center gap-2 pb-4">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Background ${i + 1}`}
            onClick={() => { setBgVisible(false); setTimeout(() => { setBgIndex(i); setBgVisible(true); }, 300); }}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === bgIndex ? "#ef9d4a" : "#d1d5db",
              transform: i === bgIndex ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes tw-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
