import type { Metadata } from "next";
import Process from "@/pages/Process";

export const metadata: Metadata = {
  title: "Process | Devity Technologies",
  description:
    "Four stages, no surprises. A clear path from brief to build with weekly demos and transparent delivery.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/process",
  },
};

export default function Page() {
  return <Process />;
}
