import AchievementsGallery from "@/components/sections/impact/AchievementsGallery";
import { ImpactDashboard } from "@/components/sections/impact/ImpactDashboard";
import { ImpactStats } from "@/components/sections/impact/ImpactStats";
import { LocalizedCTASection } from "@/components/sections/shared/LocalizedCTASection";
import { LocalizedPageHero } from "@/components/sections/shared/LocalizedPageHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "المشاريع والأثر", en: "Impact" },
  description: { ar: "أثر مشاريع المياه وسبل العيش والبنية التحتية التي قادها المهندس عزالدين البداي.", en: "Impact of WASH, livelihoods, and infrastructure projects led by Eng. Ezaldeen Albadai." },
  pathname: "/impact/"
});

export default function ImpactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Impact", url: "/impact/" }])) }} />
      <LocalizedPageHero
        eyebrow="المشاريع والأثر | Impact"
        title={{ ar: "أثر قابل للقياس في المياه وسبل العيش والبنية التحتية", en: "Measurable impact in water, livelihoods, and infrastructure" }}
        description={{ ar: "مؤشرات مختصرة توضح حجم الخبرة التنفيذية والإنسانية عبر سنوات من العمل الميداني.", en: "Concise indicators showing the scale of engineering and humanitarian delivery across years of field work." }}
      />
      <ImpactStats />
      <ImpactDashboard />
      <AchievementsGallery />
      <LocalizedCTASection title={{ ar: "حوّل أهداف مشروعك إلى مؤشرات تنفيذ واضحة", en: "Turn your project goals into clear delivery indicators" }} />
    </>
  );
}
