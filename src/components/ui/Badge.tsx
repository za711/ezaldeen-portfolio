import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "gold" | "green" | "navy" | "light";

const badgeClasses: Record<BadgeVariant, string> = {
  blue: "bg-secondary/10 text-secondary",
  gold: "bg-accent/15 text-primary",
  green: "bg-success/10 text-success",
  navy: "bg-primary text-white",
  light: "bg-white text-primary ring-1 ring-border"
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "blue", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold",
        badgeClasses[variant],
        className
      )}
      {...props}
    />
  );
}
