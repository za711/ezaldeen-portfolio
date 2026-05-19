"use client";

import { BriefcaseBusiness } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experienceEntries } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

export function FeaturedExperience() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <SectionHeader centered eyebrow={localize({ ar: "المسار المهني", en: "Career" })} title={localize({ ar: "خبرات قيادية حديثة", en: "Recent Leadership Experience" })} />
        <div className="grid gap-6 lg:grid-cols-2">
          {experienceEntries.slice(0, 2).map((entry) => (
            <Card key={entry.id}>
              <div className="mb-5 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-accent">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-primary">{localize(entry.role)}</h3>
                  <p className="text-sm font-bold text-muted">{localize(entry.org)} | {localize(entry.period)}</p>
                </div>
              </div>
              <p className="mb-4 text-sm font-bold text-secondary">{entry.budget} {entry.donor ? " | " + entry.donor : ""}</p>
              <ul className="space-y-2 text-sm leading-7 text-muted">
                {entry.bullets.ar.slice(0, 3).map((_, index) => (
                  <li key={index}>• {entry.bullets[localize({ ar: "ar", en: "en" }) as "ar" | "en"][index]}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
