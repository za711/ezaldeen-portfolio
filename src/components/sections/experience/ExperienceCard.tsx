"use client";

import { Card } from "@/components/ui/Card";
import type { ExperienceEntry } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const { localize, locale } = useLanguage();
  const width = entry.budgetAmount ? Math.min(100, Math.max(12, (entry.budgetAmount / 7000000) * 100)) : 28;

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: entry.colorCode }} />
      <p className="text-sm font-bold text-muted">{localize(entry.period)}</p>
      <h3 className="mt-2 text-2xl font-extrabold text-primary">{localize(entry.role)}</h3>
      <p className="mt-1 font-bold text-secondary">{localize(entry.org)}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
        {entry.budget ? <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">{entry.budget}</span> : null}
        {entry.donor ? <span className="rounded-full bg-accent/15 px-3 py-1 text-primary">{entry.donor}</span> : null}
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full" style={{ width: width + "%", backgroundColor: entry.colorCode }} />
      </div>
      <ul className="mt-5 space-y-2 text-sm leading-7 text-muted">
        {entry.bullets[locale].map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
    </Card>
  );
}
