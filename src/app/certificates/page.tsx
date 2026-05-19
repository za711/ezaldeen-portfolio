import { CertificateFilters } from "@/components/sections/certificates/CertificateFilters";
import { LocalizedPageHero } from "@/components/sections/shared/LocalizedPageHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "الشهادات", en: "Certificates" },
  description: { ar: "الشهادات المهنية والأكاديمية الآمنة للعرض للمهندس عزالدين البداي.", en: "Safe-to-display professional and academic certificates for Eng. Ezaldeen Albadai." },
  pathname: "/certificates/"
});

export default function CertificatesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Certificates", url: "/certificates/" }])) }} />
      <LocalizedPageHero
        eyebrow="الشهادات | Certificates"
        title={{ ar: "شهادات مختارة وآمنة للعرض العام", en: "Selected certificates safe for public display" }}
        description={{ ar: "مجموعة من شهادات الخبرة والتدريب والتعليم دون عرض أي وثائق حساسة أو بيانات شخصية غير لازمة.", en: "A curated set of experience, training, and education certificates without exposing sensitive documents or unnecessary personal data." }}
      />
      <CertificateFilters />
    </>
  );
}
