import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Application Development Agency | Devity Technologies",
  description:
    "Devity Technologies builds high-performance, scalable web platforms engineered for speed, security, and growth. Trusted by startups and enterprises across the US, UK, and Australia.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/services/web-platforms",
  },
};

const builds = [
  {
    label: "SaaS Platforms",
    desc: "Multi-tenant, subscription-based web applications built for scale and retention",
  },
  {
    label: "Internal Tools & Dashboards",
    desc: "Operations, analytics, and workflow tools your team will actually use",
  },
  {
    label: "Marketing & Landing Sites",
    desc: "Edge-rendered, SEO-optimized sites that load instantly and convert",
  },
  {
    label: "Headless Commerce",
    desc: "Flexible, API-first ecommerce architecture that outperforms templated solutions",
  },
  {
    label: "Design Systems",
    desc: "Consistent, scalable component libraries that speed up every future build",
  },
  {
    label: "API & Backend Systems",
    desc: "Robust, secure REST or GraphQL APIs powering your product ecosystem",
  },
];

const reasons = [
  "40+ shipped systems across web, mobile, and AI",
  "Outcome-driven process - we define success metrics before writing a line of code",
  "Transparent timelines - clear milestones, no surprises",
  "Post-launch support - we stay on after delivery to ensure your platform performs",
  "Timezone-flexible - we work with clients across US, UK, and Australian timezones",
];

export default function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services / Web Platforms"
        title="High-Performance Web Platforms, Engineered to Scale."
        description="We build full-stack web applications that handle real traffic, real data, and real business complexity - from day one through your next growth milestone."
      />

      <section className="py-24 border-t border-border">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="label-mono mb-6">Who this is for</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
              Web Platform Development for Businesses That Can't Afford to Stand Still
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
            <p>
              Whether you're a US-based startup launching your first product, a
              UK enterprise modernizing a legacy system, or an Australian business
              scaling into new markets - your web platform is the engine behind
              everything. We build systems that don't buckle under pressure.
            </p>
            <p>
              We work with founders, product teams, and CTOs who need a technical
              partner that thinks in outcomes, not deliverables. If you need it
              fast, scalable, and done right - this is what we do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-t border-border">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="label-mono mb-6">Capabilities</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
              From Internal Tools to{" "}
              <span className="display-italic text-gradient-brand">Customer-Facing</span>{" "}
              Platforms
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
              Engineering First. Always.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
            <p>
              Most agencies design first and engineer around it. We do the
              opposite - we architect for performance, maintainability, and long-term
              growth, then design an experience that reflects that quality.
            </p>
            <p>
              Every web platform we deliver is built with server-side rendering,
              optimized database architecture, CI/CD pipelines, and production-grade
              security - not added later, engineered in from the start.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-t border-border">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="label-mono mb-6">Why Devity</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
              A Technical{" "}
              <span className="display-italic text-gradient-brand">partner</span>,
              not just a vendor
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
            Ready to build something that scales?
          </h2>
          <a
            href="/contact?service=web-platforms"
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
