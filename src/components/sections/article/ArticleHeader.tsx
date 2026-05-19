"use client";

import { Badge } from "@/components/ui/Badge";
import { articleCategoryLabels } from "@/data/articles";
import { profile } from "@/data/profile";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleHeader({ article }: { article: Article }) {
  const { localize, locale } = useLanguage();
  return (
    <header className="mb-10">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Badge variant="gold">{localize(articleCategoryLabels[article.category])}</Badge>
        <span className="text-sm font-bold text-muted">{article.readTime} {localize({ ar: "دقيقة قراءة", en: "min read" })}</span>
      </div>
      <h1 className="text-4xl font-extrabold leading-tight text-primary md:text-[52px] md:leading-[60px]">{localize(article.title)}</h1>
      <p className="mt-5 rounded-card bg-secondary/5 p-5 text-lg leading-8 text-primary">{localize(article.excerpt)}</p>
      <div className="mt-6 rounded-2xl border border-border bg-white p-4 text-sm font-bold text-muted">
        {profile.nameAr} | {profile.titleAr} | {formatDate(article.date, locale)}
      </div>
    </header>
  );
}
