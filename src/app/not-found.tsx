import type { Metadata } from "next";
import NotFound from "@/pages/NotFound";

export const metadata: Metadata = {
  title: "Page not found - Devity Technologies",
  description: "The page you’re looking for doesn’t exist.",
  robots: "noindex,follow",
};

export default function Custom404() {
  return <NotFound />;
}
export const dynamic = "force-dynamic";
