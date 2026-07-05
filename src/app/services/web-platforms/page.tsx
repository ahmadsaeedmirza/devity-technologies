import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight, ShieldCheck, Clock, Zap } from "lucide-react";

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
  "Outcome-driven process, we define success metrics before writing a line of code",
  "Transparent timelines, clear milestones, no surprises",
  "Post-launch support, we stay on after delivery to ensure your platform performs",
  "Timezone-flexible, we work with clients across US, UK, and Australian timezones",
];

const faqs = [
  {
    q: "Can you take over an existing platform, or do you only build from scratch?",
    a: "Both. We regularly replatform legacy systems onto modern architecture, and we build new platforms from zero. We will assess your current setup honestly before recommending which approach fits.",
  },
  {
    q: "Will the platform be built to handle real traffic growth, not just launch?",
    a: "Yes, that is the default, not an add-on. Every platform we build is architected for horizontal scale from day one, so a traffic spike does not mean a rebuild six months later.",
  },
  {
    q: "Do you handle both design and development, or just the code?",
    a: "We handle end-to-end delivery, UX and UI design through full-stack engineering and deployment. One team across the whole lifecycle, no handoff gaps.",
  },
  {
    q: "What happens after the platform launches?",
    a: "We offer structured post-launch support covering bug fixes, performance monitoring, and feature updates, so the platform keeps performing as your business grows.",
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
              "serviceType": "Web Platform Development",
              "provider": { "@type": "Organization", "name": "Devity Technologies" },
              "description": "Custom full-stack web application development optimized for speed, scalability, and performance."
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can you take over an existing platform, or do you only build from scratch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both. We regularly replatform legacy systems onto modern architecture, and we build new platforms from zero. We will assess your current setup honestly before recommending which approach fits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will the platform be built to handle real traffic growth, not just launch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, that is the default, not an add-on. Every platform we build is architected for horizontal scale from day one, so a traffic spike does not mean a rebuild six months later."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you handle both design and development, or just the code?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We handle end-to-end delivery, UX and UI design through full-stack engineering and deployment. One team across the whole lifecycle, no handoff gaps."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens after the platform launches?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer structured post-launch support covering bug fixes, performance monitoring, and feature updates, so the platform keeps performing as your business grows."
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
          eyebrow="Services / Web Platforms"
          title="A Platform That Keeps Up When Growth Doesn't Slow Down."
          description="We build full-stack web applications that handle real traffic, real data, and real business complexity, from day one through your next growth milestone."
        />

        {/* 2. PROBLEM */}
        <section className="py-24 border-t border-border">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="label-mono mb-6">The problem</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Most Platforms Break Right When They Start Working
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
              <p>
                A legacy platform that felt fine at launch starts buckling the
                moment real traffic and real data show up, slow load times, a
                content pipeline nobody trusts, outages the moment usage spikes.
                By then, a rebuild feels too risky to start and too expensive
                to keep avoiding.
              </p>
              <p>
                We work with founders, product teams, and CTOs across the US,
                UK, and Australia who need a technical partner that thinks in
                outcomes, not deliverables, and builds it right the first time.
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
                opposite, we architect for performance, maintainability, and
                long-term growth, then design an experience that reflects
                that quality.
              </p>
              <p>
                Every web platform we deliver is built with server-side
                rendering, optimized database architecture, CI/CD pipelines,
                and production-grade security, not added later, engineered in
                from the start.
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
                From Legacy Platform to{" "}
                <span className="display-italic text-gradient-brand">Edge-Rendered Stack</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">+50%</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">
                  Lead conversion
                </p>
              </div>
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">0.8s</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">
                  LCP
                </p>
              </div>
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">−70%</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">
                  Publish time
                </p>
              </div>
            </div>
            <p className="text-foreground-soft text-lg leading-relaxed max-w-3xl">
              A legacy web platform with crippling load times and a content
              pipeline that made updates slow and risky was replatformed onto
              an edge-rendered Next.js stack with a headless CMS, component
              library, and end-to-end analytics instrumentation.{" "}
              <a href="/work#web-platform-revamp" className="text-teal hover:underline">
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

        {/* 6. TRUST */}
        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">GDPR-aligned</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">
                  Client and user data is handled under strict confidentiality and GDPR-aligned practices for UK and EU clients.
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