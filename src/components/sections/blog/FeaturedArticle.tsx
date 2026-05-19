"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/visuals/PlaceholderImage";
import { articleCategoryLabels } from "@/data/articles";
import type { Article } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function FeaturedArticle({ article }: { article: Article }) {
  const { localize, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  return (
    <div className="grid gap-8 rounded-card bg-white p-6 shadow-card lg:grid-cols-[0.9fr_1.1fr]">
      <PlaceholderImage type="article" title={localize(article.title)} subtitle={localize(articleCategoryLabels[article.category])} />
      <div className="flex flex-col justify-center">
        <Badge variant="gold">{localize({ ar: "مقال مميز", en: "Featured Article" })}</Badge>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight text-primary">{localize(article.title)}</h2>
        <p className="mt-4 leading-8 text-muted">{localize(article.excerpt)}</p>
        <Button href={"/blog/" + article.slug} className="mt-7 w-fit" icon={<Arrow className="h-4 w-4" />}>
          {localize({ ar: "اقرأ المقال", en: "Read Article" })}
        </Button>
      </div>
    </div>
  );
}
