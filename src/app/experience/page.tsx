import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";
import { LocalizedPageHero } from "@/components/sections/shared/LocalizedPageHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "الخبرات", en: "Experience" },
  description: { ar: "الخبرات المهنية للمهندس عزالدين البداي من 2009 حتى اليوم.", en: "Professional experience of Eng. Ezaldeen Albadai from 2009 to present." },
  pathname: "/experience/"
});

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Experience", url: "/experience/" }])) }} />
      <LocalizedPageHero
        eyebrow="الخبرات | Experience"
        title={{ ar: "مسار مهني من التنفيذ الميداني إلى تنسيق المحافظ الكبرى", en: "A career path from field execution to major portfolio coordination" }}
        description={{ ar: "Timeline كامل لأدوار هندسية وإدارية في مشاريع إنسانية وتنموية بميزانيات ومؤشرات واضحة.", en: "A complete timeline of engineering and management roles in humanitarian and development projects with clear budgets and indicators." }}
      />
      <ExperienceTimeline />
    </>
  );
}
