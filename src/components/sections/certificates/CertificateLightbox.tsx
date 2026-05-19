"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Download, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Certificate } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

export function CertificateLightbox({ certificate, onClose }: { certificate: Certificate | null; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  const { localize } = useLanguage();

  return (
    <Dialog.Root open={Boolean(certificate)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(94vw,980px)] -translate-x-1/2 -translate-y-1/2 rounded-card bg-white p-4 shadow-hover md:p-6">
          {certificate ? (
            <>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <Dialog.Title className="text-xl font-extrabold text-primary">{localize(certificate.title)}</Dialog.Title>
                  <p className="text-sm text-muted">{localize(certificate.issuer)} — {certificate.year}</p>
                </div>
                <Dialog.Close asChild>
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" aria-label="Close certificate">
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="max-h-[70vh] overflow-auto rounded-2xl bg-bg p-4">
                <div className="mx-auto transition-transform" style={{ width: 820 * zoom }}>
                  <Image src={certificate.imagePath} alt={localize(certificate.title)} width={900} height={620} className="h-auto w-full rounded-xl shadow-card" />
                </div>
              </div>
              {certificate.pdfPath ? (
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href={certificate.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0F2742] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1B4F8A]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    {localize({ ar: "عرض PDF كاملًا", en: "View Full PDF" })}
                  </a>
                  <a
                    href={certificate.pdfPath}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-[#D6A84F] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#B8891A]"
                  >
                    {localize({ ar: "↓ تحميل الشهادة", en: "↓ Download Certificate" })}
                  </a>
                </div>
              ) : null}
              <div className="mt-4 flex flex-wrap justify-between gap-3">
                <div className="flex gap-2">
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" onClick={() => setZoom((current) => Math.max(0.75, current - 0.15))} aria-label="Zoom out">
                    <Minus className="h-4 w-4" />
                  </button>
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-border" onClick={() => setZoom((current) => Math.min(1.4, current + 0.15))} aria-label="Zoom in">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button href={certificate.imagePath} download variant="gold" size="md" icon={<Download className="h-4 w-4" />}>
                  {localize({ ar: "تحميل", en: "Download" })}
                </Button>
              </div>
            </>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
