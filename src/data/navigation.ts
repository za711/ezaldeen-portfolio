import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { id: "home", href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { id: "about", href: "/about", label: { ar: "من أنا", en: "About" } },
  { id: "experience", href: "/experience", label: { ar: "الخبرات", en: "Experience" } },
  { id: "impact", href: "/impact", label: { ar: "المشاريع", en: "Impact" } },
  { id: "services", href: "/services", label: { ar: "الخدمات", en: "Services" } },
  { id: "certificates", href: "/certificates", label: { ar: "الشهادات", en: "Certificates" } },
  { id: "cv", href: "/cv", label: { ar: "السيرة", en: "CV" } },
  { id: "contact", href: "/contact", label: { ar: "تواصل", en: "Contact" } }
];
