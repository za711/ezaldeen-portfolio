export type Locale = "ar" | "en";

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
  pdfPath?: string;
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
}
