import { AboutContent } from "@/components/sections/about/AboutContent";
import { LocalizedCTASection } from "@/components/sections/shared/LocalizedCTASection";
import { LocalizedPageHero } from "@/components/sections/shared/LocalizedPageHero";
import { breadcrumbSchema, createMetadata, personSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "من أنا", en: "About" },
  description: { ar: "تعرف على الخبرة المهنية والإنسانية للمهندس عزالدين البداي.", en: "Learn about the professional and humanitarian experience of Eng. Ezaldeen Albadai." },
  pathname: "/about/"
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about/" }])) }} />
      <LocalizedPageHero
        eyebrow="من أنا | About"
        title={{ ar: "مهندس مدني يقود الأثر من قلب الميدان", en: "A civil engineer leading impact from the field" }}
        description={{ ar: "خبرة تجمع بين الانضباط الهندسي، فهم المجتمع، وإدارة المشاريع الإنسانية والتنموية بمعايير مانحين دوليين.", en: "Experience combining engineering discipline, community understanding, and humanitarian project management to international donor standards." }}
      />
      <AboutContent />
      <LocalizedCTASection title={{ ar: "جاهز لدعم مشروعك بخبرة ميدانية قابلة للقياس", en: "Ready to support your project with measurable field experience" }} />
    </>
  );
}
