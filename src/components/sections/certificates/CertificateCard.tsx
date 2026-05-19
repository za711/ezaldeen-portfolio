"use client";

import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/visuals/PlaceholderImage";
import { certificateCategoryLabels } from "@/data/certificates";
import type { Certificate } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function CertificateCard({ certificate, onOpen }: { certificate: Certificate; onOpen: (certificate: Certificate) => void }) {
  const { localize } = useLanguage();

  return (
    <Card className={certificate.featured ? "md:col-span-2 lg:col-span-3" : ""}>
      <div className={certificate.featured ? "grid gap-6 md:grid-cols-[0.9fr_1.1fr]" : ""}>
        <div className="overflow-hidden rounded-2xl">
          <PlaceholderImage type="certificate" title={localize(certificate.title)} subtitle={certificate.year} imagePath={certificate.imagePath} />
        </div>
        <div className="mt-5 flex flex-col justify-between md:mt-0">
          <div>
            <Badge variant="gold">{localize(certificateCategoryLabels[certificate.category])}</Badge>
            <h3 className="mt-4 text-2xl font-extrabold text-primary">{localize(certificate.title)}</h3>
            <p className="mt-2 font-bold text-secondary">{localize(certificate.issuer)}</p>
            <p className="mt-1 text-sm text-muted">{certificate.year}</p>
          </div>
          <Button variant="outline" className="mt-6" icon={<Eye className="h-4 w-4" />} onClick={() => onOpen(certificate)}>
            {localize({ ar: "عرض الشهادة", en: "View Certificate" })}
          </Button>
          {certificate.pdfPath ? (
            <a
              href={certificate.pdfPath}
              download
              className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] transition-colors hover:text-[#1B4F8A]"
              onClick={(event) => event.stopPropagation()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {localize({ ar: "تحميل PDF", en: "Download PDF" })}
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
