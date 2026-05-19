"use client";

import { experienceEntries } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

export function CVExperience() {
  const { localize, locale } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "الخبرات المهنية", en: "Professional Experience" })}</h2>
      <div className="mt-5 space-y-5">
        {experienceEntries.map((entry) => (
          <div key={entry.id} className="border-s-4 border-accent ps-4">
            <h3 className="font-extrabold text-primary">{localize(entry.role)}</h3>
            <p className="text-sm font-bold text-secondary">{localize(entry.org)} | {localize(entry.period)}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{entry.bullets[locale][0]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
