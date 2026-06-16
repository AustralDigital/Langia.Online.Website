import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Langia Test Prep | Exam Preparation",
  description:
    "Focused private preparation for language exams, certifications, academic goals, mock tests, and skill gaps.",
};

export default function TestPrepLayout({ children }: { children: ReactNode }) {
  return children;
}
