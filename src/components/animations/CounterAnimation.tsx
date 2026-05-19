"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

export function CounterAnimation({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });
  const { locale } = useLanguage();

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {inView ? (
        <CountUp end={value} duration={2.1} separator={locale === "ar" ? "٬" : ","} suffix={suffix} />
      ) : (
        "0" + suffix
      )}
    </span>
  );
}
