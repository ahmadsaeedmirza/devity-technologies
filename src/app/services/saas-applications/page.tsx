import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight, ShieldCheck, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom SaaS Application Development Company | Devity Technologies",
  description:
    "We design and build custom SaaS products from scratch, multi-tenant architecture, subscription billing, and scalable infrastructure. Serving startups and scaleups in the US, UK, and Australia.",
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
  "Full-stack ownership, frontend, backend, database, and DevOps under one team",
  "Business-aware engineering, we understand churn, activation, and retention, not just code",
  "Scalable from day one, no shortcuts that become technical debt at 10,000 users",
  "US, UK & Australia timezone coverage, async-friendly, meeting-ready",
  "Post-launch support, monitoring, scaling, and iteration after go-live",
];

const faqs = [
  {
    q: "We only have an idea, not a spec. Can you still help us build it?",
    a: "Yes. Most of our SaaS clients start with an idea, not a finished spec. We run a discovery phase to define scope, architecture, and success metrics before any code gets written.",
  },
  {
    q: "How do you handle billing and subscriptions?",
    a: "We integrate Stripe for subscription billing, including trial flows, usage-based pricing, and dunning logic for failed payments, built into the platform from the start, not bolted on later.",
  },
  {
    q: "What if our user base grows much faster than expected?",
    a: "We architect multi-tenant systems for scale from day one, so a growth spike does not force a rebuild. This is one of the most common reasons SaaS founders come to us after outgrowing an earlier build.",
  },
  {
    q: "Do you support the product after launch, or just hand it over?",
    a: "We offer structured post-launch support, monitoring, scaling, and iteration, so your platform keeps performing as your user base grows.",
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
              "serviceType": "SaaS Application Development",
              "provider": { "@type": "Organization", "name": "Devity Technologies" },
              "description": "Custom full-stack SaaS application development optimized for speed, scalability, and performance."
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "We only have an idea, not a spec. Can you still help us build it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Most of our SaaS clients start with an idea, not a finished spec. We run a discovery phase to define scope, architecture, and success metrics before any code gets written."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you handle billing and subscriptions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We integrate Stripe for subscription billing, including trial flows, usage-based pricing, and dunning logic for failed payments, built into the platform from the start, not bolted on later."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if our user base grows much faster than expected?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We architect multi-tenant systems for scale from day one, so a growth spike does not force a rebuild. This is one of the most common reasons SaaS founders come to us after outgrowing an earlier build."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you support the product after launch, or just hand it over?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer structured post-launch support, monitoring, scaling, and iteration, so your platform keeps performing as your user base grows."
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
          eyebrow="Services / SaaS Applications"
          title="A SaaS Product That Doesn't Need Rebuilding at 10,000 Users."
          description="From zero to launch and beyond, we engineer SaaS applications that are fast, reliable, and built for the complexity that comes with real growth."
        />

        {/* 2. PROBLEM */}
        <section className="py-24 border-t border-border">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="label-mono mb-6">The problem</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Most SaaS Products Weren't Built to Survive Their Own Growth
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
              <p>
                A SaaS product isn't just a web app with a login screen. Without
                proper multi-tenant architecture, billing infrastructure, and
                access control baked in from the start, the first real usage
                spike is where things start breaking, outages, data isolation
                issues, and a codebase nobody wants to touch.
              </p>
              <p>
                We've built SaaS products for founders in the US, UK, and
                Australia, from early-stage MVPs to full-scale platforms with
                complex billing, role-based access, and real-time features.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PROOF, early */}
        <section className="py-16 bg-ink text-background border-t border-border">
          <div className="container grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Zap className="w-6 h-6 text-mint" strokeWidth={1.75} />
              <div className="font-display text-3xl font-medium">40+</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">
                Systems shipped to production
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
              <div className="font-display text-3xl font-medium">99.9%</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">
                Uptime SLA
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
                A SaaS product needs to handle multi-tenancy, data security,
                performance under concurrent load, and a business model baked
                into the infrastructure, not stitched on afterward.
              </p>
              <p>
                We design your SaaS architecture around your growth
                trajectory, so you're not rebuilding core systems every time
                you hit a new scale milestone.
              </p>
            </div>
          </div>
        </section>

        {/* 5. RESULTS / CASE STUDY */}
        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">In practice</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                Built to Hold{" "}
                <span className="display-italic text-gradient-brand">Under Real Load</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">1000</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">
                  Concurrent users
                </p>
              </div>
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">99.99%</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">
                  Uptime
                </p>
              </div>
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">−68%</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">
                  Latency
                </p>
              </div>
            </div>
            <p className="text-foreground-soft text-lg leading-relaxed max-w-3xl">
              A growing customer base outpacing the original architecture, with
              usage spikes causing daily outages, was rebuilt on a multi-tenant
              architecture running on a horizontally scalable Node and
              Postgres core, with isolated workloads and event-driven
              processing.{" "}
              <a href="/work#saas-platform" className="text-teal hover:underline">
                See the full case study
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
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

        {/* 6. TRUST */}
        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">GDPR-aligned</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  Tenant and user data is handled under strict confidentiality and GDPR-aligned practices for UK and EU clients.
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
              Have a SaaS idea or product that needs rebuilding?
            </h2>
            <a
              href="/contact?service=saas-applications"
              className="inline-flex items-center gap-3 px-8 py-5 bg-mint text-ink font-mono text-xs tracking-[0.25em] uppercase hover:bg-background transition-colors group"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
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