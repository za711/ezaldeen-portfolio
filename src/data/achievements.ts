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
  },
  {
    id: "achievement-01",
    titleAr: "متابعة تركيب ألواح الطاقة الشمسية",
    titleEn: "Solar Panel Installation Follow-Up",
    descriptionAr: "متابعة ميدانية لأعمال تركيب منظومة طاقة شمسية ضمن مشروع مياه يخدم المجتمع.",
    descriptionEn: "Field follow-up for solar panel installation within a community water project.",
    category: "solar",
    imagePath: "/assets/achievements/achievement-01.jpg",
    year: "2024",
    project: "WASH & Solar"
  },
  {
    id: "achievement-02",
    titleAr: "موقع مشروع مياه بالطاقة الشمسية",
    titleEn: "Solar-Powered Water Project Site",
    descriptionAr: "توثيق موقع منظومة طاقة شمسية مرتبطة بتشغيل خدمات المياه في منطقة ريفية.",
    descriptionEn: "Documentation of a solar system supporting water service operation in a rural area.",
    category: "solar",
    imagePath: "/assets/achievements/achievement-02.jpg",
    year: "2024",
    project: "Solar Water Systems"
  },
  {
    id: "achievement-03",
    titleAr: "محطة ضخ وأنظمة تحكم",
    titleEn: "Pumping Station and Control Systems",
    descriptionAr: "متابعة محطة ضخ وتجهيزات تحكم مرتبطة باستدامة تشغيل مشروع مياه.",
    descriptionEn: "Follow-up of pumping and control equipment supporting sustainable water project operation.",
    category: "wash",
    imagePath: "/assets/achievements/achievement-03.jpg",
    year: "2024",
    project: "Water Infrastructure"
  },
  {
    id: "achievement-04",
    titleAr: "تجهيزات خزانات ومحطة مياه",
    titleEn: "Water Tanks and Station Equipment",
    descriptionAr: "متابعة تجهيزات خزان ومحطة مياه ضمن أعمال تأهيل وتشغيل ميداني.",
    descriptionEn: "Follow-up of tank and water station equipment during rehabilitation and operation works.",
    category: "infrastructure",
    imagePath: "/assets/achievements/achievement-04.jpg",
    year: "2024",
    project: "Infrastructure Rehabilitation"
  },
  {
    id: "achievement-05",
    titleAr: "منظومة شمسية لخدمة المياه",
    titleEn: "Solar System for Water Services",
    descriptionAr: "توثيق منظومة شمسية واسعة تدعم تشغيل خدمات المياه وتحسين الاستدامة.",
    descriptionEn: "Documentation of a large solar system supporting water service operation and sustainability.",
    category: "solar",
    imagePath: "/assets/achievements/achievement-05.jpg",
    year: "2024",
    project: "SIDA Project"
  },
  {
    id: "achievement-06",
    titleAr: "متابعة مرفق صحي بعد التأهيل",
    titleEn: "Post-Rehabilitation Health Facility Follow-Up",
    descriptionAr: "زيارة ميدانية لمرفق صحي ضمن أعمال متابعة جودة البنية التحتية والخدمات.",
    descriptionEn: "Field visit to a health facility as part of infrastructure and service quality follow-up.",
    category: "infrastructure",
    imagePath: "/assets/achievements/achievement-06.jpg",
    year: "2024",
    project: "Health Facility Support"
  },
  {
    id: "achievement-07",
    titleAr: "مرفق صحي يخدم المجتمع المحلي",
    titleEn: "Community Health Facility",
    descriptionAr: "توثيق منشأة صحية ضمن أنشطة دعم الخدمات العامة للمجتمع.",
    descriptionEn: "Documentation of a health facility within community public-service support activities.",
    category: "infrastructure",
    imagePath: "/assets/achievements/achievement-07.jpg",
    year: "2024",
    project: "Community Infrastructure"
  },
  {
    id: "achievement-08",
    titleAr: "متابعة مشروع زراعي ميداني",
    titleEn: "Field Follow-Up for an Agricultural Project",
    descriptionAr: "زيارة ميدانية لمتابعة أثر تدخلات زراعية مرتبطة بسبل العيش.",
    descriptionEn: "Field visit following the impact of agricultural livelihoods interventions.",
    category: "livelihoods",
    imagePath: "/assets/achievements/achievement-08.jpg",
    year: "2024",
    project: "Livelihoods"
  },
  {
    id: "achievement-09",
    titleAr: "تحسين الري وخدمات الإنتاج الزراعي",
    titleEn: "Irrigation and Agricultural Production Support",
    descriptionAr: "توثيق تدخل يدعم الري والإنتاج الزراعي ضمن مشاريع تعزيز سبل العيش.",
    descriptionEn: "Documentation of an intervention supporting irrigation and agricultural livelihoods.",
    category: "livelihoods",
    imagePath: "/assets/achievements/achievement-09.jpg",
    year: "2024",
    project: "Agriculture & Irrigation"
  },
  {
    id: "achievement-10",
    titleAr: "تشغيل محطة مياه ميدانية",
    titleEn: "Field Water Station Operation",
    descriptionAr: "متابعة تشغيل موقع مياه وتجهيزات ضخ ضمن أعمال فنية ميدانية.",
    descriptionEn: "Follow-up of a water site and pumping equipment during field technical works.",
    category: "wash",
    imagePath: "/assets/achievements/achievement-10.jpg",
    year: "2024",
    project: "WASH"
  },
  {
    id: "achievement-11",
    titleAr: "منظومة ضخ شمسية متكاملة",
    titleEn: "Integrated Solar Pumping System",
    descriptionAr: "توثيق منظومة ضخ بالطاقة الشمسية ضمن مشاريع المياه المستدامة.",
    descriptionEn: "Documentation of a solar pumping system within sustainable water projects.",
    category: "solar",
    imagePath: "/assets/achievements/achievement-11.jpg",
    year: "2024",
    project: "Solar Pumping"
  }
];
