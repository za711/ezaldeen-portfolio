"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { BackgroundPattern } from "@/components/visuals/BackgroundPattern";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
      <BackgroundPattern />
      <div className="noise-layer opacity-50" />
      <div className="site-container relative">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
          <Badge variant="gold" className="mb-5">{eyebrow}</Badge>
          <h1 className="text-4xl font-extrabold leading-tight md:text-[56px] md:leading-[64px]">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/75">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
