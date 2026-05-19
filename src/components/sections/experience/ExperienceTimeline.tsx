"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/sections/experience/ExperienceCard";
import { experienceEntries } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <div className="relative">
          <div className="absolute inset-y-0 start-1/2 hidden w-px -translate-x-1/2 bg-border lg:block" />
          <div className="space-y-10">
            {experienceEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className={"relative grid gap-6 lg:grid-cols-2 " + (index % 2 === 0 ? "" : "lg:[&>*]:col-start-2")}
              >
                <div className="absolute start-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-accent shadow-card transition-transform hover:scale-140 lg:block" />
                <ExperienceCard entry={entry} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
