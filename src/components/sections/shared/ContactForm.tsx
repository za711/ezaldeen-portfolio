"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { requestTypeOptions } from "@/lib/constants";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { useLanguage } from "@/hooks/useLanguage";

export function ContactForm() {
  const { localize } = useLanguage();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { requestType: "consultation" }
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    const completeOffline = () => {
      const existing = window.localStorage.getItem("offline-contact-requests");
      const requests = existing ? (JSON.parse(existing) as ContactInput[]) : [];
      window.localStorage.setItem("offline-contact-requests", JSON.stringify([...requests, data]));
      setStatus("success");
      reset({ requestType: "consultation" });
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        if (response.status === 404) {
          completeOffline();
          return;
        }
        throw new Error("Contact request failed");
      }
      setStatus("success");
      reset({ requestType: "consultation" });
    } catch {
      if (window.location.hostname === "localhost" || window.location.protocol === "file:") {
        completeOffline();
        return;
      }
      setStatus("error");
    }
  };

  const fieldClass = "min-h-12 rounded-input border border-border bg-white px-4 text-primary outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-card bg-white p-6 shadow-card md:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "الاسم الكامل *", en: "Full Name *" })}</span>
          <input className={fieldClass} {...register("fullName")} />
          {errors.fullName ? <span className="text-sm text-red-600">{errors.fullName.message}</span> : null}
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "الجهة / المنظمة", en: "Organization" })}</span>
          <input className={fieldClass} {...register("organization")} />
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-primary">{localize({ ar: "البريد الإلكتروني *", en: "Email *" })}</span>
            <input type="email" className={fieldClass} {...register("email")} />
            {errors.email ? <span className="text-sm text-red-600">{errors.email.message}</span> : null}
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-primary">{localize({ ar: "رقم الهاتف", en: "Phone" })}</span>
            <input type="tel" className={fieldClass} {...register("phone")} />
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "نوع الطلب *", en: "Request Type *" })}</span>
          <select className={fieldClass} {...register("requestType")}>
            {requestTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {localize(option.label)}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-primary">{localize({ ar: "الرسالة *", en: "Message *" })}</span>
          <textarea className={fieldClass + " min-h-36 py-3"} {...register("message")} />
          {errors.message ? <span className="text-sm text-red-600">{errors.message.message}</span> : null}
        </label>
        <Button type="submit" disabled={isSubmitting} icon={isSubmitting ? <LoadingSpinner /> : <Send className="h-4 w-4" />}>
          {localize({ ar: "إرسال الرسالة", en: "Send Message" })}
        </Button>
        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-2xl bg-success/10 p-4 text-sm font-bold text-success">
            <CheckCircle2 className="h-5 w-5" />
            {localize({ ar: "تم الإرسال بنجاح. شكرًا لتواصلك.", en: "Message sent successfully. Thank you for reaching out." })}
          </div>
        ) : null}
        {status === "error" ? (
          <div className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
            {localize({ ar: "تعذر إرسال الرسالة الآن. يرجى المحاولة مرة أخرى.", en: "The message could not be sent right now. Please try again." })}
          </div>
        ) : null}
      </div>
    </form>
  );
}
