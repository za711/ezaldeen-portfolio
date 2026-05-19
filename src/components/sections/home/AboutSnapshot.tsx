"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { expertiseAreas } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function AboutSnapshot() {
  const { localize, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <Avatar className="mx-auto max-w-sm shadow-hover" />
          <div className="absolute -bottom-6 start-8 rounded-card bg-white p-5 shadow-hover">
            <p className="text-3xl font-extrabold text-primary">{profile.yearsOfExperience}+</p>
            <p className="text-sm font-bold text-muted">{localize({ ar: "سنة في الميدان", en: "years in the field" })}</p>
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow={localize({ ar: "من أنا", en: "About" })}
            title={localize({ ar: "خبرة هندسية تصنع أثرًا إنسانيًا مستدامًا", en: "Engineering expertise that creates sustainable humanitarian impact" })}
            description={localize(profile.summary)}
            className="mb-8"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {expertiseAreas.slice(0, 6).map((area) => (
              <div key={area.id} className="rounded-2xl border border-border bg-bg p-4 text-sm font-bold text-primary">
                {localize(area.title)}
              </div>
            ))}
          </div>
          <Button href="/about" className="mt-8" icon={<Arrow className="h-4 w-4" />}>
            {localize({ ar: "اقرأ المزيد", en: "Read More" })}
          </Button>
        </div>
      </div>
    </section>
  );
}
