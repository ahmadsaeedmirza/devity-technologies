import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "About | Devity Technologies",
  description:
    "A small studio of senior engineers and designers building software that quietly does its job - exceptionally well.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/about",
  },
};

export default function Page() {
  return <About />;
}
