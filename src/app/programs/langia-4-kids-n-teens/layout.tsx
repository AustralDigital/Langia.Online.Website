import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Langia 4 Kids n Teens | Language Learning for Children and Teens",
  description:
    "Live language learning for children and teens with small groups, clear structure, parent reports, and teacher guidance.",
};

export default function KidsTeensLayout({ children }: { children: ReactNode }) {
  return children;
}
