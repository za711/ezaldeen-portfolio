"use client";

import { useInView } from "react-intersection-observer";

export function useIntersection(threshold = 0.18) {
  return useInView({
    threshold,
    triggerOnce: true
  });
}
