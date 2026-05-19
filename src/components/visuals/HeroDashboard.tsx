"use client";

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
}
