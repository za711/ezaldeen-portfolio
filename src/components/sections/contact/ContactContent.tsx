"use client";

import { Mail, MapPin, MessageCircle, Phone, Timer } from "lucide-react";
import { ContactForm } from "@/components/sections/shared/ContactForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactContent() {
  const { localize } = useLanguage();
  const items = [
    { icon: MapPin, label: { ar: "الموقع", en: "Location" }, value: profile.location },
    { icon: Mail, label: { ar: "البريد الإلكتروني", en: "Email" }, value: { ar: profile.email, en: profile.email }, href: "mailto:" + profile.email },
    { icon: Phone, label: { ar: "الهاتف", en: "Phone" }, value: { ar: profile.phone, en: profile.phone }, href: "tel:" + profile.phone },
    { icon: Timer, label: { ar: "زمن الاستجابة", en: "Response Time" }, value: { ar: "خلال 24 ساعة", en: "Within 24 hours" } }
  ];

  return (
    <section className="section-padding bg-bg">
      <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {items.map((item) => (
            <Card key={item.label.en} className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-muted">{localize(item.label)}</p>
                {item.href ? <a className="font-extrabold text-primary" href={item.href}>{localize(item.value)}</a> : <p className="font-extrabold text-primary">{localize(item.value)}</p>}
              </div>
            </Card>
          ))}
          <Card>
            <MessageCircle className="mb-4 h-9 w-9 text-success" />
            <h2 className="text-2xl font-extrabold text-primary">WhatsApp</h2>
            <p className="mt-2 text-muted">{profile.whatsapp}</p>
            <Button href={"https://wa.me/" + profile.whatsapp.replace("+", "")} target="_blank" rel="noreferrer" className="mt-5" variant="gold">
              {localize({ ar: "فتح محادثة واتساب", en: "Open WhatsApp Chat" })}
            </Button>
          </Card>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
