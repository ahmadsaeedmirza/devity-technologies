import { Cpu, Zap, LayoutDashboard } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Cpu,
    title: "Precision engineering",
    body: "We don't just write code — we architect systems designed for 99.9% uptime, observability and clean failure modes.",
    color: "from-mint-soft to-background",
  },
  {
    icon: Zap,
    title: "Future-ready tech",
    body: "Modern stacks (MERN, Edge, AI) so your business stays ahead of the curve — not chained to legacy debt.",
    color: "from-background to-mint-soft",
  },
  {
    icon: LayoutDashboard,
    title: "User-centric design",
    body: "Minimalist interfaces engineered to maximize retention, conversion and the moments that matter.",
    color: "from-mint-soft to-background",
  },
];

const WhyDevity = () => (
  <section className="relative py-32">
    <div className="container">
      <SectionHeader
        eyebrow="Why Devity"
        title={<>Built on <span className="display-italic text-gradient-brand">discipline</span>, not hype.</>}
        description="Three principles guide every system we ship — from architecture to interface."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, body, color }, i) => (
          <article
            key={title}
            className={`group relative bg-gradient-to-br ${color} border border-border p-10 hover:shadow-card transition-all duration-700 hover:-translate-y-1`}
          >
            <div className="flex items-start justify-between mb-16">
              <div className="w-14 h-14 flex items-center justify-center bg-ink text-mint group-hover:bg-teal transition-colors duration-500">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                / 0{i + 1}
              </span>
            </div>
            <h3 className="font-display text-3xl font-medium mb-4 leading-tight">
              {title}
            </h3>
            <p className="text-foreground-soft leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDevity;
