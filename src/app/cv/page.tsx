import CVDocument from "@/components/sections/cv/CVDocument";
import { LocalizedPageHero } from "@/components/sections/shared/LocalizedPageHero";
import { createMetadata, breadcrumbSchema, personSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "السيرة الذاتية", en: "CV" },
  description: { ar: "السيرة الذاتية القابلة للطباعة للمهندس عزالدين البداي.", en: "Printable CV page for Eng. Ezaldeen Albadai." },
  pathname: "/cv/"
});

export default function CVPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "CV", url: "/cv/" }])) }} />
      <div className="print-hidden">
        <LocalizedPageHero
          badgeAr="السيرة الذاتية"
          badgeEn="Curriculum Vitae"
          titleAr="سيرة ذاتية مصممة للقراءة والطباعة"
          titleEn="CV Designed for Reading and Printing"
          subtitleAr="نسخة ويب أنيقة مع تنسيق A4 نظيف عند الطباعة من المتصفح."
          subtitleEn="An elegant web CV with a clean A4 layout when printed from the browser."
          icon="📄"
        />
      </div>
      <CVDocument />
    </>
  );
}
