import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

export const steps = [
  { icon: Compass, title: "Discovery", body: "We define vision, KPIs, audience and constraints — together. The blueprint comes first." },
  { icon: PenTool, title: "Design", body: "Architecting UX, IA and the interaction language. Prototypes you can actually click." },
  { icon: Code2, title: "Development", body: "High-performance agile builds with weekly demos. You see progress, not just timelines." },
  { icon: Rocket, title: "Launch & Scale", body: "Continuous growth optimization, observability and SLAs you can rely on." },
];

const ProcessTimeline = () => (
  <section className="relative py-32">
    <div className="container">
      <SectionHeader
        eyebrow="Process"
        title={<>From idea to <span className="display-italic text-gradient-brand">infrastructure.</span></>}
        description="Four stages. No surprises, no scope chaos — just a system designed to ship."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {steps.map((s, i) => (
          <div key={s.title} className="relative bg-background p-10 group hover:bg-mint-soft/30 transition-colors duration-500">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-teal mb-8">
              Step / 0{i + 1}
            </div>
            <div className="w-14 h-14 flex items-center justify-center mb-8 bg-ink text-mint group-hover:bg-teal transition-colors">
              <s.icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-2xl font-medium mb-3">{s.title}</h3>
            <p className="text-foreground-soft leading-relaxed text-sm">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
