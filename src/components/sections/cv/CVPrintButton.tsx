"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export function CVPrintButton() {
  const { localize } = useLanguage();
  return (
    <Button variant="outline" icon={<Printer className="h-4 w-4" />} onClick={() => window.print()}>
      {localize({ ar: "طباعة", en: "Print" })}
    </Button>
  );
}
