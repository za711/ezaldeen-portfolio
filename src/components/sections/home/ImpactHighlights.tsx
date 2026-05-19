"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { impactStats } from "@/data/impact";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactHighlights() {
  const { localize, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-white">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow={localize({ ar: "الأثر", en: "Impact" })} title={localize({ ar: "أرقام أثر موثقة", en: "Verified Impact Numbers" })} className="mb-0" />
          <Button href="/impact" variant="outline" icon={<Arrow className="h-4 w-4" />}>{localize({ ar: "عرض المشاريع كاملًا", en: "View Full Impact" })}</Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {impactStats.slice(1, 4).map((stat) => (
            <Card key={stat.id}>
              <p className="text-5xl font-extrabold text-primary">
                <CounterAnimation value={stat.value} suffix={localize(stat.suffix)} />
              </p>
              <h3 className="mt-4 text-xl font-extrabold text-primary">{localize(stat.label)}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{localize(stat.description)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
