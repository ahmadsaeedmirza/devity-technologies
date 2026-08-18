import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Calculator } from "lucide-react";
import type { Metadata } from "next";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";

const TOOLS_DIR = path.join(process.cwd(), "content/tools");

interface ToolFrontmatter {
  title: string;
  description: string;
  category: string;
}

interface Tool extends ToolFrontmatter {
  slug: string;
}

export const metadata: Metadata = {
  title: "Free Tools | Devity Technologies",
  description:
    "Free, practical tools for founders and product teams, cost estimators, calculators, and more.",
  alternates: {
    canonical: "https://www.devitytechnologies.com/tools",
  },
};

function getAllTools(): Tool[] {
  if (!fs.existsSync(TOOLS_DIR)) return [];
  const files = fs.readdirSync(TOOLS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const source = fs.readFileSync(path.join(TOOLS_DIR, file), "utf8");
    const { data } = matter(source);
    const frontmatter = data as ToolFrontmatter;
    return { slug: file.replace(/\.mdx$/, ""), ...frontmatter };
  });
}

export default function Page() {
  const tools = getAllTools();

  return (
    <Layout>
      <PageHero
        eyebrow="Tools"
        title="Free tools for founders and product teams."
        description="Practical, no-signup tools built to give you a real, honest starting point before a bigger decision."
      />

      <section className="pb-24">
        <div className="container">
          {tools.length === 0 ? (
            <p className="text-foreground-soft text-sm">
              No tools published yet, check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group block border border-border hover:shadow-card transition-shadow"
                >
                  <div className="w-full h-48 bg-ink flex items-center justify-center">
                    <Calculator
                      className="w-12 h-12 text-teal"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="p-6">
                    {tool.category && (
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-3">
                        {tool.category}
                      </p>
                    )}
                    <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-teal transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-foreground-soft text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
