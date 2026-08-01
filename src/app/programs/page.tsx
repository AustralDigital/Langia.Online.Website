import type { Metadata } from "next";

import { ProgramsOverviewClient } from "./ProgramsOverviewClient";

export const metadata: Metadata = {
  title: "Langia Programs | Choose Your Language Path",
  description:
    "Compare Langia programs for structured training, conversation practice, exam preparation, kids and teens, and corporate teams.",
};

export default function ProgramsPage() {
  return <ProgramsOverviewClient />;
}
