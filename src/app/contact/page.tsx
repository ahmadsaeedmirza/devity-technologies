import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact — Devity Technologies",
  description:
    "Drop us a message and our technical lead will reply within 24 hours (Mon–Fri). Remote-first across IST / GMT.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/contact",
  },
};

export default function Page() {
  return <Contact />;
}
