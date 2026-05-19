"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function BlogHero() {
  const { localize } = useLanguage();
  return (
    <section className="bg-navy-gradient py-20 text-white md:py-28">
      <div className="site-container text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-[56px] md:leading-[64px]">
          {localize({ ar: "مقالات وأدلة مهنية في إدارة المشاريع والمياه والتحول", en: "Professional articles and guides in project management, water, and transformation" })}
        </h1>
        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-full bg-white px-5 py-3 text-primary shadow-hover">
          <Search className="h-5 w-5 text-muted" />
          <span className="text-sm font-semibold text-muted">{localize({ ar: "ابحث داخل المقالات من الأسفل", en: "Search articles below" })}</span>
        </div>
      </div>
    </section>
  );
}
