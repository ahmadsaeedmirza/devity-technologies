import type { Metadata } from "next";
import FreeTechnicalAudit from "@/pages/FreeTechnicalAudit";

export const metadata: Metadata = {
    title: "Free Technical Audit | Devity Technologies",
    description:
        "Get a free, no-obligation technical and SEO audit of your website, a written report within 48 hours, no sales call required.",
    alternates: {
        canonical: "https://www.devitytechnologies.com/free-technical-audit",
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
                            { "@type": "Question", "name": "Is this actually free, or is there a catch?", "acceptedAnswer": { "@type": "Answer", "text": "It is genuinely free. You'll get a real, written audit whether or not you ever work with us. There's no obligation and no hidden follow-up fee." } },
                            { "@type": "Question", "name": "Will I get pushed into a sales call?", "acceptedAnswer": { "@type": "Answer", "text": "No. You'll receive the audit as a written report. If you have questions about it, you're welcome to ask, but there's no required call to receive your results." } },
                            { "@type": "Question", "name": "What if my site is already in good shape?", "acceptedAnswer": { "@type": "Answer", "text": "Then the audit will say so, and you'll know exactly what's already working. A short, honest report confirming things are fine is still useful, and costs you nothing to find out." } },
                            { "@type": "Question", "name": "How long does the audit take?", "acceptedAnswer": { "@type": "Answer", "text": "You'll receive your written report within 48 hours of submitting your site." } },
                            { "@type": "Question", "name": "Do I need to be an existing or upcoming client to request this?", "acceptedAnswer": { "@type": "Answer", "text": "No. This is open to anyone who wants a genuine, no-obligation look at their site's technical health." } }
                        ]
                    })
                }}
            />
            <FreeTechnicalAudit />
        </>
    );
}