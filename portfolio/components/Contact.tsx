"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import RevealBlock from "./RevealBlock";

const FORMSPREE_ID = "xpwzgkvl"; // Replace with your Formspree form ID

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-charcoal relative grain"
      style={{ padding: "10rem 3rem 12rem" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 55%, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[2] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left — Profile photo */}
        <RevealBlock>
          <div className="relative w-full max-w-[480px] mx-auto md:mx-0 aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/profilepicture.jpg"
              alt="Lucas Moraca"
              fill
              className="object-cover"
            />
            {/* Subtle vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 60px rgba(26,26,24,0.4)",
              }}
            />
          </div>
        </RevealBlock>

        {/* Right — About + Contact */}
        <div>
          <RevealBlock delay={0.1}>
            <div className="text-[0.55rem] tracking-[0.4em] uppercase text-accent/70 mb-8 flex items-center gap-4">
              <span className="block w-[20px] h-px bg-accent/30" />
              About & Contact
            </div>
          </RevealBlock>

          <RevealBlock delay={0.15}>
            <p className="text-[0.9rem] leading-[1.9] text-cream/55 font-light max-w-[420px] mb-8">
              Custom websites and apps built from scratch. No cookie cutter
              templates, no half-baked sites. Your website isn&apos;t just a tool
              your customers use, it&apos;s a direct representation of your brand.
              Put out something you&apos;re proud of.
            </p>
          </RevealBlock>

          <RevealBlock delay={0.2}>
            <h2
              className="font-barlow font-bold leading-[1.0] uppercase tracking-[0.02em] text-cream mb-2"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Have a project?
              <br />
              <em className="italic text-accent-light">Let&apos;s talk.</em>
            </h2>
          </RevealBlock>

          <RevealBlock delay={0.25}>
            <p className="mt-4 text-[0.85rem] font-light text-cream/40 leading-[1.8] tracking-[0.02em]">
              I take on a limited number of projects at a time.
            </p>
          </RevealBlock>

          <RevealBlock delay={0.3}>
            {status === "sent" ? (
              <div className="mt-10 py-6 text-center">
                <p className="text-accent font-barlow text-[0.8rem] tracking-[0.15em] uppercase font-semibold">
                  Message sent successfully
                </p>
                <p className="mt-2 text-cream/40 text-[0.75rem] font-light">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[0.6rem] tracking-[0.25em] uppercase text-muted/60 transition-colors duration-300 hover:text-accent cursor-pointer bg-transparent border-none link-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 max-w-[420px] space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[0.55rem] tracking-[0.3em] uppercase text-cream/40 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border border-cream/10 text-cream text-[0.85rem] font-light px-4 py-3 outline-none transition-colors duration-300 focus:border-accent/50 placeholder:text-cream/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[0.55rem] tracking-[0.3em] uppercase text-cream/40 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border border-cream/10 text-cream text-[0.85rem] font-light px-4 py-3 outline-none transition-colors duration-300 focus:border-accent/50 placeholder:text-cream/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[0.55rem] tracking-[0.3em] uppercase text-cream/40 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border border-cream/10 text-cream text-[0.85rem] font-light px-4 py-3 outline-none transition-colors duration-300 focus:border-accent/50 placeholder:text-cream/20 resize-vertical"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-[0.75rem] text-red-400/80 font-light">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-block px-12 py-4 bg-accent text-charcoal text-[0.7rem] tracking-[0.2em] uppercase font-semibold no-underline transition-all duration-300 hover:bg-accent-light cta-glow border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Bring Your Vision to Life →"}
                </button>
              </form>
            )}
          </RevealBlock>

          <RevealBlock delay={0.35}>
            <div className="flex gap-8 mt-10">
              <a
                href="mailto:lucasmoraca12@gmail.com"
                className="text-[0.6rem] tracking-[0.25em] uppercase text-muted/60 no-underline transition-colors duration-300 hover:text-accent link-underline"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-moraca-301264275/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.6rem] tracking-[0.25em] uppercase text-muted/60 no-underline transition-colors duration-300 hover:text-accent link-underline"
              >
                LinkedIn
              </a>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
