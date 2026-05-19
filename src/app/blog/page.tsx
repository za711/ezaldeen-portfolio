import { ArticleGrid } from "@/components/sections/blog/ArticleGrid";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "المقالات", en: "Blog" },
  description: { ar: "مقالات وأدلة مهنية في إدارة المشاريع والمياه والتقارير وسبل العيش.", en: "Professional articles and guides in project management, WASH, reporting, and livelihoods." },
  pathname: "/blog/"
});

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog/" }])) }} />
      <BlogHero />
      <ArticleGrid />
    </>
  );
}
