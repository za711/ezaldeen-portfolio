"use client";

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
}
