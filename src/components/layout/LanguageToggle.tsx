"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface LanguageToggleProps {
  lang?: "ar" | "en";
  onToggle?: () => void;
}

export function LanguageToggle({ lang, onToggle }: LanguageToggleProps = {}) {
  const { locale, toggleLocale } = useLanguage();
  const currentLang = lang ?? locale;
  const handleToggle = onToggle ?? toggleLocale;

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-white px-3 py-1.5 transition-all duration-300 hover:border-[#D6A84F]/50 hover:bg-[#D6A84F]/5"
      aria-label="Toggle language"
      title="Switch language"
      data-cursor="button"
    >
      <Globe
        className="h-3.5 w-3.5 text-[#6B7280] transition-colors group-hover:text-[#D6A84F]"
        aria-hidden="true"
      />
      <span className="font-mono text-xs font-bold tracking-wide text-[#374151] transition-colors group-hover:text-[#0F2742]">
        {currentLang === "ar" ? "EN" : "عر"}
      </span>
      <span className={`h-1.5 w-1.5 rounded-full transition-colors ${currentLang === "ar" ? "bg-[#D6A84F]" : "bg-[#2563EB]"}`} />
    </motion.button>
  );
}

export default LanguageToggle;
