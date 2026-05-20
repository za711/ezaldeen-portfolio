"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badgeAr?: string;
  badgeEn?: string;
  titleAr?: string;
  titleEn?: string;
  subtitleAr?: string;
  subtitleEn?: string;
  lang?: "ar" | "en";
  icon?: string;
  stats?: { value: string; labelAr: string; labelEn: string }[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function PageHero({
  badgeAr,
  badgeEn,
  titleAr,
  titleEn,
  subtitleAr,
  subtitleEn,
  lang = "ar",
  icon,
  stats,
  eyebrow,
  title,
  description
}: PageHeroProps) {
  const isRTL = lang === "ar";
  const resolvedBadgeAr = badgeAr ?? eyebrow ?? "";
  const resolvedBadgeEn = badgeEn ?? eyebrow ?? "";
  const resolvedTitleAr = titleAr ?? title ?? "";
  const resolvedTitleEn = titleEn ?? title ?? "";
  const resolvedSubtitleAr = subtitleAr ?? description;
  const resolvedSubtitleEn = subtitleEn ?? description;

  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3A] via-[#0F2742] to-[#0A1628]" />
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/[0.08] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-[#D6A84F]/[0.06] blur-2xl" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D6A84F]/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-12 pt-24">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2"
            >
              {icon && <span className="text-lg">{icon}</span>}
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#D6A84F]">
                {isRTL ? resolvedBadgeAr : resolvedBadgeEn}
              </span>
              <span className="text-xs text-[#D6A84F]/30">◆</span>
              <span className="font-mono text-xs text-white/30">{isRTL ? resolvedBadgeEn : resolvedBadgeAr}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {isRTL ? resolvedTitleAr : resolvedTitleEn}
            </motion.h1>

            {(resolvedSubtitleAr || resolvedSubtitleEn) && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl text-base leading-relaxed text-white/55"
              >
                {isRTL ? resolvedSubtitleAr : resolvedSubtitleEn}
              </motion.p>
            )}
          </div>

          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((stat) => (
                    <div key={`${stat.value}-${stat.labelEn}`} className="flex items-center justify-between border-b border-white/[0.08] pb-3 last:border-0 last:pb-0">
                      <span className="text-xs text-white/50">{isRTL ? stat.labelAr : stat.labelEn}</span>
                      <span className="text-xl font-extrabold text-[#D6A84F]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-[#D6A84F]/40 via-white/10 to-transparent" />
      </div>
    </section>
  );
}

export default PageHero;
