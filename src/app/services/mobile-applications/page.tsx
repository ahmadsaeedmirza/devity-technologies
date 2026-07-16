import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight, ShieldCheck, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company | React Native & Cross-Platform | Devity Technologies",
  description:
    "We build high-performance iOS and Android apps using React Native, offline-first, smooth, and built to retain users. Trusted by clients across the US, UK, and Australia.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/services/mobile-applications",
  },
};

const builds = [
  {
    label: "Consumer Apps",
    desc: "Retention-focused apps built around habit loops and smooth UX",
  },
  {
    label: "Business & Enterprise Apps",
    desc: "Internal tools and field apps with role-based access and offline support",
  },
  {
    label: "Offline-First Apps",
    desc: "Full functionality without internet, syncs automatically when reconnected",
  },
  {
    label: "Real-Time Features",
    desc: "Live chat, notifications, feeds, and collaborative tools",
  },
  {
    label: "App Store Strategy",
    desc: "ASO, submission, and launch support for both iOS and Android",
  },
  {
    label: "Native Integrations",
    desc: "Camera, GPS, biometrics, Bluetooth, payments, and more",
  },
];

const reasons = [
  "Single codebase, two platforms, iOS and Android without doubling the cost",
  "Offline-first by default, reliable in any connectivity condition",
  "60fps performance target, smooth interactions, every time",
  "App Store submission support, we handle the process end to end",
  "Post-launch iteration, updates, performance monitoring, and feature releases",
];

const faqs = [
  {
    q: "Do you build native apps, or only React Native?",
    a: "We build with React Native by default, giving you a single codebase for both iOS and Android without sacrificing native performance or feel. We can discuss fully native builds for projects with specific requirements that call for it.",
  },
  {
    q: "How do you handle App Store and Play Store submission?",
    a: "We handle submission end to end for both platforms, including App Store Optimization, store listing assets, and the review process.",
  },
  {
    q: "Will the app work without an internet connection?",
    a: "Offline-first is our default approach, not an add-on. The app stays functional without signal and syncs automatically once connectivity returns.",
  },
  {
    q: "What happens after the app is live in the stores?",
    a: "We offer post-launch iteration, updates, performance monitoring, and new feature releases, so the app keeps improving after launch, not just at it.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mobile Application Development",
              "provider": { "@type": "Organization", "name": "Devity Technologies" },
              "description": "High-performance native or cross-platform mobile apps built for reliable user experiences."
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do you build native apps, or only React Native?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We build with React Native by default, giving you a single codebase for both iOS and Android without sacrificing native performance or feel. We can discuss fully native builds for projects with specific requirements that call for it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you handle App Store and Play Store submission?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We handle submission end to end for both platforms, including App Store Optimization, store listing assets, and the review process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will the app work without an internet connection?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Offline-first is our default approach, not an add-on. The app stays functional without signal and syncs automatically once connectivity returns."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens after the app is live in the stores?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer post-launch iteration, updates, performance monitoring, and new feature releases, so the app keeps improving after launch, not just at it."
                  }
                }
              ]
            }
          ])
        }}
      />
      <Layout>
        {/* 1. HEADLINE, outcome-framed */}
        <PageHero
          eyebrow="Services / Mobile Applications"
          title="An App Your Users Open Every Day, Not Just Once."
          description="We engineer cross-platform mobile applications that perform like native, smooth, reliable, and designed around the user habits that drive daily engagement."
        />

        {/* 2. PROBLEM */}
        <section className="py-24 border-t border-border">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="label-mono mb-6">The problem</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Most Apps Lose Users in the First Week
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
              <p>
                Your mobile app is often the first and most personal touchpoint
                your users have with your product. A laggy, unreliable app
                doesn't just frustrate users, it kills retention before you
                even get a chance to prove the product's value.
              </p>
              <p>
                We build mobile apps for startups, scaleups, and enterprises
                across the US, UK, and Australia who need a product that earns
                daily-active users, not just downloads.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PROOF, early */}
        <section className="py-16 bg-ink text-background border-t border-border">
          <div className="container grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Zap className="w-6 h-6 text-mint" strokeWidth={1.75} />
              <div className="font-display text-3xl font-medium">60fps</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">
                Performance target
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-6 h-6 text-mint" strokeWidth={1.75} />
              <div className="font-display text-3xl font-medium">24h</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">
                Response time, Mon-Fri
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-mint" strokeWidth={1.75} />
              <div className="font-display text-3xl font-medium">10+</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">
                Systems shipped to production
              </p>
            </div>
          </div>
        </section>

        {/* 4. SOLUTION / CAPABILITIES, unchanged from your original */}
        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">Capabilities</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                Mobile Products Across{" "}
                <span className="display-italic text-gradient-brand">Every</span>{" "}
                Category
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {builds.map((b) => (
                <div key={b.label} className="flex items-start gap-4 text-foreground-soft">
                  <Check className="w-5 h-5 mt-1 text-teal shrink-0" strokeWidth={2.5} />
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">
                      {b.label}
                    </h3>
                    <p className="leading-relaxed text-sm md:text-base">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="label-mono mb-6">Our approach</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Performance Is Not Optional
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
              <p>
                We build with React Native, giving you a single codebase that
                runs on both iOS and Android without sacrificing the
                performance or feel of a native app. Our apps ship at 60fps,
                handle background sync gracefully, and are tested on real
                devices before they reach your users.
              </p>
              <p>
                Offline-first architecture is a default for us, not an
                add-on, because real users use apps in the real world, and
                the real world doesn't always have signal.
              </p>
            </div>
          </div>
        </section>

        {/* 5. RESULTS, capability-proof in place of a case study (no mobile case study exists yet on /work) */}
        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">What that looks like in practice</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                Built for the{" "}
                <span className="display-italic text-gradient-brand">Real World</span>,
                Not Just the Demo
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border p-10">
                <h3 className="font-display text-lg font-medium mb-3">Tested on real devices</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  Every build is tested on real iOS and Android hardware before it reaches your users, not just a simulator.
                </p>
              </div>
              <div className="bg-background border border-border p-10">
                <h3 className="font-display text-lg font-medium mb-3">Graceful offline sync</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  Background sync handles reconnection automatically, so users never lose data working offline.
                </p>
              </div>
              <div className="bg-background border border-border p-10">
                <h3 className="font-display text-lg font-medium mb-3">One codebase, two stores</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  A single React Native codebase ships to both the App Store and Play Store without doubling engineering cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">Why Devity</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                Your Mobile Partner From Concept{" "}
                <span className="display-italic text-gradient-brand">to App Store</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((r, i) => (
                <div
                  key={r}
                  className="bg-background border border-border p-10 hover:shadow-card transition-shadow flex flex-col justify-between"
                >
                  <span className="font-mono text-xs text-teal">/ 0{i + 1}</span>
                  <p className="font-display text-lg text-foreground mt-8 leading-relaxed">
                    {r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TRUST */}
        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">GDPR-aligned</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  User data is handled under strict confidentiality and GDPR-aligned practices for UK and EU clients.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">Timezone overlap</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  Remote-first, with working hours that overlap the UK and Australian business day.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">24h response</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  Every enquiry gets a reply within 24 hours, Monday through Friday.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA, unchanged */}
        <section className="py-32 bg-ink text-background border-t border-border text-center relative overflow-hidden">
          <div
            className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[450px] h-[450px] opacity-10 blur-3xl pointer-events-none"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="container relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1] tracking-tight mb-8 max-w-2xl mx-auto">
              Have a mobile app idea? Let's build it properly.
            </h2>
            <a
              href="/contact?service=mobile-applications"
              className="inline-flex items-center gap-3 px-8 py-5 bg-mint text-ink font-mono text-xs tracking-[0.25em] uppercase hover:bg-background transition-colors group"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="/free-technical-audit?service=mobile-applications"
              className="block mt-6 text-sm text-background/70 hover:text-mint underline underline-offset-4 transition-colors"
            >
              Or get a free technical audit first
            </a>

          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">FAQ</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                Questions, Answered.
              </h2>
            </div>
            <div className="grid gap-px bg-border border border-border">
              {faqs.map((f) => (
                <div key={f.q} className="bg-background p-10">
                  <h3 className="font-display text-xl font-medium mb-3">{f.q}</h3>
                  <p className="text-foreground-soft leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout >
    </>
  );
}