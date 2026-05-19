"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    const dot = cursorDot.current;
    const ring = cursorRing.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      frame = requestAnimationFrame(animate);
    };

    const onHoverIn = () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "#D6A84F";
      ring.style.background = "rgba(214,168,79,0.08)";
    };

    const onHoverOut = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(37,99,235,0.5)";
      ring.style.background = "transparent";
    };

    const hoverTargets = document.querySelectorAll("a, button, .card-hover, [data-cursor='hover']");

    document.addEventListener("mousemove", onMove);
    hoverTargets.forEach((element) => {
      element.addEventListener("mouseenter", onHoverIn);
      element.addEventListener("mouseleave", onHoverOut);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      hoverTargets.forEach((element) => {
        element.removeEventListener("mouseenter", onHoverIn);
        element.removeEventListener("mouseleave", onHoverOut);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[#D6A84F] pointer-events-none lg:block"
        style={{ transition: "none" }}
      />
      <div
        ref={cursorRing}
        className="fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-[#2563EB]/50 pointer-events-none lg:block"
        style={{ transition: "width 0.25s, height 0.25s, border-color 0.25s, background 0.25s" }}
      />
    </>
  );
}

export default CustomCursor;
