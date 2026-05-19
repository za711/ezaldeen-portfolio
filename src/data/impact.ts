import type { ImpactStat } from "@/types";

export const impactStats: ImpactStat[] = [
  {
    id: "years",
    label: { ar: "سنة خبرة", en: "Years Experience" },
    value: 15,
    suffix: { ar: "+", en: "+" },
    icon: "BadgeCheck",
    description: { ar: "خبرة تراكمية في بيئات إنسانية وتنموية معقدة.", en: "Cumulative experience in complex humanitarian and development settings." }
  },
  {
    id: "water-projects",
    label: { ar: "مشروع مياه", en: "Water Projects" },
    value: 49,
    suffix: { ar: "", en: "" },
    icon: "Droplets",
    description: { ar: "تأهيل مشاريع مياه بأنظمة طاقة شمسية وتشغيل مستدام.", en: "Water projects rehabilitated with solar-powered sustainable operation." }
  },
  {
    id: "micro-projects",
    label: { ar: "مشروع صغير", en: "Micro Projects" },
    value: 750,
    suffix: { ar: "", en: "" },
    icon: "Sprout",
    description: { ar: "مشاريع سبل عيش دعمت الأسر والمجتمعات المحلية.", en: "Livelihood micro-projects supporting households and local communities." }
  },
  {
    id: "infrastructure",
    label: { ar: "مشروع بنية تحتية", en: "Infrastructure Projects" },
    value: 120,
    suffix: { ar: "+", en: "+" },
    icon: "Landmark",
    description: { ar: "طرق وخزانات وآبار ومرافق عامة ومشاريع نقد مقابل العمل.", en: "Roads, tanks, wells, public facilities, and Cash for Work projects." }
  },
  {
    id: "donors",
    label: { ar: "جهات مانحة دولية", en: "International Donors" },
    value: 6,
    suffix: { ar: "", en: "" },
    icon: "Globe2",
    description: { ar: "تنسيق وتقارير مع جهات مثل WFP وSIDA وIR-Canada.", en: "Coordination and reporting with donors including WFP, SIDA, and IR-Canada." }
  }
];
