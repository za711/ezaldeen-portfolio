"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function CVEducation() {
  const { localize } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "التعليم", en: "Education" })}</h2>
      <div className="mt-4 rounded-2xl bg-bg p-4">
        <h3 className="font-extrabold text-primary">{localize({ ar: "بكالوريوس هندسة مدنية", en: "Bachelor of Civil Engineering" })}</h3>
        <p className="text-sm font-bold text-muted">{localize({ ar: "جامعة ذمار — 2003", en: "Dhamar University — 2003" })}</p>
      </div>
    </section>
  );
}
