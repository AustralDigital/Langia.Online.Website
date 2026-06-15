import type { Metadata } from "next";

import WorkWithUsClient from "./WorkWithUsClient";

export const metadata: Metadata = {
  title: "Work with Langia | Teacher Collaboration",
  description:
    "Express interest in future remote freelance teaching collaboration opportunities with Langia for English, French, Spanish, and Portuguese.",
};

export default function WorkWithUsPage() {
  return <WorkWithUsClient />;
}
