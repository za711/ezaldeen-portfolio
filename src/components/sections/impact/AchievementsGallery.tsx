"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { achievements } from "@/data/achievements";
import { useLanguage } from "@/hooks/useLanguage";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  { key: "all", ar: "الكل", en: "All" },
  { key: "wash", ar: "WASH", en: "WASH" },
  { key: "solar", ar: "طاقة شمسية", en: "Solar" },
  { key: "livelihoods", ar: "سبل العيش", en: "Livelihoods" },
  { key: "infrastructure", ar: "بنية تحتية", en: "Infrastructure" },
  { key: "field", ar: "عمل ميداني", en: "Field Work" }
] as const;

interface Props {
  lang?: "ar" | "en";
}

export default function AchievementsGallery({ lang }: Props) {
  const { locale } = useLanguage();
  const currentLang = lang ?? locale;
  const [active, setActive] = useState<(typeof categories)[number]["key"]>("all");
  const [selected, setSelected] = useState<(typeof achievements)[0] | null>(null);

  const filtered = active === "all" ? achievements : achievements.filter((item) => item.category === active);

  return (
    <section className="bg-white py-24" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            {currentLang === "ar" ? "من الميدان" : "From the Field"}
          </p>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0F2742]">
            {currentLang === "ar" ? "صور الإنجازات" : "Achievement Gallery"}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6B7280]">
            {currentLang === "ar"
              ? "لقطات حقيقية من مشاريع ميدانية في WASH، الطاقة الشمسية، وسبل العيش"
              : "Real field shots from WASH, solar energy, and livelihoods projects"}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActive(category.key)}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 ${
                active === category.key
                  ? "border-[#0F2742] bg-[#0F2742] text-white"
                  : "border-[#E5E7EB] bg-white text-[#6B7280] hover:border-[#D6A84F]"
              }`}
            >
              {currentLang === "ar" ? category.ar : category.en}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3"
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="card-hover group mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white"
              onClick={() => setSelected(item)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={currentLang === "ar" ? item.titleAr : item.titleEn}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ height: "auto" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2742]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white">{currentLang === "ar" ? item.titleAr : item.titleEn}</p>
                  <p className="mt-1 text-xs text-[#D6A84F]">
                    {item.project} · {item.year}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-bold text-[#2563EB]">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="mt-2 text-sm font-bold text-[#0F2742]">
                  {currentLang === "ar" ? item.titleAr : item.titleEn}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selected ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-h-[90vh] w-full max-w-3xl overflow-hidden overflow-y-auto rounded-2xl bg-white"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative">
                  <Image
                    src={selected.imagePath}
                    alt={currentLang === "ar" ? selected.titleAr : selected.titleEn}
                    width={900}
                    height={600}
                    className="max-h-[60vh] w-full object-cover"
                  />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-[#0F2742] transition-colors hover:bg-white"
                    aria-label={currentLang === "ar" ? "إغلاق" : "Close"}
                  >
                    ×
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-extrabold text-[#0F2742]">
                    {currentLang === "ar" ? selected.titleAr : selected.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {currentLang === "ar" ? selected.descriptionAr : selected.descriptionEn}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <span className="rounded-full bg-[#EEF2FF] px-3 py-1.5 text-xs font-bold text-[#2563EB]">
                      {selected.project}
                    </span>
                    <span className="rounded-full bg-[#F7F8FA] px-3 py-1.5 text-xs text-[#6B7280]">
                      {selected.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
