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
        badgeAr="من أنا"
        badgeEn="About"
        titleAr="مهندس مدني يقود الأثر من قلب الميدان"
        titleEn="Civil Engineer Leading Impact from the Field"
        subtitleAr="خبرة تجمع بين الانضباط الهندسي، فهم المجتمع، وإدارة المشاريع الإنسانية بمعايير مانحين دوليين."
        subtitleEn="Experience combining engineering discipline, community understanding, and humanitarian project management."
        icon="👷"
        stats={[
          { value: "15+", labelAr: "سنة خبرة", labelEn: "Years Experience" },
          { value: "7", labelAr: "مناصب قيادية", labelEn: "Leadership Roles" },
          { value: "Yemen", labelAr: "الحديدة", labelEn: "Al Hodeida" }
        ]}
      />
      <AboutContent />
      <LocalizedCTASection title={{ ar: "جاهز لدعم مشروعك بخبرة ميدانية قابلة للقياس", en: "Ready to support your project with measurable field experience" }} />
    </>
  );
}
