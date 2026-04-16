import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import dashboard from "@/assets/dashboard-light.jpg";
import mobile from "@/assets/mobile-light.jpg";
import aiStream from "@/assets/ai-light.jpg";
import SectionHeader from "./SectionHeader";

interface Block {
  num: string;
  tag: string;
  title: React.ReactNode;
  body: string;
  image: string;
  alt: string;
  bg: string;
  reverse?: boolean;
}

const blocks: Block[] = [
  {
    num: "01",
    tag: "Web & Ecosystem",
    title: <>High-performance <span className="display-italic">web platforms.</span></>,
    body: "From enterprise-grade SaaS to lightning-fast landing pages — we focus on speed, security, scalability and SEO that compounds.",
    image: dashboard,
    alt: "Modern analytics dashboard mockup",
    bg: "bg-mint-soft/50",
  },
  {
    num: "02",
    tag: "Mobile Solutions",
    title: <>Native-feel <span className="display-italic">mobile apps.</span></>,
    body: "Cross-platform apps with offline-first capability, smooth 60fps performance and intuitive UX that earns daily-active users.",
    image: mobile,
    alt: "Floating smartphone mockup",
    bg: "bg-background-alt",
    reverse: true,
  },
  {
    num: "03",
    tag: "AI & Automation",
    title: <>Workflow <span className="display-italic">intelligence.</span></>,
    body: "We integrate custom AI models and automated pipelines that eliminate manual bottlenecks — and unlock margin you can measure.",
    image: aiStream,
    alt: "Abstract data stream",
    bg: "bg-mint-soft/50",
  },
];

const ServicesPreview = () => (
  <section className="relative py-32 border-t border-border">
    <div className="container">
      <SectionHeader
        eyebrow="Services"
        title={<>Solutions, <span className="display-italic text-gradient-brand">engineered.</span></>}
        description="Three core practices, infinite combinations. We compose them around the outcome you're chasing."
      />

      <div className="space-y-6">
        {blocks.map((b) => (
          <article
            key={b.num}
            className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${b.bg} p-8 md:p-14 ${b.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-6 relative group">
              <div className="relative overflow-hidden bg-card shadow-card">
                <img
                  src={b.image}
                  alt={b.alt}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-3 left-6 font-mono text-[10px] tracking-[0.3em] uppercase bg-ink text-mint px-3 py-1.5">
                {b.tag}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="font-mono text-sm text-muted-foreground mb-6">
                /SERVICE — {b.num}
              </div>
              <h3 className="font-display font-medium text-4xl md:text-5xl leading-[1] mb-6 tracking-tight">
                {b.title}
              </h3>
              <p className="text-foreground-soft text-lg leading-relaxed mb-10 max-w-lg">
                {b.body}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase text-ink border-b border-ink pb-1 hover:border-teal hover:text-teal transition-colors group/cta"
              >
                Explore service
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/cta:rotate-45" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
