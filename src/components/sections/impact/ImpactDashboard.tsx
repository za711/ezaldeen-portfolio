"use client";

import { HeroDashboard } from "@/components/visuals/HeroDashboard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactDashboard() {
  const { localize } = useLanguage();
  return (
    <section className="section-padding bg-white">
      <div className="site-container grid items-center gap-10 lg:grid-cols-2">
        <SectionHeader
          eyebrow={localize({ ar: "لوحة تنفيذية", en: "Executive Dashboard" })}
          title={localize({ ar: "قراءة سريعة لمحفظة الأثر", en: "A clear view of the impact portfolio" })}
          description={localize({ ar: "تعرض اللوحة مؤشرات تجمع بين الخبرة، مشاريع المياه، مشاريع سبل العيش، والبنية التحتية ضمن قصة تنفيذ واحدة.", en: "The dashboard brings experience, water projects, livelihoods, and infrastructure into one delivery story." })}
          className="mb-0"
        />
        <HeroDashboard />
      </div>
    </section>
  );
}
