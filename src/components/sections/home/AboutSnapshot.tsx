"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
