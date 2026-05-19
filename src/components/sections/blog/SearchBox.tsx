"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function SearchBox({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { localize } = useLanguage();
  return (
    <label className="flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-white px-5 shadow-card">
      <Search className="h-5 w-5 text-muted" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={localize({ ar: "ابحث عن مقال أو موضوع", en: "Search for an article or topic" })}
        className="w-full bg-transparent outline-none"
      />
    </label>
  );
}
