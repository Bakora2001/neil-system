import type { Partner } from "@ndip/shared/types";
import { useState } from "react";

interface Props {
  partners: Partner[];
}

export function PartnersSection({ partners }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-[#F6F1EB] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-[10px] font-black tracking-widest text-[#F57C20] uppercase bg-white border border-[#ECE7E2] px-3 py-1 rounded-full">
          OUR PARTNERS
        </span>
        <h2 className="text-2xl font-black text-[#1B2559] mt-4 mb-2">
          Together, Building Your Innovation Ecosystem
        </h2>
        <p className="text-[#667085] text-sm mb-12">
          Proudly partnering with leading institutions across Africa and beyond.
        </p>

        {/* Partner logos row */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <div
              key={p.id}
              className="h-14 flex items-center justify-center px-4 py-2 rounded-xl bg-white border border-[#ECE7E2] shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={p.logoUrl}
                alt={p.name}
                className="max-h-9 max-w-[120px] object-contain transition-all duration-300"
                style={{
                  filter: hovered === p.id ? "none" : "grayscale(100%)",
                  opacity: hovered === p.id ? 1 : 0.65,
                }}
              />
            </div>
          ))}
        </div>

        <button className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1F2B6C] text-[#1F2B6C] text-sm font-black hover:bg-[#1F2B6C] hover:text-white transition-all duration-200">
          View All Partners →
        </button>
      </div>
    </section>
  );
}
