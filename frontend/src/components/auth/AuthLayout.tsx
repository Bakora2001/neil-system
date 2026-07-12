import { useState, useEffect } from "react";
import { Users, Building2, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";

const BG_IMAGES = [
  "/images/login-bg-1.jpg",
  "/images/login-bg-2.jpg",
  "/images/login-bg-3.jpg",
];

const FEATURES = [
  { icon: Users, label: "Access exclusive resources" },
  { icon: Building2, label: "Connect with institutions" },
  { icon: BarChart3, label: "Track your impact" },
];

export function AuthLayout({ children }: { children: ReactNode }) {
  const [bgIndex, setBgIndex] = useState(0);
  const [bgVisible, setBgVisible] = useState(true);

  // Background slideshow rotation
  useEffect(() => {
    const id = setInterval(() => {
      setBgVisible(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
        setBgVisible(true);
      }, 700);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 overflow-hidden bg-white font-sans">
      
      {/* LEFT COLUMN: Animated Background Slideshow + Banner Info */}
      <div className="relative hidden lg:flex lg:col-span-6 flex-col justify-between overflow-hidden p-12 text-white select-none">
        
        {/* Animated Slide Images */}
        <div className="absolute inset-0 z-0">
          <img
            key={bgIndex}
            src={BG_IMAGES[bgIndex]}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
            style={{
              opacity: bgVisible ? 1 : 0,
              transform: bgVisible ? "scale(1)" : "scale(1.03)",
            }}
          />
          {/* Dark overlay matching the reference mockup to make the white text pop */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Top Header branding */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2.2"/>
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-lg font-black tracking-tight leading-none text-white">NEIL</p>
              <p className="text-[9px] font-semibold text-white/70 uppercase tracking-widest mt-0.5">
                Network of Entrepreneurial Institution Leaders
              </p>
            </div>
          </div>
        </div>

        {/* Middle Welcome details */}
        <div className="relative z-10 max-w-md my-auto drop-shadow-md">
          <h1 className="text-[2.6rem] font-bold tracking-tight text-white leading-tight">
            Welcome Back!
          </h1>
          <p className="mt-2.5 text-sm text-white/90 leading-relaxed">
            Sign in to your account and continue your journey with NEIL.
          </p>

          {/* Features check-list */}
          <div className="mt-8 space-y-4">
            {FEATURES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-[#ef9d4a] group-hover:border-[#ef9d4a] transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-medium text-white/90 group-hover:translate-x-1 transition-transform duration-300">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info/copyright */}
        <div className="relative z-10 text-[10px] text-white/50 tracking-wider">
          © {new Date().getFullYear()} NEIL. All Rights Reserved.
        </div>
      </div>

      {/* RIGHT COLUMN: Sign In Form Wrapper */}
      <div className="relative lg:col-span-6 flex items-center justify-center p-8 sm:p-16 bg-white min-h-[580px]">
        
        {/* Top-Right Decorative wavy background arc */}
        <div className="absolute top-0 right-0 w-[180px] h-[180px] pointer-events-none select-none overflow-hidden opacity-80 z-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
            <path d="M0,0 C30,30 70,10 100,50 L100,0 Z" fill="#FDF5EC" />
          </svg>
        </div>

        {/* Top-Right Dot Grid decoration */}
        <div className="absolute top-10 right-10 pointer-events-none select-none z-10 opacity-70">
          <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 6 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 10 + 5}
                  cy={row * 10 + 5}
                  r="2"
                  fill="#ef9d4a"
                />
              ))
            )}
          </svg>
        </div>

        {/* The Form Content */}
        <div className="w-full max-w-sm relative z-20">{children}</div>
      </div>
    </div>
  );
}
