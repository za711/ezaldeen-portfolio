import { CVEducation } from "@/components/sections/cv/CVEducation";
import { CVExperience } from "@/components/sections/cv/CVExperience";
import { CVHeader } from "@/components/sections/cv/CVHeader";
import { CVLanguages } from "@/components/sections/cv/CVLanguages";
import { CVSkills } from "@/components/sections/cv/CVSkills";
import { CVSummary } from "@/components/sections/cv/CVSummary";
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
          eyebrow="السيرة الذاتية | CV"
          title={{ ar: "سيرة ذاتية مصممة للقراءة والطباعة", en: "A CV designed for reading and printing" }}
          description={{ ar: "نسخة ويب أنيقة مع تنسيق A4 نظيف عند الطباعة من المتصفح.", en: "An elegant web CV with a clean A4 layout when printed from the browser." }}
        />
      </div>
      <section className="section-padding bg-bg">
        <div className="site-container space-y-6">
          <CVHeader />
          <CVSummary />
          <CVSkills />
          <CVExperience />
          <CVEducation />
          <CVLanguages />
        </div>
      </section>
    </>
  );
}
