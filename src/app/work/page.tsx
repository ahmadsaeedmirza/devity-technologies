import type { Metadata } from "next";
import Work from "@/pages/Work";

export const metadata: Metadata = {
  title: "Work — Devity Technologies",
  description:
    "Selected case studies across web platforms, SaaS, and AI automation—built for performance, reliability, and measurable impact.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/work",
  },
};

export default function Page() {
  return <Work />;
}
