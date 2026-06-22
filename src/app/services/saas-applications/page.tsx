import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom SaaS Application Development Company | Devity Technologies",
  description:
    "We design and build custom SaaS products from scratch - multi-tenant architecture, subscription billing, and scalable infrastructure. Serving startups and scaleups in the US, UK, and Australia.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/services/saas-applications",
  },
};

const builds = [
  {
    label: "MVP Development",
    desc: "Fastest path to a production-ready, investable SaaS product",
  },
  {
    label: "Multi-Tenant Architecture",
    desc: "Proper data isolation, role-based access, and org-level customization",
  },
  {
    label: "Subscription & Billing Systems",
    desc: "Stripe integration, usage-based pricing, trial flows, and dunning logic",
  },
  {
    label: "Admin Dashboards",
    desc: "Full internal control panels to manage users, billing, and platform health",
  },
  {
    label: "Real-Time Features",
    desc: "Live notifications, collaborative editing, and event-driven updates",
  },
  {
    label: "Onboarding Flows",
    desc: "Activation-optimized user journeys that reduce churn from day one",
  },
];

const reasons = [
  "Full-stack ownership - frontend, backend, database, and DevOps under one team",
  "Business-aware engineering - we understand churn, activation, and retention, not just code",
  "Scalable from day one - no shortcuts that become technical debt at 10,000 users",
  "US, UK & Australia timezone coverage - async-friendly, meeting-ready",
  "Post-launch support - monitoring, scaling, and iteration after go-live",
];

export default function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services / SaaS Applications"
        title="Custom SaaS Products Built to Grow With You."
        description="From zero to launch and beyond - we engineer SaaS applications that are fast, reliable, and built for the complexity that comes with real growth."
      />

      <section className="py-24 border-t border-border">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="label-mono mb-6">Who this is for</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              SaaS Development for Founders Who Are Serious About Scale
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
            <p>
              You have a SaaS idea - or an existing product that needs to be
              rebuilt properly. Either way, you need an engineering team that
              understands multi-tenant architecture, subscription economics, and
              what it actually takes to go from MVP to a product handling thousands
              of users.
            </p>
            <p>
              We've built SaaS products for founders in the US, UK, and Australia
              - from early-stage MVPs to full-scale platforms with complex billing,
              role-based access, and real-time features.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-t border-border">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="label-mono mb-6">Capabilities</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
              End-to-End{" "}
              <span className="display-italic text-gradient-brand">SaaS</span>{" "}
              Engineering
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
              We Build SaaS the Way It Should Be Built
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
            <p>
              A SaaS product isn't just a web app with a login screen. It's a
              system that needs to handle multi-tenancy, data security, performance
              under concurrent load, and a business model baked into the infrastructure.
            </p>
            <p>
              We design your SaaS architecture around your growth trajectory -
              so you're not rebuilding core systems every time you hit a new scale
              milestone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-t border-border">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="label-mono mb-6">Why Devity</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
              The Partner Your{" "}
              <span className="display-italic text-gradient-brand">SaaS</span>{" "}
              Deserves
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
            Have a SaaS idea or product that needs rebuilding?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-5 bg-mint text-ink font-mono text-xs tracking-[0.25em] uppercase hover:bg-background transition-colors group"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
