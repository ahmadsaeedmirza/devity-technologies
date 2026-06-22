import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import ProcessTimeline, { steps } from "@/components/devity/ProcessTimeline";
import { useSEO } from "@/hooks/use-seo";

const detail = [
  [
    "1–2 weeks",
    "Workshops, audits, KPI alignment, scope mapping. Output: a written brief and a pricing range you can plan against.",
  ],
  [
    "2–4 weeks",
    "Wireframes, design system, prototypes. We pressure-test the experience before we build the engineering for it.",
  ],
  [
    "6–14 weeks",
    "Weekly demos, shared backlog, transparent burn-down. You see working software every week, not slide decks.",
  ],
  [
    "Ongoing",
    "Monitoring, A/B testing, performance tuning and feature evolution. We stay as long as we're useful.",
  ],
];

const Process = () => {
  useSEO({
    title: "Process",
    description:
      "Four stages, no surprises. A clear path from brief to build with weekly demos and transparent delivery.",
    path: "/process",
  });

  return (
    <Layout>
      <PageHero
        eyebrow="Process"
        title={
          <>
            The path from{" "}
            <span className="display-italic text-gradient-brand">brief</span> to{" "}
            <span className="display-italic">build.</span>
          </>
        }
        description="Four stages, no surprises. Here's how an engagement actually unfolds — including what you'll see, when, and what it costs in time."
      />

      <ProcessTimeline />

      <section className="py-32 bg-background-alt border-t border-border">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="label-mono mb-6">In detail</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
              What happens,{" "}
              <span className="display-italic text-gradient-brand">when.</span>
            </h2>
          </div>

          <div className="space-y-px bg-border border border-border">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="bg-background grid md:grid-cols-12 gap-6 p-10 group hover:bg-mint-soft/30 transition-colors"
              >
                <div className="md:col-span-1 font-mono text-sm text-teal">
                  0{i + 1}
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-3xl font-medium">
                    {s.title}
                  </h3>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                    {detail[i][0]}
                  </div>
                </div>
                <div className="md:col-span-8 text-foreground-soft leading-relaxed text-lg">
                  {detail[i][1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
