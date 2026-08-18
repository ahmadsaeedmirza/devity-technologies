import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Layout from "@/components/devity/Layout";
import FAQAccordion from "@/components/devity/FAQAccordion";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { toolComponents } from "@/lib/tools-registry";

const TOOLS_DIR = path.join(process.cwd(), "content/tools");

interface FAQItem {
  q: string;
  a: string;
}

interface ToolFrontmatter {
  title: string;
  category: string;
  description: string;
  component: string;
  ctaHeading: string;
  ctaText: string;
  ctaLink: string;
  faqs?: FAQItem[];
}

type Params = Promise<{ slug: string }>;

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="font-display text-3xl md:text-4xl font-medium leading-tight tracking-tight mt-16 mb-6"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="font-display text-2xl font-medium leading-tight tracking-tight mt-10 mb-4"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className="text-foreground-soft text-lg leading-relaxed mb-6"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="text-foreground font-semibold" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="space-y-3 mb-8 pl-6 list-disc text-foreground-soft text-lg leading-relaxed"
      {...props}
    />
  ),
  li: (props: React.ComponentProps<"li">) => <li className="pl-1" {...props} />,
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-teal hover:underline" {...props} />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="my-10 overflow-x-auto border border-border">
      <table className="w-full text-left border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="bg-background-alt" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th
      className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground p-4 border-b border-border"
      {...props}
    />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td
      className="text-foreground-soft text-sm leading-relaxed p-4 border-b border-border"
      {...props}
    />
  ),
  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="border-border my-16" {...props} />
  ),
};

export async function generateStaticParams() {
  const files = fs.readdirSync(TOOLS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(TOOLS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  const fm = data as ToolFrontmatter;
  return {
    title: `${fm.title} | Devity Technologies`,
    description: fm.description,
    alternates: {
      canonical: `https://www.devitytechnologies.com/tools/${slug}`,
    },
  };
}

export default async function ToolPage({ params }: { params: Params }) {
  const { slug } = await params;
  const filePath = path.join(TOOLS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as ToolFrontmatter;

  const ToolComponent = toolComponents[frontmatter.component];

  if (!ToolComponent) {
    throw new Error(
      `No component registered for "${frontmatter.component}". Check src/lib/tools-registry.ts`,
    );
  }

  const [before, after] = content.split("[TOOL]");

  return (
    <Layout>
      <article className="container py-24 max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-teal mb-4">
          {frontmatter.category || "Tools"}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6">
          {frontmatter.title}
        </h1>
        <p className="text-foreground-soft text-lg mb-16 pb-12 border-b border-border">
          {frontmatter.description}
        </p>

        <div className="max-w-none">
          <MDXRemote
            source={before}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        <div className="my-16 not-prose">
          <ToolComponent />
        </div>

        <div className="max-w-none">
          <MDXRemote
            source={after}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {frontmatter.faqs && frontmatter.faqs.length > 0 && (
          <div className="mt-20">
            <p className="label-mono mb-6">FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-[0.98] tracking-tight mb-10">
              Questions, Answered.
            </h2>
            <FAQAccordion items={frontmatter.faqs} />
          </div>
        )}

        {frontmatter.ctaHeading && (
          <div className="mt-20 bg-ink text-background p-12 md:p-16 text-center relative overflow-hidden">
            <div
              className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[350px] h-[350px] opacity-10 blur-3xl pointer-events-none"
              style={{ background: "var(--gradient-brand)" }}
            />
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-8 max-w-xl mx-auto relative z-10">
              {frontmatter.ctaHeading}
            </h2>
            <a
              href={frontmatter.ctaLink}
              className="inline-flex items-center gap-3 px-8 py-5 bg-mint text-ink font-mono text-xs tracking-[0.25em] uppercase hover:bg-background transition-colors group relative z-10"
            >
              {frontmatter.ctaText}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        )}
      </article>
    </Layout>
  );
}
