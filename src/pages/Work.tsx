import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { cases } from "@/components/devity/WorkPreview";
import dashboard from "@/assets/dashboard-light.jpg";
import mobile from "@/assets/mobile-light.jpg";
import aiStream from "@/assets/ai-light.jpg";

const images = [dashboard, mobile, aiStream];

const detailedCases = cases.map((c, i) => ({
  ...c,
  image: images[i],
  challenge: [
    "A legacy web platform with crippling load times and a content pipeline that made updates slow and risky.",
    "A growing customer base outpacing the original architecture, with usage spikes causing daily outages.",
    "A logistics team drowning in spreadsheets and manual reconciliation across 14 warehouses.",
  ][i],
  solution: [
    "Replatformed onto an edge-rendered Next.js stack with a headless CMS, component library, and end-to-end analytics instrumentation.",
    "Multi-tenant architecture on a horizontally scalable Node + Postgres core, with isolated workloads and event-driven processing.",
    "Custom AI orchestration layer with predictive demand modeling, automated reroutes and a unified ops dashboard.",
  ][i],
  metrics: [
    [
      { k: "Lead conversion", v: "+50%" },
      { k: "LCP", v: "0.8s" },
      { k: "Publish time", v: "−70%" },
    ],
    [
      { k: "Concurrent users", v: "100K" },
      { k: "Uptime", v: "99.99%" },
      { k: "Latency", v: "−68%" },
    ],
    [
      { k: "Manual workflow", v: "−40%" },
      { k: "Forecast accuracy", v: "94%" },
      { k: "Hours saved/wk", v: "320+" },
    ],
  ][i],
}));

const Work = () => (
  <Layout>
    <PageHero
      eyebrow="Selected Work"
      title={
        <>
          Outcomes that{" "}
          <span className="display-italic text-gradient-brand">
            moved markets.
          </span>
        </>
      }
      description="A closer look at the engagements that defined the last twelve months — what we built, why it mattered, and what it returned."
    />

    <section className="py-20">
      <div className="container space-y-32">
        {detailedCases.map((c, i) => (
          <article
            id={c.slug}
            key={c.slug}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start scroll-mt-32"
          >
            <div className="lg:col-span-7">
              <div className={`relative ${c.color} overflow-hidden`}>
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className={`w-full h-auto ${c.color === "bg-ink" ? "mix-blend-screen opacity-90" : "mix-blend-multiply opacity-95"}`}
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="font-mono text-xs tracking-[0.25em] uppercase text-teal mb-4">
                Case 0{i + 1} — {c.tag}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6">
                {c.title}
              </h2>
              <p className="text-foreground-soft mb-6 leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-foreground block mb-2">
                  Challenge
                </span>
                {c.challenge}
              </p>
              <p className="text-foreground-soft mb-10 leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-foreground block mb-2">
                  Solution
                </span>
                {c.solution}
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                {c.metrics.map((m) => (
                  <div key={m.k}>
                    <div className="font-display text-3xl font-medium text-gradient-brand">
                      {m.v}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                      {m.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Work;
