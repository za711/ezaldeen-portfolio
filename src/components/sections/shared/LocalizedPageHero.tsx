"use client";

import { PageHero } from "@/components/sections/shared/PageHero";
import { useLanguage } from "@/hooks/useLanguage";
import type { LocalizedString } from "@/types";

export function LocalizedPageHero({
  eyebrow,
  title,
  description,
  badgeAr,
  badgeEn,
  titleAr,
  titleEn,
  subtitleAr,
  subtitleEn,
  icon,
  stats
}: {
  eyebrow?: string;
  title?: LocalizedString;
  description?: LocalizedString;
  badgeAr?: string;
  badgeEn?: string;
  titleAr?: string;
  titleEn?: string;
  subtitleAr?: string;
  subtitleEn?: string;
  icon?: string;
  stats?: { value: string; labelAr: string; labelEn: string }[];
}) {
  const { locale, localize } = useLanguage();
  const [fallbackAr = eyebrow ?? "", fallbackEn = eyebrow ?? ""] = (eyebrow ?? "").split("|").map((part) => part.trim());

  return (
    <PageHero
      lang={locale}
      badgeAr={badgeAr ?? fallbackAr}
      badgeEn={badgeEn ?? fallbackEn}
      titleAr={titleAr ?? (title ? localize({ ar: title.ar, en: title.ar }) : "")}
      titleEn={titleEn ?? (title ? localize({ ar: title.en, en: title.en }) : "")}
      subtitleAr={subtitleAr ?? (description ? localize({ ar: description.ar, en: description.ar }) : undefined)}
      subtitleEn={subtitleEn ?? (description ? localize({ ar: description.en, en: description.en }) : undefined)}
      icon={icon}
      stats={stats}
    />
  );
}
