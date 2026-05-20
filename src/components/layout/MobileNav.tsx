"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { localize, locale } = useLanguage();

  return (
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[1000] bg-primary/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-[1001] overflow-y-auto bg-white p-6 shadow-hover" dir={locale === "ar" ? "rtl" : "ltr"}>
          <div className="mb-10 flex items-center justify-between">
            <Dialog.Title className="text-lg font-extrabold text-primary">{localize({ ar: "القائمة", en: "Menu" })}</Dialog.Title>
            <Dialog.Close asChild>
              <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
          <nav className="space-y-3">
            {navigation.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block min-h-[44px] w-full rounded-2xl border border-border px-6 py-4 text-right text-lg font-bold text-primary ltr:text-left"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {localize(item.label)}
              </motion.a>
            ))}
          </nav>
          <div className="mt-8">
            <Button href={profile.cvPath} download variant="gold" className="w-full">
              {localize({ ar: "تحميل السيرة", en: "Download CV" })}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
