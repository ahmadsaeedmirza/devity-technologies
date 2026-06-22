import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company | React Native & Cross-Platform | Devity Technologies",
  description:
    "We build high-performance iOS and Android apps using React Native - offline-first, smooth, and built to retain users. Trusted by clients across the US, UK, and Australia.",
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
    desc: "Full functionality without internet - syncs automatically when reconnected",
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
  "Single codebase, two platforms - iOS and Android without doubling the cost",
  "Offline-first by default - reliable in any connectivity condition",
  "60fps performance target - smooth interactions, every time",
  "App Store submission support - we handle the process end to end",
  "Post-launch iteration - updates, performance monitoring, and feature releases",
];

export default function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services / Mobile Applications"
        title="Mobile Apps That Feel Native. Built to Last."
        description="We engineer cross-platform mobile applications that perform like native - smooth, reliable, and designed around the user habits that drive daily engagement."
      />

      <section className="py-24 border-t border-border">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="label-mono mb-6">Who this is for</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Mobile Development for Products That Demand Performance
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
            <p>
              Your mobile app is often the first - and most personal - touchpoint
              your users have with your product. A laggy, unreliable app doesn't
              just frustrate users, it kills retention.
            </p>
            <p>
              We build mobile apps for startups, scaleups, and enterprises across
              the US, UK, and Australia who need a product that earns daily-active
              users - not just downloads.
            </p>
          </div>
        </div>
      </section>

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
              We build with React Native - giving you a single codebase that runs
              on both iOS and Android without sacrificing the performance or feel of
              a native app. Our apps ship at 60fps, handle background sync gracefully,
              and are tested on real devices before they reach your users.
            </p>
            <p>
              Offline-first architecture is a default for us, not an add-on -
              because real users use apps in the real world, and the real world
              doesn't always have signal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-t border-border">
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
            Talk to Our Team
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
