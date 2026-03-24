"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { label: string; href: string; external?: boolean }[] = [
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/LucasMoracaResume.pdf", external: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center transition-all duration-500 px-6 py-6 md:px-12 md:py-8 border-b ${
        scrolled
          ? "backdrop-blur-xl bg-charcoal/70 border-cream/[0.04]"
          : "border-transparent bg-transparent"
      }`}
    >
      <motion.a
        href="#"
        className="font-barlow text-[0.8rem] font-semibold tracking-[0.3em] text-cream uppercase no-underline"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Lucas Moraca
      </motion.a>
      <ul className="flex gap-10 list-none">
        {links.map((link, i) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[0.65rem] tracking-[0.25em] uppercase text-cream/50 no-underline transition-colors duration-300 hover:text-accent link-underline"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
