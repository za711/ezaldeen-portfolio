export interface Achievement {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: "wash" | "solar" | "livelihoods" | "infrastructure" | "field";
  imagePath: string;
  year: string;
  project?: string;
}

export const achievements: Achievement[] = [
  {
    id: "recognition-1",
    titleAr: "تكريم ميداني لشراكة المشروع",
    titleEn: "Field Recognition for Project Partnership",
    descriptionAr: "لحظة تقدير ضمن مسار تنفيذ وتنسيق مشاريع ميدانية مع شركاء محليين.",
    descriptionEn: "A recognition moment within field project delivery and coordination with local partners.",
    category: "field",
    imagePath: "/assets/achievements/project-recognition-1.jpg",
    year: "2024",
    project: "Islamic Relief Yemen"
  },
  {
    id: "community-1",
    titleAr: "تواصل مجتمعي في موقع مشروع",
    titleEn: "Community Engagement at a Project Site",
    descriptionAr: "متابعة ميدانية مع المجتمع المحلي خلال أنشطة مرتبطة بخدمات عامة وتنموية.",
    descriptionEn: "Field follow-up with the local community during public-service and development activities.",
    category: "field",
    imagePath: "/assets/achievements/project-community-1.jpg",
    year: "2024",
    project: "Field Coordination"
  },
  {
    id: "community-2",
    titleAr: "مشاركة مجتمعية ضمن أنشطة المشروع",
    titleEn: "Community Participation in Project Activities",
    descriptionAr: "توثيق تفاعل المستفيدين والمجتمع أثناء أنشطة ميدانية منظمة.",
    descriptionEn: "Documenting beneficiary and community interaction during organized field activities.",
    category: "field",
    imagePath: "/assets/achievements/project-community-2.jpg",
    year: "2024",
    project: "Community Activities"
  },
  {
    id: "field-training-1",
    titleAr: "جلسة تدريب وتنسيق ميداني",
    titleEn: "Field Training and Coordination Session",
    descriptionAr: "جلسة تدريبية لدعم التشغيل والمتابعة وتحسين جودة تنفيذ الأنشطة.",
    descriptionEn: "A training session supporting operation, follow-up, and improved activity delivery quality.",
    category: "livelihoods",
    imagePath: "/assets/achievements/project-field-training-1.jpg",
    year: "2024",
    project: "Capacity Building"
  },
  {
    id: "community-3",
    titleAr: "متابعة نشاط مجتمعي",
    titleEn: "Community Activity Follow-Up",
    descriptionAr: "حضور ومتابعة ميدانية لأنشطة مجتمعية مرتبطة بأثر المشروع.",
    descriptionEn: "Field presence and follow-up for community activities connected to project impact.",
    category: "field",
    imagePath: "/assets/achievements/project-community-3.jpg",
    year: "2024",
    project: "Field Work"
  },
  {
    id: "training-1",
    titleAr: "ورشة تنسيق وتخطيط",
    titleEn: "Coordination and Planning Workshop",
    descriptionAr: "ورشة عملية لمناقشة أدوات التخطيط والمتابعة والتنسيق بين أصحاب المصلحة.",
    descriptionEn: "A practical workshop discussing planning, monitoring, and stakeholder coordination tools.",
    category: "field",
    imagePath: "/assets/achievements/project-training-1.jpg",
    year: "2024",
    project: "Project Coordination"
  },
  {
    id: "solar-pump-1",
    titleAr: "موقع مشروع مياه بالطاقة الشمسية",
    titleEn: "Solar Water Project Site",
    descriptionAr: "متابعة ميدانية لموقع يرتبط بأنظمة الطاقة الشمسية وخدمات المياه.",
    descriptionEn: "Field follow-up at a site connected to solar systems and water services.",
    category: "solar",
    imagePath: "/assets/achievements/project-solar-pump-1.jpg",
    year: "2024",
    project: "WASH & Solar"
  },
  {
    id: "field-work-1",
    titleAr: "زيارة ميدانية لمتابعة الأثر",
    titleEn: "Field Visit for Impact Follow-Up",
    descriptionAr: "زيارة ميدانية لتوثيق التقدم والتفاعل المباشر مع المستفيدين.",
    descriptionEn: "A field visit documenting progress and direct engagement with beneficiaries.",
    category: "field",
    imagePath: "/assets/achievements/project-field-work-1.jpg",
    year: "2024",
    project: "Impact Follow-Up"
  }
];
