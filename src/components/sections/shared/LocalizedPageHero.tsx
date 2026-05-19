"use client";

import { PageHero } from "@/components/sections/shared/PageHero";
import { useLanguage } from "@/hooks/useLanguage";
import type { LocalizedString } from "@/types";

export function LocalizedPageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: LocalizedString;
  description: LocalizedString;
}) {
  const { localize } = useLanguage();

  return <PageHero eyebrow={eyebrow} title={localize(title)} description={localize(description)} />;
}
