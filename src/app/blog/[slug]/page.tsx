import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/sections/article/ArticleBody";
import { ArticleHeader } from "@/components/sections/article/ArticleHeader";
import { TableOfContents } from "@/components/sections/article/TableOfContents";
import { RelatedArticles } from "@/components/sections/blog/RelatedArticles";
import { LocalizedCTASection } from "@/components/sections/shared/LocalizedCTASection";
import { articles } from "@/data/articles";
import { articleSchema, breadcrumbSchema, createMetadata } from "@/lib/seo";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) {
    return createMetadata({
      title: { ar: "مقال غير موجود", en: "Article Not Found" },
      description: { ar: "المقال المطلوب غير موجود.", en: "The requested article was not found." },
      pathname: "/blog/"
    });
  }
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    pathname: "/blog/" + article.slug + "/"
  });
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article.title.en, article.excerpt.en, article.slug, article.date)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog/" }, { name: article.title.en, url: "/blog/" + article.slug + "/" }])) }} />
      <section className="section-padding bg-bg">
        <div className="site-container">
          <a href="/blog" className="mb-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-secondary shadow-card">← Blog</a>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="rounded-card bg-white p-6 shadow-card md:p-10">
              <ArticleHeader article={article} />
              <ArticleBody article={article} />
            </article>
            <div className="hidden lg:block">
              <TableOfContents article={article} />
            </div>
          </div>
          <RelatedArticles currentSlug={article.slug} />
        </div>
      </section>
      <LocalizedCTASection title={{ ar: "هل تريد استشارة حول هذا الموضوع؟", en: "Would you like consultation on this topic?" }} />
    </>
  );
}
