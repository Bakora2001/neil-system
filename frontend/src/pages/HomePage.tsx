import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { VideoSection } from "@/components/landing/VideoSection";
import { StatsBar } from "@/components/landing/StatsBar";
import { ApproachSteps } from "@/components/landing/ApproachSteps";
import { InitiativesPanel } from "@/components/landing/InitiativesPanel";
import { ImpactBanner } from "@/components/landing/ImpactBanner";
import { EcosystemShowcase } from "@/components/landing/EcosystemShowcase";
import { PartnersSection } from "@/components/landing/PartnersSection";
import type { HomeStats, Partner } from "@ndip/shared/types";

// NOTE: Static fallback data — swap for API calls once backend endpoints are live.

const stats: HomeStats = {
  memberInstitutions: 40,
  countriesReached: 15,
  partnersCollaborators: 50,
  completedProjects: 25,
  activePrograms: 5,
};

const partners: Partner[] = [
  { id: "1", name: "Kenya Vision 2030", logoUrl: "/images/partners/vision2030.png", websiteUrl: null, featured: true },
  { id: "2", name: "Kenya National Innovation Agency", logoUrl: "/images/partners/knia.png", websiteUrl: null, featured: true },
  { id: "3", name: "Strathmore University", logoUrl: "/images/partners/strathmore.png", websiteUrl: null, featured: true },
  { id: "4", name: "World Bank", logoUrl: "/images/partners/world-bank.png", websiteUrl: null, featured: true },
  { id: "5", name: "Mastercard Foundation", logoUrl: "/images/partners/mastercard.png", websiteUrl: null, featured: true },
  { id: "6", name: "Google", logoUrl: "/images/partners/google.png", websiteUrl: null, featured: true },
];

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero — kept exactly as-is */}
        <Hero />

        {/* 2. Video Section — 60/40 split, inline video player */}
        <VideoSection />

        {/* 3. Stats Bar — capsule cards with circular icons */}
        <StatsBar stats={stats} />

        {/* 4. Approach Steps — flowing journey with bezier SVG line */}
        <ApproachSteps />

        {/* 5. Initiatives Panel — program list + orbit diagram */}
        <InitiativesPanel />

        {/* 6. Impact Banner — Stronger Together stats */}
        <ImpactBanner />

        {/* 7. Ecosystem Spotlights — Replace News & Insights */}
        <EcosystemShowcase />

        {/* 8. Partners — greyscale → color hover */}
        <PartnersSection partners={partners} />
      </main>
      <Footer />
    </>
  );
}
