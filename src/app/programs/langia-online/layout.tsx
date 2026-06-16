import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Langia Online | Structured Live Language Training",
  description:
    "Structured live language training with level-based progress, teacher feedback, and flexible formats.",
};

export default function LangiaOnlineLayout({ children }: { children: ReactNode }) {
  return children;
}
