"use client";

import { motion } from "framer-motion";
import { Download, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BackgroundPattern } from "@/components/visuals/BackgroundPattern";
import { HeroDashboard } from "@/components/visuals/HeroDashboard";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";
import { wordReveal } from "@/lib/animations";

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
      <div className="site-container relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 18 }}>
            <Badge variant="gold" className="mb-6 gap-2 text-sm">
              <ShieldCheck className="h-4 w-4" />
              {localize({ ar: "15+ سنة خبرة ميدانية", en: "15+ years of field experience" })}
            </Badge>
          </motion.div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-primary md:text-[56px] md:leading-[64px]" aria-label={headline}>
            {words.map((word, index) => (
              <motion.span
                key={word + index}
                custom={index}
                className="inline-block"
                initial="hidden"
                animate="visible"
                variants={wordReveal}
                style={{ display: "inline-block" }}
              >
                {word}
                {index < words.length - 1 ? " " : ""}
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
        <div className="hidden animate-float lg:block">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
