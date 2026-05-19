"use client";

import { ArticleCard } from "@/components/sections/blog/ArticleCard";
import { articles } from "@/data/articles";
import { useLanguage } from "@/hooks/useLanguage";

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const { localize } = useLanguage();
  const related = articles.filter((article) => article.slug !== currentSlug).slice(0, 3);
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-extrabold text-primary">{localize({ ar: "مقالات ذات صلة", en: "Related Articles" })}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {related.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
