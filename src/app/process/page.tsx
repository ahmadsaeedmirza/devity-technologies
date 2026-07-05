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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What if our scope changes partway through the project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Scope changes are normal. We flag the impact on timeline and cost as soon as a change comes up, so you can decide whether to fold it in now or hold it for a later phase, no surprises at the end."
                }
              },
              {
                "@type": "Question",
                "name": "How involved do we need to be during development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As involved as you want to be. We run weekly demos and keep a shared backlog visible throughout, so you can check in as often or as little as suits your schedule."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if we need to pause or extend the timeline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We build in checkpoints between phases specifically so pausing or extending is a conversation, not a disruption. We will always tell you honestly what a pause or extension means for cost and delivery."
                }
              },
              {
                "@type": "Question",
                "name": "Do we own the code and the product once it's built?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Once the engagement is complete, you own the codebase and the product outright."
                }
              }
            ]
          })
        }}
      />
      <Process />
    </>
  );
}