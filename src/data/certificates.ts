import type { Certificate, CertificateCategory, LocalizedString } from "@/types";

export const certificateCategoryLabels: Record<CertificateCategory | "all", LocalizedString> = {
  all: { ar: "الكل", en: "All" },
  experience: { ar: "خبرة عملية", en: "Professional Experience" },
  academic: { ar: "أكاديمي", en: "Academic" },
  "project-management": { ar: "إدارة مشاريع", en: "Project Management" },
  "wash-energy": { ar: "WASH والطاقة", en: "WASH & Energy" },
  reports: { ar: "تقارير", en: "Reporting" },
  "safety-security": { ar: "سلامة وأمن", en: "Safety & Security" },
  "finance-tools": { ar: "مالية وأدوات", en: "Finance & Tools" }
};

export const certificates: Certificate[] = [
  {
    id: "experience-islamic-relief-2024",
    title: { ar: "شهادة خبرة", en: "Certificate of Experience" },
    issuer: { ar: "الإغاثة الإسلامية — اليمن", en: "Islamic Relief Yemen" },
    year: "2024",
    category: "experience",
    imagePath: "/assets/certificates/cert-experience-islamic-relief-2024-placeholder.svg",
    pdfPath: "/assets/certificates/certificate-experience-islamic-relief-2024.pdf",
    featured: true,
    sensitive: false
  },
  {
    id: "civil-engineering-dhamar-2003",
    title: { ar: "بكالوريوس هندسة مدنية", en: "Bachelor of Civil Engineering" },
    issuer: { ar: "جامعة ذمار", en: "Dhamar University" },
    year: "2003",
    category: "academic",
    imagePath: "/assets/certificates/cert-civil-engineering-dhamar-2003-placeholder.svg",
    pdfPath: "/assets/certificates/bachelor-civil-engineering-dhamar-2003.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "valuelinks-2023",
    title: { ar: "تدريب ValueLinks", en: "ValueLinks Training" },
    issuer: { ar: "برنامج بناء القدرات", en: "Capacity Building Program" },
    year: "2023",
    category: "project-management",
    imagePath: "/assets/certificates/cert-valuelinks-2023-placeholder.svg",
    pdfPath: "/assets/certificates/valuelinks-training-2023.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "solar-pumping-2022",
    title: { ar: "أنظمة الضخ بالطاقة الشمسية", en: "Solar Pumping Systems" },
    issuer: { ar: "تدريب تقني متخصص", en: "Specialized Technical Training" },
    year: "2022",
    category: "wash-energy",
    imagePath: "/assets/certificates/cert-solar-pumping-2022-placeholder.svg",
    pdfPath: "/assets/certificates/solar-pumping-systems-2022.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "pmd-pro-1-2021",
    title: { ar: "PMD Pro 1", en: "PMD Pro 1" },
    issuer: { ar: "إدارة المشاريع التنموية", en: "Development Project Management" },
    year: "2021",
    category: "project-management",
    imagePath: "/assets/certificates/cert-pmd-pro-1-2021-placeholder.svg",
    pdfPath: "/assets/certificates/pmd-pro-project-management-2021.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "proposal-report-writing-2021",
    title: { ar: "كتابة المقترحات والتقارير", en: "Proposal & Report Writing" },
    issuer: { ar: "تدريب مهني", en: "Professional Training" },
    year: "2021",
    category: "reports",
    imagePath: "/assets/certificates/cert-proposal-report-writing-2021-placeholder.svg",
    pdfPath: "/assets/certificates/proposal-report-writing-2021.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "microsoft-project-2024",
    title: { ar: "Microsoft Project", en: "Microsoft Project" },
    issuer: { ar: "تدريب أدوات التخطيط", en: "Planning Tools Training" },
    year: "2024",
    category: "finance-tools",
    imagePath: "/assets/certificates/cert-microsoft-project-2024-placeholder.svg",
    pdfPath: "/assets/certificates/microsoft-project-2024.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "financial-management-2017",
    title: { ar: "مقدمة في الإدارة المالية", en: "Financial Management Intro" },
    issuer: { ar: "تدريب مالي", en: "Financial Training" },
    year: "2017",
    category: "finance-tools",
    imagePath: "/assets/certificates/cert-financial-management-2017-placeholder.svg",
    pdfPath: "/assets/certificates/financial-management-2017.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "security-focal-point-2015",
    title: { ar: "مسؤول نقطة أمنية", en: "Security Focal Point" },
    issuer: { ar: "تدريب السلامة والأمن", en: "Safety and Security Training" },
    year: "2015",
    category: "safety-security",
    imagePath: "/assets/certificates/cert-security-focal-point-2015-placeholder.svg",
    pdfPath: "/assets/certificates/security-focal-point-2015.pdf",
    featured: false,
    sensitive: false
  },
  {
    id: "first-aid-red-crescent-2016",
    title: { ar: "الإسعافات الأولية", en: "First Aid" },
    issuer: { ar: "الهلال الأحمر", en: "Red Crescent" },
    year: "2016",
    category: "safety-security",
    imagePath: "/assets/certificates/cert-first-aid-red-crescent-2016-placeholder.svg",
    pdfPath: "/assets/certificates/first-aid-red-crescent-2016.pdf",
    featured: false,
    sensitive: false
  }
];
