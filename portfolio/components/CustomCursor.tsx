"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animateRing);
    };

    const onEnter = () => {
      cursor.style.width = "14px";
      cursor.style.height = "14px";
      ring.style.width = "48px";
      ring.style.height = "48px";
    };

    const onLeave = () => {
      cursor.style.width = "8px";
      cursor.style.height = "8px";
      ring.style.width = "32px";
      ring.style.height = "32px";
    };

    document.addEventListener("mousemove", onMouseMove);
    animateRing();

    const attachHoverListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachHoverListeners();
    const mutationObserver = new MutationObserver(attachHoverListeners);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        style={{
          transform: "translate(-50%, -50%)",
          transition:
            "transform 0.1s ease, width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          border: "1px solid rgba(200,169,110,0.4)",
          transform: "translate(-50%, -50%)",
          transition:
            "transform 0.15s ease, width 0.3s ease, height 0.3s ease",
        }}
      />
    </>
  );
}
