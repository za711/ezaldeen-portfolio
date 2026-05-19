"use client";

import { CTASection } from "@/components/sections/shared/CTASection";
import { useLanguage } from "@/hooks/useLanguage";

export function HomeCTA() {
  const { localize } = useLanguage();
  return <CTASection title={localize({ ar: "هل تبحث عن خبير لإدارة مشاريعك الإنسانية؟", en: "Looking for an expert to manage humanitarian projects?" })} />;
}
