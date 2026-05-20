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
        badgeAr="المسيرة المهنية"
        badgeEn="Experience"
        titleAr="من التنفيذ الميداني إلى تنسيق المحافظ الكبرى"
        titleEn="From Field Execution to Major Portfolio Coordination"
        subtitleAr="Timeline كامل لأدوار هندسية وإدارية في مشاريع إنسانية وتنموية بميزانيات ومؤشرات واضحة."
        subtitleEn="A complete timeline of engineering and management roles in humanitarian and development projects with clear budgets and indicators."
        icon="📋"
        stats={[
          { value: "$13M+", labelAr: "إجمالي الميزانيات", labelEn: "Total Budgets" },
          { value: "2009", labelAr: "بداية المسيرة", labelEn: "Career Start" },
          { value: "5+", labelAr: "جهات مانحة", labelEn: "Donors" }
        ]}
      />
      <ExperienceTimeline />
    </>
  );
}
