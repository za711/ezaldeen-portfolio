import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Direction, Locale, LocalizedString } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function localize(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-YE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "ar" ? "ar-YE" : "en-US").format(value);
}

export function getDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAbsoluteUrl(pathname = "") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return siteUrl.replace(/\/$/, "") + pathname;
}
