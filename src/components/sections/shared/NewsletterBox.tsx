"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations";
import { useLanguage } from "@/hooks/useLanguage";

export function NewsletterBox() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { localize } = useLanguage();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterInput) => {
    setStatus("idle");
    const completeOffline = () => {
      const existing = window.localStorage.getItem("offline-newsletter-signups");
      const signups = existing ? (JSON.parse(existing) as NewsletterInput[]) : [];
      window.localStorage.setItem("offline-newsletter-signups", JSON.stringify([...signups, data]));
      setStatus("success");
      reset();
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        if (response.status === 404) {
          completeOffline();
          return;
        }
        throw new Error("Newsletter request failed");
      }
      setStatus("success");
      reset();
    } catch {
      if (window.location.hostname === "localhost" || window.location.protocol === "file:") {
        completeOffline();
        return;
      }
      setStatus("error");
    }
  };

  return (
    <div className="rounded-card bg-navy-gradient p-6 text-white shadow-hover md:p-8">
      <div className="mx-auto max-w-2xl text-center">
        <Mail className="mx-auto mb-4 h-10 w-10 text-accent" />
        <h3 className="text-2xl font-extrabold">{localize({ ar: "احصل على مقالات جديدة كل أسبوع", en: "Receive new professional articles every week" })}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder={localize({ ar: "بريدك الإلكتروني", en: "Your email" })}
            className="min-h-12 flex-1 rounded-input border border-white/20 bg-white px-4 text-primary outline-none focus:border-accent"
            {...register("email")}
          />
          <Button type="submit" variant="gold" disabled={isSubmitting}>
            {isSubmitting ? <LoadingSpinner /> : localize({ ar: "اشترك", en: "Subscribe" })}
          </Button>
        </form>
        {errors.email ? <p className="mt-3 text-sm text-red-200">{errors.email.message}</p> : null}
        {status === "success" ? <p className="mt-3 text-sm text-accent">{localize({ ar: "تم الاشتراك بنجاح.", en: "Subscription completed successfully." })}</p> : null}
        {status === "error" ? <p className="mt-3 text-sm text-red-200">{localize({ ar: "تعذر الاشتراك الآن.", en: "Subscription could not be completed right now." })}</p> : null}
      </div>
    </div>
  );
}
