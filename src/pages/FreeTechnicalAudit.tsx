"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import ContactForm from "@/components/devity/ContactForm";
import { Check, ShieldCheck, Clock, Zap, FileSearch } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const auditContent: Record<string, { headline: string; deliverables: { label: string; desc: string }[] }> = {
    "web-platforms": {
        headline: "Find Out What's Actually Costing You Rankings and Conversions.",
        deliverables: [
            { label: "Technical SEO scan", desc: "Crawlability, indexing, structured data, and Core Web Vitals, checked against what's actually holding your rankings back" },
            { label: "Performance breakdown", desc: "Real load-time and rendering analysis, not just a generic score, tied to what's actually slow and why" },
            { label: "Prioritised recommendations", desc: "A ranked list of what to fix first, second, and third, based on effort versus impact" },
            { label: "A written report you keep", desc: "Delivered as a document, not just a call, so you have something concrete regardless of what you decide next" },
        ],
    },
    "saas-applications": {
        headline: "Find Out What's Actually Slowing Down Your SaaS Product.",
        deliverables: [
            { label: "Architecture review", desc: "Multi-tenancy, data isolation, and scaling readiness, checked against what happens at real usage volume" },
            { label: "Performance breakdown", desc: "Where load times, database queries, or infrastructure choices are costing you retention" },
            { label: "Prioritised recommendations", desc: "A ranked list of what to fix first, second, and third, based on effort versus impact" },
            { label: "A written report you keep", desc: "Delivered as a document, not just a call, so you have something concrete regardless of what you decide next" },
        ],
    },
    "mobile-applications": {
        headline: "Find Out What's Actually Costing You App Retention.",
        deliverables: [
            { label: "Performance scan", desc: "Frame rates, crash reports, and load handling, checked against what's actually driving uninstalls" },
            { label: "Offline and sync review", desc: "Whether your app's offline handling and background sync hold up under real conditions" },
            { label: "Prioritised recommendations", desc: "A ranked list of what to fix first, second, and third, based on effort versus impact" },
            { label: "A written report you keep", desc: "Delivered as a document, not just a call, so you have something concrete regardless of what you decide next" },
        ],
    },
    "ai-automation": {
        headline: "Find Out Where AI Automation Could Actually Save You Time and Money.",
        deliverables: [
            { label: "Workflow bottleneck scan", desc: "Where manual work is actually costing you the most time, checked against what's realistically automatable" },
            { label: "Build vs no-code assessment", desc: "An honest read on whether your use case needs custom engineering or a simpler no-code tool would do" },
            { label: "Prioritised recommendations", desc: "A ranked list of what to automate first, second, and third, based on effort versus impact" },
            { label: "A written report you keep", desc: "Delivered as a document, not just a call, so you have something concrete regardless of what you decide next" },
        ],
    },
};

const defaultContent = auditContent["web-platforms"];

const faqs = [
    { q: "Is this actually free, or is there a catch?", a: "It is genuinely free. You'll get a real, written audit whether or not you ever work with us. There's no obligation and no hidden follow-up fee." },
    { q: "Will I get pushed into a sales call?", a: "No. You'll receive the audit as a written report. If you have questions about it, you're welcome to ask, but there's no required call to receive your results." },
    { q: "What if things are already in good shape?", a: "Then the audit will say so, and you'll know exactly what's already working. A short, honest report confirming things are fine is still useful, and costs you nothing to find out." },
    { q: "How long does the audit take?", a: "You'll receive your written report within 48 hours of submitting your details." },
    { q: "Do I need to be an existing or upcoming client to request this?", a: "No. This is open to anyone who wants a genuine, no-obligation look at their product's technical health." },
];

const serviceToType: Record<string, string> = {
    "web-platforms": "Web Platform",
    "saas-applications": "SaaS Applications",
    "mobile-applications": "Mobile Application",
    "ai-automation": "AI & Automation",
};

const services = [
    { key: "web-platforms", label: "Web Platforms" },
    { key: "saas-applications", label: "SaaS Applications" },
    { key: "mobile-applications", label: "Mobile Applications" },
    { key: "ai-automation", label: "AI & Automation" },
];

const FreeTechnicalAuditContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialParam = searchParams?.get("service");
    const [service, setService] = useState(
        initialParam && auditContent[initialParam] ? initialParam : "web-platforms"
    );

    const handleServiceChange = (key: string) => {
        setService(key);
        router.replace(`/free-technical-audit?service=${key}`, { scroll: false });
    };

    useSEO({
        title: "Free Technical Audit",
        description:
            "Get a free, no-obligation technical audit, a written report within 48 hours, no sales call required.",
        path: "/free-technical-audit",
    });

    const content = auditContent[service] || defaultContent;
    const formType = serviceToType[service] || "Audit / Consulting";

    return (
        <Layout>
            <PageHero
                eyebrow="Free Technical Audit"
                title={content.headline}
                description="A free, written technical audit, before you spend a penny fixing anything."
                className="!pt-24"
                topContent={
                    <div>
                        <p className="label-mono mb-4">Which service is this for?</p>
                        <div className="flex flex-wrap gap-3">
                            {services.map((s) => (
                                <button
                                    key={s.key}
                                    onClick={() => handleServiceChange(s.key)}
                                    className={`px-5 py-2.5 font-mono text-xs tracking-[0.15em] uppercase border transition-colors ${service === s.key
                                        ? "bg-ink text-background border-ink"
                                        : "border-border text-foreground-soft hover:border-teal hover:text-foreground"
                                        }`}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>
                }
            />

            <section className="py-24 border-t border-border">
                <div className="container grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-28">
                        <p className="label-mono mb-6">What you get</p>
                        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                            A Real Report, Not a Sales Pitch in Disguise
                        </h2>
                    </div>
                    <div className="lg:col-span-7 grid gap-8">
                        {content.deliverables.map((d) => (
                            <div key={d.label} className="flex items-start gap-4 text-foreground-soft">
                                <Check className="w-5 h-5 mt-1 text-teal shrink-0" strokeWidth={2.5} />
                                <div>
                                    <h3 className="font-display text-xl font-medium text-foreground mb-2">{d.label}</h3>
                                    <p className="leading-relaxed text-sm md:text-base">{d.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-ink text-background border-t border-border">
                <div className="container grid sm:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <FileSearch className="w-6 h-6 text-mint" strokeWidth={1.75} />
                        <div className="font-display text-3xl font-medium">48h</div>
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">Turnaround on your written report</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Zap className="w-6 h-6 text-mint" strokeWidth={1.75} />
                        <div className="font-display text-3xl font-medium">£0</div>
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">No cost, no obligation</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-mint" strokeWidth={1.75} />
                        <div className="font-display text-3xl font-medium">0</div>
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/60">Required sales calls</p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-alt border-t border-border">
                <div className="container">
                    <div className="max-w-2xl mb-16">
                        <p className="label-mono mb-6">Get started</p>
                        <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                            Request Your Free Audit
                        </h2>
                    </div>
                    <div className="bg-background border border-border p-8 md:p-12 shadow-card max-w-3xl">
                        <ContactForm defaultType={formType} autoScrollOnService={false} />
                    </div>
                </div>
            </section>

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
        </Layout>
    );
};

const FreeTechnicalAudit = () => (
    <Suspense fallback={null}>
        <FreeTechnicalAuditContent />
    </Suspense>
);

export default FreeTechnicalAudit;