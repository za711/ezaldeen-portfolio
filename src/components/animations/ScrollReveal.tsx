"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn } from "@/lib/animations";

type RevealVariant = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variants?: Variants;
}

export default function DefaultScrollReveal({
  children,
  delay = 0,
  className = "",
  variants = fadeInUp
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      custom={delay}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ children, variant = "up", className }: { children: ReactNode; variant?: RevealVariant; className?: string }) {
  const variants = {
    up: fadeInUp,
    left: fadeInLeft,
    right: fadeInRight,
    scale: scaleIn
  }[variant];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
