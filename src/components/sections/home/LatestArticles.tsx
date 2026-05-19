"use client";

import { ArticleCard } from "@/components/sections/blog/ArticleCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles } from "@/data/articles";
import { useLanguage } from "@/hooks/useLanguage";

export function LatestArticles() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="site-container">
        <SectionHeader centered eyebrow={localize({ ar: "المعرفة", en: "Insights" })} title={localize({ ar: "أحدث المقالات", en: "Latest Articles" })} />
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {articles.slice(0, 3).map((article) => (
            <div key={article.slug} className="min-w-[300px] lg:min-w-0">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
