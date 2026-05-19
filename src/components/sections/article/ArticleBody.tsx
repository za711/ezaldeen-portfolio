"use client";

import { ArticleCTA } from "@/components/sections/article/ArticleCTA";
import { InsightBox } from "@/components/sections/article/InsightBox";
import type { Article } from "@/types";
import { slugify } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleBody({ article }: { article: Article }) {
  const { localize, locale } = useLanguage();
  let headingCount = 0;

  return (
    <div className="article-body">
      {article.content.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index} className="mb-5">{localize(block.text)}</p>;
        }
        if (block.type === "heading") {
          headingCount += 1;
          const Tag = block.level === 2 ? "h2" : "h3";
          return <Tag key={index} id={slugify(localize(block.text))}>{localize(block.text)}</Tag>;
        }
        if (block.type === "insight") {
          return <InsightBox key={index}>{localize(block.text)}</InsightBox>;
        }
        return (
          <ul key={index}>
            {block.items[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
      {headingCount > 0 ? <ArticleCTA /> : null}
      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">#{tag}</span>
        ))}
      </div>
    </div>
  );
}
