"use client";

import { articleCategoryLabels } from "@/data/articles";
import type { ArticleCategory } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const categories: Array<ArticleCategory | "all"> = ["all", "wash", "project-management", "solar", "reporting", "livelihoods", "field-leadership", "infrastructure", "impact"];

export function CategoryFilter({ active, onChange }: { active: ArticleCategory | "all"; onChange: (category: ArticleCategory | "all") => void }) {
  const { localize } = useLanguage();
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-bold transition",
            active === category ? "border-accent bg-accent text-primary" : "border-border bg-white text-primary hover:border-accent"
          )}
        >
          {localize(articleCategoryLabels[category])}
        </button>
      ))}
    </div>
  );
}
