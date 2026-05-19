"use client";

import * as Icons from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { impactStats } from "@/data/impact";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactStats() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <div className="site-container grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {impactStats.map((stat) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[stat.icon] || Icons.BadgeCheck;
          return (
            <Card key={stat.id} className="text-center">
              <Icon className="mx-auto mb-4 h-8 w-8 text-secondary" />
              <p className="text-4xl font-extrabold text-primary">
                <CounterAnimation value={stat.value} suffix={localize(stat.suffix)} />
              </p>
              <h3 className="mt-3 font-extrabold text-primary">{localize(stat.label)}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{localize(stat.description)}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
