import type { Metadata } from "next";
import Index from "@/pages/Index";
import { getLatestPosts } from "@/lib/getLatestPosts";

export const metadata: Metadata = {
  title: "Engineering Digital Evolution | Devity Technologies",
  description:
    "Devity Technologies builds scalable web applications, mobile ecosystems, and AI-driven automation that turn complex challenges into seamless growth.",
  alternates: {
    canonical: "https://www.devitytechnologies.com",
  },
};

export default function Page() {
  const latestPosts = getLatestPosts(3);
  return <Index latestPosts={latestPosts} />;
}