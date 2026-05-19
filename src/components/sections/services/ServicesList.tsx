"use client";

import * as Icons from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function ServicesList() {
  const { localize, locale } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <StaggerGrid className="site-container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.BadgeCheck;
          return (
            <StaggerItem key={service.id}>
              <Card className="h-full">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-extrabold text-primary">{localize(service.title)}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{localize(service.description)}</p>
                <div className="mt-5 space-y-2">
                  {service.outcomes[locale].map((outcome) => (
                    <p key={outcome} className="rounded-xl bg-bg px-3 py-2 text-xs font-bold text-primary">{outcome}</p>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
