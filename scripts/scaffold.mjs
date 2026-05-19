import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(path.join(root, filePath)), { recursive: true });
}

function write(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(path.join(root, filePath), content.replace(/\n$/, "") + "\n", "utf8");
}

function writeBinary(filePath, base64) {
  ensureDir(filePath);
  fs.writeFileSync(path.join(root, filePath), Buffer.from(base64, "base64"));
}

write("package.json", String.raw`{
  "name": "ezaldeen-albadai-professional-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.6.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.0",
    "autoprefixer": "^10.4.0",
    "clsx": "^2.1.1",
    "framer-motion": "^11.2.0",
    "lucide-react": "^0.400.0",
    "next": "^14.2.0",
    "next-intl": "^3.15.0",
    "next-themes": "^0.3.0",
    "postcss": "^8.4.0",
    "react": "^18.3.0",
    "react-countup": "^6.5.0",
    "react-dom": "^18.3.0",
    "react-hook-form": "^7.51.0",
    "react-intersection-observer": "^9.10.0",
    "sharp": "^0.33.0",
    "tailwind-merge": "^2.3.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.4.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.3.0"
  }
}`);

write("next.config.mjs", String.raw`/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;`);

write("tailwind.config.ts", String.raw`import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F2742",
        secondary: "#2563EB",
        accent: "#D6A84F",
        "accent-alt": "#1B4F8A",
        bg: "#F7F8FA",
        surface: "#FFFFFF",
        text: "#111827",
        muted: "#6B7280",
        border: "#E5E7EB",
        success: "#059669"
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-arabic)", "var(--font-cairo)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        card: "0 4px 24px rgba(15,39,66,0.08)",
        hover: "0 12px 40px rgba(15,39,66,0.16)",
        button: "0 4px 16px rgba(37,99,235,0.30)"
      },
      borderRadius: {
        card: "20px",
        input: "12px"
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0F2742 0%, #1B4F8A 100%)",
        "blue-gradient": "linear-gradient(135deg, #2563EB 0%, #1B4F8A 100%)",
        "gold-gradient": "linear-gradient(135deg, #D6A84F 0%, #B8891A 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(214,168,79,0)" },
          "50%": { boxShadow: "0 0 24px rgba(214,168,79,0.35)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-gold": "pulseGold 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;`);

write("tsconfig.json", String.raw`{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "out", "client-preview"]
}`);

write("postcss.config.js", String.raw`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};`);

write(".env.local", String.raw`NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=ar`);

write(".env.example", String.raw`NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_DEFAULT_LOCALE=ar`);

write(".eslintrc.json", String.raw`{
  "extends": ["next/core-web-vitals"]
}`);

write(".prettierrc", String.raw`{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "none",
  "printWidth": 100
}`);

write(".gitignore", String.raw`node_modules
.next
out
client-preview
Ezaldeen-Portfolio-Preview.zip
.env*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store`);

write("README.md", String.raw`# Ezaldeen Albadai Professional Portfolio

A production-ready bilingual professional portfolio for Eng. Ezaldeen Nasser Saad Albadai, built with Next.js 14, TypeScript strict mode, Tailwind CSS, next-intl, and Framer Motion.

## Commands

- npm run dev starts the development server.
- npm run build creates the static export in out/.
- npm run lint runs Next.js linting.
- npm run typecheck runs TypeScript without emitting files.

## Offline Preview

After npm run build, the packaged preview is created under client-preview/ and compressed as Ezaldeen-Portfolio-Preview.zip.

The website uses only local generated SVG/CSS assets and contains no external image URLs.`);

write("messages/ar.json", String.raw`{
  "nav": {
    "home": "الرئيسية",
    "about": "من أنا",
    "experience": "الخبرات",
    "impact": "المشاريع",
    "services": "الخدمات",
    "certificates": "الشهادات",
    "cv": "السيرة",
    "blog": "المقالات",
    "contact": "تواصل"
  },
  "actions": {
    "downloadCv": "تحميل السيرة",
    "downloadCvLong": "تحميل السيرة الذاتية",
    "viewCertificates": "عرض الشهادات",
    "contactMe": "تواصل معي",
    "readMore": "اقرأ المزيد",
    "viewAll": "عرض الكل",
    "send": "إرسال الرسالة",
    "subscribe": "اشترك",
    "print": "طباعة",
    "backHome": "العودة للرئيسية"
  },
  "common": {
    "yearsExperience": "سنة خبرة",
    "internationalDonors": "جهات مانحة دولية",
    "responseTime": "خلال 24 ساعة",
    "built": "Built with precision and purpose",
    "all": "الكل",
    "readTime": "دقيقة قراءة",
    "featured": "مميز"
  },
  "home": {
    "badge": "15+ سنة خبرة ميدانية",
    "headline": "هندسة المشاريع الإنسانية والتنموية بخبرة ميدانية تقود إلى أثر حقيقي",
    "intro": "مهندس مدني ومنسق مشاريع أول بخبرة تتجاوز 15 عامًا في إدارة وتنفيذ مشاريع المياه، الإصحاح البيئي، سبل العيش، البنية التحتية، والتقارير الموجهة للمانحين.",
    "workedWith": "عمل مع: Islamic Relief | SFD | WFP | SIDA | IR-Canada",
    "aboutTitle": "خبرة هندسية تصنع أثرًا إنسانيًا مستدامًا",
    "aboutText": "يجمع عزالدين البداي بين المعرفة الهندسية الصلبة وفهم عميق لواقع المجتمعات المحلية، ليقود مشاريع تنموية وإنسانية من التخطيط وحتى التقارير النهائية بثقة ودقة.",
    "expertiseTitle": "مجالات الخبرة",
    "impactTitle": "أرقام أثر موثقة",
    "articlesTitle": "أحدث المقالات",
    "ctaTitle": "هل تبحث عن خبير لإدارة مشاريعك الإنسانية؟"
  },
  "forms": {
    "fullName": "الاسم الكامل",
    "organization": "الجهة / المنظمة",
    "email": "البريد الإلكتروني",
    "phone": "رقم الهاتف",
    "requestType": "نوع الطلب",
    "message": "الرسالة",
    "success": "تم الإرسال بنجاح. شكرًا لتواصلك.",
    "error": "تعذر إرسال الرسالة الآن. يرجى المحاولة مرة أخرى.",
    "newsletterSuccess": "تم الاشتراك بنجاح.",
    "consultation": "استشارة",
    "training": "تدريب",
    "project": "مشروع",
    "employment": "توظيف",
    "other": "أخرى"
  },
  "footer": {
    "links": "روابط الموقع",
    "services": "الخدمات",
    "contact": "تواصل",
    "rights": "جميع الحقوق محفوظة"
  }
}`);

write("messages/en.json", String.raw`{
  "nav": {
    "home": "Home",
    "about": "About",
    "experience": "Experience",
    "impact": "Impact",
    "services": "Services",
    "certificates": "Certificates",
    "cv": "CV",
    "blog": "Blog",
    "contact": "Contact"
  },
  "actions": {
    "downloadCv": "Download CV",
    "downloadCvLong": "Download Full CV",
    "viewCertificates": "View Certificates",
    "contactMe": "Contact Me",
    "readMore": "Read More",
    "viewAll": "View All",
    "send": "Send Message",
    "subscribe": "Subscribe",
    "print": "Print",
    "backHome": "Back Home"
  },
  "common": {
    "yearsExperience": "Years Experience",
    "internationalDonors": "International Donors",
    "responseTime": "Within 24 hours",
    "built": "Built with precision and purpose",
    "all": "All",
    "readTime": "min read",
    "featured": "Featured"
  },
  "home": {
    "badge": "15+ years of field experience",
    "headline": "Engineering humanitarian and development projects with field experience that creates real impact",
    "intro": "Civil engineer and senior project coordinator with more than 15 years of experience managing and delivering WASH, livelihoods, infrastructure, and donor reporting portfolios.",
    "workedWith": "Worked with: Islamic Relief | SFD | WFP | SIDA | IR-Canada",
    "aboutTitle": "Engineering expertise that creates sustainable humanitarian impact",
    "aboutText": "Ezaldeen Albadai combines rigorous engineering knowledge with a deep understanding of local communities, leading development and humanitarian projects from planning through final reporting with clarity and discipline.",
    "expertiseTitle": "Expertise Areas",
    "impactTitle": "Verified Impact Numbers",
    "articlesTitle": "Latest Articles",
    "ctaTitle": "Looking for an expert to manage humanitarian projects?"
  },
  "forms": {
    "fullName": "Full Name",
    "organization": "Organization",
    "email": "Email",
    "phone": "Phone",
    "requestType": "Request Type",
    "message": "Message",
    "success": "Message sent successfully. Thank you for reaching out.",
    "error": "The message could not be sent right now. Please try again.",
    "newsletterSuccess": "Subscription completed successfully.",
    "consultation": "Consultation",
    "training": "Training",
    "project": "Project",
    "employment": "Employment",
    "other": "Other"
  },
  "footer": {
    "links": "Site Links",
    "services": "Services",
    "contact": "Contact",
    "rights": "All rights reserved"
  }
}`);

write("src/types/index.ts", String.raw`export type Locale = "ar" | "en";

export type Direction = "rtl" | "ltr";

export type LocalizedString = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export interface Profile {
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  tagline: string;
  location: LocalizedString;
  email: string;
  phone: string;
  whatsapp: string;
  cvPath: string;
  yearsOfExperience: number;
  summary: LocalizedString;
}

export interface NavItem {
  id: string;
  href: string;
  label: LocalizedString;
}

export interface ExperienceEntry {
  id: string;
  role: LocalizedString;
  org: LocalizedString;
  period: LocalizedString;
  budget?: string;
  budgetAmount?: number;
  donor?: string;
  bullets: LocalizedList;
  colorCode: string;
}

export type CertificateCategory =
  | "experience"
  | "academic"
  | "project-management"
  | "wash-energy"
  | "reports"
  | "safety-security"
  | "finance-tools";

export interface Certificate {
  id: string;
  title: LocalizedString;
  issuer: LocalizedString;
  year: string;
  category: CertificateCategory;
  imagePath: string;
  featured: boolean;
  sensitive: false;
}

export interface Service {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  outcomes: LocalizedList;
}

export interface ExpertiseArea {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ImpactStat {
  id: string;
  label: LocalizedString;
  value: number;
  suffix: LocalizedString;
  icon: string;
  description: LocalizedString;
}

export type ArticleCategory = "wash" | "project-management" | "solar" | "reporting" | "livelihoods" | "field-leadership" | "infrastructure" | "impact";

export type ArticleBlock =
  | { type: "heading"; level: 2 | 3; text: LocalizedString }
  | { type: "paragraph"; text: LocalizedString }
  | { type: "insight"; text: LocalizedString }
  | { type: "list"; items: LocalizedList };

export interface Article {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  category: ArticleCategory;
  readTime: number;
  date: string;
  content: ArticleBlock[];
  featured: boolean;
  tags: string[];
}

export interface SelectOption {
  value: string;
  label: LocalizedString;
}`);

write("src/data/profile.ts", String.raw`import type { Profile } from "@/types";

export const profile: Profile = {
  nameAr: "عزالدين ناصر سعد البداي",
  nameEn: "Eng. Ezaldeen Nasser Saad Albadai",
  titleAr: "مهندس مدني ومنسق مشاريع أول",
  titleEn: "Senior Project Coordinator | Civil Engineer",
  tagline: "Engineering Humanitarian Impact",
  location: { ar: "اليمن — الحديدة", en: "Yemen - Al Hodeida" },
  email: "albadai.ezz2003@gmail.com",
  phone: "+967775196019",
  whatsapp: "+967775196019",
  cvPath: "/downloads/Ezaldeen-Albadai-CV.pdf",
  yearsOfExperience: 15,
  summary: {
    ar: "مهندس مدني ومنسق مشاريع أول بخبرة ميدانية تتجاوز خمسة عشر عامًا في تصميم وتنسيق وتنفيذ مشاريع المياه والإصحاح البيئي وسبل العيش والبنية التحتية ضمن بيئات إنسانية معقدة. يمتلك خبرة قوية في قيادة الفرق، التنسيق مع السلطات والمجتمعات، إدارة الميزانيات، إعداد الدراسات والكميات، وتقديم تقارير دقيقة للمانحين.",
    en: "Civil Engineer and Senior Project Coordinator with more than fifteen years of field experience designing, coordinating, and delivering WASH, livelihoods, and infrastructure projects in complex humanitarian environments. Strong record in team leadership, community and authority coordination, budget stewardship, engineering studies, quantities, and donor-ready reporting."
  }
};`);

write("src/data/navigation.ts", String.raw`import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { id: "home", href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { id: "about", href: "/about", label: { ar: "من أنا", en: "About" } },
  { id: "experience", href: "/experience", label: { ar: "الخبرات", en: "Experience" } },
  { id: "impact", href: "/impact", label: { ar: "المشاريع", en: "Impact" } },
  { id: "services", href: "/services", label: { ar: "الخدمات", en: "Services" } },
  { id: "certificates", href: "/certificates", label: { ar: "الشهادات", en: "Certificates" } },
  { id: "cv", href: "/cv", label: { ar: "السيرة", en: "CV" } },
  { id: "contact", href: "/contact", label: { ar: "تواصل", en: "Contact" } }
];`);

write("src/data/experience.ts", String.raw`import type { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "ignite-project",
    role: { ar: "منسق مشروع — IGNITE", en: "Project Coordinator — IGNITE Project" },
    org: { ar: "الإغاثة الإسلامية — اليمن", en: "Islamic Relief Yemen" },
    period: { ar: "يوليو 2023 — حتى الآن", en: "Jul 2023 — Present" },
    budget: "$3,000,000",
    budgetAmount: 3000000,
    donor: "IR Canada",
    colorCode: "#2563EB",
    bullets: {
      ar: [
        "تنسيق الأنشطة مع السلطات والمجتمعات المحلية لضمان قبول مجتمعي وتنفيذ منظم.",
        "إدارة مشاريع مياه تشمل أنظمة طاقة شمسية، شبكات مياه، وخزانات تشغيلية.",
        "الإشراف على فرق هندسية واستشارية وفرق سبل العيش في الميدان.",
        "إدارة مشاريع صغيرة في الثروة الحيوانية والزراعة والنحل وريادة الأعمال.",
        "إعداد التقارير السردية والتقدمية للمانحين والإدارة العليا."
      ],
      en: [
        "Coordinate activities with authorities and local communities to secure acceptance and orderly delivery.",
        "Manage water projects covering solar pumping systems, water networks, and operational tanks.",
        "Supervise engineering, consulting, and livelihoods field teams.",
        "Lead micro-project portfolios in livestock, agriculture, beekeeping, and entrepreneurship.",
        "Prepare narrative and progress reports for donors and senior management."
      ]
    }
  },
  {
    id: "sida-project",
    role: { ar: "منسق مشروع — SIDA", en: "Project Coordinator — SIDA Project" },
    org: { ar: "الإغاثة الإسلامية — اليمن", en: "Islamic Relief Yemen" },
    period: { ar: "نوفمبر 2017 — يونيو 2023", en: "Nov 2017 — Jun 2023" },
    budget: "$7,000,000",
    budgetAmount: 7000000,
    donor: "SIDA",
    colorCode: "#D6A84F",
    bullets: {
      ar: [
        "الإشراف على تأهيل 49 مشروع مياه بأنظمة ضخ تعمل بالطاقة الشمسية.",
        "إدارة فريق يضم مهندسين واستشاريين ومساعدين ميدانيين عبر مواقع متعددة.",
        "الإشراف على مشاريع صحية ومدارس وطرق وخزانات وآبار وقنوات ري.",
        "إدارة 750 مشروعًا صغيرًا وتدريب المستفيدين على التشغيل والاستدامة.",
        "إعداد تقارير شاملة للمانحين والإدارة مع توثيق فني ومالي واضح."
      ],
      en: [
        "Supervised rehabilitation of 49 water projects with solar-powered pumping systems.",
        "Managed engineers, consultants, and field assistants across multiple intervention sites.",
        "Oversaw health facilities, schools, roads, tanks, wells, and irrigation channels.",
        "Managed 750 micro-projects and trained beneficiaries on operation and sustainability.",
        "Prepared comprehensive donor and management reports with clear technical and financial documentation."
      ]
    }
  },
  {
    id: "erry-project",
    role: { ar: "مسؤول ميداني — ERRY", en: "Field Officer — ERRY Project" },
    org: { ar: "الإغاثة الإسلامية — اليمن", en: "Islamic Relief Yemen" },
    period: { ar: "يوليو 2016 — نوفمبر 2017", en: "Jul 2016 — Nov 2017" },
    budget: "$3,352,800",
    budgetAmount: 3352800,
    donor: "IRUSA",
    colorCode: "#1B4F8A",
    bullets: {
      ar: [
        "الإشراف على 72 مشروعًا متنوعًا في قطاعات المياه وسبل العيش والخدمات.",
        "إدارة فرق ميدانية متعددة ومتابعة جودة التنفيذ حسب الخطط المعتمدة.",
        "إعداد تقارير تقدم دورية مدعومة بالمؤشرات والوثائق الميدانية."
      ],
      en: [
        "Supervised 72 diverse projects across water, livelihoods, and service sectors.",
        "Managed multiple field teams and tracked quality against approved plans.",
        "Prepared periodic progress reports supported by indicators and field documentation."
      ]
    }
  },
  {
    id: "irusa-project",
    role: { ar: "مسؤول ميداني — مشروع IR-USA", en: "Field Officer — IR-USA Project" },
    org: { ar: "الإغاثة الإسلامية — اليمن", en: "Islamic Relief Yemen" },
    period: { ar: "نوفمبر 2015 — يونيو 2016", en: "Nov 2015 — Jun 2016" },
    budget: "$452,000",
    budgetAmount: 452000,
    donor: "IR-USA",
    colorCode: "#059669",
    bullets: {
      ar: [
        "إعداد مسوحات خط الأساس وتحديد مناطق التدخل وفق الاحتياج والأولوية.",
        "تشكيل لجان مجتمعية وتدريبها على المتابعة والمساءلة المحلية.",
        "الإشراف على تأهيل مستشفى بيت الفقيه ومتابعة التنفيذ الميداني.",
        "ضمان توثيق العمليات الهندسية والإدارية أثناء التنفيذ."
      ],
      en: [
        "Prepared baseline surveys and identified intervention areas by need and priority.",
        "Formed and trained community committees for local follow-up and accountability.",
        "Supervised rehabilitation of Beit Al-Faqih Hospital and field implementation.",
        "Ensured engineering and administrative documentation during delivery."
      ]
    }
  },
  {
    id: "efa-project",
    role: { ar: "مراقب ميداني — EFA", en: "Field Monitor — EFA Project" },
    org: { ar: "الإغاثة الإسلامية — اليمن", en: "Islamic Relief Yemen" },
    period: { ar: "أغسطس 2015 — أكتوبر 2015", en: "Aug 2015 — Oct 2015" },
    donor: "WFP",
    colorCode: "#7C3AED",
    bullets: {
      ar: [
        "إدارة 10 مساعدين ميدانيين ومتابعة خطط التوزيع اليومية.",
        "الإشراف على توزيع السلال الغذائية لـ 10,000 أسرة شهريًا.",
        "إعداد تقارير دورية للإدارة حول التقدم والتحديات."
      ],
      en: [
        "Managed 10 field assistants and tracked daily distribution plans.",
        "Supervised monthly food basket distribution for 10,000 households.",
        "Prepared periodic management reports on progress and challenges."
      ]
    }
  },
  {
    id: "snl-project",
    role: { ar: "مهندس ميداني — SNL", en: "Field Engineer — SNL Project" },
    org: { ar: "الإغاثة الإسلامية — اليمن", en: "Islamic Relief Yemen" },
    period: { ar: "مايو 2014 — أغسطس 2015", en: "May 2014 — Aug 2015" },
    donor: "WFP",
    colorCode: "#EA580C",
    bullets: {
      ar: [
        "تحديد تدخلات المياه والإصحاح البيئي ومشاريع النقد مقابل العمل.",
        "إدارة مهندسين ومشرفين ميدانيين ومراجعة جودة التنفيذ.",
        "إعداد دراسات فنية وتقديرات تكلفة لـ 60 مشروعًا.",
        "الإشراف على أعمال البناء والتنفيذ حسب المواصفات."
      ],
      en: [
        "Identified WASH and Cash for Work interventions.",
        "Managed engineers and field supervisors while reviewing delivery quality.",
        "Prepared technical studies and cost estimates for 60 projects.",
        "Supervised construction works according to specifications."
      ]
    }
  },
  {
    id: "sfd-cfw",
    role: { ar: "استشاري / مهندس ميداني — برنامج CFW", en: "Consultant / Field Engineer — CFW Program" },
    org: { ar: "الصندوق الاجتماعي للتنمية", en: "Social Fund for Development" },
    period: { ar: "2009 — 2014", en: "2009 — 2014" },
    donor: "SFD",
    colorCode: "#0F2742",
    bullets: {
      ar: [
        "الإشراف على آبار وينابيع وشبكات مياه وخزانات وسدود مجتمعية.",
        "إعداد تقارير تقدم وتقارير مالية ونهائية للمشاريع.",
        "إعداد دراسات فنية وأرشفة ملفات المشاريع وفق متطلبات البرنامج."
      ],
      en: [
        "Supervised wells, springs, water networks, tanks, and community dams.",
        "Prepared progress, financial, and final reports.",
        "Prepared technical studies and archived project files according to program requirements."
      ]
    }
  }
];`);

write("src/data/certificates.ts", String.raw`import type { Certificate, CertificateCategory, LocalizedString } from "@/types";

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
    featured: false,
    sensitive: false
  }
];`);

write("src/data/services.ts", String.raw`import type { ExpertiseArea, Service } from "@/types";

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
];`);

write("src/data/impact.ts", String.raw`import type { ImpactStat } from "@/types";

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
];`);

write("src/data/articles.ts", String.raw`import type { Article, ArticleCategory, LocalizedString } from "@/types";

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
];`);

write("src/lib/utils.ts", String.raw`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Locale, LocalizedString } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function localize(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-YE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "ar" ? "ar-YE" : "en-US").format(value);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAbsoluteUrl(pathname = "") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return siteUrl.replace(/\/$/, "") + pathname;
}`);

write("src/lib/constants.ts", String.raw`import type { Locale, SelectOption } from "@/types";

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
];`);

write("src/lib/animations.ts", String.raw`import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export const staggerCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const headerDrop: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut", delay: 0.2 } }
};`);

write("src/lib/seo.ts", String.raw`import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { siteKeywords } from "@/lib/constants";
import { getAbsoluteUrl } from "@/lib/utils";
import type { LocalizedString } from "@/types";

type SeoInput = {
  title: LocalizedString;
  description: LocalizedString;
  pathname?: string;
  image?: string;
};

export function createMetadata(input: SeoInput): Metadata {
  const url = getAbsoluteUrl(input.pathname || "/");
  const title = input.title.ar + " | " + input.title.en;
  const description = input.description.ar;
  const image = input.image || "/og-image.png";

  return {
    title,
    description,
    keywords: siteKeywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ezaldeen Albadai Portfolio",
      locale: "ar_YE",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.nameEn,
    alternateName: profile.nameAr,
    jobTitle: profile.titleEn,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al Hodeida",
      addressCountry: "YE"
    },
    knowsAbout: ["Civil Engineering", "WASH", "Project Coordination", "Humanitarian Engineering", "Solar Pumping Systems"]
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.url)
    }))
  };
}

export function articleSchema(title: string, description: string, slug: string, date: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: profile.nameEn
    },
    mainEntityOfPage: getAbsoluteUrl("/blog/" + slug + "/")
  };
}`);

write("src/lib/validations.ts", String.raw`import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must contain at least two characters."),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  requestType: z.enum(["consultation", "training", "project", "employment", "other"]),
  message: z.string().min(20, "Message must contain at least twenty characters.")
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address.")
});

export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;`);

write("src/hooks/useLanguage.ts", String.raw`"use client";

import { createContext, useContext } from "react";
import type { Direction, Locale, LocalizedString } from "@/types";

export interface LanguageContextValue {
  locale: Locale;
  direction: Direction;
  isArabic: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  localize: (value: LocalizedString) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}`);

write("src/hooks/useLocalStorage.ts", String.raw`"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored) {
      setValue(JSON.parse(stored) as T);
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`);

write("src/hooks/useScrollProgress.ts", String.raw`"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}`);

write("src/hooks/useIntersection.ts", String.raw`"use client";

import { useInView } from "react-intersection-observer";

export function useIntersection(threshold = 0.18) {
  return useInView({
    threshold,
    triggerOnce: true
  });
}`);

write("src/hooks/useCursor.ts", String.raw`"use client";

import { useEffect, useState } from "react";

export type CursorVariant = "default" | "card" | "button";

export function useCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<CursorVariant>("default");

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-cursor='button']")) {
        setVariant("button");
        return;
      }
      if (target.closest("[data-cursor='card']")) {
        setVariant("card");
        return;
      }
      setVariant("default");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return { position, variant };
}`);

write("src/app/globals.css", String.raw`@import "../styles/globals.css";`);

write("src/styles/globals.css", String.raw`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #0f2742;
  --color-secondary: #2563eb;
  --color-accent: #d6a84f;
  --color-accent-alt: #1b4f8a;
  --color-bg: #f7f8fa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-success: #059669;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--color-text);
  background:
    linear-gradient(180deg, rgba(247, 248, 250, 0.98), rgba(255, 255, 255, 0.96)),
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.1), transparent 30%),
    radial-gradient(circle at bottom right, rgba(214, 168, 79, 0.12), transparent 32%);
  font-size: 16px;
  line-height: 1.625;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

::selection {
  color: #ffffff;
  background: var(--color-secondary);
}

.site-container {
  width: min(1280px, calc(100% - 48px));
  margin-inline: auto;
}

.section-padding {
  padding-block: 96px;
}

.pattern-grid {
  background-image:
    linear-gradient(rgba(15, 39, 66, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 39, 66, 0.055) 1px, transparent 1px);
  background-size: 42px 42px;
}

.noise-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.08), transparent 24%),
    radial-gradient(circle at 82% 12%, rgba(214, 168, 79, 0.09), transparent 25%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0));
}

.nav-link {
  position: relative;
  transition: color 0.25s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  inset-inline-end: 0;
  bottom: -8px;
  width: 0;
  height: 2px;
  border-radius: 999px;
  background: var(--color-accent);
  transition: width 0.25s ease;
}

.nav-link:hover::after,
.nav-link[data-active="true"]::after {
  width: 100%;
}

.luxury-card {
  border: 1px solid rgba(229, 231, 235, 0.9);
  box-shadow: 0 4px 24px rgba(15, 39, 66, 0.08);
  transition:
    transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    border-color 0.35s ease;
}

.luxury-card:hover {
  transform: translateY(-8px);
  border-color: rgba(214, 168, 79, 0.4);
  box-shadow: 0 12px 40px rgba(15, 39, 66, 0.16);
}

.article-body h2 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-size: clamp(1.55rem, 3vw, 2.25rem);
  font-weight: 800;
  line-height: 1.25;
}

.article-body h3 {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--color-accent-alt);
  font-size: 1.35rem;
  font-weight: 700;
}

.article-body p,
.article-body li {
  color: #374151;
  font-size: 1.05rem;
  line-height: 2;
}

.article-body ul {
  margin-block: 1rem;
  padding-inline-start: 1.25rem;
}

.print-only {
  display: none;
}

@media (max-width: 768px) {
  .site-container {
    width: min(100% - 32px, 1280px);
  }

  .section-padding {
    padding-block: 56px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

@media print {
  body {
    background: #ffffff;
    color: #111827;
  }

  header,
  footer,
  .print-hidden,
  .custom-cursor,
  .no-print {
    display: none !important;
  }

  .print-only {
    display: block;
  }

  .site-container {
    width: 100%;
  }

  .section-padding {
    padding-block: 0;
  }

  .cv-print {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    padding: 14mm;
    box-shadow: none !important;
    border: 0 !important;
  }
}`);

write("src/components/layout/LanguageProvider.tsx", String.raw`"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import arMessages from "../../../messages/ar.json";
import enMessages from "../../../messages/en.json";
import { defaultLocale } from "@/lib/constants";
import { getDirection } from "@/lib/utils";
import { LanguageContext } from "@/hooks/useLanguage";
import type { Locale, LocalizedString } from "@/types";

const messages = {
  ar: arMessages,
  en: enMessages
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("preferred-locale");
    if (storedLocale === "ar" || storedLocale === "en") {
      setLocaleState(storedLocale);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("preferred-locale", nextLocale);
  };

  const direction = getDirection(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dataset.locale = locale;
  }, [direction, locale]);

  const value = useMemo(
    () => ({
      locale,
      direction,
      isArabic: locale === "ar",
      setLocale,
      toggleLocale: () => setLocale(locale === "ar" ? "en" : "ar"),
      localize: (localized: LocalizedString) => localized[locale]
    }),
    [direction, locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}`);

write("src/components/ui/Button.tsx", String.raw`"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "gold";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-secondary text-white shadow-button hover:bg-blue-gradient hover:shadow-hover",
  secondary: "bg-primary text-white hover:bg-accent-alt",
  ghost: "bg-transparent text-primary hover:bg-primary/5",
  outline: "border border-primary/15 bg-white text-primary hover:border-accent/60 hover:text-primary",
  gold: "bg-gold-gradient text-primary shadow-card hover:shadow-hover"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base"
};

export function Button({
  children,
  variant = "primary",
  size = "lg",
  href,
  className,
  icon,
  type = "button",
  disabled,
  download,
  target,
  rel,
  onClick
}: ButtonProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-normal transition-all duration-300 hover:scale-[1.03] hover:tracking-[0.5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        data-cursor="button"
        style={{ x, y }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        {icon}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={classes}
      data-cursor="button"
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <span>{children}</span>
    </motion.button>
  );
}`);

write("src/components/ui/Card.tsx", String.raw`import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className, interactive = true, ...props }: CardProps) {
  return (
    <div
      data-cursor={interactive ? "card" : undefined}
      className={cn("rounded-card bg-surface p-6", interactive && "luxury-card", className)}
      {...props}
    />
  );
}`);

write("src/components/ui/Badge.tsx", String.raw`import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "gold" | "green" | "navy" | "light";

const badgeClasses: Record<BadgeVariant, string> = {
  blue: "bg-secondary/10 text-secondary",
  gold: "bg-accent/15 text-primary",
  green: "bg-success/10 text-success",
  navy: "bg-primary text-white",
  light: "bg-white text-primary ring-1 ring-border"
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "blue", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold",
        badgeClasses[variant],
        className
      )}
      {...props}
    />
  );
}`);

write("src/components/ui/SectionHeader.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, centered, className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center", className)}
    >
      {eyebrow ? <Badge variant="gold" className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-extrabold leading-tight text-primary md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-muted">{description}</p> : null}
    </motion.div>
  );
}`);

write("src/components/ui/Separator.tsx", String.raw`import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}`);

write("src/components/ui/Tooltip.tsx", String.raw`"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

export function Tooltip({ children, content }: { children: ReactNode; content: string }) {
  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className="z-50 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white shadow-hover">
            {content}
            <TooltipPrimitive.Arrow className="fill-primary" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}`);

write("src/components/ui/Avatar.tsx", String.raw`import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function Avatar({ className }: { className?: string }) {
  return (
    <div className={cn("relative grid aspect-square place-items-center overflow-hidden rounded-2xl bg-navy-gradient", className)}>
      <div className="absolute inset-6 rounded-full border border-white/15" />
      <div className="absolute bottom-0 h-1/2 w-3/4 rounded-t-full bg-white/10" />
      <UserRound className="relative h-20 w-20 text-accent" strokeWidth={1.4} />
    </div>
  );
}`);

write("src/components/ui/LoadingSpinner.tsx", String.raw`import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent", className)}
      aria-hidden="true"
    />
  );
}`);

write("src/components/animations/FadeInUp.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

export function FadeInUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}`);

write("src/components/animations/StaggerContainer.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerCards } from "@/lib/animations";

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerCards}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}`);

write("src/components/animations/CounterAnimation.tsx", String.raw`"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

export function CounterAnimation({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });
  const { locale } = useLanguage();

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {inView ? (
        <CountUp end={value} duration={2.1} separator={locale === "ar" ? "٬" : ","} suffix={suffix} />
      ) : (
        "0" + suffix
      )}
    </span>
  );
}`);

write("src/components/animations/ScrollReveal.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn } from "@/lib/animations";

type RevealVariant = "up" | "left" | "right" | "scale";

export function ScrollReveal({ children, variant = "up", className }: { children: ReactNode; variant?: RevealVariant; className?: string }) {
  const variants = {
    up: fadeInUp,
    left: fadeInLeft,
    right: fadeInRight,
    scale: scaleIn
  }[variant];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}`);

write("src/components/animations/CustomCursor.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";

export function CustomCursor() {
  const { position, variant } = useCursor();
  const size = variant === "card" ? 42 : variant === "button" ? 48 : 18;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[80] hidden lg:block" aria-hidden="true">
      <motion.div
        className="fixed grid place-items-center rounded-full border border-accent/70 text-sm font-bold text-accent mix-blend-multiply"
        animate={{
          x: position.x - size / 2,
          y: position.y - size / 2,
          width: size,
          height: size,
          boxShadow: variant === "card" ? "0 0 28px rgba(214,168,79,0.35)" : "0 0 0 rgba(0,0,0,0)"
        }}
        transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.55 }}
      >
        {variant === "button" ? "→" : null}
      </motion.div>
      <motion.div
        className="fixed h-2 w-2 rounded-full bg-accent"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 700, damping: 30, mass: 0.35 }}
      />
    </div>
  );
}`);

write("src/components/visuals/BackgroundPattern.tsx", String.raw`export function BackgroundPattern() {
  return <div className="pointer-events-none absolute inset-0 pattern-grid opacity-70" aria-hidden="true" />;
}`);

write("src/components/visuals/GradientOrb.tsx", String.raw`export function GradientOrb({ tone = "blue" }: { tone?: "blue" | "gold" }) {
  const color = tone === "gold" ? "from-accent/20" : "from-secondary/20";
  return (
    <div
      className={"pointer-events-none absolute h-72 w-72 rounded-[40%] bg-gradient-to-br " + color + " to-transparent blur-3xl"}
      aria-hidden="true"
    />
  );
}`);

write("src/components/visuals/PlaceholderImage.tsx", String.raw`import Image from "next/image";
import { Award, BarChart3, FileText, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  type: "certificate" | "profile" | "article" | "impact";
  title: string;
  subtitle?: string;
  imagePath?: string;
  className?: string;
};

export function PlaceholderImage({ type, title, subtitle, imagePath, className }: PlaceholderImageProps) {
  if (imagePath) {
    return (
      <Image
        src={imagePath}
        alt={title}
        width={900}
        height={620}
        className={cn("h-full w-full object-cover", className)}
        loading="lazy"
      />
    );
  }

  const Icon = type === "profile" ? UserRound : type === "impact" ? BarChart3 : type === "article" ? FileText : Award;

  return (
    <div className={cn("relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-navy-gradient p-8", className)}>
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 300" role="img" aria-label={title}>
        <defs>
          <linearGradient id={"placeholder-" + type} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#D6A84F" />
          </linearGradient>
        </defs>
        <path d="M30 245 L120 95 L210 180 L290 60 L370 230" fill="none" stroke="url(#placeholder-impact)" strokeWidth="18" strokeLinecap="round" />
        <circle cx="85" cy="78" r="38" fill="#D6A84F" opacity="0.25" />
        <rect x="235" y="188" width="90" height="52" rx="16" fill="#ffffff" opacity="0.12" />
      </svg>
      <div className="relative text-center text-white">
        <Icon className="mx-auto mb-4 h-14 w-14 text-accent" strokeWidth={1.4} />
        <p className="text-xl font-extrabold">{title}</p>
        {subtitle ? <p className="mt-2 text-sm text-white/75">{subtitle}</p> : null}
      </div>
    </div>
  );
}`);

write("src/components/visuals/HeroDashboard.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { useLanguage } from "@/hooks/useLanguage";

const rows = [
  { ar: "مشاريع WASH", en: "WASH Projects", value: 85 },
  { ar: "سبل العيش", en: "Livelihoods", value: 70 },
  { ar: "الطاقة الشمسية", en: "Solar Systems", value: 55 },
  { ar: "البنية التحتية", en: "Infrastructure", value: 75 }
];

export function HeroDashboard() {
  const { locale } = useLanguage();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[520px] rounded-[28px] border border-white/25 bg-white/90 p-5 shadow-hover backdrop-blur-xl"
      initial={{ opacity: 0, rotateX: 10, y: 36, scale: 0.94 }}
      animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
      style={{ transformPerspective: 1000 }}
    >
      <div className="rounded-2xl bg-navy-gradient p-5 text-white">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-white/65">Executive Impact Overview</p>
            <h3 className="text-xl font-extrabold">{locale === "ar" ? "لوحة الأثر التنفيذي" : "Impact Dashboard"}</h3>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/20 text-accent">
            <span className="font-mono text-lg">IR</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: locale === "ar" ? "سنة خبرة" : "Years", value: 15, suffix: "+" },
            { label: locale === "ar" ? "مشروع مياه" : "Water", value: 49, suffix: "" },
            { label: locale === "ar" ? "مشروع صغير" : "Micro", value: 750, suffix: "" },
            { label: locale === "ar" ? "بنية تحتية" : "Infra", value: 120, suffix: "+" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-extrabold text-accent">
                <CounterAnimation value={item.value} suffix={item.suffix} />
              </p>
              <p className="text-xs text-white/70">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {rows.map((row, index) => (
            <div key={row.en}>
              <div className="mb-2 flex items-center justify-between text-xs text-white/75">
                <span>{row[locale]}</span>
                <span>{row.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gold-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: row.value + "%" }}
                  transition={{ duration: 1, delay: 2.25 + index * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/75">
          Plan → Design → Execute → Report
        </div>
      </div>
    </motion.div>
  );
}`);

write("src/components/layout/LanguageToggle.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="relative h-10 w-[76px] rounded-full border border-border bg-white p-1 text-xs font-bold text-primary shadow-card"
      aria-label="Toggle language"
      data-cursor="button"
    >
      <motion.span
        className="absolute top-1 h-8 w-8 rounded-full bg-primary shadow-card"
        animate={{ x: locale === "ar" ? 34 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      />
      <span className="relative z-10 grid h-full grid-cols-2 items-center">
        <span className={locale === "en" ? "text-white" : "text-primary"}>EN</span>
        <span className={locale === "ar" ? "text-white" : "text-primary"}>AR</span>
      </span>
    </button>
  );
}`);

write("src/components/layout/MobileNav.tsx", String.raw`"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { localize } = useLanguage();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 end-0 z-50 w-full max-w-sm bg-white p-6 shadow-hover">
          <div className="mb-10 flex items-center justify-between">
            <Dialog.Title className="text-lg font-extrabold text-primary">{localize({ ar: "القائمة", en: "Menu" })}</Dialog.Title>
            <Dialog.Close asChild>
              <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
          <nav className="space-y-3">
            {navigation.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-border px-5 py-4 text-lg font-bold text-primary"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {localize(item.label)}
              </motion.a>
            ))}
          </nav>
          <div className="mt-8">
            <Button href={profile.cvPath} download variant="gold" className="w-full">
              {localize({ ar: "تحميل السيرة", en: "Download CV" })}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`);

write("src/components/layout/Header.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { headerDrop } from "@/lib/animations";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Header() {
  const pathname = usePathname();
  const progress = useScrollProgress();
  const { localize } = useLanguage();

  return (
    <motion.header
      variants={headerDrop}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-md print-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-border/60">
        <div className="h-full bg-gold-gradient transition-[width] duration-150" style={{ width: progress + "%" }} />
      </div>
      <div className="site-container flex h-20 items-center justify-between gap-4 max-lg:h-16">
        <a href="/" className="min-w-0">
          <p className="truncate text-lg font-extrabold text-primary">{localize({ ar: "عزالدين البداي", en: "Ezaldeen Albadai" })}</p>
          <p className="truncate text-xs font-semibold text-muted">{profile.tagline}</p>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.slice(0, 7).map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <a
                key={item.id}
                href={item.href}
                className="nav-link text-sm font-bold text-primary/80 hover:text-accent"
                data-active={active}
              >
                {localize(item.label)}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button href={profile.cvPath} download variant="gold" size="md" icon={<Download className="h-4 w-4" />} className="hidden xl:inline-flex">
            {localize({ ar: "تحميل السيرة", en: "Download CV" })}
          </Button>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}`);

write("src/components/layout/Footer.tsx", String.raw`"use client";

import { Mail, Phone, Send } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { localize } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-white print-hidden">
      <div className="absolute inset-0 pattern-grid opacity-10" aria-hidden="true" />
      <div className="site-container relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-extrabold">{localize({ ar: "عزالدين البداي", en: "Ezaldeen Albadai" })}</h2>
            <p className="mt-2 text-sm font-semibold text-accent">{profile.tagline}</p>
            <p className="mt-4 text-sm leading-7 text-white/70">{localize(profile.summary)}</p>
          </div>
          <div>
            <h3 className="mb-4 font-extrabold text-accent">{localize({ ar: "روابط الموقع", en: "Site Links" })}</h3>
            <div className="grid gap-2">
              {navigation.map((item) => (
                <a key={item.id} href={item.href} className="text-sm text-white/70 transition hover:text-accent">
                  {localize(item.label)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-extrabold text-accent">{localize({ ar: "الخدمات", en: "Services" })}</h3>
            <div className="grid gap-2">
              {services.slice(0, 6).map((service) => (
                <a key={service.id} href="/services" className="text-sm text-white/70 transition hover:text-accent">
                  {localize(service.title)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-extrabold text-accent">{localize({ ar: "تواصل", en: "Contact" })}</h3>
            <div className="space-y-3 text-sm text-white/75">
              <a className="flex items-center gap-2 hover:text-accent" href={"mailto:" + profile.email}>
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a className="flex items-center gap-2 hover:text-accent" href={"tel:" + profile.phone}>
                <Phone className="h-4 w-4" /> {profile.phone}
              </a>
              <a className="flex items-center gap-2 hover:text-accent" href={"https://wa.me/" + profile.whatsapp.replace("+", "")} target="_blank" rel="noreferrer">
                <Send className="h-4 w-4" /> WhatsApp
              </a>
              <a className="inline-flex rounded-full bg-accent px-4 py-2 font-bold text-primary" href={profile.cvPath} download>
                {localize({ ar: "تحميل السيرة", en: "Download CV" })}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p>© {year} {localize({ ar: "عزالدين ناصر سعد البداي. جميع الحقوق محفوظة.", en: "Ezaldeen Nasser Saad Albadai. All rights reserved." })}</p>
          <p>Built with precision and purpose</p>
        </div>
      </div>
    </footer>
  );
}`);

write("src/components/sections/shared/PageHero.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { BackgroundPattern } from "@/components/visuals/BackgroundPattern";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
      <BackgroundPattern />
      <div className="noise-layer opacity-50" />
      <div className="site-container relative">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
          <Badge variant="gold" className="mb-5">{eyebrow}</Badge>
          <h1 className="text-4xl font-extrabold leading-tight md:text-[56px] md:leading-[64px]">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/75">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}`);

write("src/components/sections/shared/CTASection.tsx", String.raw`"use client";

import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function CTASection({ title, description }: { title: string; description?: string }) {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-primary text-white">
      <div className="site-container text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-[40px] md:leading-[48px]">{title}</h2>
        {description ? <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{description}</p> : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="gold" icon={<Mail className="h-4 w-4" />}>{localize({ ar: "تواصل الآن", en: "Contact Now" })}</Button>
          <Button href={profile.cvPath} download variant="outline" icon={<Download className="h-4 w-4" />} className="border-white/20 bg-white/10 text-white hover:text-white">
            {localize({ ar: "تحميل السيرة", en: "Download CV" })}
          </Button>
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/shared/NewsletterBox.tsx", String.raw`"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations";
import { useLanguage } from "@/hooks/useLanguage";

export function NewsletterBox() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { localize } = useLanguage();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterInput) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Newsletter request failed");
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-card bg-navy-gradient p-6 text-white shadow-hover md:p-8">
      <div className="mx-auto max-w-2xl text-center">
        <Mail className="mx-auto mb-4 h-10 w-10 text-accent" />
        <h3 className="text-2xl font-extrabold">{localize({ ar: "احصل على مقالات جديدة كل أسبوع", en: "Receive new professional articles every week" })}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder={localize({ ar: "بريدك الإلكتروني", en: "Your email" })}
            className="min-h-12 flex-1 rounded-input border border-white/20 bg-white px-4 text-primary outline-none focus:border-accent"
            {...register("email")}
          />
          <Button type="submit" variant="gold" disabled={isSubmitting}>
            {isSubmitting ? <LoadingSpinner /> : localize({ ar: "اشترك", en: "Subscribe" })}
          </Button>
        </form>
        {errors.email ? <p className="mt-3 text-sm text-red-200">{errors.email.message}</p> : null}
        {status === "success" ? <p className="mt-3 text-sm text-accent">{localize({ ar: "تم الاشتراك بنجاح.", en: "Subscription completed successfully." })}</p> : null}
        {status === "error" ? <p className="mt-3 text-sm text-red-200">{localize({ ar: "تعذر الاشتراك الآن.", en: "Subscription could not be completed right now." })}</p> : null}
      </div>
    </div>
  );
}`);

write("src/components/sections/shared/ContactForm.tsx", String.raw`"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { requestTypeOptions } from "@/lib/constants";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactForm() {
  const { localize } = useLanguage();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { requestType: "consultation" }
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Contact request failed");
      }
      setStatus("success");
      reset({ requestType: "consultation" });
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = "min-h-12 rounded-input border border-border bg-white px-4 text-primary outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-card bg-white p-6 shadow-card md:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "الاسم الكامل *", en: "Full Name *" })}</span>
          <input className={fieldClass} {...register("fullName")} />
          {errors.fullName ? <span className="text-sm text-red-600">{errors.fullName.message}</span> : null}
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "الجهة / المنظمة", en: "Organization" })}</span>
          <input className={fieldClass} {...register("organization")} />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-primary">{localize({ ar: "البريد الإلكتروني *", en: "Email *" })}</span>
            <input type="email" className={fieldClass} {...register("email")} />
            {errors.email ? <span className="text-sm text-red-600">{errors.email.message}</span> : null}
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-primary">{localize({ ar: "رقم الهاتف", en: "Phone" })}</span>
            <input type="tel" className={fieldClass} {...register("phone")} />
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "نوع الطلب *", en: "Request Type *" })}</span>
          <select className={fieldClass} {...register("requestType")}>
            {requestTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {localize(option.label)}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "الرسالة *", en: "Message *" })}</span>
          <textarea className={fieldClass + " min-h-36 py-3"} {...register("message")} />
          {errors.message ? <span className="text-sm text-red-600">{errors.message.message}</span> : null}
        </label>
        <Button type="submit" disabled={isSubmitting} icon={isSubmitting ? <LoadingSpinner /> : <Send className="h-4 w-4" />}>
          {localize({ ar: "إرسال الرسالة", en: "Send Message" })}
        </Button>
        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-2xl bg-success/10 p-4 text-sm font-bold text-success">
            <CheckCircle2 className="h-5 w-5" />
            {localize({ ar: "تم الإرسال بنجاح. شكرًا لتواصلك.", en: "Message sent successfully. Thank you for reaching out." })}
          </div>
        ) : null}
        {status === "error" ? (
          <div className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
            {localize({ ar: "تعذر إرسال الرسالة الآن. يرجى المحاولة مرة أخرى.", en: "The message could not be sent right now. Please try again." })}
          </div>
        ) : null}
      </div>
    </form>
  );
}`);

write("src/components/sections/home/HeroSection.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { Download, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BackgroundPattern } from "@/components/visuals/BackgroundPattern";
import { HeroDashboard } from "@/components/visuals/HeroDashboard";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function HeroSection() {
  const { localize } = useLanguage();
  const headline = localize({
    ar: "هندسة المشاريع الإنسانية والتنموية بخبرة ميدانية تقود إلى أثر حقيقي",
    en: "Engineering humanitarian and development projects with field experience that creates real impact"
  });
  const words = headline.split(" ");

  return (
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <BackgroundPattern />
      <div className="noise-layer" />
      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 18 }}>
            <Badge variant="gold" className="mb-6 gap-2 text-sm">
              <ShieldCheck className="h-4 w-4" />
              {localize({ ar: "15+ سنة خبرة ميدانية", en: "15+ years of field experience" })}
            </Badge>
          </motion.div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-primary md:text-[56px] md:leading-[64px]">
            {words.map((word, index) => (
              <motion.span
                key={word + index}
                className="me-2 inline-block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.045, duration: 0.45, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p className="mt-6 max-w-2xl text-lg leading-9 text-muted" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.55 }}>
            {localize({
              ar: "مهندس مدني ومنسق مشاريع أول بخبرة تتجاوز 15 عامًا في إدارة وتنفيذ مشاريع المياه، الإصحاح البيئي، سبل العيش، البنية التحتية، والتقارير الموجهة للمانحين.",
              en: "Civil engineer and senior project coordinator with more than 15 years of experience managing and delivering WASH, livelihoods, infrastructure, and donor reporting portfolios."
            })}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.55 }}>
            <Button href={profile.cvPath} download icon={<Download className="h-4 w-4" />}>
              {localize({ ar: "تحميل السيرة الذاتية", en: "Download Full CV" })}
            </Button>
            <Button href="/certificates" variant="outline">
              {localize({ ar: "عرض الشهادات", en: "View Certificates" })}
            </Button>
            <Button href="/contact" variant="ghost" icon={<Mail className="h-4 w-4" />}>
              {localize({ ar: "تواصل معي", en: "Contact Me" })}
            </Button>
          </motion.div>
          <motion.p className="mt-8 rounded-2xl border border-border bg-white/70 px-5 py-3 text-sm font-bold text-primary shadow-card backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
            {localize({ ar: "عمل مع: Islamic Relief | SFD | WFP | SIDA | IR-Canada", en: "Worked with: Islamic Relief | SFD | WFP | SIDA | IR-Canada" })}
          </motion.p>
        </div>
        <div className="animate-float">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/home/TrustBar.tsx", String.raw`"use client";

import { impactStats } from "@/data/impact";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { useLanguage } from "@/hooks/useLanguage";

export function TrustBar() {
  const { localize } = useLanguage();

  return (
    <section className="bg-primary py-8 text-white">
      <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {impactStats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-3xl font-extrabold text-accent">
              <CounterAnimation value={stat.value} suffix={localize(stat.suffix)} />
            </p>
            <p className="mt-1 text-sm font-semibold text-white/70">{localize(stat.label)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`);

write("src/components/sections/home/AboutSnapshot.tsx", String.raw`"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { expertiseAreas } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function AboutSnapshot() {
  const { localize, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <Avatar className="mx-auto max-w-sm shadow-hover" />
          <div className="absolute -bottom-6 start-8 rounded-card bg-white p-5 shadow-hover">
            <p className="text-3xl font-extrabold text-primary">{profile.yearsOfExperience}+</p>
            <p className="text-sm font-bold text-muted">{localize({ ar: "سنة في الميدان", en: "years in the field" })}</p>
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow={localize({ ar: "من أنا", en: "About" })}
            title={localize({ ar: "خبرة هندسية تصنع أثرًا إنسانيًا مستدامًا", en: "Engineering expertise that creates sustainable humanitarian impact" })}
            description={localize(profile.summary)}
            className="mb-8"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {expertiseAreas.slice(0, 6).map((area) => (
              <div key={area.id} className="rounded-2xl border border-border bg-bg p-4 text-sm font-bold text-primary">
                {localize(area.title)}
              </div>
            ))}
          </div>
          <Button href="/about" className="mt-8" icon={<Arrow className="h-4 w-4" />}>
            {localize({ ar: "اقرأ المزيد", en: "Read More" })}
          </Button>
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/home/ExpertiseGrid.tsx", String.raw`"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { expertiseAreas } from "@/data/services";
import { fadeInUp, staggerCards } from "@/lib/animations";
import { useLanguage } from "@/hooks/useLanguage";

export function ExpertiseGrid() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <SectionHeader centered eyebrow={localize({ ar: "الخبرة", en: "Expertise" })} title={localize({ ar: "مجالات الخبرة", en: "Expertise Areas" })} />
        <motion.div variants={staggerCards} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[area.icon] || Icons.BadgeCheck;
            return (
              <motion.div key={area.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary transition group-hover:text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-primary">{localize(area.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{localize(area.description)}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}`);

write("src/components/sections/home/ImpactHighlights.tsx", String.raw`"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { impactStats } from "@/data/impact";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactHighlights() {
  const { localize, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-white">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow={localize({ ar: "الأثر", en: "Impact" })} title={localize({ ar: "أرقام أثر موثقة", en: "Verified Impact Numbers" })} className="mb-0" />
          <Button href="/impact" variant="outline" icon={<Arrow className="h-4 w-4" />}>{localize({ ar: "عرض المشاريع كاملًا", en: "View Full Impact" })}</Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {impactStats.slice(1, 4).map((stat) => (
            <Card key={stat.id}>
              <p className="text-5xl font-extrabold text-primary">
                <CounterAnimation value={stat.value} suffix={localize(stat.suffix)} />
              </p>
              <h3 className="mt-4 text-xl font-extrabold text-primary">{localize(stat.label)}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{localize(stat.description)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/home/FeaturedExperience.tsx", String.raw`"use client";

import { BriefcaseBusiness } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experienceEntries } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

export function FeaturedExperience() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <SectionHeader centered eyebrow={localize({ ar: "المسار المهني", en: "Career" })} title={localize({ ar: "خبرات قيادية حديثة", en: "Recent Leadership Experience" })} />
        <div className="grid gap-6 lg:grid-cols-2">
          {experienceEntries.slice(0, 2).map((entry) => (
            <Card key={entry.id}>
              <div className="mb-5 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-accent">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-primary">{localize(entry.role)}</h3>
                  <p className="text-sm font-bold text-muted">{localize(entry.org)} | {localize(entry.period)}</p>
                </div>
              </div>
              <p className="mb-4 text-sm font-bold text-secondary">{entry.budget} {entry.donor ? " | " + entry.donor : ""}</p>
              <ul className="space-y-2 text-sm leading-7 text-muted">
                {entry.bullets.ar.slice(0, 3).map((_, index) => (
                  <li key={index}>• {entry.bullets[localize({ ar: "ar", en: "en" }) as "ar" | "en"][index]}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/home/LatestArticles.tsx", String.raw`"use client";

import { ArticleCard } from "@/components/sections/blog/ArticleCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles } from "@/data/articles";
import { useLanguage } from "@/hooks/useLanguage";

export function LatestArticles() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="site-container">
        <SectionHeader centered eyebrow={localize({ ar: "المعرفة", en: "Insights" })} title={localize({ ar: "أحدث المقالات", en: "Latest Articles" })} />
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {articles.slice(0, 3).map((article) => (
            <div key={article.slug} className="min-w-[300px] lg:min-w-0">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/home/HomeCTA.tsx", String.raw`"use client";

import { CTASection } from "@/components/sections/shared/CTASection";
import { useLanguage } from "@/hooks/useLanguage";

export function HomeCTA() {
  const { localize } = useLanguage();
  return <CTASection title={localize({ ar: "هل تبحث عن خبير لإدارة مشاريعك الإنسانية؟", en: "Looking for an expert to manage humanitarian projects?" })} />;
}`);

write("src/components/sections/experience/ExperienceCard.tsx", String.raw`"use client";

import { Card } from "@/components/ui/Card";
import type { ExperienceEntry } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const { localize, locale } = useLanguage();
  const width = entry.budgetAmount ? Math.min(100, Math.max(12, (entry.budgetAmount / 7000000) * 100)) : 28;

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: entry.colorCode }} />
      <p className="text-sm font-bold text-muted">{localize(entry.period)}</p>
      <h3 className="mt-2 text-2xl font-extrabold text-primary">{localize(entry.role)}</h3>
      <p className="mt-1 font-bold text-secondary">{localize(entry.org)}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold">
        {entry.budget ? <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">{entry.budget}</span> : null}
        {entry.donor ? <span className="rounded-full bg-accent/15 px-3 py-1 text-primary">{entry.donor}</span> : null}
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-border">
        <div className="h-full rounded-full" style={{ width: width + "%", backgroundColor: entry.colorCode }} />
      </div>
      <ul className="mt-5 space-y-2 text-sm leading-7 text-muted">
        {entry.bullets[locale].map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
    </Card>
  );
}`);

write("src/components/sections/experience/ExperienceTimeline.tsx", String.raw`"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/sections/experience/ExperienceCard";
import { experienceEntries } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <div className="relative">
          <div className="absolute inset-y-0 start-1/2 hidden w-px -translate-x-1/2 bg-border lg:block" />
          <div className="space-y-10">
            {experienceEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className={"relative grid gap-6 lg:grid-cols-2 " + (index % 2 === 0 ? "" : "lg:[&>*]:col-start-2")}
              >
                <div className="absolute start-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-accent shadow-card transition-transform hover:scale-140 lg:block" />
                <ExperienceCard entry={entry} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/impact/ImpactStats.tsx", String.raw`"use client";

import * as Icons from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { impactStats } from "@/data/impact";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactStats() {
  const { localize } = useLanguage();

  return (
    <section className="section-padding bg-bg">
      <div className="site-container grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {impactStats.map((stat) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[stat.icon] || Icons.BadgeCheck;
          return (
            <Card key={stat.id} className="text-center">
              <Icon className="mx-auto mb-4 h-8 w-8 text-secondary" />
              <p className="text-4xl font-extrabold text-primary">
                <CounterAnimation value={stat.value} suffix={localize(stat.suffix)} />
              </p>
              <h3 className="mt-3 font-extrabold text-primary">{localize(stat.label)}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{localize(stat.description)}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}`);

write("src/components/sections/impact/ImpactCard.tsx", String.raw`"use client";

import { Card } from "@/components/ui/Card";
import type { ImpactStat } from "@/types";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactCard({ stat }: { stat: ImpactStat }) {
  const { localize } = useLanguage();
  return (
    <Card>
      <p className="text-5xl font-extrabold text-primary">
        <CounterAnimation value={stat.value} suffix={localize(stat.suffix)} />
      </p>
      <h3 className="mt-4 text-xl font-extrabold text-primary">{localize(stat.label)}</h3>
      <p className="mt-3 text-muted">{localize(stat.description)}</p>
    </Card>
  );
}`);

write("src/components/sections/impact/ImpactDashboard.tsx", String.raw`"use client";

import { HeroDashboard } from "@/components/visuals/HeroDashboard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/hooks/useLanguage";

export function ImpactDashboard() {
  const { localize } = useLanguage();
  return (
    <section className="section-padding bg-white">
      <div className="site-container grid items-center gap-10 lg:grid-cols-2">
        <SectionHeader
          eyebrow={localize({ ar: "لوحة تنفيذية", en: "Executive Dashboard" })}
          title={localize({ ar: "قراءة سريعة لمحفظة الأثر", en: "A clear view of the impact portfolio" })}
          description={localize({ ar: "تعرض اللوحة مؤشرات تجمع بين الخبرة، مشاريع المياه، مشاريع سبل العيش، والبنية التحتية ضمن قصة تنفيذ واحدة.", en: "The dashboard brings experience, water projects, livelihoods, and infrastructure into one delivery story." })}
          className="mb-0"
        />
        <HeroDashboard />
      </div>
    </section>
  );
}`);

write("src/components/sections/certificates/CertificateCard.tsx", String.raw`"use client";

import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/visuals/PlaceholderImage";
import { certificateCategoryLabels } from "@/data/certificates";
import type { Certificate } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function CertificateCard({ certificate, onOpen }: { certificate: Certificate; onOpen: (certificate: Certificate) => void }) {
  const { localize } = useLanguage();

  return (
    <Card className={certificate.featured ? "md:col-span-2 lg:col-span-3" : ""}>
      <div className={certificate.featured ? "grid gap-6 md:grid-cols-[0.9fr_1.1fr]" : ""}>
        <div className="overflow-hidden rounded-2xl">
          <PlaceholderImage type="certificate" title={localize(certificate.title)} subtitle={certificate.year} imagePath={certificate.imagePath} />
        </div>
        <div className="mt-5 flex flex-col justify-between md:mt-0">
          <div>
            <Badge variant="gold">{localize(certificateCategoryLabels[certificate.category])}</Badge>
            <h3 className="mt-4 text-2xl font-extrabold text-primary">{localize(certificate.title)}</h3>
            <p className="mt-2 font-bold text-secondary">{localize(certificate.issuer)}</p>
            <p className="mt-1 text-sm text-muted">{certificate.year}</p>
          </div>
          <Button variant="outline" className="mt-6" icon={<Eye className="h-4 w-4" />} onClick={() => onOpen(certificate)}>
            {localize({ ar: "عرض الشهادة", en: "View Certificate" })}
          </Button>
        </div>
      </div>
    </Card>
  );
}`);

write("src/components/sections/certificates/CertificateLightbox.tsx", String.raw`"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Download, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Certificate } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function CertificateLightbox({ certificate, onClose }: { certificate: Certificate | null; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const { localize } = useLanguage();

  return (
    <Dialog.Root open={Boolean(certificate)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(94vw,980px)] -translate-x-1/2 -translate-y-1/2 rounded-card bg-white p-4 shadow-hover md:p-6">
          {certificate ? (
            <>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <Dialog.Title className="text-xl font-extrabold text-primary">{localize(certificate.title)}</Dialog.Title>
                  <p className="text-sm text-muted">{localize(certificate.issuer)} — {certificate.year}</p>
                </div>
                <Dialog.Close asChild>
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" aria-label="Close certificate">
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="max-h-[70vh] overflow-auto rounded-2xl bg-bg p-4">
                <div className="mx-auto transition-transform" style={{ width: 820 * zoom }}>
                  <Image src={certificate.imagePath} alt={localize(certificate.title)} width={900} height={620} className="h-auto w-full rounded-xl shadow-card" />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-between gap-3">
                <div className="flex gap-2">
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" onClick={() => setZoom((current) => Math.max(0.75, current - 0.15))} aria-label="Zoom out">
                    <Minus className="h-4 w-4" />
                  </button>
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" onClick={() => setZoom((current) => Math.min(1.4, current + 0.15))} aria-label="Zoom in">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button href={certificate.imagePath} download variant="gold" size="md" icon={<Download className="h-4 w-4" />}>
                  {localize({ ar: "تحميل", en: "Download" })}
                </Button>
              </div>
            </>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`);

write("src/components/sections/certificates/CertificateFilters.tsx", String.raw`"use client";

import { useMemo, useState } from "react";
import { CertificateCard } from "@/components/sections/certificates/CertificateCard";
import { CertificateLightbox } from "@/components/sections/certificates/CertificateLightbox";
import { certificates, certificateCategoryLabels } from "@/data/certificates";
import type { Certificate, CertificateCategory } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const categories: Array<CertificateCategory | "all"> = ["all", "experience", "academic", "project-management", "wash-energy", "reports", "safety-security", "finance-tools"];

export function CertificateFilters() {
  const [active, setActive] = useState<CertificateCategory | "all">("all");
  const [selected, setSelected] = useState<Certificate | null>(null);
  const { localize } = useLanguage();
  const filtered = useMemo(() => certificates.filter((certificate) => active === "all" || certificate.category === active), [active]);

  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-bold transition",
                active === category ? "border-accent bg-accent text-primary" : "border-border bg-white text-primary hover:border-accent"
              )}
            >
              {localize(certificateCategoryLabels[category])}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <CertificateLightbox certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}`);

write("src/components/sections/cv/CVPrintButton.tsx", String.raw`"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export function CVPrintButton() {
  const { localize } = useLanguage();
  return (
    <Button variant="outline" icon={<Printer className="h-4 w-4" />} onClick={() => window.print()}>
      {localize({ ar: "طباعة", en: "Print" })}
    </Button>
  );
}`);

write("src/components/sections/cv/CVHeader.tsx", String.raw`"use client";

import { Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CVPrintButton } from "@/components/sections/cv/CVPrintButton";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function CVHeader() {
  const { localize } = useLanguage();

  return (
    <div className="rounded-card bg-white p-6 shadow-card md:p-8 cv-print">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
        <div>
          <p className="text-sm font-bold text-secondary">{profile.nameEn}</p>
          <h1 className="mt-2 text-4xl font-extrabold text-primary">{profile.nameAr}</h1>
          <p className="mt-3 text-xl font-bold text-accent-alt">{localize({ ar: profile.titleAr, en: profile.titleEn })}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-muted">
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {localize(profile.location)}</span>
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> {profile.email}</span>
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> {profile.phone}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 print-hidden">
          <Button href={profile.cvPath} download icon={<Download className="h-4 w-4" />}>{localize({ ar: "تحميل PDF", en: "Download PDF" })}</Button>
          <CVPrintButton />
          <Button href="/contact" variant="ghost">{localize({ ar: "تواصل معي", en: "Contact Me" })}</Button>
        </div>
      </div>
    </div>
  );
}`);

write("src/components/sections/cv/CVSummary.tsx", String.raw`"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function CVSummary() {
  const { localize } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "الملخص التنفيذي", en: "Executive Summary" })}</h2>
      <p className="mt-4 leading-8 text-muted">{profile.summary.ar}</p>
      <p className="mt-3 leading-8 text-muted">{profile.summary.en}</p>
    </section>
  );
}`);

write("src/components/sections/cv/CVExperience.tsx", String.raw`"use client";

import { experienceEntries } from "@/data/experience";
import { useLanguage } from "@/hooks/useLanguage";

export function CVExperience() {
  const { localize, locale } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "الخبرات المهنية", en: "Professional Experience" })}</h2>
      <div className="mt-5 space-y-5">
        {experienceEntries.map((entry) => (
          <div key={entry.id} className="border-s-4 border-accent ps-4">
            <h3 className="font-extrabold text-primary">{localize(entry.role)}</h3>
            <p className="text-sm font-bold text-secondary">{localize(entry.org)} | {localize(entry.period)}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{entry.bullets[locale][0]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`);

write("src/components/sections/cv/CVEducation.tsx", String.raw`"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function CVEducation() {
  const { localize } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "التعليم", en: "Education" })}</h2>
      <div className="mt-4 rounded-2xl bg-bg p-4">
        <h3 className="font-extrabold text-primary">{localize({ ar: "بكالوريوس هندسة مدنية", en: "Bachelor of Civil Engineering" })}</h3>
        <p className="text-sm font-bold text-muted">{localize({ ar: "جامعة ذمار — 2003", en: "Dhamar University — 2003" })}</p>
      </div>
    </section>
  );
}`);

write("src/components/sections/cv/CVSkills.tsx", String.raw`"use client";

import { services } from "@/data/services";
import { useLanguage } from "@/hooks/useLanguage";

export function CVSkills() {
  const { localize } = useLanguage();
  const technical = ["AutoCAD", "Microsoft Project", "BOQ", "WASH", "Solar Pumping", "Donor Reports", "Monitoring", "Cash for Work"];
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "الكفاءات والمهارات", en: "Competencies & Skills" })}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {services.slice(0, 6).map((service) => (
          <div key={service.id} className="rounded-2xl bg-bg p-4 text-sm font-bold text-primary">{localize(service.title)}</div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {technical.map((skill) => (
          <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">{skill}</span>
        ))}
      </div>
    </section>
  );
}`);

write("src/components/sections/cv/CVLanguages.tsx", String.raw`"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function CVLanguages() {
  const { localize } = useLanguage();
  return (
    <section className="rounded-card bg-white p-6 shadow-card">
      <h2 className="text-2xl font-extrabold text-primary">{localize({ ar: "اللغات", en: "Languages" })}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-bg p-4">
          <p className="font-extrabold text-primary">{localize({ ar: "العربية", en: "Arabic" })}</p>
          <p className="text-sm text-muted">{localize({ ar: "اللغة الأم", en: "Native" })}</p>
        </div>
        <div className="rounded-2xl bg-bg p-4">
          <p className="font-extrabold text-primary">{localize({ ar: "الإنجليزية", en: "English" })}</p>
          <p className="text-sm text-muted">{localize({ ar: "ممتاز", en: "Excellent" })}</p>
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/blog/BlogHero.tsx", String.raw`"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function BlogHero() {
  const { localize } = useLanguage();
  return (
    <section className="bg-navy-gradient py-20 text-white md:py-28">
      <div className="site-container text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-[56px] md:leading-[64px]">
          {localize({ ar: "مقالات وأدلة مهنية في إدارة المشاريع والمياه والتحول", en: "Professional articles and guides in project management, water, and transformation" })}
        </h1>
        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-full bg-white px-5 py-3 text-primary shadow-hover">
          <Search className="h-5 w-5 text-muted" />
          <span className="text-sm font-semibold text-muted">{localize({ ar: "ابحث داخل المقالات من الأسفل", en: "Search articles below" })}</span>
        </div>
      </div>
    </section>
  );
}`);

write("src/components/sections/blog/SearchBox.tsx", String.raw`"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function SearchBox({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { localize } = useLanguage();
  return (
    <label className="flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-white px-5 shadow-card">
      <Search className="h-5 w-5 text-muted" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={localize({ ar: "ابحث عن مقال أو موضوع", en: "Search for an article or topic" })}
        className="w-full bg-transparent outline-none"
      />
    </label>
  );
}`);

write("src/components/sections/blog/CategoryFilter.tsx", String.raw`"use client";

import { articleCategoryLabels } from "@/data/articles";
import type { ArticleCategory } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const categories: Array<ArticleCategory | "all"> = ["all", "wash", "project-management", "solar", "reporting", "livelihoods", "field-leadership", "infrastructure", "impact"];

export function CategoryFilter({ active, onChange }: { active: ArticleCategory | "all"; onChange: (category: ArticleCategory | "all") => void }) {
  const { localize } = useLanguage();
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-bold transition",
            active === category ? "border-accent bg-accent text-primary" : "border-border bg-white text-primary hover:border-accent"
          )}
        >
          {localize(articleCategoryLabels[category])}
        </button>
      ))}
    </div>
  );
}`);

write("src/components/sections/blog/ArticleCard.tsx", String.raw`"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/visuals/PlaceholderImage";
import { articleCategoryLabels } from "@/data/articles";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleCard({ article }: { article: Article }) {
  const { localize, locale, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <PlaceholderImage type="article" title={localize(article.title)} subtitle={localize(articleCategoryLabels[article.category])} className="rounded-b-none" />
      <div className="flex flex-1 flex-col p-6">
        <Badge variant="blue">{localize(articleCategoryLabels[article.category])}</Badge>
        <h3 className="mt-4 text-xl font-extrabold leading-8 text-primary">{localize(article.title)}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{localize(article.excerpt)}</p>
        <div className="mt-5 flex items-center justify-between text-xs font-bold text-muted">
          <span>{formatDate(article.date, locale)}</span>
          <span>{article.readTime} {localize({ ar: "دقيقة", en: "min" })}</span>
        </div>
        <a href={"/blog/" + article.slug} className="mt-5 inline-flex items-center gap-2 font-extrabold text-secondary">
          {localize({ ar: "اقرأ المقال", en: "Read Article" })} <Arrow className="h-4 w-4" />
        </a>
      </div>
    </Card>
  );
}`);

write("src/components/sections/blog/FeaturedArticle.tsx", String.raw`"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/visuals/PlaceholderImage";
import { articleCategoryLabels } from "@/data/articles";
import type { Article } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function FeaturedArticle({ article }: { article: Article }) {
  const { localize, isArabic } = useLanguage();
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  return (
    <div className="grid gap-8 rounded-card bg-white p-6 shadow-card lg:grid-cols-[0.9fr_1.1fr]">
      <PlaceholderImage type="article" title={localize(article.title)} subtitle={localize(articleCategoryLabels[article.category])} />
      <div className="flex flex-col justify-center">
        <Badge variant="gold">{localize({ ar: "مقال مميز", en: "Featured Article" })}</Badge>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight text-primary">{localize(article.title)}</h2>
        <p className="mt-4 leading-8 text-muted">{localize(article.excerpt)}</p>
        <Button href={"/blog/" + article.slug} className="mt-7 w-fit" icon={<Arrow className="h-4 w-4" />}>
          {localize({ ar: "اقرأ المقال", en: "Read Article" })}
        </Button>
      </div>
    </div>
  );
}`);

write("src/components/sections/blog/ArticleGrid.tsx", String.raw`"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/sections/blog/ArticleCard";
import { CategoryFilter } from "@/components/sections/blog/CategoryFilter";
import { FeaturedArticle } from "@/components/sections/blog/FeaturedArticle";
import { SearchBox } from "@/components/sections/blog/SearchBox";
import { NewsletterBox } from "@/components/sections/shared/NewsletterBox";
import { Card } from "@/components/ui/Card";
import { articles } from "@/data/articles";
import type { ArticleCategory } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "all">("all");
  const { localize, locale } = useLanguage();
  const featured = articles.find((article) => article.featured) || articles[0];
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = category === "all" || article.category === category;
      const text = (article.title[locale] + " " + article.excerpt[locale] + " " + article.tags.join(" ")).toLowerCase();
      return categoryMatch && (!needle || text.includes(needle));
    });
  }, [category, locale, query]);

  const paths = [
    { ar: "مسار مشاريع WASH", en: "WASH Projects Path" },
    { ar: "مسار إدارة المشاريع", en: "Project Management Path" },
    { ar: "مسار سبل العيش", en: "Livelihoods Path" },
    { ar: "مسار التقارير", en: "Reporting Path" }
  ];

  return (
    <section className="section-padding bg-bg">
      <div className="site-container space-y-10">
        <SearchBox value={query} onChange={setQuery} />
        <CategoryFilter active={category} onChange={setCategory} />
        <FeaturedArticle article={featured} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div>
          <h2 className="mb-5 text-3xl font-extrabold text-primary">{localize({ ar: "مسارات تعلم مقترحة", en: "Suggested Learning Paths" })}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <Card key={path.en} className="bg-white">
                <h3 className="text-lg font-extrabold text-primary">{localize(path)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{localize({ ar: "مجموعة مقالات عملية تساعد على بناء فهم منهجي لهذا المجال.", en: "A practical article set for structured understanding of this field." })}</p>
              </Card>
            ))}
          </div>
        </div>
        <NewsletterBox />
      </div>
    </section>
  );
}`);

write("src/components/sections/blog/RelatedArticles.tsx", String.raw`"use client";

import { ArticleCard } from "@/components/sections/blog/ArticleCard";
import { articles } from "@/data/articles";
import { useLanguage } from "@/hooks/useLanguage";

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const { localize } = useLanguage();
  const related = articles.filter((article) => article.slug !== currentSlug).slice(0, 3);
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-extrabold text-primary">{localize({ ar: "مقالات ذات صلة", en: "Related Articles" })}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {related.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}`);

write("src/components/sections/article/ArticleHeader.tsx", String.raw`"use client";

import { Badge } from "@/components/ui/Badge";
import { articleCategoryLabels } from "@/data/articles";
import { profile } from "@/data/profile";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleHeader({ article }: { article: Article }) {
  const { localize, locale } = useLanguage();
  return (
    <header className="mb-10">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Badge variant="gold">{localize(articleCategoryLabels[article.category])}</Badge>
        <span className="text-sm font-bold text-muted">{article.readTime} {localize({ ar: "دقيقة قراءة", en: "min read" })}</span>
      </div>
      <h1 className="text-4xl font-extrabold leading-tight text-primary md:text-[52px] md:leading-[60px]">{localize(article.title)}</h1>
      <p className="mt-5 rounded-card bg-secondary/5 p-5 text-lg leading-8 text-primary">{localize(article.excerpt)}</p>
      <div className="mt-6 rounded-2xl border border-border bg-white p-4 text-sm font-bold text-muted">
        {profile.nameAr} | {profile.titleAr} | {formatDate(article.date, locale)}
      </div>
    </header>
  );
}`);

write("src/components/sections/article/TableOfContents.tsx", String.raw`"use client";

import type { Article } from "@/types";
import { slugify } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function TableOfContents({ article }: { article: Article }) {
  const { localize } = useLanguage();
  const headings = article.content.filter((block) => block.type === "heading");
  return (
    <aside className="sticky top-28 rounded-card bg-white p-5 shadow-card">
      <h2 className="mb-4 font-extrabold text-primary">{localize({ ar: "محتويات المقال", en: "Contents" })}</h2>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a key={index} className="block rounded-xl px-3 py-2 text-sm font-bold text-muted transition hover:bg-bg hover:text-primary" href={"#" + slugify(localize(heading.text))}>
            {localize(heading.text)}
          </a>
        ))}
      </nav>
    </aside>
  );
}`);

write("src/components/sections/article/InsightBox.tsx", String.raw`export function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-7 rounded-card border border-accent/30 bg-accent/10 p-5 text-lg font-bold leading-8 text-primary">
      {children}
    </div>
  );
}`);

write("src/components/sections/article/ArticleCTA.tsx", String.raw`"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleCTA() {
  const { localize } = useLanguage();
  return (
    <div className="my-10 rounded-card bg-navy-gradient p-6 text-center text-white">
      <h3 className="text-2xl font-extrabold">{localize({ ar: "هل تريد تحويل هذه الفكرة إلى خطة تنفيذ؟", en: "Want to turn this idea into an implementation plan?" })}</h3>
      <Button href="/contact" variant="gold" className="mt-5">{localize({ ar: "اطلب استشارة", en: "Request Consultation" })}</Button>
    </div>
  );
}`);

write("src/components/sections/article/ArticleBody.tsx", String.raw`"use client";

import { ArticleCTA } from "@/components/sections/article/ArticleCTA";
import { InsightBox } from "@/components/sections/article/InsightBox";
import type { Article } from "@/types";
import { slugify } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleBody({ article }: { article: Article }) {
  const { localize, locale } = useLanguage();
  let headingCount = 0;

  return (
    <div className="article-body">
      {article.content.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index} className="mb-5">{localize(block.text)}</p>;
        }
        if (block.type === "heading") {
          headingCount += 1;
          const Tag = block.level === 2 ? "h2" : "h3";
          return <Tag key={index} id={slugify(localize(block.text))}>{localize(block.text)}</Tag>;
        }
        if (block.type === "insight") {
          return <InsightBox key={index}>{localize(block.text)}</InsightBox>;
        }
        return (
          <ul key={index}>
            {block.items[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
      {headingCount > 0 ? <ArticleCTA /> : null}
      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">#{tag}</span>
        ))}
      </div>
    </div>
  );
}`);

write("src/app/layout.tsx", String.raw`import type { Metadata } from "next";
import { Cairo, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import { profile } from "@/data/profile";
import { siteKeywords } from "@/lib/constants";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap"
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap"
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Eng. Ezaldeen Albadai | مهندس مدني ومنسق مشاريع أول",
  description: "Portfolio of Eng. Ezaldeen Nasser Saad Albadai, Senior Project Coordinator and Civil Engineer specializing in humanitarian WASH, infrastructure, livelihoods, and donor reporting.",
  keywords: siteKeywords,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Eng. Ezaldeen Albadai | مهندس مدني ومنسق مشاريع أول",
    description: profile.summary.en,
    type: "profile",
    locale: "ar_YE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ezaldeen Albadai Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eng. Ezaldeen Albadai",
    description: profile.summary.en,
    images: ["/og-image.png"]
  },
  robots: "index, follow"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={[ibmPlexArabic.variable, cairo.variable, ibmMono.variable, "font-sans"].join(" ")}>
        <LanguageProvider>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}`);

write("src/app/page.tsx", String.raw`import { AboutSnapshot } from "@/components/sections/home/AboutSnapshot";
import { ExpertiseGrid } from "@/components/sections/home/ExpertiseGrid";
import { FeaturedExperience } from "@/components/sections/home/FeaturedExperience";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { ImpactHighlights } from "@/components/sections/home/ImpactHighlights";
import { LatestArticles } from "@/components/sections/home/LatestArticles";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { breadcrumbSchema, createMetadata, personSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "عزالدين البداي", en: "Ezaldeen Albadai" },
  description: { ar: "موقع المهندس عزالدين ناصر سعد البداي، مهندس مدني ومنسق مشاريع أول متخصص في المشاريع الإنسانية والتنموية.", en: "Portfolio of Eng. Ezaldeen Albadai, Senior Project Coordinator and Civil Engineer." },
  pathname: "/"
});

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }])) }} />
      <HeroSection />
      <TrustBar />
      <AboutSnapshot />
      <ExpertiseGrid />
      <ImpactHighlights />
      <FeaturedExperience />
      <LatestArticles />
      <HomeCTA />
    </>
  );
}`);

write("src/app/about/page.tsx", String.raw`import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTASection } from "@/components/sections/shared/CTASection";
import { experienceEntries } from "@/data/experience";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { breadcrumbSchema, createMetadata, personSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "من أنا", en: "About" },
  description: { ar: "تعرف على الخبرة المهنية والإنسانية للمهندس عزالدين البداي.", en: "Learn about the professional and humanitarian experience of Eng. Ezaldeen Albadai." },
  pathname: "/about/"
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about/" }])) }} />
      <PageHero eyebrow="من أنا | About" title="مهندس مدني يقود الأثر من قلب الميدان" description="خبرة تجمع بين الانضباط الهندسي، فهم المجتمع، وإدارة المشاريع الإنسانية والتنموية بمعايير مانحين دوليين." />
      <section className="section-padding bg-bg">
        <div className="site-container grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Avatar className="shadow-hover" />
          <div className="space-y-6">
            <Card>
              <h2 className="text-3xl font-extrabold text-primary">{profile.nameAr}</h2>
              <p className="mt-3 text-lg font-bold text-secondary">{profile.titleAr}</p>
              <p className="mt-5 leading-8 text-muted">{profile.summary.ar}</p>
              <p className="mt-4 leading-8 text-muted">{profile.summary.en}</p>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <Card key={service.id}>
                  <h3 className="text-xl font-extrabold text-primary">{service.title.ar}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{service.description.ar}</p>
                </Card>
              ))}
            </div>
            <Card>
              <h3 className="text-2xl font-extrabold text-primary">محطات مهنية محورية</h3>
              <div className="mt-5 grid gap-3">
                {experienceEntries.slice(0, 3).map((entry) => (
                  <div key={entry.id} className="rounded-2xl bg-bg p-4">
                    <p className="font-extrabold text-primary">{entry.role.ar}</p>
                    <p className="text-sm font-bold text-muted">{entry.org.ar} | {entry.period.ar}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
      <CTASection title="جاهز لدعم مشروعك بخبرة ميدانية قابلة للقياس" />
    </>
  );
}`);

write("src/app/experience/page.tsx", String.raw`import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";
import { PageHero } from "@/components/sections/shared/PageHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "الخبرات", en: "Experience" },
  description: { ar: "الخبرات المهنية للمهندس عزالدين البداي من 2009 حتى اليوم.", en: "Professional experience of Eng. Ezaldeen Albadai from 2009 to present." },
  pathname: "/experience/"
});

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Experience", url: "/experience/" }])) }} />
      <PageHero eyebrow="الخبرات | Experience" title="مسار مهني من التنفيذ الميداني إلى تنسيق المحافظ الكبرى" description="Timeline كامل لأدوار هندسية وإدارية في مشاريع إنسانية وتنموية بميزانيات ومؤشرات واضحة." />
      <ExperienceTimeline />
    </>
  );
}`);

write("src/app/impact/page.tsx", String.raw`import { ImpactDashboard } from "@/components/sections/impact/ImpactDashboard";
import { ImpactStats } from "@/components/sections/impact/ImpactStats";
import { CTASection } from "@/components/sections/shared/CTASection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "المشاريع والأثر", en: "Impact" },
  description: { ar: "أثر مشاريع المياه وسبل العيش والبنية التحتية التي قادها المهندس عزالدين البداي.", en: "Impact of WASH, livelihoods, and infrastructure projects led by Eng. Ezaldeen Albadai." },
  pathname: "/impact/"
});

export default function ImpactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Impact", url: "/impact/" }])) }} />
      <PageHero eyebrow="المشاريع والأثر | Impact" title="أثر قابل للقياس في المياه وسبل العيش والبنية التحتية" description="مؤشرات مختصرة توضح حجم الخبرة التنفيذية والإنسانية عبر سنوات من العمل الميداني." />
      <ImpactStats />
      <ImpactDashboard />
      <CTASection title="حوّل أهداف مشروعك إلى مؤشرات تنفيذ واضحة" />
    </>
  );
}`);

write("src/app/services/page.tsx", String.raw`import * as Icons from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/shared/CTASection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { services } from "@/data/services";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "الخدمات", en: "Services" },
  description: { ar: "خدمات إدارة وتنسيق المشاريع الإنسانية والهندسية وتقارير المانحين.", en: "Services in humanitarian project coordination, engineering supervision, and donor reporting." },
  pathname: "/services/"
});

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services/" }])) }} />
      <PageHero eyebrow="الخدمات | Services" title="خدمات مهنية متكاملة للمشاريع الإنسانية والتنموية" description="من الدراسة والتصميم إلى التنفيذ والتوثيق، بخبرة تفهم الميدان ومتطلبات المانحين." />
      <section className="section-padding bg-bg">
        <div className="site-container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.BadgeCheck;
            return (
              <Card key={service.id} className="h-full">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-extrabold text-primary">{service.title.ar}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description.ar}</p>
                <div className="mt-5 space-y-2">
                  {service.outcomes.ar.map((outcome) => (
                    <p key={outcome} className="rounded-xl bg-bg px-3 py-2 text-xs font-bold text-primary">{outcome}</p>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>
      <CTASection title="اختر خبرة تنفيذية تقلل المخاطر وترفع جودة الأثر" />
    </>
  );
}`);

write("src/app/certificates/page.tsx", String.raw`import { CertificateFilters } from "@/components/sections/certificates/CertificateFilters";
import { PageHero } from "@/components/sections/shared/PageHero";
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
      <PageHero eyebrow="الشهادات | Certificates" title="شهادات مختارة وآمنة للعرض العام" description="مجموعة من شهادات الخبرة والتدريب والتعليم دون عرض أي وثائق حساسة أو بيانات شخصية غير لازمة." />
      <CertificateFilters />
    </>
  );
}`);

write("src/app/cv/page.tsx", String.raw`import { CVEducation } from "@/components/sections/cv/CVEducation";
import { CVExperience } from "@/components/sections/cv/CVExperience";
import { CVHeader } from "@/components/sections/cv/CVHeader";
import { CVLanguages } from "@/components/sections/cv/CVLanguages";
import { CVSkills } from "@/components/sections/cv/CVSkills";
import { CVSummary } from "@/components/sections/cv/CVSummary";
import { PageHero } from "@/components/sections/shared/PageHero";
import { createMetadata, breadcrumbSchema, personSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "السيرة الذاتية", en: "CV" },
  description: { ar: "السيرة الذاتية القابلة للطباعة للمهندس عزالدين البداي.", en: "Printable CV page for Eng. Ezaldeen Albadai." },
  pathname: "/cv/"
});

export default function CVPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "CV", url: "/cv/" }])) }} />
      <div className="print-hidden">
        <PageHero eyebrow="السيرة الذاتية | CV" title="سيرة ذاتية مصممة للقراءة والطباعة" description="نسخة ويب أنيقة مع تنسيق A4 نظيف عند الطباعة من المتصفح." />
      </div>
      <section className="section-padding bg-bg">
        <div className="site-container space-y-6">
          <CVHeader />
          <CVSummary />
          <CVSkills />
          <CVExperience />
          <CVEducation />
          <CVLanguages />
        </div>
      </section>
    </>
  );
}`);

write("src/app/blog/page.tsx", String.raw`import { ArticleGrid } from "@/components/sections/blog/ArticleGrid";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "المقالات", en: "Blog" },
  description: { ar: "مقالات وأدلة مهنية في إدارة المشاريع والمياه والتقارير وسبل العيش.", en: "Professional articles and guides in project management, WASH, reporting, and livelihoods." },
  pathname: "/blog/"
});

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog/" }])) }} />
      <BlogHero />
      <ArticleGrid />
    </>
  );
}`);

write("src/app/blog/[slug]/page.tsx", String.raw`import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/sections/article/ArticleBody";
import { ArticleHeader } from "@/components/sections/article/ArticleHeader";
import { TableOfContents } from "@/components/sections/article/TableOfContents";
import { RelatedArticles } from "@/components/sections/blog/RelatedArticles";
import { CTASection } from "@/components/sections/shared/CTASection";
import { articles } from "@/data/articles";
import { articleSchema, breadcrumbSchema, createMetadata } from "@/lib/seo";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) {
    return createMetadata({
      title: { ar: "مقال غير موجود", en: "Article Not Found" },
      description: { ar: "المقال المطلوب غير موجود.", en: "The requested article was not found." },
      pathname: "/blog/"
    });
  }
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    pathname: "/blog/" + article.slug + "/"
  });
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article.title.en, article.excerpt.en, article.slug, article.date)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog/" }, { name: article.title.en, url: "/blog/" + article.slug + "/" }])) }} />
      <section className="section-padding bg-bg">
        <div className="site-container">
          <a href="/blog" className="mb-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-secondary shadow-card">← Blog</a>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="rounded-card bg-white p-6 shadow-card md:p-10">
              <ArticleHeader article={article} />
              <ArticleBody article={article} />
            </article>
            <div className="hidden lg:block">
              <TableOfContents article={article} />
            </div>
          </div>
          <RelatedArticles currentSlug={article.slug} />
        </div>
      </section>
      <CTASection title="هل تريد استشارة حول هذا الموضوع؟" />
    </>
  );
}`);

write("src/app/contact/page.tsx", String.raw`import { Mail, MapPin, MessageCircle, Phone, Timer } from "lucide-react";
import { ContactForm } from "@/components/sections/shared/ContactForm";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "تواصل", en: "Contact" },
  description: { ar: "تواصل مع المهندس عزالدين البداي للاستشارات والمشاريع والتدريب.", en: "Contact Eng. Ezaldeen Albadai for consultation, projects, and training." },
  pathname: "/contact/"
});

export default function ContactPage() {
  const items = [
    { icon: MapPin, label: "الموقع", value: profile.location.ar },
    { icon: Mail, label: "البريد الإلكتروني", value: profile.email, href: "mailto:" + profile.email },
    { icon: Phone, label: "الهاتف", value: profile.phone, href: "tel:" + profile.phone },
    { icon: Timer, label: "زمن الاستجابة", value: "خلال 24 ساعة" }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact/" }])) }} />
      <PageHero eyebrow="تواصل | Contact" title="ابدأ محادثة مهنية واضحة" description="للاستشارات، التدريب، إدارة المشاريع، أو فرص التعاون، يمكن إرسال رسالة مباشرة وسيتم الرد خلال 24 ساعة." />
      <section className="section-padding bg-bg">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {items.map((item) => (
              <Card key={item.label} className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted">{item.label}</p>
                  {item.href ? <a className="font-extrabold text-primary" href={item.href}>{item.value}</a> : <p className="font-extrabold text-primary">{item.value}</p>}
                </div>
              </Card>
            ))}
            <Card>
              <MessageCircle className="mb-4 h-9 w-9 text-success" />
              <h2 className="text-2xl font-extrabold text-primary">WhatsApp</h2>
              <p className="mt-2 text-muted">{profile.whatsapp}</p>
              <Button href={"https://wa.me/" + profile.whatsapp.replace("+", "")} target="_blank" rel="noreferrer" className="mt-5" variant="gold">
                فتح محادثة واتساب
              </Button>
            </Card>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}`);

write("src/app/not-found.tsx", String.raw`import { Button } from "@/components/ui/Button";
import { BackgroundPattern } from "@/components/visuals/BackgroundPattern";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-bg py-20 text-center">
      <BackgroundPattern />
      <div className="site-container relative">
        <div className="mx-auto max-w-2xl">
          <p className="bg-gold-gradient bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-extrabold text-primary">الصفحة غير موجودة — لكن الحل دائمًا موجود</h1>
          <p className="mt-4 text-muted">The page could not be found, but the path back is clear.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">العودة للرئيسية</Button>
            <Button href="/contact" variant="outline">تواصل معنا</Button>
          </div>
        </div>
      </div>
    </section>
  );
}`);

write("src/app/api/contact/route.ts", String.raw`import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Contact request received successfully.",
    data: {
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      requestType: parsed.data.requestType
    }
  });
}`);

write("src/app/api/newsletter/route.ts", String.raw`import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Newsletter subscription received successfully.",
    data: { email: parsed.data.email }
  });
}`);

write("public/robots.txt", String.raw`User-agent: *
Allow: /

Sitemap: http://localhost:3000/sitemap.xml`);

write("public/sitemap.xml", String.raw`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>http://localhost:3000/</loc><lastmod>2026-05-19</lastmod><priority>1.0</priority></url>
  <url><loc>http://localhost:3000/about/</loc><lastmod>2026-05-19</lastmod><priority>0.8</priority></url>
  <url><loc>http://localhost:3000/experience/</loc><lastmod>2026-05-19</lastmod><priority>0.8</priority></url>
  <url><loc>http://localhost:3000/impact/</loc><lastmod>2026-05-19</lastmod><priority>0.8</priority></url>
  <url><loc>http://localhost:3000/services/</loc><lastmod>2026-05-19</lastmod><priority>0.8</priority></url>
  <url><loc>http://localhost:3000/certificates/</loc><lastmod>2026-05-19</lastmod><priority>0.8</priority></url>
  <url><loc>http://localhost:3000/cv/</loc><lastmod>2026-05-19</lastmod><priority>0.8</priority></url>
  <url><loc>http://localhost:3000/blog/</loc><lastmod>2026-05-19</lastmod><priority>0.7</priority></url>
  <url><loc>http://localhost:3000/contact/</loc><lastmod>2026-05-19</lastmod><priority>0.8</priority></url>
</urlset>`);

write("public/site.webmanifest", String.raw`{
  "name": "Ezaldeen Albadai Professional Portfolio",
  "short_name": "Ezaldeen Albadai",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F7F8FA",
  "theme_color": "#0F2742",
  "icons": [
    {
      "src": "/favicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ]
}`);

write("public/assets/documents/.gitkeep", "");

const certificateAssets = [
  ["cert-experience-islamic-relief-2024-placeholder.svg", "Certificate of Experience", "Islamic Relief Yemen", "2024"],
  ["cert-civil-engineering-dhamar-2003-placeholder.svg", "Bachelor Civil Engineering", "Dhamar University", "2003"],
  ["cert-valuelinks-2023-placeholder.svg", "ValueLinks Training", "Capacity Building", "2023"],
  ["cert-solar-pumping-2022-placeholder.svg", "Solar Pumping Systems", "Technical Training", "2022"],
  ["cert-pmd-pro-1-2021-placeholder.svg", "PMD Pro 1", "Project Management", "2021"],
  ["cert-proposal-report-writing-2021-placeholder.svg", "Proposal & Report Writing", "Professional Training", "2021"],
  ["cert-microsoft-project-2024-placeholder.svg", "Microsoft Project", "Planning Tools", "2024"],
  ["cert-financial-management-2017-placeholder.svg", "Financial Management", "Finance Training", "2017"],
  ["cert-security-focal-point-2015-placeholder.svg", "Security Focal Point", "Safety & Security", "2015"],
  ["cert-first-aid-red-crescent-2016-placeholder.svg", "First Aid", "Red Crescent", "2016"]
];

for (const [fileName, title, issuer, year] of certificateAssets) {
  write("public/assets/certificates/" + fileName, String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="620" viewBox="0 0 900 620" role="img" aria-label="Certificate placeholder">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#F7F8FA"/>
      <stop offset="100%" stop-color="#FFFFFF"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#D6A84F"/>
      <stop offset="100%" stop-color="#B8891A"/>
    </linearGradient>
  </defs>
  <rect width="900" height="620" rx="34" fill="url(#bg)"/>
  <rect x="42" y="42" width="816" height="536" rx="28" fill="none" stroke="#0F2742" stroke-width="3"/>
  <rect x="68" y="68" width="764" height="484" rx="22" fill="none" stroke="#D6A84F" stroke-width="2" stroke-dasharray="14 12"/>
  <circle cx="450" cy="156" r="58" fill="#0F2742"/>
  <path d="M426 151h48v70l-24-16-24 16z" fill="url(#gold)"/>
  <path d="M410 142h80v20h-80z" fill="#FFFFFF" opacity="0.88"/>
  <text x="450" y="272" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="#0F2742">${title}</text>
  <text x="450" y="322" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="600" fill="#2563EB">${issuer}</text>
  <text x="450" y="366" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#6B7280">${year}</text>
  <rect x="250" y="420" width="400" height="62" rx="31" fill="#0F2742"/>
  <text x="450" y="460" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#D6A84F">Safe Public Certificate Visual</text>
  <path d="M110 510h145M645 510h145" stroke="#D6A84F" stroke-width="4" stroke-linecap="round"/>
</svg>`);
}

write("public/downloads/Ezaldeen-Albadai-CV.pdf", String.raw`%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 214 >>
stream
BT
/F1 22 Tf
72 720 Td
(Eng. Ezaldeen Nasser Saad Albadai) Tj
0 -34 Td
/F1 14 Tf
(Senior Project Coordinator | Civil Engineer) Tj
0 -30 Td
(Professional CV preview. Use the website CV page print button for the styled PDF layout.) Tj
0 -24 Td
(Email: albadai.ezz2003@gmail.com | Phone: +967775196019) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000241 00000 n 
0000000506 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
576
%%EOF`);

const onePixelPng = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMklEQVR42u3OMQ0AIAwAsR3/0mZgIHoKCg5r2TvnAQAAAAAAAAAAAAAAAAAAwGcBf5IAAfJrL8EAAAAASUVORK5CYII=";
writeBinary("public/favicon-32x32.png", onePixelPng);
writeBinary("public/apple-touch-icon.png", onePixelPng);
writeBinary("public/favicon.ico", onePixelPng);
writeBinary("public/og-image.png", onePixelPng);

console.log("Portfolio scaffold generated.");
