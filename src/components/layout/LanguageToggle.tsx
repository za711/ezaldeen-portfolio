"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="relative h-10 w-[76px] rounded-full border border-border bg-white p-1 text-xs font-bold text-primary shadow-card"
      aria-label="Toggle language"
      data-cursor="button"
    >
      <motion.span
        className="absolute top-1 h-8 w-8 rounded-full bg-primary shadow-card"
        animate={{ x: locale === "ar" ? 34 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      />
      <span className="relative z-10 grid h-full grid-cols-2 items-center">
        <span className={locale === "en" ? "text-white" : "text-primary"}>EN</span>
        <span className={locale === "ar" ? "text-white" : "text-primary"}>AR</span>
      </span>
    </button>
  );
}
