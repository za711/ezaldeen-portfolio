"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/visuals/PlaceholderImage";
import { articleCategoryLabels } from "@/data/articles";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleCard({ article }: { article: Article }) {
  const { localize, locale, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <PlaceholderImage type="article" title={localize(article.title)} subtitle={localize(articleCategoryLabels[article.category])} className="rounded-b-none" />
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="blue">{localize(articleCategoryLabels[article.category])}</Badge>
        <h3 className="mt-4 text-xl font-extrabold leading-8 text-primary">{localize(article.title)}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{localize(article.excerpt)}</p>
        <div className="mt-5 flex items-center justify-between text-xs font-bold text-muted">
          <span>{formatDate(article.date, locale)}</span>
          <span>{article.readTime} {localize({ ar: "دقيقة", en: "min" })}</span>
        </div>
        <a href={"/blog/" + article.slug} className="mt-5 inline-flex items-center gap-2 font-extrabold text-secondary">
          {localize({ ar: "اقرأ المقال", en: "Read Article" })} <Arrow className="h-4 w-4" />
        </a>
      </div>
    </Card>
  );
}
