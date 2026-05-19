"use client";

import { useMemo, useState } from "react";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";
import { CertificateCard } from "@/components/sections/certificates/CertificateCard";
import { CertificateLightbox } from "@/components/sections/certificates/CertificateLightbox";
import { certificates, certificateCategoryLabels } from "@/data/certificates";
import type { Certificate, CertificateCategory } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const categories: Array<CertificateCategory | "all"> = ["all", "experience", "academic", "project-management", "wash-energy", "reports", "safety-security", "finance-tools"];

export function CertificateFilters() {
  const [active, setActive] = useState<CertificateCategory | "all">("all");
  const [selected, setSelected] = useState<Certificate | null>(null);
  const { localize } = useLanguage();
  const filtered = useMemo(() => certificates.filter((certificate) => active === "all" || certificate.category === active), [active]);

  return (
    <section className="section-padding bg-bg">
      <div className="site-container">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-bold transition",
                active === category ? "border-accent bg-accent text-primary" : "border-border bg-white text-primary hover:border-accent"
              )}
            >
              {localize(certificateCategoryLabels[category])}
            </button>
          ))}
        </div>
        <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((certificate) => (
            <StaggerItem key={certificate.id}>
              <CertificateCard certificate={certificate} onOpen={setSelected} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
      <CertificateLightbox certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
