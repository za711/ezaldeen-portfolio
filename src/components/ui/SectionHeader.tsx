"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, centered, className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center", className)}
    >
      {eyebrow ? <Badge variant="gold" className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-extrabold leading-tight text-primary md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-muted">{description}</p> : null}
    </motion.div>
  );
}
