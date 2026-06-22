import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import ServicesPreview from "@/components/devity/ServicesPreview";
import { Check } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, growing businesses, and enterprises looking for premium, engineering-focused software solutions across web, mobile, SaaS, POS systems and AI automation.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope, a web platform typically takes 4-8 weeks, while a full SaaS or mobile app can take 8-16 weeks. We share a clear timeline before any project begins.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer ongoing maintenance and support packages after launch to ensure your product stays performant and up to date.",
  },
  {
    q: "Can you build both the design and the development?",
    a: "Yes, we handle end-to-end delivery from UI/UX design to full-stack development and deployment.",
  },
  {
    q: "What technologies do you use?",
    a: "We are technology-agnostic, selecting the best architecture based on your project's specific goals rather than forcing a preset stack. Our team is fluent across modern frontend frameworks, scalable backends, mobile architectures, databases, and cloud infrastructure. We evaluate your product's performance, scalability, and business objectives to deploy the absolute best tools for the job.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via our contact page or email us at info@devitytechnologies.com and we'll schedule a free discovery call.",
  },
];

const Services = () => {
  useSEO({
    title: "Services",
    description:
      "Web platforms, mobile applications, and AI automation - engineered for speed, reliability, and measurable outcomes.",
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
        description="Every engagement is custom - but it draws from a sharp, opinionated set of practices we've refined across 40+ shipped systems."
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

      <section className="py-32 bg-background border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="label-mono mb-6">FAQ</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight mb-6">
                Common{" "}
                <span className="display-italic text-gradient-brand">questions</span>{" "}
                answered.
              </h2>
              <p className="text-foreground-soft text-lg leading-relaxed max-w-sm">
                Have a question that isn't answered here? Reach out via our{" "}
                <a href="/contact" className="text-teal hover:underline font-mono text-sm tracking-wide">
                  contact page
                </a>.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border bg-background-alt/30 hover:bg-background-alt/50 transition-colors px-6 md:px-8 py-2 rounded-sm"
                  >
                    <AccordionTrigger className="text-left font-display text-lg md:text-xl font-medium text-foreground hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground-soft leading-relaxed text-sm md:text-base pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
