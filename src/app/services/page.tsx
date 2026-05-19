import { LocalizedCTASection } from "@/components/sections/shared/LocalizedCTASection";
import { LocalizedPageHero } from "@/components/sections/shared/LocalizedPageHero";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "الخدمات", en: "Services" },
  description: { ar: "خدمات إدارة وتنسيق المشاريع الإنسانية والهندسية وتقارير المانحين.", en: "Services in humanitarian project coordination, engineering supervision, and donor reporting." },
  pathname: "/services/"
});

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services/" }])) }} />
      <LocalizedPageHero
        eyebrow="الخدمات | Services"
        title={{ ar: "خدمات مهنية متكاملة للمشاريع الإنسانية والتنموية", en: "Integrated professional services for humanitarian and development projects" }}
        description={{ ar: "من الدراسة والتصميم إلى التنفيذ والتوثيق، بخبرة تفهم الميدان ومتطلبات المانحين.", en: "From assessment and design to implementation and documentation, with field-aware delivery and donor-ready standards." }}
      />
      <ServicesList />
      <LocalizedCTASection title={{ ar: "اختر خبرة تنفيذية تقلل المخاطر وترفع جودة الأثر", en: "Choose delivery experience that reduces risk and raises impact quality" }} />
    </>
  );
}
