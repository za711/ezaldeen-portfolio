"use client";

import { useRef } from "react";
import { Award, Briefcase, CheckCircle, Download, Globe, GraduationCap, Mail, MapPin, Phone, Printer, Star } from "lucide-react";
import { certificates } from "@/data/certificates";
import { experienceEntries } from "@/data/experience";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export default function CVDocument({ lang }: { lang?: "ar" | "en" }) {
  const printRef = useRef<HTMLDivElement>(null);
  const { locale, localize } = useLanguage();
  const activeLang = lang ?? locale;
  const isRTL = activeLang === "ar";

  const skills = {
    ar: [
      "إدارة مشاريع WASH",
      "أنظمة الطاقة الشمسية",
      "سبل العيش",
      "Cash for Work",
      "الإشراف الهندسي",
      "تقارير المانحين",
      "دراسات فنية وتكاليف",
      "AutoCAD",
      "MS Project",
      "قيادة الفرق الميدانية",
      "التنسيق المجتمعي",
      "إدارة العقود"
    ],
    en: [
      "WASH Project Management",
      "Solar Energy Systems",
      "Livelihoods",
      "Cash for Work",
      "Engineering Supervision",
      "Donor Reporting",
      "Technical Studies & Costing",
      "AutoCAD",
      "MS Project",
      "Field Team Leadership",
      "Community Coordination",
      "Contract Management"
    ]
  };

  const safeCertificates = certificates.filter((certificate) => !certificate.sensitive).slice(0, 9);

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mb-8 flex flex-wrap gap-3 print:hidden">
        <a
          href={profile.cvPath}
          download
          className="inline-flex items-center gap-2 rounded-full bg-[#0F2742] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1B4F8A]"
        >
          <Download className="h-4 w-4" />
          {isRTL ? "تحميل PDF" : "Download PDF"}
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-2.5 text-sm font-bold text-[#0F2742] transition-colors hover:border-[#D6A84F]"
        >
          <Printer className="h-4 w-4" />
          {isRTL ? "طباعة" : "Print"}
        </button>
      </div>

      <div
        id="cv-print"
        ref={printRef}
        className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-2xl print:rounded-none print:shadow-none"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0F2742] to-[#1B4F8A] px-10 py-10">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#D6A84F]/10" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/5" />

          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                {isRTL ? profile.nameAr : profile.nameEn.replace("Eng. ", "")}
              </h1>
              <p className="mt-1 text-lg font-bold text-[#D6A84F]">
                {isRTL ? profile.titleAr : profile.titleEn}
              </p>
              <p className="mt-1 font-mono text-sm text-white/50 [direction:ltr]">
                Eng. Ezaldeen Nasser Saad Albadai
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                {[
                  { icon: Mail, text: profile.email },
                  { icon: Phone, text: profile.phone },
                  { icon: MapPin, text: localize(profile.location) },
                  { icon: Globe, text: "linkedin.com/in/ezaldeen-albadi-02880a356" }
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-xs text-white/60">
                    <Icon className="h-3 w-3 text-[#D6A84F]" />
                    <span className="[direction:ltr]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { n: "15+", l: isRTL ? "سنة" : "Years" },
                { n: "49", l: isRTL ? "مشروع مياه" : "Water" },
                { n: "$13M+", l: isRTL ? "ميزانيات" : "Budgets" }
              ].map(({ n, l }) => (
                <div key={n} className="min-w-[72px] rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center">
                  <div className="text-xl font-extrabold text-[#D6A84F]">{n}</div>
                  <div className="mt-0.5 text-xs text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 p-8 md:p-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section>
              <h2 className="mb-4 flex items-center gap-2 border-b-2 border-[#D6A84F] pb-2 text-base font-extrabold text-[#0F2742]">
                <Star className="h-4 w-4 text-[#D6A84F]" />
                {isRTL ? "الملخص التنفيذي" : "Executive Summary"}
              </h2>
              <p className="rounded-xl border-s-4 border-[#D6A84F] bg-[#F7F8FA] p-4 text-sm leading-relaxed text-[#374151]">
                {localize(profile.summary)}
              </p>
            </section>

            <section>
              <h2 className="mb-5 flex items-center gap-2 border-b-2 border-[#D6A84F] pb-2 text-base font-extrabold text-[#0F2742]">
                <Briefcase className="h-4 w-4 text-[#D6A84F]" />
                {isRTL ? "الخبرة المهنية" : "Professional Experience"}
              </h2>
              <div className="space-y-5">
                {experienceEntries.slice(0, 6).map((entry) => (
                  <div key={entry.id} className="relative border-s-2 border-[#E5E7EB] ps-4 transition-colors hover:border-[#D6A84F]">
                    <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="text-sm font-bold text-[#0F2742]">{localize(entry.role)}</span>
                        <span className="mx-1.5 text-sm font-semibold text-[#2563EB]">—</span>
                        <span className="text-sm font-semibold text-[#2563EB]">{localize(entry.org)}</span>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-[#EEF2FF] px-2.5 py-1 text-xs font-bold text-[#2563EB]">
                        {entry.donor}
                        {entry.budget ? ` · ${entry.budget}` : ""}
                      </span>
                    </div>
                    <div className="mb-2 flex gap-3">
                      <span className="text-xs font-medium text-[#6B7280]">{localize(entry.period)}</span>
                    </div>
                    <ul className="space-y-1">
                      {entry.bullets[activeLang].slice(0, 4).map((bullet) => (
                        <li key={bullet} className="flex items-start gap-1.5 text-xs leading-relaxed text-[#4B5563]">
                          <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#D6A84F]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-7">
            <section>
              <h2 className="mb-4 flex items-center gap-2 border-b-2 border-[#D6A84F] pb-2 text-sm font-extrabold text-[#0F2742]">
                <GraduationCap className="h-4 w-4 text-[#D6A84F]" />
                {isRTL ? "التعليم" : "Education"}
              </h2>
              <div className="rounded-xl bg-[#F7F8FA] p-4">
                <div className="text-sm font-bold text-[#0F2742]">
                  {isRTL ? "بكالوريوس هندسة مدنية" : "Bachelor of Civil Engineering"}
                </div>
                <div className="mt-1 text-xs font-semibold text-[#2563EB]">
                  {isRTL ? "جامعة ذمار" : "Dhamar University"}
                </div>
                <div className="mt-1 text-xs text-[#9CA3AF]">2003</div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2 border-b-2 border-[#D6A84F] pb-2 text-sm font-extrabold text-[#0F2742]">
                <Star className="h-4 w-4 text-[#D6A84F]" />
                {isRTL ? "المهارات" : "Skills"}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills[activeLang].map((skill) => (
                  <span key={skill} className="rounded-full bg-[#EEF2FF] px-2.5 py-1 text-xs font-semibold text-[#1e40af]">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2 border-b-2 border-[#D6A84F] pb-2 text-sm font-extrabold text-[#0F2742]">
                <Globe className="h-4 w-4 text-[#D6A84F]" />
                {isRTL ? "اللغات" : "Languages"}
              </h2>
              <div className="space-y-3">
                {[
                  { language: isRTL ? "العربية" : "Arabic", level: isRTL ? "لغة أم" : "Native", pct: 100, color: "#059669" },
                  { language: isRTL ? "الإنجليزية" : "English", level: isRTL ? "ممتازة" : "Excellent", pct: 85, color: "#2563EB" }
                ].map(({ language, level, pct, color }) => (
                  <div key={language}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="font-bold text-[#0F2742]">{language}</span>
                      <span className="font-semibold" style={{ color }}>
                        {level}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#E5E7EB]">
                      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2 border-b-2 border-[#D6A84F] pb-2 text-sm font-extrabold text-[#0F2742]">
                <Award className="h-4 w-4 text-[#D6A84F]" />
                {isRTL ? "الشهادات" : "Certifications"}
              </h2>
              <div className="space-y-2">
                {safeCertificates.map((certificate) => (
                  <div key={certificate.id} className="flex items-start justify-between gap-2 border-b border-[#F3F4F6] pb-2 text-xs last:border-0 last:pb-0">
                    <span className="leading-relaxed text-[#374151]">{localize(certificate.title)}</span>
                    <span className="flex-shrink-0 font-bold text-[#D6A84F]">{certificate.year}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 border-b-2 border-[#D6A84F] pb-2 text-sm font-extrabold text-[#0F2742]">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/ezaldeen-albadi-02880a356"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-xs text-[#2563EB] hover:underline [direction:ltr]"
              >
                linkedin.com/in/ezaldeen-albadi-02880a356
              </a>
            </section>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#E5E7EB] bg-[#F7F8FA] px-10 py-4 print:bg-white">
          <span className="text-xs text-[#9CA3AF]">Eng. Ezaldeen Nasser Saad Albadai — Civil Engineer</span>
          <span className="text-xs font-bold text-[#D6A84F]">{new Date().getFullYear()}</span>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #cv-print,
          #cv-print * {
            visibility: visible;
          }
          #cv-print {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
