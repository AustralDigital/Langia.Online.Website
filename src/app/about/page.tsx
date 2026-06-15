import type { Metadata } from "next";

import { MarketingPageShell } from "@/components/MarketingPageShell";
import { pagesContent } from "@/content/pages";

const content = pagesContent.es.about;

export const metadata: Metadata = {
  title: `${content.title} | Langia Online`,
  description: content.subtitle,
};

export default function AboutPage() {
  return <MarketingPageShell content={content} />;
}
