import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Langia Corporate | Language Solutions for Teams",
  description:
    "Language training, translation, localization, and interpretation solutions designed around company communication needs.",
};

export default function CorporateLayout({ children }: { children: ReactNode }) {
  return children;
}
