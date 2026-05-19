"use client";

import { CTASection } from "@/components/sections/shared/CTASection";
import { useLanguage } from "@/hooks/useLanguage";
import type { LocalizedString } from "@/types";

export function LocalizedCTASection({
  title,
  description
}: {
  title: LocalizedString;
  description?: LocalizedString;
}) {
  const { localize } = useLanguage();

  return <CTASection title={localize(title)} description={description ? localize(description) : undefined} />;
}
