import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Language Level Guidance | Langia",
  description:
    "Clarify your language-learning starting point and connect your goals with the right Langia path.",
};

export default function EnglishLevelTestLayout({ children }: { children: ReactNode }) {
  return children;
}
