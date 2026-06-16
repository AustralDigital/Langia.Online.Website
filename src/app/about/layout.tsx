import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Langia | Human-Led, AI-Assisted Language Learning",
  description:
    "Learn how Langia combines live teaching, human guidance, and useful technology for clearer language learning.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
