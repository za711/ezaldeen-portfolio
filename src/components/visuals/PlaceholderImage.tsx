import Image from "next/image";
import { Award, BarChart3, FileText, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  type: "certificate" | "profile" | "article" | "impact";
  title: string;
  subtitle?: string;
  imagePath?: string;
  className?: string;
};

export function PlaceholderImage({ type, title, subtitle, imagePath, className }: PlaceholderImageProps) {
  if (imagePath) {
    return (
      <Image
        src={imagePath}
        alt={title}
        width={900}
        height={620}
        className={cn("h-full w-full object-cover", className)}
        loading="lazy"
      />
    );
  }

  const Icon = type === "profile" ? UserRound : type === "impact" ? BarChart3 : type === "article" ? FileText : Award;

  return (
    <div className={cn("relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-navy-gradient p-8", className)}>
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 300" role="img" aria-label={title}>
        <defs>
          <linearGradient id={"placeholder-" + type} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#D6A84F" />
          </linearGradient>
        </defs>
        <path d="M30 245 L120 95 L210 180 L290 60 L370 230" fill="none" stroke="url(#placeholder-impact)" strokeWidth="18" strokeLinecap="round" />
        <circle cx="85" cy="78" r="38" fill="#D6A84F" opacity="0.25" />
        <rect x="235" y="188" width="90" height="52" rx="16" fill="#ffffff" opacity="0.12" />
      </svg>
      <div className="relative text-center text-white">
        <Icon className="mx-auto mb-4 h-14 w-14 text-accent" strokeWidth={1.4} />
        <p className="text-xl font-extrabold">{title}</p>
        {subtitle ? <p className="mt-2 text-sm text-white/75">{subtitle}</p> : null}
      </div>
    </div>
  );
}
