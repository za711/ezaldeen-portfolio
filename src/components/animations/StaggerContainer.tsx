"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerCards } from "@/lib/animations";

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerCards}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
