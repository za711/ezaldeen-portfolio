"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function CVLanguages() {
  const { localize } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "اللغات", en: "Languages" })}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-bg p-4">
          <p className="font-extrabold text-primary">{localize({ ar: "العربية", en: "Arabic" })}</p>
          <p className="text-sm text-muted">{localize({ ar: "اللغة الأم", en: "Native" })}</p>
        </div>
        <div className="rounded-2xl bg-bg p-4">
          <p className="font-extrabold text-primary">{localize({ ar: "الإنجليزية", en: "English" })}</p>
          <p className="text-sm text-muted">{localize({ ar: "ممتاز", en: "Excellent" })}</p>
        </div>
      </div>
    </section>
  );
}
