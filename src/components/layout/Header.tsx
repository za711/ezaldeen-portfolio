"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { headerDrop } from "@/lib/animations";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function Header() {
  const pathname = usePathname();
  const progress = useScrollProgress();
  const { localize } = useLanguage();

  return (
    <motion.header
      variants={headerDrop}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-md print-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-border/60">
        <div className="h-full bg-gold-gradient transition-[width] duration-150" style={{ width: progress + "%" }} />
      </div>
      <div className="site-container flex h-20 items-center justify-between gap-4 max-lg:h-16">
        <a href="/" className="min-w-0">
          <p className="truncate text-lg font-extrabold text-primary">{localize({ ar: "عزالدين البداي", en: "Ezaldeen Albadai" })}</p>
          <p className="truncate text-xs font-semibold text-muted">{profile.tagline}</p>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.slice(0, 7).map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <a
                key={item.id}
                href={item.href}
                className="nav-link text-sm font-bold text-primary/80 hover:text-accent"
                data-active={active}
              >
                {localize(item.label)}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button href={profile.cvPath} download variant="gold" size="md" icon={<Download className="h-4 w-4" />} className="hidden xl:inline-flex">
            {localize({ ar: "تحميل السيرة", en: "Download CV" })}
          </Button>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
