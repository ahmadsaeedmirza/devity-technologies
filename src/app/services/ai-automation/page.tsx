import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { Check, ArrowUpRight, ShieldCheck, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation & Custom AI Development Agency | Devity Technologies",
  description:
    "We design and build custom AI systems, LLM agents, and automated workflows that eliminate manual bottlenecks and unlock measurable business outcomes. Serving clients in the US, UK, and Australia.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/services/ai-automation",
  },
};

const builds = [
  { label: "Custom LLM Agents", desc: "AI assistants and autonomous agents built on your data and processes" },
  { label: "RAG Pipelines", desc: "Retrieval-augmented generation systems that give AI accurate, context-aware answers" },
  { label: "Workflow Orchestration", desc: "Multi-step automated pipelines that replace manual, repetitive processes" },
  { label: "Data Extraction & Processing", desc: "Intelligent document parsing, classification, and structured output" },
  { label: "Forecasting Models", desc: "Predictive systems for demand, churn, revenue, and operational planning" },
  { label: "Voice & Vision AI", desc: "Speech recognition, image analysis, and multimodal AI integrations" },
];

const reasons = [
  "Business-outcome focused, every system is tied to a metric that matters",
  "Production-grade systems, not notebooks, not demos, deployed, monitored, maintained",
  "Custom-built, not off-the-shelf, your workflow is unique, your AI system should be too",
  "Full integration, connects with your existing tools, databases, and APIs",
  "US, UK & Australia timezone coverage, available when you need us",
];

const faqs = [
  { q: "Do you build with our existing data and tools, or do we need to migrate first?", a: "We build around what you already have. Our systems integrate with your existing databases, APIs, and internal tools rather than requiring a migration before we can start." },
  { q: "What if our team doesn't have any AI or ML expertise in-house?", a: "That's the normal starting point for most of our clients. You bring the business problem, we bring the AI engineering. No in-house expertise required on your side." },
  { q: "How do you measure whether an AI automation project actually worked?", a: "We define the success metric before writing any code, hours saved, cost per document processed, forecast accuracy, and we report against that same metric after launch." },
  { q: "Is our data safe if we hand it over for an AI system?", a: "Yes. Client data is handled under strict confidentiality, and any system we build follows GDPR-aligned data handling practices for clients in the UK and EU." },
];

interface FeaturedImage {
  src: string;
  alt: string;
}

interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  featuredImage: FeaturedImage;
  category?: string;
}

function getRelatedPosts(category: string, limit: number): RelatedPost[] {
  const contentDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(contentDir);

  return files
    .map((file) => {
      const source = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data } = matter(source);
      return { slug: file.replace(/\.mdx$/, ""), ...(data as any) };
    })
    .filter((post) => post.category === category)
    .slice(0, limit);
}

export default function Page() {
  const relatedPosts = getRelatedPosts("AI Automation", 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Automation",
              "provider": { "@type": "Organization", "name": "Devity Technologies" },
              "description": "Custom machine learning and automated internal processes engineered for measurable business outcomes."
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Do you build with our existing data and tools, or do we need to migrate first?", "acceptedAnswer": { "@type": "Answer", "text": "We build around what you already have. Our systems integrate with your existing databases, APIs, and internal tools rather than requiring a migration before we can start." } },
                { "@type": "Question", "name": "What if our team doesn't have any AI or ML expertise in-house?", "acceptedAnswer": { "@type": "Answer", "text": "That's the normal starting point for most of our clients. You bring the business problem, we bring the AI engineering. No in-house expertise required on your side." } },
                { "@type": "Question", "name": "How do you measure whether an AI automation project actually worked?", "acceptedAnswer": { "@type": "Answer", "text": "We define the success metric before writing any code, hours saved, cost per document processed, forecast accuracy, and we report against that same metric after launch." } },
                { "@type": "Question", "name": "Is our data safe if we hand it over for an AI system?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Client data is handled under strict confidentiality, and any system we build follows GDPR-aligned data handling practices for clients in the UK and EU." } }
              ]
            }
          ])
        }}
      />
      <Layout>
        <PageHero
          eyebrow="Services / AI Automation"
          title="Cut the Manual Work Without Cutting Corners."
          description="We don't build AI demos. We engineer intelligent systems tied to measurable outcomes, time saved, cost reduced, revenue unlocked."
        />

        <section className="py-24 border-t border-border">
          <div className="container grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="label-mono mb-6">The problem</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                Most AI Projects Never Leave the Demo Stage
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-foreground-soft text-lg leading-relaxed">
              <p>
                Teams across the US, UK, and Australia are sitting on the same
                bottleneck, hours lost every week to manual data entry,
                repetitive document review, and decisions that still require a
                person to sit and process information a system could handle
                instead.
              </p>
              <p>
                Most attempts to fix this stall out as a proof-of-concept that
                impresses in a demo and never makes it into daily production
                use. That's the gap we build for.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-ink text-background border-t border-border">
          <div className="container grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Zap className="w-6 h-6 text-mint" strokeWidth={1.75} />
              <div className="font-display text-3xl font-medium">40+</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">Systems shipped to production</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-6 h-6 text-mint" strokeWidth={1.75} />
              <div className="font-display text-3xl font-medium">24h</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">Response time, Mon-Fri</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-mint" strokeWidth={1.75} />
              <div className="font-display text-3xl font-medium">99.9%</div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">Uptime SLA</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">Capabilities</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                Custom AI, Engineered Around{" "}
                <span className="display-italic text-gradient-brand">Your Workflow</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {builds.map((b) => (
                <div key={b.label} className="flex items-start gap-4 text-foreground-soft">
                  <Check className="w-5 h-5 mt-1 text-teal shrink-0" strokeWidth={2.5} />
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">{b.label}</h3>
                    <p className="leading-relaxed text-sm md:text-base">{b.desc}</p>
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
                Every AI system we build starts with one question, what does
                success look like in measurable terms? Hours saved per week?
                Cost per processed document? Reduction in manual review time?
              </p>
              <p>
                We define that metric before we write a line of code, then
                engineer backward from it. No proof-of-concept demos that
                never make it to production. No AI for the sake of AI.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <p className="label-mono mb-6">In practice</p>
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                14 Warehouses, One{" "}
                <span className="display-italic text-gradient-brand">Automated System</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">−40%</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">Manual workflow</p>
              </div>
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">94%</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">Forecast accuracy</p>
              </div>
              <div className="bg-background border border-border p-10">
                <div className="font-display text-4xl font-medium text-gradient-brand">320+</div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4">Hours saved per week</p>
              </div>
            </div>
            <p className="text-foreground-soft text-lg leading-relaxed max-w-3xl">
              A logistics team drowning in spreadsheets and manual
              reconciliation across 14 warehouses now runs on a custom AI
              orchestration layer with predictive demand modeling, automated
              reroutes, and a unified ops dashboard.{" "}
              <a href="/work#supply-chain-ai" className="text-teal hover:underline">
                See the full case study
              </a>
              .
            </p>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="py-24 border-t border-border">
            <div className="container">
              <div className="max-w-3xl mb-16">
                <p className="label-mono mb-6">Read more</p>
                <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                  Guides on{" "}
                  <span className="display-italic text-gradient-brand">AI Automation</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/resources/${post.slug}`}
                    className="group block border border-border hover:shadow-card transition-shadow"
                  >
                    {post.featuredImage && (
                      <img
                        src={post.featuredImage.src}
                        alt={post.featuredImage.alt}
                        width={400}
                        height={260}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-8">
                      <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-teal transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground-soft text-sm leading-relaxed">{post.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-24 border-t border-border">
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
                <div key={r} className="bg-background border border-border p-10 hover:shadow-card transition-shadow flex flex-col justify-between">
                  <span className="font-mono text-xs text-teal">/ 0{i + 1}</span>
                  <p className="font-display text-lg text-foreground mt-8 leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background-alt border-t border-border">
          <div className="container grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">GDPR-aligned</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">Client data is handled under strict confidentiality and GDPR-aligned practices for UK and EU clients.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">Timezone overlap</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">Remote-first, with working hours that overlap the UK and Australian business day.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg font-medium mb-2">24h response</h3>
                <p className="text-foreground-soft text-sm leading-relaxed">Every enquiry gets a reply within 24 hours, Monday through Friday.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-ink text-background border-t border-border text-center relative overflow-hidden">
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[450px] h-[450px] opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-brand)" }} />
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
        </section >

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