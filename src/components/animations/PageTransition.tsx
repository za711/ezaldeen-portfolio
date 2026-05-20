"use client";

import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return <main className="page-transition">{children}</main>;
}
