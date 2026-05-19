"use client";

import { useEffect, useState } from "react";

export type CursorVariant = "default" | "card" | "button";

export function useCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<CursorVariant>("default");

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-cursor='button']")) {
        setVariant("button");
        return;
      }
      if (target.closest("[data-cursor='card']")) {
        setVariant("card");
        return;
      }
      setVariant("default");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return { position, variant };
}
