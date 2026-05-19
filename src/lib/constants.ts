import type { Locale, SelectOption } from "@/types";

export const locales: Locale[] = ["ar", "en"];

export const defaultLocale: Locale = "ar";

export const requestTypeOptions: SelectOption[] = [
  { value: "consultation", label: { ar: "استشارة", en: "Consultation" } },
  { value: "training", label: { ar: "تدريب", en: "Training" } },
  { value: "project", label: { ar: "مشروع", en: "Project" } },
  { value: "employment", label: { ar: "توظيف", en: "Employment" } },
  { value: "other", label: { ar: "أخرى", en: "Other" } }
];

export const siteKeywords = [
  "WASH projects",
  "humanitarian engineering",
  "civil engineer Yemen",
  "project coordination",
  "solar pumping systems",
  "livelihoods",
  "Cash for Work",
  "donor reporting",
  "إدارة المشاريع الإنسانية",
  "مشاريع المياه",
  "مهندس مدني اليمن"
];
