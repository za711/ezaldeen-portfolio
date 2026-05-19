import type { Article, ArticleCategory, LocalizedString } from "@/types";

export const articleCategoryLabels: Record<ArticleCategory | "all", LocalizedString> = {
  all: { ar: "الكل", en: "All" },
  wash: { ar: "مشاريع WASH", en: "WASH Projects" },
  "project-management": { ar: "إدارة المشاريع", en: "Project Management" },
  solar: { ar: "الطاقة الشمسية", en: "Solar Energy" },
  reporting: { ar: "التقارير", en: "Reporting" },
  livelihoods: { ar: "سبل العيش", en: "Livelihoods" },
  "field-leadership": { ar: "قيادة ميدانية", en: "Field Leadership" },
  infrastructure: { ar: "البنية التحتية", en: "Infrastructure" },
  impact: { ar: "الأثر", en: "Impact" }
};

export const articles: Article[] = [
  {
    slug: "successful-water-projects-humanitarian-contexts",
    title: { ar: "كيف تنجح مشاريع المياه في البيئات الإنسانية؟", en: "How Do Water Projects Succeed in Humanitarian Contexts?" },
    excerpt: {
      ar: "نجاح مشروع المياه لا يبدأ بالمضخة ولا ينتهي بالتسليم، بل يعتمد على فهم المجتمع، اختيار التقنية المناسبة، وخطة تشغيل واضحة.",
      en: "A successful water project does not start with the pump or end at handover; it depends on community understanding, appropriate technology, and a clear operation plan."
    },
    category: "wash",
    readTime: 8,
    date: "2026-02-12",
    featured: true,
    tags: ["WASH", "Water", "Solar", "Community"],
    content: [
      { type: "paragraph", text: { ar: "في البيئات الإنسانية، يصبح الماء أكثر من خدمة أساسية؛ إنه نقطة استقرار وكرامة وصحة عامة. لذلك يحتاج مشروع المياه إلى إدارة دقيقة تجمع بين الهندسة، التنسيق المجتمعي، والاستدامة التشغيلية.", en: "In humanitarian contexts, water becomes more than a basic service; it is a point of stability, dignity, and public health. A water project therefore needs precise management that brings engineering, community coordination, and operational sustainability together." } },
      { type: "heading", level: 2, text: { ar: "ابدأ من الاحتياج الحقيقي", en: "Start with the real need" } },
      { type: "paragraph", text: { ar: "المسوحات الفنية والاجتماعية تكشف الفجوة الحقيقية بين ما يريده المجتمع وما يمكن تشغيله والمحافظة عليه. القياس الجيد يشمل كمية المياه، جودة المصدر، المسافة، قدرة المجتمع على الإدارة، ومخاطر النزاع حول المورد.", en: "Technical and social assessments reveal the real gap between what the community wants and what can be operated and maintained. Good measurement covers quantity, source quality, distance, community management capacity, and conflict risks around the resource." } },
      { type: "insight", text: { ar: "المشروع الأقوى هو الذي يستطيع المجتمع شرحه والدفاع عنه وتشغيله بعد خروج فريق التنفيذ.", en: "The strongest project is one the community can explain, defend, and operate after the implementation team leaves." } },
      { type: "heading", level: 2, text: { ar: "اختر التقنية حسب التشغيل لا حسب اللمعان", en: "Choose technology by operation, not by shine" } },
      { type: "paragraph", text: { ar: "أنظمة الطاقة الشمسية خيار ممتاز في مناطق الوقود فيها مكلف أو غير مستقر، لكنها تحتاج تصميمًا دقيقًا وقدرة على الصيانة. النجاح يعتمد على مطابقة المضخة واللوحات والخزان مع الطلب اليومي وموسمية المصدر.", en: "Solar systems are excellent where fuel is expensive or unstable, but they need careful design and maintenance capacity. Success depends on matching the pump, panels, and tank with daily demand and source seasonality." } },
      { type: "list", items: { ar: ["تأكد من جودة المصدر قبل التصميم.", "اختبر قبول المجتمع لنظام الإدارة والتعرفة.", "اربط التدريب بالتشغيل اليومي وليس بالمحاضرات فقط.", "وثق كل قرار فني بصورة وقياس وتوقيع."], en: ["Verify source quality before design.", "Test community acceptance of management and tariff systems.", "Connect training to daily operation, not lectures alone.", "Document every technical decision with photos, measurements, and signatures."] } },
      { type: "heading", level: 2, text: { ar: "خطة تشغيل وصيانة منذ اليوم الأول", en: "Operation and maintenance from day one" } },
      { type: "paragraph", text: { ar: "كثير من المشاريع تفشل بعد التسليم لأن التشغيل لم يكن جزءًا من التصميم. يجب تحديد من يدفع، من يصلح، من يراقب، وكيف يتم التصعيد عند العطل.", en: "Many projects fail after handover because operation was not part of the design. Define who pays, who repairs, who monitors, and how breakdowns are escalated." } },
      { type: "heading", level: 2, text: { ar: "التقارير ليست إجراءً إداريًا فقط", en: "Reporting is not just administration" } },
      { type: "paragraph", text: { ar: "تقرير المياه الجيد يربط النشاط بالأثر: ساعات ضخ أعلى، مسافة أقل، جودة أفضل، وحوكمة أوضح. هذه المؤشرات تجعل المانح يرى المشروع كما يراه الناس في الميدان.", en: "A good water report connects activity to impact: more pumping hours, shorter distance, better quality, and clearer governance. These indicators help the donor see the project as people experience it in the field." } }
    ]
  },
  {
    slug: "leading-field-teams-development-projects",
    title: { ar: "إدارة فرق ميدانية في المشاريع التنموية: دروس من الواقع", en: "Managing Field Teams in Development Projects: Field Lessons" },
    excerpt: {
      ar: "الفرق الميدانية تحتاج وضوحًا يوميًا، صلاحيات محددة، ونظام متابعة يحمي الجودة دون أن يخنق المبادرة.",
      en: "Field teams need daily clarity, defined authority, and a follow-up system that protects quality without suffocating initiative."
    },
    category: "field-leadership",
    readTime: 7,
    date: "2026-01-24",
    featured: false,
    tags: ["Leadership", "Teams", "Field"],
    content: [
      { type: "paragraph", text: { ar: "الفريق الميداني هو المكان الذي تتحول فيه الخطة إلى أثر. لذلك لا تكفي التعليمات العامة؛ يحتاج الفريق إلى نظام عمل يوضح الأولويات والمسؤوليات ومتى يجب طلب الدعم.", en: "The field team is where plans become impact. General instructions are not enough; the team needs a working system that clarifies priorities, responsibilities, and when support should be requested." } },
      { type: "heading", level: 2, text: { ar: "الوضوح اليومي يقلل الأخطاء", en: "Daily clarity reduces errors" } },
      { type: "paragraph", text: { ar: "اجتماع قصير في بداية اليوم يحدد مواقع العمل، المخاطر، المسؤوليات، والمخرجات المتوقعة. هذه الدقائق توفر ساعات من التصحيح لاحقًا.", en: "A short meeting at the start of the day defines work locations, risks, responsibilities, and expected outputs. These minutes save hours of correction later." } },
      { type: "insight", text: { ar: "أفضل قائد ميداني لا يعرف كل التفاصيل وحده؛ بل يبني نظامًا يجعل التفاصيل تظهر في الوقت المناسب.", en: "The best field leader does not personally know every detail; he builds a system where details surface at the right time." } },
      { type: "heading", level: 2, text: { ar: "امنح الصلاحية بقدر المسؤولية", en: "Match authority with responsibility" } },
      { type: "paragraph", text: { ar: "عندما يتحمل المشرف الميداني نتيجة الجودة، يجب أن يملك حق إيقاف عمل غير مطابق أو طلب فحص إضافي. المسؤولية دون صلاحية تولد الإحباط.", en: "When a field supervisor is accountable for quality, they must have the authority to stop non-compliant work or request additional inspection. Responsibility without authority creates frustration." } },
      { type: "list", items: { ar: ["حدد مسار التصعيد.", "وثق القرارات الحاسمة.", "راجع الجودة ميدانيًا لا مكتبيًا فقط.", "احتفل بالالتزام قبل النتائج الكبيرة."], en: ["Define the escalation path.", "Document critical decisions.", "Review quality in the field, not only at the desk.", "Recognize discipline before major outcomes."] } },
      { type: "heading", level: 2, text: { ar: "التعلم السريع يحمي المشروع", en: "Fast learning protects the project" } },
      { type: "paragraph", text: { ar: "في المشاريع التنموية، التغيير طبيعي. الفريق القوي يحول الملاحظات اليومية إلى تعديل في الخطة بدل انتظار نهاية الشهر.", en: "In development projects, change is normal. A strong team turns daily observations into plan adjustments instead of waiting until month-end." } }
    ]
  },
  {
    slug: "solar-energy-sustainable-water-projects",
    title: { ar: "دور الطاقة الشمسية في استدامة مشاريع المياه", en: "The Role of Solar Energy in Sustainable Water Projects" },
    excerpt: {
      ar: "الطاقة الشمسية لا تعني تركيب ألواح فقط؛ إنها قرار تشغيلي يرتبط بالتصميم والصيانة والملكية المحلية.",
      en: "Solar energy is not just installing panels; it is an operational decision connected to design, maintenance, and local ownership."
    },
    category: "solar",
    readTime: 6,
    date: "2025-12-09",
    featured: false,
    tags: ["Solar", "WASH", "Sustainability"],
    content: [
      { type: "paragraph", text: { ar: "ارتفاع كلفة الوقود وصعوبة الوصول إليه جعلا الطاقة الشمسية خيارًا مهمًا لمشاريع المياه. لكنها تنجح فقط عندما يتم التعامل معها كنظام كامل لا كقطعة معدات.", en: "High fuel cost and limited access have made solar energy an important option for water projects. It succeeds only when treated as a full system, not as a piece of equipment." } },
      { type: "heading", level: 2, text: { ar: "التصميم يبدأ من الطلب اليومي", en: "Design starts with daily demand" } },
      { type: "paragraph", text: { ar: "يجب تحديد الاستهلاك اليومي، ساعات الذروة، حجم التخزين، وموسمية المصدر قبل اختيار المضخة واللوحات. أي مبالغة أو تقليل في التصميم سيظهر سريعًا في التشغيل.", en: "Daily consumption, peak hours, storage size, and source seasonality must be defined before selecting the pump and panels. Any over-design or under-design will quickly appear in operation." } },
      { type: "insight", text: { ar: "السؤال الصحيح ليس: كم لوحًا نحتاج؟ بل: كيف سيعمل النظام بأمان في أسوأ شهر؟", en: "The right question is not: how many panels do we need? It is: how will the system operate safely in the worst month?" } },
      { type: "heading", level: 2, text: { ar: "الصيانة جزء من الاستدامة المالية", en: "Maintenance is part of financial sustainability" } },
      { type: "paragraph", text: { ar: "تنظيف الألواح، حماية الكابلات، مراقبة الفولتية، وتوفير قطع غيار أساسية أمور يجب أن تظهر في ميزانية التشغيل المحلية.", en: "Panel cleaning, cable protection, voltage monitoring, and basic spare parts must appear in the local operating budget." } },
      { type: "list", items: { ar: ["درّب مشغلين محليين لا شخصًا واحدًا فقط.", "اجعل لوحة التحكم مفهومة ومحمية.", "اربط الصيانة بسجل بسيط قابل للمراجعة.", "اختبر النظام قبل التسليم في ظروف تشغيل واقعية."], en: ["Train multiple local operators, not only one person.", "Make the control panel understandable and protected.", "Connect maintenance to a simple reviewable log.", "Test the system before handover under realistic operating conditions."] } }
    ]
  },
  {
    slug: "writing-persuasive-donor-reports",
    title: { ar: "كيف تكتب تقريرًا مقنعًا للمانحين؟", en: "How to Write a Persuasive Donor Report" },
    excerpt: {
      ar: "التقرير المقنع يوازن بين الأرقام والقصة، ويثبت أن الموارد تحولت إلى خدمة ونتيجة وأثر قابل للتحقق.",
      en: "A persuasive report balances numbers and story, proving that resources became services, results, and verifiable impact."
    },
    category: "reporting",
    readTime: 7,
    date: "2025-11-16",
    featured: false,
    tags: ["Reporting", "Donors", "Evidence"],
    content: [
      { type: "paragraph", text: { ar: "التقرير ليس نهاية المشروع؛ إنه الجسر بين ما حدث في الميدان وما يحتاج المانح والإدارة إلى فهمه. كل فقرة يجب أن تجيب: ماذا أنجزنا؟ كيف نعرف؟ ماذا تغير؟", en: "A report is not the end of a project; it is the bridge between what happened in the field and what donors and management need to understand. Every paragraph should answer: what did we achieve, how do we know, and what changed?" } },
      { type: "heading", level: 2, text: { ar: "ابدأ بالنتيجة قبل النشاط", en: "Start with the result before the activity" } },
      { type: "paragraph", text: { ar: "بدل القول إن الفريق نفذ تدريبًا، اشرح من تدرب، على ماذا، وكيف سيؤثر ذلك في تشغيل المشروع. النشاط مهم، لكن المانح يريد رؤية النتيجة.", en: "Instead of only saying the team conducted training, explain who was trained, on what, and how that affects project operation. Activities matter, but donors need to see results." } },
      { type: "insight", text: { ar: "الرقم دون سياق بارد، والقصة دون دليل ضعيفة. التقرير القوي يجمع الاثنين.", en: "A number without context is cold, and a story without evidence is weak. A strong report brings both together." } },
      { type: "heading", level: 2, text: { ar: "استخدم أدلة قابلة للتحقق", en: "Use verifiable evidence" } },
      { type: "list", items: { ar: ["صور قبل وبعد بمواقع واضحة.", "قوائم حضور وتوقيعات.", "محاضر استلام.", "قياسات فنية مختصرة.", "اقتباسات مجتمعية مرتبطة بالمؤشر."], en: ["Before and after photos with clear locations.", "Attendance lists and signatures.", "Handover minutes.", "Brief technical measurements.", "Community quotes linked to indicators."] } },
      { type: "heading", level: 2, text: { ar: "لا تخف من ذكر التحديات", en: "Do not hide challenges" } },
      { type: "paragraph", text: { ar: "ذكر التحديات بطريقة مهنية يزيد الثقة، خصوصًا عندما يتبعها تحليل وإجراء تصحيحي. التقرير المثالي ليس الذي يخلو من المشاكل، بل الذي يثبت أن الفريق يديرها.", en: "Professionally reporting challenges builds trust, especially when followed by analysis and corrective action. The ideal report is not problem-free; it proves the team manages problems." } }
    ]
  },
  {
    slug: "cash-for-work-impact-improvement",
    title: { ar: "تحديات Cash for Work وكيفية تحسين أثرها", en: "Cash for Work Challenges and How to Improve Impact" },
    excerpt: {
      ar: "برامج النقد مقابل العمل تنجح عندما تجمع بين دخل عادل، اختيار شفاف، وأصل مجتمعي يبقى نافعًا بعد انتهاء النشاط.",
      en: "Cash for Work succeeds when it combines fair income, transparent selection, and a community asset that remains useful after the activity."
    },
    category: "livelihoods",
    readTime: 6,
    date: "2025-10-08",
    featured: false,
    tags: ["CFW", "Livelihoods", "Accountability"],
    content: [
      { type: "paragraph", text: { ar: "النقد مقابل العمل أداة حساسة لأنها تمس الدخل والكرامة والعدالة المحلية. تحسين أثرها يبدأ من تصميم شفاف ومخرجات قابلة للقياس.", en: "Cash for Work is a sensitive tool because it touches income, dignity, and local fairness. Improving impact starts with transparent design and measurable outputs." } },
      { type: "heading", level: 2, text: { ar: "الاختيار العادل هو أساس القبول", en: "Fair selection is the foundation of acceptance" } },
      { type: "paragraph", text: { ar: "يجب إعلان معايير الاختيار، إشراك اللجان المجتمعية، وتوفير آلية شكاوى واضحة. أي غموض في الاختيار يتحول بسرعة إلى نزاع.", en: "Selection criteria should be announced, community committees involved, and a clear complaints mechanism provided. Any ambiguity in selection quickly becomes conflict." } },
      { type: "insight", text: { ar: "الأجر المؤقت مهم، لكن الأصل العام الذي يبقى بعد النشاط هو ما يضاعف الأثر.", en: "Temporary wages matter, but the public asset that remains after the activity multiplies impact." } },
      { type: "heading", level: 2, text: { ar: "اربط العمل بأولوية مجتمعية", en: "Connect work to a community priority" } },
      { type: "list", items: { ar: ["تحسين طريق يخدم الوصول للخدمات.", "تنظيف قناة ري ترفع الإنتاج.", "تأهيل خزان يقلل زمن جلب المياه.", "صيانة مدرسة أو مرفق صحي يخدم فئات واسعة."], en: ["Improve a road that supports service access.", "Clean an irrigation channel that increases production.", "Rehabilitate a tank that reduces water collection time.", "Maintain a school or health facility serving broad groups."] } },
      { type: "heading", level: 2, text: { ar: "المتابعة اليومية تحمي الجودة", en: "Daily monitoring protects quality" } },
      { type: "paragraph", text: { ar: "تحتاج برامج CFW إلى قياس حضور، إنجاز، سلامة، وشكاوى بشكل يومي. عندها يصبح الدفع مرتبطًا بعمل حقيقي ومخرجات واضحة.", en: "CFW programs require daily tracking of attendance, output, safety, and complaints. Payment then becomes connected to real work and clear outputs." } }
    ]
  }
];
