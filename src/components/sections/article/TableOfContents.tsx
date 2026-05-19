"use client";

import type { Article } from "@/types";
import { slugify } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function TableOfContents({ article }: { article: Article }) {
  const { localize } = useLanguage();
  const headings = article.content.filter((block) => block.type === "heading");
  return (
    <aside className="sticky top-28 rounded-card bg-white p-5 shadow-card">
      <h2 className="mb-4 font-extrabold text-primary">{localize({ ar: "محتويات المقال", en: "Contents" })}</h2>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a key={index} className="block rounded-xl px-3 py-2 text-sm font-bold text-muted transition hover:bg-bg hover:text-primary" href={"#" + slugify(localize(heading.text))}>
            {localize(heading.text)}
          </a>
        ))}
      </nav>
    </aside>
  );
}
