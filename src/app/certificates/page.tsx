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
        badgeAr="الشهادات والاعتمادات"
        badgeEn="Certificates"
        titleAr="شهادات مختارة وآمنة للعرض العام"
        titleEn="Selected & Safe Certificates for Public Display"
        subtitleAr="مجموعة من شهادات الخبرة والتدريب والتعليم دون عرض أي وثائق حساسة أو بيانات شخصية غير لازمة."
        subtitleEn="A curated set of experience, training, and education certificates without exposing sensitive documents or unnecessary personal data."
        icon="🏅"
        stats={[
          { value: "10", labelAr: "شهادة معتمدة", labelEn: "Certificates" },
          { value: "2003", labelAr: "البكالوريوس", labelEn: "Bachelor" },
          { value: "2024", labelAr: "آخر اعتماد", labelEn: "Latest Cert" }
        ]}
      />
      <CertificateFilters />
    </>
  );
}
