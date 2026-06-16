import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Langia Talkin' Club | Private Conversation Practice",
  description:
    "Private conversation practice for learners who want more fluency, confidence, and natural speaking support.",
};

export default function TalkinClubLayout({ children }: { children: ReactNode }) {
  return children;
}
