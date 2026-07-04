import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation & Custom AI Development Agency | Devity Technologies",
  description:
    "We design and build custom AI systems, LLM agents, and automated workflows that eliminate manual bottlenecks and unlock measurable business outcomes. Serving clients in the US, UK, and Australia.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/services/ai-automation",
  },
};

const builds = [
  {
    label: "Custom LLM Agents",
    desc: "AI assistants and autonomous agents built on your data and processes",
  },
  {
    label: "RAG Pipelines",
    desc: "Retrieval-augmented generation systems that give AI accurate, context-aware answers",
  },
  {
    label: "Workflow Orchestration",
    desc: "Multi-step automated pipelines that replace manual, repetitive processes",
  },
  {
    label: "Data Extraction & Processing",
    desc: "Intelligent document parsing, classification, and structured output",
  },
  {
    label: "Forecasting Models",
    desc: "Predictive systems for demand, churn, revenue, and operational planning",
  },
  {
    label: "Voice & Vision AI",
    desc: "Speech recognition, image analysis, and multimodal AI integrations",
  },
];

const reasons = [
  "Business-outcome focused - every system is tied to a metric that matters",
  "Production-grade systems - not notebooks, not demos - deployed, monitored, maintained",
  "Custom-built, not off-the-shelf - your workflow is unique; your AI system should be too",
  "Full integration - connects with your existing tools, databases, and APIs",
  "US, UK & Australia timezone coverage - available when you need us",
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Automation",
            "provider": { "@type": "Organization", "name": "Devity Technologies" },
            "description": "Custom machine learning and automated internal processes engineered for measurable business outcomes."
          })
        }}
      />
      <Layout>
        <PageHero
          eyebrow="Services / AI Automation"
          title="Custom AI Systems That Solve Real Business Problems."
          description="We don't build AI demos. We engineer intelligent systems tied to measurable outcomes - time saved, cost reduced, revenue unlocked."
        />

        <section className="py-24 border-t border-border">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="label-mono mb-6">Who this is for</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                AI Automation for Businesses Ready to Operate at a New Level
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
              <p>
                AI isn't a feature - it's an operational shift. Businesses across
                the US, UK, and Australia are using custom AI systems to eliminate
                repetitive bottlenecks, extract insight from data at scale, and
                automate decisions that used to require entire teams.
              </p>
              <p>
                We work with operations leaders, founders, and product teams who
                are past the hype and ready to build AI that actually works inside
                their business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">Capabilities</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                Custom AI - Engineered Around{" "}
                <span className="display-italic text-gradient-brand">Your Workflow</span>
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
                Outcome First. Technology Second.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
              <p>
                Every AI system we build starts with one question: what does success
                look like in measurable terms? Hours saved per week? Cost per
                processed document? Reduction in manual review time?
              </p>
              <p>
                We define that metric before we write a line of code - then engineer
                backward from it. No proof-of-concept demos that never make it to
                production. No AI for the sake of AI.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">Why Devity</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                AI Engineering, Not{" "}
                <span className="display-italic text-gradient-brand">AI Experimentation</span>
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
              Ready to put AI to work in your business?
            </h2>
            <a
              href="/contact?service=ai-automation"
              className="inline-flex items-center gap-3 px-8 py-5 bg-mint text-ink font-mono text-xs tracking-[0.25em] uppercase hover:bg-background transition-colors group"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
