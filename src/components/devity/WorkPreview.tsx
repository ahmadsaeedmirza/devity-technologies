import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

export const cases = [
  {
    slug: "web-platform-revamp",
    tag: "Web Platform",
    title: "Web Platform Revamp",
    desc: "Complete replatforming of a legacy web platform onto a modern edge-rendered stack.",
    metric: "+50%",
    metricLabel: "Lead Conversion Lift",
    color: "bg-mint",
  },
  {
    slug: "saas-platform",
    tag: "SaaS",
    title: "Custom SaaS Platform",
    desc: "Multi-tenant architecture engineered to scale gracefully with usage spikes.",
    metric: "1000",
    metricLabel: "Users Scaled To",
    color: "bg-teal",
  },
  {
    slug: "supply-chain-ai",
    tag: "AI",
    title: "Automated Supply Chain",
    desc: "Custom AI orchestration layer that reroutes inventory and forecasts demand.",
    metric: "−40%",
    metricLabel: "Manual Workflow",
    color: "bg-ink",
  },
];

const WorkPreview = () => (
  <section className="relative py-32 bg-background-alt border-y border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Outcomes, not{" "}
              <span className="display-italic text-gradient-brand">
                deliverables.
              </span>
            </>
          }
          description="A snapshot of recent engagements where measurable performance came standard."
          className="mb-0"
        />
        <Link
          to="/work"
          className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase text-ink border-b border-ink pb-1 hover:text-teal hover:border-teal transition-colors group"
        >
          All case studies
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <Link
            to={`/work#${c.slug}`}
            key={c.slug}
            className={`group relative ${c.color} text-background overflow-hidden h-[440px] flex flex-col justify-between p-8 hover:-translate-y-1 transition-transform duration-700`}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-90">
                {c.tag}
              </span>
              <span className="font-mono text-xs opacity-60">
                /CASE 0{i + 1}
              </span>
            </div>

            <div>
              <div className="font-display text-7xl md:text-8xl font-medium leading-[0.85] mb-2">
                {c.metric}
              </div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80 mb-8">
                {c.metricLabel}
              </div>
              <h3 className="font-display text-2xl font-medium mb-2">
                {c.title}
              </h3>
              <p className="text-background/80 text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>

            <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default WorkPreview;
