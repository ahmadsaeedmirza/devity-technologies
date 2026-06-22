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
      <body className="min-h-screen bg-background text-foreground antialiased font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
