"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    q: string;
    a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="grid gap-px bg-border border border-border">
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={item.q} className="bg-background">
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-6 p-10 text-left"
                            aria-expanded={isOpen}
                        >
                            <h3 className="font-display text-xl font-medium">{item.q}</h3>
                            <ChevronDown
                                className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                strokeWidth={1.75}
                            />
                        </button>
                        {isOpen && (
                            <div className="px-10 pb-10 -mt-4">
                                <p className="text-foreground-soft leading-relaxed">{item.a}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}