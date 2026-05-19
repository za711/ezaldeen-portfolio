"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/sections/blog/ArticleCard";
import { CategoryFilter } from "@/components/sections/blog/CategoryFilter";
import { FeaturedArticle } from "@/components/sections/blog/FeaturedArticle";
import { SearchBox } from "@/components/sections/blog/SearchBox";
import { NewsletterBox } from "@/components/sections/shared/NewsletterBox";
import { Card } from "@/components/ui/Card";
import { articles } from "@/data/articles";
import type { ArticleCategory } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "all">("all");
  const { localize, locale } = useLanguage();
  const featured = articles.find((article) => article.featured) || articles[0];
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = category === "all" || article.category === category;
      const text = (article.title[locale] + " " + article.excerpt[locale] + " " + article.tags.join(" ")).toLowerCase();
      return categoryMatch && (!needle || text.includes(needle));
    });
  }, [category, locale, query]);

  const paths = [
    { ar: "مسار مشاريع WASH", en: "WASH Projects Path" },
    { ar: "مسار إدارة المشاريع", en: "Project Management Path" },
    { ar: "مسار سبل العيش", en: "Livelihoods Path" },
    { ar: "مسار التقارير", en: "Reporting Path" }
  ];

  return (
    <section className="section-padding bg-bg">
      <div className="site-container space-y-10">
        <SearchBox value={query} onChange={setQuery} />
        <CategoryFilter active={category} onChange={setCategory} />
        <FeaturedArticle article={featured} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div>
          <h2 className="mb-5 text-3xl font-extrabold text-primary">{localize({ ar: "مسارات تعلم مقترحة", en: "Suggested Learning Paths" })}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <Card key={path.en} className="bg-white">
                <h3 className="text-lg font-extrabold text-primary">{localize(path)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{localize({ ar: "مجموعة مقالات عملية تساعد على بناء فهم منهجي لهذا المجال.", en: "A practical article set for structured understanding of this field." })}</p>
              </Card>
            ))}
          </div>
        </div>
        <NewsletterBox />
      </div>
    </section>
  );
}
