import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import ServicesPreview from "@/components/devity/ServicesPreview";
import { Check } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const capabilities = [
  {
    title: "Web & Ecosystem Development",
    items: [
      "SaaS platforms",
      "Headless commerce",
      "Marketing sites",
      "Internal tools",
      "Edge-rendered apps",
      "Design systems",
    ],
  },
  {
    title: "Mobile App Solutions",
    items: [
      "React Native apps",
      "Offline-first sync",
      "Push notifications",
      "App Store strategy",
      "Native integrations",
      "Performance tuning",
    ],
  },
  {
    title: "AI & Workflow Automation",
    items: [
      "Custom LLM agents",
      "RAG pipelines",
      "Workflow orchestration",
      "Data extraction",
      "Forecasting models",
      "Voice & vision AI",
    ],
  },
];

const Services = () => {
  useSEO({
    title: "Services",
    description:
      "Web platforms, mobile applications, and AI automation—engineered for speed, reliability, and measurable outcomes.",
    path: "/services",
  });

  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Engineered{" "}
            <span className="display-italic text-gradient-brand">
              capabilities.
            </span>
          </>
        }
        description="Every engagement is custom — but it draws from a sharp, opinionated set of practices we've refined across 40+ shipped systems."
      />

      <ServicesPreview />

      <section className="py-32 bg-background-alt border-t border-border">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="label-mono mb-6">What's included</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
              A full-stack{" "}
              <span className="display-italic text-gradient-brand">studio</span>{" "}
              at your side.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="bg-background border border-border p-10 hover:shadow-card transition-shadow"
              >
                <h3 className="font-display text-2xl font-medium mb-8">
                  {c.title}
                </h3>
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-foreground-soft"
                    >
                      <Check
                        className="w-4 h-4 mt-1 text-teal shrink-0"
                        strokeWidth={2}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
