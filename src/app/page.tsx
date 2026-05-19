import { AboutSnapshot } from "@/components/sections/home/AboutSnapshot";
import { ExpertiseGrid } from "@/components/sections/home/ExpertiseGrid";
import { FeaturedExperience } from "@/components/sections/home/FeaturedExperience";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { ImpactHighlights } from "@/components/sections/home/ImpactHighlights";
import { LatestArticles } from "@/components/sections/home/LatestArticles";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { breadcrumbSchema, createMetadata, personSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: { ar: "عزالدين البداي", en: "Ezaldeen Albadai" },
  description: { ar: "موقع المهندس عزالدين ناصر سعد البداي، مهندس مدني ومنسق مشاريع أول متخصص في المشاريع الإنسانية والتنموية.", en: "Portfolio of Eng. Ezaldeen Albadai, Senior Project Coordinator and Civil Engineer." },
  pathname: "/"
});

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }])) }} />
      <HeroSection />
      <TrustBar />
      <AboutSnapshot />
      <ExpertiseGrid />
      <ImpactHighlights />
      <FeaturedExperience />
      <LatestArticles />
      <HomeCTA />
    </>
  );
}
