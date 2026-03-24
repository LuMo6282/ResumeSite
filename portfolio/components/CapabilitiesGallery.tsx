"use client";

import dynamic from "next/dynamic";
import RevealBlock from "./RevealBlock";
import GalleryCard from "./capabilities/GalleryCard";
import DashboardCard from "./capabilities/DashboardCard";
import LandingCard from "./capabilities/LandingCard";
import EcommerceCard from "./capabilities/EcommerceCard";

const ThreeDCard = dynamic(() => import("./capabilities/ThreeDCard"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] bg-card-bg rounded-lg border border-white/[0.04]" />
  ),
});

const AnimationCard = dynamic(() => import("./capabilities/AnimationCard"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] bg-card-bg rounded-lg border border-white/[0.04]" />
  ),
});

const cards = [
  { Component: ThreeDCard, delay: 0 },
  { Component: GalleryCard, delay: 0.1 },
  { Component: DashboardCard, delay: 0 },
  { Component: LandingCard, delay: 0.1 },
  { Component: EcommerceCard, delay: 0 },
  { Component: AnimationCard, delay: 0.1 },
];

export default function CapabilitiesGallery() {
  return (
    <section className="bg-charcoal relative" style={{ padding: "8rem 3rem 10rem" }}>
      {/* Section divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <RevealBlock>
          <div className="text-[0.55rem] tracking-[0.4em] uppercase text-accent/70 flex items-center gap-6 mb-4">
            <span className="block w-[20px] h-px bg-accent/30" />
            What I Can Build
          </div>
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <h2
            className="font-barlow font-semibold leading-[1.05] uppercase tracking-[0.02em] text-cream mb-20"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Don&apos;t take my word for it.{" "}
            <em className="italic text-accent-light">See for yourself.</em>
          </h2>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map(({ Component, delay }, i) => (
            <RevealBlock key={i} delay={delay}>
              <div className="capability-card transition-transform duration-500 hover:scale-[1.015] rounded-lg border border-white/[0.04] overflow-hidden hover:border-accent/10">
                <Component />
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
