import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Legal | Langia Language Solutions LLC",
  description:
    "Review Langia Language Solutions LLC terms, privacy, service, payment, rescheduling, and legal information.",
};

export default function LegalLayout({ children }: { children: ReactNode }) {
  return children;
}
