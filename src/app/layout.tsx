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
                "email": "info@devitytechnologies.com",
                "sameAs": [
                  "https://www.linkedin.com/company/devity-technologies/",
                  "https://www.instagram.com/devity_technologies"
                ]
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
                      "text": "We work with startups, growing businesses, and enterprises looking for premium, engineering-focused software solutions across web, mobile, SaaS, and AI automation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a typical project take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Timelines vary by scope — a web platform typically takes 4–8 weeks, while a full SaaS or mobile app can take 8–16 weeks. We share a clear timeline before any project begins."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer post-launch support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We offer ongoing maintenance and support packages after launch to ensure your product stays performant and up to date."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you build both the design and the development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we handle end-to-end delivery — from UI/UX design to full-stack development and deployment."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What technologies do you use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We are technology-agnostic, selecting the best architecture based on your project's specific goals rather than forcing a preset stack. Our team is fluent across modern frontend frameworks, scalable backends, mobile architectures, databases, and cloud infrastructure. We evaluate your product's performance, scalability, and business objectives to deploy the absolute best tools for the job."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simply reach out via our contact page or email us at info@devitytechnologies.com and we'll schedule a free discovery call."
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
