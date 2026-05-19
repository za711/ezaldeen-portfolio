"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { experienceEntries } from "@/data/experience";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function AboutContent() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <div className="site-container grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Avatar className="shadow-hover" />
        <div className="space-y-6">
          <Card>
            <h2 className="text-3xl font-extrabold text-primary">{localize({ ar: profile.nameAr, en: profile.nameEn })}</h2>
            <p className="mt-3 text-lg font-bold text-secondary">{localize({ ar: profile.titleAr, en: profile.titleEn })}</p>
            <p className="mt-5 leading-8 text-muted">{localize(profile.summary)}</p>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Card key={service.id}>
                <h3 className="text-xl font-extrabold text-primary">{localize(service.title)}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{localize(service.description)}</p>
              </Card>
            ))}
          </div>
          <Card>
            <h3 className="text-2xl font-extrabold text-primary">{localize({ ar: "محطات مهنية محورية", en: "Key Career Milestones" })}</h3>
            <div className="mt-5 grid gap-3">
              {experienceEntries.slice(0, 3).map((entry) => (
                <div key={entry.id} className="rounded-2xl bg-bg p-4">
                  <p className="font-extrabold text-primary">{localize(entry.role)}</p>
                  <p className="text-sm font-bold text-muted">{localize(entry.org)} | {localize(entry.period)}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
