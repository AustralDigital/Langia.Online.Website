import type { Metadata } from "next";

import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Langia | Start Your Next Chapter",
  description:
    "Contact Langia for language programs, corporate solutions, test preparation, kids and teens programs, translation, localization, and interpretation.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
