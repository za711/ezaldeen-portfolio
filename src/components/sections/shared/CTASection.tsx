"use client";

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
}
