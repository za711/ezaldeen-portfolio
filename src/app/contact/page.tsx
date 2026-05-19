import { ContactContent } from "@/components/sections/contact/ContactContent";
import { LocalizedPageHero } from "@/components/sections/shared/LocalizedPageHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "تواصل", en: "Contact" },
  description: { ar: "تواصل مع المهندس عزالدين البداي للاستشارات والمشاريع والتدريب.", en: "Contact Eng. Ezaldeen Albadai for consultation, projects, and training." },
  pathname: "/contact/"
});

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact/" }])) }} />
      <LocalizedPageHero
        eyebrow="تواصل | Contact"
        title={{ ar: "ابدأ محادثة مهنية واضحة", en: "Start a clear professional conversation" }}
        description={{ ar: "للاستشارات، التدريب، إدارة المشاريع، أو فرص التعاون، يمكن إرسال رسالة مباشرة وسيتم الرد خلال 24 ساعة.", en: "For consultation, training, project management, or collaboration opportunities, send a direct message and receive a response within 24 hours." }}
      />
      <ContactContent />
    </>
  );
}
