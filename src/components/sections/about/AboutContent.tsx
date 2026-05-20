"use client";

import Image from "next/image";
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
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0F2742] to-[#1B4F8A] opacity-20" />
          <Image
            src="/assets/profile/ezaldeen-profile.jpg"
            alt="Eng. Ezaldeen Nasser Saad Albadai"
            fill
            className="rounded-3xl object-cover object-top ring-4 ring-[#D6A84F]/30"
            priority
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-xl">
            <div className="text-2xl font-extrabold text-[#0F2742]">+15</div>
            <div className="text-xs text-[#6B7280]">{localize({ ar: "سنة في الميدان", en: "Years in the field" })}</div>
          </div>
        </div>
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
