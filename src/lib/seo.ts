import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { siteKeywords } from "@/lib/constants";
import { getAbsoluteUrl } from "@/lib/utils";
import type { LocalizedString } from "@/types";

type SeoInput = {
  title: LocalizedString;
  description: LocalizedString;
  pathname?: string;
  image?: string;
};

export function createMetadata(input: SeoInput): Metadata {
  const url = getAbsoluteUrl(input.pathname || "/");
  const title = input.title.ar + " | " + input.title.en;
  const description = input.description.ar;
  const image = input.image || "/og-image.png";

  return {
    title,
    description,
    keywords: siteKeywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ezaldeen Albadai Portfolio",
      locale: "ar_YE",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.nameEn,
    alternateName: profile.nameAr,
    jobTitle: profile.titleEn,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al Hodeida",
      addressCountry: "YE"
    },
    knowsAbout: ["Civil Engineering", "WASH", "Project Coordination", "Humanitarian Engineering", "Solar Pumping Systems"]
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.url)
    }))
  };
}

export function articleSchema(title: string, description: string, slug: string, date: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: profile.nameEn
    },
    mainEntityOfPage: getAbsoluteUrl("/blog/" + slug + "/")
  };
}
