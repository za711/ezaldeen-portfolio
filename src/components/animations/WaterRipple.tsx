"use client";

import { useEffect, useRef } from "react";

export default function WaterRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Ripple = {
      x: number;
      y: number;
      startedAt: number;
      angle: number;
      stretch: number;
      strength: number;
      speed: number;
    };

    const maxRadius = 48;
    const duration = 760;
    const maxOpacity = 0.28;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ripples: Ripple[] = [];

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastMove = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let lastAngle = 0;
    let hasPointer = false;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: MouseEvent) => {
      const now = performance.now();
      const dx = hasPointer ? event.clientX - lastPointerX : 0;
      const dy = hasPointer ? event.clientY - lastPointerY : 0;
      const distance = Math.hypot(dx, dy);
      if (now - lastMove < 30 && distance < 5) return;

      const angle = distance > 0.5 ? Math.atan2(dy, dx) : lastAngle;
      const wakeOffset = Math.min(26, Math.max(10, distance * 0.72));
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastAngle = angle;
      hasPointer = true;
      lastMove = now;

      ripples.push({
        x: event.clientX - Math.cos(angle) * wakeOffset,
        y: event.clientY - Math.sin(angle) * wakeOffset,
        startedAt: now,
        angle,
        stretch: Math.min(2.25, 1.45 + distance * 0.022),
        strength: Math.min(1, 0.78 + distance * 0.018),
        speed: distance
      });
      if (ripples.length > 14) ripples.shift();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const now = performance.now();

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        const progress = Math.min((now - ripple.startedAt) / duration, 1);
        if (progress >= 1) {
          ripples.splice(index, 1);
          continue;
        }

        const eased = 1 - Math.pow(1 - progress, 3);
        const radius = 10 + maxRadius * eased;
        const alpha = maxOpacity * ripple.strength * Math.pow(1 - progress, 1.55);
        const stretch = ripple.stretch + eased * 0.28;
        const wakeLength = radius * (1.28 + Math.min(ripple.speed, 32) * 0.024);
        const wakeSpread = radius * (0.42 + eased * 0.24);

        ctx.save();
        ctx.translate(ripple.x, ripple.y);
        ctx.rotate(ripple.angle);
        ctx.scale(stretch, 0.62);
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(37, 99, 235, ${alpha * 0.55})`;

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, `rgba(214, 168, 79, ${alpha * 0.5})`);
        gradient.addColorStop(0.38, `rgba(37, 99, 235, ${alpha})`);
        gradient.addColorStop(1, "rgba(37, 99, 235, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(214, 168, 79, ${alpha * 0.42})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.68, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        for (const side of [-1, 1]) {
          ctx.save();
          ctx.translate(ripple.x, ripple.y);
          ctx.rotate(ripple.angle);
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(214, 168, 79, ${alpha * 0.55})`;

          ctx.strokeStyle = `rgba(15, 39, 66, ${alpha * 0.42})`;
          ctx.lineWidth = 1.15;
          ctx.beginPath();
          ctx.moveTo(radius * 0.18, side * radius * 0.08);
          ctx.quadraticCurveTo(-wakeLength * 0.36, side * wakeSpread * 0.32, -wakeLength, side * wakeSpread);
          ctx.stroke();

          ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.35})`;
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(-radius * 0.12, side * radius * 0.05);
          ctx.quadraticCurveTo(-wakeLength * 0.48, side * wakeSpread * 0.15, -wakeLength * 0.92, side * wakeSpread * 0.54);
          ctx.stroke();

          ctx.strokeStyle = `rgba(214, 168, 79, ${alpha * 0.26})`;
          ctx.beginPath();
          ctx.ellipse(-radius * 0.42, side * radius * 0.18, radius * 0.52, radius * 0.1, 0, 0, Math.PI);
          ctx.stroke();
          ctx.restore();
        }
      }

      frame = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[35] hidden opacity-30 pointer-events-none lg:block"
      aria-hidden="true"
    />
  );
}
