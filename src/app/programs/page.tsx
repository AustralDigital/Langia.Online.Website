import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";

import { pagesContent } from "@/content/pages";
import { ProgramsOverviewClient } from "./ProgramsOverviewClient";

const content = pagesContent.es.programs;
const overview = content.overview;

export const metadata: Metadata = {
  title: "Programs | Langia",
  description:
    "Explore Langia's language learning programs for adults, conversation, test preparation, kids and teens, and corporate teams.",
};

export default function ProgramsPage() {
  const imageAvailability = Object.fromEntries(
    (overview?.programCards ?? []).map((program) => [
      program.imagePath,
      existsSync(path.join(process.cwd(), "public", program.imagePath)),
    ]),
  );

  return <ProgramsOverviewClient imageAvailability={imageAvailability} />;
}
