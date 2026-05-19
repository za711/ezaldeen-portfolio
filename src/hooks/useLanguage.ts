"use client";

import { createContext, useContext } from "react";
import type { Direction, Locale, LocalizedString } from "@/types";

export interface LanguageContextValue {
  locale: Locale;
  direction: Direction;
  isArabic: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  localize: (value: LocalizedString) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
