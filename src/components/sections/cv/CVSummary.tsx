"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function CVSummary() {
  const { localize } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "الملخص التنفيذي", en: "Executive Summary" })}</h2>
      <p className="mt-4 leading-8 text-muted">{profile.summary.ar}</p>
      <p className="mt-3 leading-8 text-muted">{profile.summary.en}</p>
    </section>
  );
}
