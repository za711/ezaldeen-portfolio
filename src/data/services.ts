import type { ExpertiseArea, Service } from "@/types";

export const services: Service[] = [
  {
    id: "project-coordination",
    icon: "Network",
    title: { ar: "تنسيق وإدارة المشاريع", en: "Project Coordination & Management" },
    description: {
      ar: "قيادة دورة المشروع من التخطيط والتنسيق وحتى التنفيذ والتقارير النهائية.",
      en: "Lead the project cycle from planning and coordination through execution and final reporting."
    },
    outcomes: {
      ar: ["خطط تنفيذ واضحة", "تنسيق أصحاب المصلحة", "متابعة مؤشرات الأداء"],
      en: ["Clear implementation plans", "Stakeholder coordination", "Performance indicator tracking"]
    }
  },
  {
    id: "wash-water",
    icon: "Droplets",
    title: { ar: "مشاريع WASH والمياه", en: "WASH & Water Projects" },
    description: {
      ar: "تصميم ومتابعة مشاريع المياه والإصحاح البيئي في البيئات الإنسانية.",
      en: "Design and monitor water and sanitation projects in humanitarian environments."
    },
    outcomes: {
      ar: ["شبكات مياه", "خزانات وآبار", "حلول تشغيل مستدامة"],
      en: ["Water networks", "Tanks and wells", "Sustainable operation solutions"]
    }
  },
  {
    id: "solar-pumping",
    icon: "SunMedium",
    title: { ar: "أنظمة الضخ بالطاقة الشمسية", en: "Solar Pumping Systems" },
    description: {
      ar: "تأهيل وتحسين أنظمة الضخ لضمان استمرارية المياه وتقليل كلفة التشغيل.",
      en: "Rehabilitate and improve pumping systems to sustain water access and reduce operating costs."
    },
    outcomes: {
      ar: ["تحليل الاحتياج", "مواصفات فنية", "استدامة تشغيلية"],
      en: ["Needs analysis", "Technical specifications", "Operational sustainability"]
    }
  },
  {
    id: "livelihoods",
    icon: "Sprout",
    title: { ar: "مشاريع سبل العيش", en: "Livelihoods Projects" },
    description: {
      ar: "إدارة منح ومشاريع صغيرة في الزراعة والثروة الحيوانية وريادة الأعمال.",
      en: "Manage grants and micro-projects in agriculture, livestock, and entrepreneurship."
    },
    outcomes: {
      ar: ["اختيار مستفيدين", "تدريب عملي", "متابعة الأثر"],
      en: ["Beneficiary selection", "Practical training", "Impact follow-up"]
    }
  },
  {
    id: "cash-for-work",
    icon: "HandCoins",
    title: { ar: "النقد مقابل العمل", en: "Cash for Work" },
    description: {
      ar: "تصميم تدخلات عمل مجتمعي تربط الدخل الفوري بتحسين أصول عامة.",
      en: "Design community work interventions that connect immediate income with public asset improvement."
    },
    outcomes: {
      ar: ["أجور عادلة", "أصول مجتمعية", "مساءلة ميدانية"],
      en: ["Fair wages", "Community assets", "Field accountability"]
    }
  },
  {
    id: "engineering-supervision",
    icon: "HardHat",
    title: { ar: "الإشراف الهندسي", en: "Engineering Supervision" },
    description: {
      ar: "متابعة التنفيذ طبقًا للمواصفات والكميات والجداول الزمنية المعتمدة.",
      en: "Supervise delivery according to specifications, quantities, and approved schedules."
    },
    outcomes: {
      ar: ["ضبط جودة", "استلام أعمال", "تقارير تقدم"],
      en: ["Quality control", "Works handover", "Progress reports"]
    }
  },
  {
    id: "studies-costing",
    icon: "Calculator",
    title: { ar: "الدراسات والتكاليف", en: "Studies & Costing" },
    description: {
      ar: "إعداد دراسات فنية وكميات وتقديرات تكلفة قابلة للتنفيذ والمراجعة.",
      en: "Prepare practical technical studies, quantities, and cost estimates ready for review."
    },
    outcomes: {
      ar: ["BOQ دقيق", "مواصفات واضحة", "تحليل مخاطر"],
      en: ["Accurate BOQs", "Clear specifications", "Risk analysis"]
    }
  },
  {
    id: "donor-reporting",
    icon: "FileText",
    title: { ar: "تقارير المانحين والتوثيق", en: "Donor Reporting & Documentation" },
    description: {
      ar: "إعداد تقارير سردية وفنية ومالية تربط النشاط بالمؤشرات والأثر.",
      en: "Prepare narrative, technical, and financial reports that connect activities with indicators and impact."
    },
    outcomes: {
      ar: ["تقارير مقنعة", "أدلة موثقة", "تواصل واضح"],
      en: ["Compelling reports", "Documented evidence", "Clear communication"]
    }
  }
];

export const expertiseAreas: ExpertiseArea[] = [
  ...services.map((service) => ({
    id: service.id,
    icon: service.icon,
    title: service.title,
    description: service.description
  })),
  {
    id: "field-team-leadership",
    icon: "UsersRound",
    title: { ar: "قيادة الفرق الميدانية", en: "Field Team Leadership" },
    description: {
      ar: "توجيه الفرق متعددة التخصصات في بيئات ضغط عالٍ مع الحفاظ على الجودة.",
      en: "Guide multidisciplinary teams in high-pressure settings while maintaining quality."
    }
  }
];
