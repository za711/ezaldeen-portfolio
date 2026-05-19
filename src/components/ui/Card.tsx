import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className, interactive = true, ...props }: CardProps) {
  return (
    <div
      data-cursor={interactive ? "card" : undefined}
      className={cn("rounded-card bg-surface p-6", interactive && "luxury-card card-hover", className)}
      {...props}
    />
  );
}
