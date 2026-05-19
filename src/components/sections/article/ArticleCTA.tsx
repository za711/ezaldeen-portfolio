"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";

export function ArticleCTA() {
  const { localize } = useLanguage();
  return (
    <div className="my-10 rounded-card bg-navy-gradient p-6 text-center text-white">
      <h3 className="text-2xl font-extrabold">{localize({ ar: "هل تريد تحويل هذه الفكرة إلى خطة تنفيذ؟", en: "Want to turn this idea into an implementation plan?" })}</h3>
      <Button href="/contact" variant="gold" className="mt-5">{localize({ ar: "اطلب استشارة", en: "Request Consultation" })}</Button>
    </div>
  );
}
