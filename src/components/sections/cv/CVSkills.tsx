"use client";

import { services } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function CVSkills() {
  const { localize } = useLanguage();
  const technical = ["AutoCAD", "Microsoft Project", "BOQ", "WASH", "Solar Pumping", "Donor Reports", "Monitoring", "Cash for Work"];
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "الكفاءات والمهارات", en: "Competencies & Skills" })}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {services.slice(0, 6).map((service) => (
          <div key={service.id} className="rounded-2xl bg-bg p-4 text-sm font-bold text-primary">{localize(service.title)}</div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {technical.map((skill) => (
          <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">{skill}</span>
        ))}
      </div>
    </section>
  );
}
