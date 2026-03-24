"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
  phase: number;
}

export default function AnimationCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1, y: -1 });
  const animRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const count = 100;
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x, y,
        vx: 0, vy: 0,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        baseX: x, baseY: y,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -1, y: -1 }; };
    // Auto-animate on touch devices
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const { x: mx, y: my } = mouseRef.current;
      const particles = particlesRef.current;
      const time = Date.now() * 0.001;

      // Auto-animate center point for mobile/no-mouse
      const autoX = mx >= 0 ? mx : w / 2 + Math.sin(time * 0.5) * w * 0.2;
      const autoY = my >= 0 ? my : h / 2 + Math.cos(time * 0.7) * h * 0.15;

      for (const p of particles) {
        // Orbital float
        const floatX = Math.sin(time * 0.4 + p.phase) * 15;
        const floatY = Math.cos(time * 0.3 + p.phase * 1.3) * 12;

        // Mouse/auto attraction
        const dx = autoX - p.x;
        const dy = autoY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          const eased = force * force;
          p.vx += dx * eased * 0.006;
          p.vy += dy * eased * 0.006;
          p.opacity = Math.min(0.9, p.opacity + eased * 0.03);
          p.size = Math.min(3.5, p.size + eased * 0.02);
        }

        // Return to orbit
        p.vx += (p.baseX + floatX - p.x) * 0.008;
        p.vy += (p.baseY + floatY - p.y) * 0.008;

        p.vx *= 0.94;
        p.vy *= 0.94;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Restore defaults
        p.opacity += (0.25 - p.opacity) * 0.02;
        p.size += (1.2 - p.size) * 0.01;

        // Draw with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 110, ${p.opacity})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = `rgba(200, 169, 110, ${p.opacity * 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connections
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            const opacity = (1 - dist / 90) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200, 169, 110, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Cursor glow
      if (mx >= 0 && my >= 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
        gradient.addColorStop(0, "rgba(200, 169, 110, 0.07)");
        gradient.addColorStop(0.5, "rgba(200, 169, 110, 0.02)");
        gradient.addColorStop(1, "rgba(200, 169, 110, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, [initParticles]);

  return (
    <div className="relative w-full aspect-[4/3] bg-card-bg rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" style={{ cursor: "none" }} />
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#111110] via-[#111110]/60 to-transparent">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-accent font-semibold">
          Custom animations? Watch.
        </p>
      </div>
    </div>
  );
}
