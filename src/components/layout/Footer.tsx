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
              <a
                href="https://www.linkedin.com/in/ezaldeen-albadi-02880a356"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a className="inline-flex rounded-full bg-accent px-4 py-2 font-bold text-primary" href={profile.cvPath} download>
                {localize({ ar: "تحميل السيرة", en: "Download CV" })}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p>
            © {year} {localize({ ar: "عزالدين ناصر سعد البداي. جميع الحقوق محفوظة.", en: "Ezaldeen Nasser Saad Albadai. All rights reserved." })}
            <span className="ms-3 text-xs text-white/20">
              {localize({
                ar: "تصميم وتطوير: م/زكريا علي البداي",
                en: "Design & Development: Eng. Zakaria Ali Albadai"
              })}
            </span>
          </p>
          <p>Built with precision and purpose</p>
        </div>
      </div>
    </footer>
  );
}
