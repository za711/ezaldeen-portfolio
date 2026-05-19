"use client";

import { impactStats } from "@/data/impact";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { useLanguage } from "@/hooks/useLanguage";

export function TrustBar() {
  const { localize } = useLanguage();

  return (
    <section className="bg-primary py-8 text-white">
      <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {impactStats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-3xl font-extrabold text-accent">
              <AnimatedCounter end={stat.value} suffix={localize(stat.suffix)} className="font-mono tabular-nums counter-glow" duration={2000} />
            </p>
            <p className="mt-1 text-sm font-semibold text-white/70">{localize(stat.label)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
