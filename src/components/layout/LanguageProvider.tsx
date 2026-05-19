"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import arMessages from "../../../messages/ar.json";
import enMessages from "../../../messages/en.json";
import { defaultLocale } from "@/lib/constants";
import { getDirection } from "@/lib/utils";
import { LanguageContext } from "@/hooks/useLanguage";
import type { Locale, LocalizedString } from "@/types";

const messages = {
  ar: arMessages,
  en: enMessages
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("preferred-locale");
    if (storedLocale === "ar" || storedLocale === "en") {
      setLocaleState(storedLocale);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("preferred-locale", nextLocale);
  };

  const direction = getDirection(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dataset.locale = locale;
  }, [direction, locale]);

  const value = useMemo(
    () => ({
      locale,
      direction,
      isArabic: locale === "ar",
      setLocale,
      toggleLocale: () => setLocale(locale === "ar" ? "en" : "ar"),
      localize: (localized: LocalizedString) => localized[locale]
    }),
    [direction, locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}
