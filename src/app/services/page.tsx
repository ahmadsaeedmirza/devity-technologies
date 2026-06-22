import type { Metadata } from "next";
import Services from "@/pages/Services";

export const metadata: Metadata = {
  title: "Services | Devity Technologies",
  description:
    "Web platforms, mobile applications, and AI automation - engineered for speed, reliability, and measurable outcomes.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/services",
  },
};

export default function Page() {
  return <Services />;
}
