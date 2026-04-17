import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import team from "@/assets/team-light.jpg";
import { useSEO } from "@/hooks/use-seo";

const principles = [
  {
    k: "Engineering quality",
    v: "We ship code we'd be proud to read in five years.",
  },
  {
    k: "Direct collaboration",
    v: "No layers, no proxies. You talk to the people building.",
  },
  {
    k: "Outcomes first",
    v: "Deliverables are easy. Outcomes take craft and judgement.",
  },
  {
    k: "Sustainable pace",
    v: "Tired teams ship bugs. We optimize for momentum, not heroics.",
  },
];

const About = () => {
  useSEO({
    title: "About",
    description:
      "A small studio of senior engineers and designers building software that quietly does its job — exceptionally well.",
    path: "/about",
  });

  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title={
          <>
            Where innovation meets{" "}
            <span className="display-italic text-gradient-brand">
              reliability.
            </span>
          </>
        }
        description="Devity Technologies is a small studio of senior engineers and designers building software that quietly does its job — exceptionally well."
      />

      <section className="py-20">
        <div className="container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 relative">
            <img
              src={team}
              alt="Devity engineering team collaborating"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-auto"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-mint p-8 max-w-[260px] shadow-card">
              <div className="font-display text-5xl font-medium text-ink">
                Est. 2021
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/70 mt-2">
                A studio of engineers & designers
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <p className="label-mono mb-6">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] mb-8 tracking-tight">
              Technology should be{" "}
              <span className="display-italic text-gradient-brand">
                elegant,
              </span>{" "}
              not <span className="display-italic">excessive.</span>
            </h2>
            <div className="space-y-5 text-foreground-soft text-lg leading-relaxed">
              <p>
                Devity was founded on the principle that high-end technology
                should be accessible, elegant, and uncompromising in
                performance. We don't believe in 'one-size-fits-all'.
              </p>
              <p>
                Our team lives at the intersection of logic and creativity,
                dedicated to solving specific business problems with systems
                that are a pleasure to operate, scale and extend.
              </p>
              <p>
                We're small on purpose. Every engagement gets senior attention,
                deliberate scope, and a team that owns the outcome — not just a
                ticket queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="label-mono mb-6">Principles</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
              What we hold{" "}
              <span className="display-italic text-gradient-brand">
                non-negotiable.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {principles.map((p, i) => (
              <div
                key={p.k}
                className="bg-background p-12 hover:bg-mint-soft/30 transition-colors"
              >
                <div className="font-mono text-xs text-muted-foreground mb-6">
                  / 0{i + 1}
                </div>
                <h3 className="font-display text-3xl font-medium mb-4">
                  {p.k}
                </h3>
                <p className="text-foreground-soft leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
