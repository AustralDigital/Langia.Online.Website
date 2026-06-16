import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "English Level Test | Langia",
  description:
    "Start with a clearer baseline for your English level and connect your result with the right Langia learning path.",
};

export default function EnglishLevelTestLayout({ children }: { children: ReactNode }) {
  return children;
}
