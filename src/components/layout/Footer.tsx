"use client";

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
}
