"use client";

import * as Icons from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { expertiseAreas } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function ExpertiseGrid() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <SectionHeader centered eyebrow={localize({ ar: "الخبرة", en: "Expertise" })} title={localize({ ar: "مجالات الخبرة", en: "Expertise Areas" })} />
        <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[area.icon] || Icons.BadgeCheck;
            return (
              <StaggerItem key={area.id}>
                <Card className="h-full">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary transition group-hover:text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary">{localize(area.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{localize(area.description)}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
