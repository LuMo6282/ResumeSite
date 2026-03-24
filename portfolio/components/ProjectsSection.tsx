"use client";

import Image from "next/image";
import RevealBlock from "./RevealBlock";

const projects = [
  {
    name: "Redline",
    description: "AI-powered training platform for hybrid athletes.",
    link: "https://redline-website-vercel-git-master-lucas-moracas-projects.vercel.app/",
    screenshot: "/redline-screenshot.png",
    reversed: false,
  },
  {
    name: "ChapterMade",
    description:
      "Composite photography platform for Greek life organizations.",
    link: "https://chaptermadecomposites.vercel.app/",
    screenshot: "/chaptermade-screenshot.png",
    reversed: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="relative bg-card-bg" style={{ padding: "6rem 0 0" }}>
      {/* Gradient bridge from charcoal to card-bg */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-charcoal), var(--color-card-bg))" }}
      />
      <div className="relative max-w-[1400px] mx-auto mb-12 px-6 md:px-12">
        <RevealBlock>
          <div className="text-[0.6rem] tracking-[0.35em] uppercase text-accent flex items-center gap-6">
            Selected Work
            <span className="block w-[60px] h-px bg-accent/40" />
          </div>
        </RevealBlock>
      </div>

      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <RevealBlock key={project.name} delay={idx * 0.15}>
            <div
              className="project-card grid grid-cols-1 md:grid-cols-2 min-h-[75vh] bg-card-bg border-t border-cream/[0.04]"
              style={{ direction: project.reversed ? "rtl" : "ltr" }}
            >
              {/* Screenshot side */}
              <div
                className="relative flex items-center justify-center min-h-[380px] md:min-h-0 overflow-hidden p-8 md:p-14"
                style={{
                  direction: "ltr",
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,169,110,0.03) 0%, #0e0e0c 70%)",
                }}
              >
                <div className="relative w-full max-w-[600px] group">
                  {/* Browser chrome bar */}
                  <div className="bg-[#1e1e1c] rounded-t-lg border border-b-0 border-white/[0.06] px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-[7px] h-[7px] rounded-full bg-white/[0.08]" />
                      <div className="w-[7px] h-[7px] rounded-full bg-white/[0.08]" />
                      <div className="w-[7px] h-[7px] rounded-full bg-white/[0.08]" />
                    </div>
                    <div className="flex-1 mx-3 bg-white/[0.04] rounded-sm h-[18px] flex items-center justify-center">
                      <span className="text-[8px] text-white/15 tracking-wide">{project.link.replace(/https?:\/\//, '').replace(/\/$/, '')}</span>
                    </div>
                  </div>
                  {/* Screenshot image */}
                  <div className="rounded-b-lg overflow-hidden border border-t-0 border-white/[0.06] shadow-2xl shadow-black/60 transition-transform duration-700 group-hover:scale-[1.02]">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                      width={2255}
                      height={1246}
                      className="w-full h-auto block"
                      sizes="(max-width: 768px) 85vw, 40vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              </div>

              {/* Info side */}
              <div
                className="flex flex-col justify-center p-10 md:p-20"
                style={{ direction: "ltr" }}
              >
                <div className="text-[0.55rem] tracking-[0.35em] uppercase text-accent/70 mb-6 flex items-center gap-4">
                  <span className="block w-[20px] h-px bg-accent/30" />
                  Project 0{idx + 1}
                </div>
                <h3
                  className="font-barlow font-bold leading-[0.95] uppercase tracking-[0.03em] text-cream mb-6"
                  style={{ fontSize: "clamp(2.8rem, 4vw, 3.8rem)" }}
                >
                  {project.name}
                </h3>
                <p className="text-[0.9rem] leading-[1.9] text-cream/45 font-light max-w-[360px] mb-12">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-accent no-underline transition-all duration-300 hover:gap-5 hover:text-accent-light link-underline"
                >
                  View Project
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </RevealBlock>
        ))}
      </div>
    </section>
  );
}
