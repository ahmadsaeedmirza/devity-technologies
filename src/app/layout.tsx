import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-next",
  style: ["normal"],
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-next",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-next",
});

export const metadata: Metadata = {
  title: "Devity Technologies - Engineering Digital Evolution",
  description:
    "Devity Technologies builds scalable web applications, mobile ecosystems, and AI-driven automation that turn complex challenges into seamless growth.",
  authors: [{ name: "Devity Technologies" }],
  robots: "index,follow",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.devitytechnologies.com",
  },
  openGraph: {
    title: "Devity Technologies - Engineering Digital Evolution",
    description:
      "Scalable web applications, mobile solutions, and AI automation engineered for performance.",
    type: "website",
    siteName: "Devity Technologies",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Devity Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devity Technologies - Engineering Digital Evolution",
    description:
      "Scalable web applications, mobile solutions, and AI automation engineered for performance.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Devity Technologies",
                "url": "https://www.devitytechnologies.com",
                "logo": "https://www.devitytechnologies.com/logo.png",
                "foundingDate": "2021",
                "areaServed": [
                  { "@type": "Country", "name": "United Kingdom" },
                  { "@type": "Country", "name": "Australia" }
                ],
                "sameAs": [
                  "https://www.linkedin.com/company/devity-technologies/",
                  "https://www.instagram.com/devity_technologies"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "info@devitytechnologies.com",
                  "contactType": "customer service",
                  "areaServed": ["GB", "AU"],
                  "availableLanguage": "English"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Devity Technologies",
                "url": "https://www.devitytechnologies.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.devitytechnologies.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Web Platform Development",
                "provider": { "@type": "Organization", "name": "Devity Technologies" },
                "description": "Custom full-stack web application development optimized for speed, scalability, and performance."
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "SaaS Application Development",
                "provider": { "@type": "Organization", "name": "Devity Technologies" },
                "description": "Custom full-stack SaaS application development optimized for speed, scalability, and performance."
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Mobile Application Development",
                "provider": { "@type": "Organization", "name": "Devity Technologies" },
                "description": "High-performance native or cross-platform mobile apps built for reliable user experiences."
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "AI Automation",
                "provider": { "@type": "Organization", "name": "Devity Technologies" },
                "description": "Custom machine learning and automated internal processes engineered for measurable business outcomes."
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What types of businesses do you work with?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We work with startups, growing businesses, and enterprises that need engineering-grade software — not templated solutions. Our clients range from early-stage founders launching their first SaaS product to established companies modernizing legacy systems or automating internal workflows."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a typical project take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Timelines depend on scope and complexity. A marketing site or landing page can be delivered in 1–2 weeks. A full-stack web platform or SaaS product typically takes 6–12 weeks. Mobile apps and AI automation systems range from 8–16 weeks. We define a clear timeline before any work begins."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer post-launch support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We offer structured post-launch support and maintenance packages covering bug fixes, performance monitoring, feature updates, and infrastructure scaling — so your product stays reliable as it grows."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you build both the design and the development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We handle end-to-end product delivery — from UX and UI design to full-stack engineering and deployment. You work with one team across the entire lifecycle, which eliminates handoff gaps and keeps quality consistent."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What technologies do you use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We work across a wide range of modern technologies, selecting the right stack for each project based on goals, scale, and existing infrastructure. We don't push a one-size-fits-all toolkit, we engineer around your outcome."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reach out via our contact page or email us directly at info@devitytechnologies.com. We will schedule a free discovery call to understand your goals, scope the project, and give you a clear proposal — no commitment required."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
