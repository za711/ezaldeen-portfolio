import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function Avatar({ className }: { className?: string }) {
  return (
    <div className={cn("relative grid aspect-square place-items-center overflow-hidden rounded-2xl bg-navy-gradient", className)}>
      <div className="absolute inset-6 rounded-full border border-white/15" />
      <div className="absolute bottom-0 h-1/2 w-3/4 rounded-t-full bg-white/10" />
      <UserRound className="relative h-20 w-20 text-accent" strokeWidth={1.4} />
    </div>
  );
}
