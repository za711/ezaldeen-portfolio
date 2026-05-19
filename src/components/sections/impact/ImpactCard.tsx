"use client";

import { Card } from "@/components/ui/Card";
import type { ImpactStat } from "@/types";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactCard({ stat }: { stat: ImpactStat }) {
  const { localize } = useLanguage();
  return (
    <Card>
      <p className="text-5xl font-extrabold text-primary">
        <CounterAnimation value={stat.value} suffix={localize(stat.suffix)} />
      </p>
      <h3 className="mt-4 text-xl font-extrabold text-primary">{localize(stat.label)}</h3>
      <p className="mt-3 text-muted">{localize(stat.description)}</p>
    </Card>
  );
}
