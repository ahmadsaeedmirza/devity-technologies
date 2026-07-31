"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/app/resources/page";

export default function ResourcesGrid({ posts }: { posts: Post[] }) {
  const remainingPosts = posts;

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(remainingPosts.map((p) => p.category).filter(Boolean)),
    ) as string[];
    return unique;
  }, [remainingPosts]);

  const tabs = ["Featured", "Most Recent", ...categories];
  const [activeTab, setActiveTab] = useState("Featured");

  const filteredPosts = useMemo(() => {
    if (activeTab === "Featured") {
      const featuredOnly = remainingPosts.filter((p) => p.featured);
      return featuredOnly.length > 0 ? featuredOnly : remainingPosts;
    }
    if (activeTab === "Most Recent") {
      return remainingPosts;
    }
    return remainingPosts.filter((p) => p.category === activeTab);
  }, [activeTab, remainingPosts]);

  return (
    <>
      {/* Tabs */}
      <section className="pb-10 border-t border-border">
        <div className="container pt-10">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 font-mono text-xs tracking-[0.15em] uppercase border transition-colors ${
                  activeTab === tab
                    ? "bg-ink text-background border-ink"
                    : "border-border text-foreground-soft hover:border-teal hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid, max 3 per row */}
      <section className="pb-24">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/resources/${p.slug}`}
                  className="group block border border-border hover:shadow-card transition-shadow"
                >
                  {p.featuredImage && (
                    <img
                      src={p.featuredImage.src}
                      alt={p.featuredImage.alt}
                      width={400}
                      height={260}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    {p.category && (
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-3">
                        {p.category}
                      </p>
                    )}
                    <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-teal transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-foreground-soft text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-foreground-soft text-sm">
              No posts in this category yet, check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
