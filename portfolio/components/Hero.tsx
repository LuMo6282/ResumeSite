"use client";

import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal flex items-center">
      {/* Grain texture */}
      <div className="absolute inset-0 grain" />

      {/* Vertical gold accent line — left side, ~40vh tall, fades out */}
      <motion.div
        className="absolute top-0 left-4 md:left-6 w-px"
        style={{
          height: "40vh",
          background:
            "linear-gradient(to bottom, var(--color-accent) 0%, var(--color-accent) 60%, transparent 100%)",
        }}
        initial={{ scaleY: 0, transformOrigin: "top" }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
      />

      {/* Two-column layout */}
      <div
        className="relative z-[2] w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        style={{ padding: "8rem 3rem 5rem" }}
      >
        {/* Left — text content */}
        <div>
          <motion.p
            className="text-[0.6rem] tracking-[0.35em] uppercase text-accent/80 mb-6 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="block w-[30px] h-px bg-accent/40" />
            Boulder, CO
          </motion.p>
          <motion.h1
            className="font-barlow font-bold leading-[0.88] tracking-[0.03em] uppercase text-cream"
            style={{ fontSize: "clamp(5.5rem, 11vw, 11rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Lucas
            <br />
            <em className="italic text-accent-light">Moraca</em>
          </motion.h1>
          <motion.p
            className="mt-8 text-[1.1rem] font-light tracking-[0.01em] text-cream/60 max-w-[540px] leading-[1.8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Custom websites and apps built from scratch — no templates, no
            shortcuts. Your website isn&apos;t just a tool your customers use.
            It&apos;s a direct representation of your brand. Put out something
            you&apos;re proud of.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block mt-10 px-10 py-4 bg-accent text-charcoal font-barlow text-[0.7rem] tracking-[0.2em] uppercase font-semibold no-underline transition-all duration-300 hover:bg-accent-light cta-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.9 }}
          >
            Bring Your Vision to Life →
          </motion.a>
        </div>

        {/* Right — code editor */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <CodeEditor />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-12 flex flex-col items-center gap-2 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div
          className="w-px h-[60px] scroll-line-anim"
          style={{
            background: "linear-gradient(to bottom, var(--color-accent), transparent)",
          }}
        />
        <span
          className="text-[0.55rem] tracking-[0.3em] uppercase text-muted/60"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
