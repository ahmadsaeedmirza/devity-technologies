import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Layout from "@/components/devity/Layout";
import FAQAccordion from "@/components/devity/FAQAccordion";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

const contentDir = path.join(process.cwd(), "content/blog");

interface Author {
    name: string;
    role: string;
    photo: string;
}

interface FeaturedImage {
    src: string;
    alt: string;
}

interface FAQItem {
    q: string;
    a: string;
}

interface PostFrontmatter {
    title: string;
    description: string;
    date: string;
    author: Author;
    featuredImage: FeaturedImage;
    ctaHeading: string;
    ctaText: string;
    ctaLink: string;
    faqs: FAQItem[];
}

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
    li: (props: React.ComponentProps<"li">) => (
        <li className="pl-1" {...props} />
    ),
    a: (props: React.ComponentProps<"a">) => (
        <a className="text-teal hover:underline" {...props} />
    ),
    img: (props: React.ComponentProps<"img">) => (
        <img
            className="w-full h-auto my-12 border border-border"
            loading="lazy"
            {...props}
        />
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
    const files = fs.readdirSync(contentDir);
    return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    const frontmatter = data as PostFrontmatter;

    return {
        title: `${frontmatter.title} | Devity Technologies`,
        description: frontmatter.description,
        alternates: {
            canonical: `https://www.devitytechnologies.com/resources/${slug}`,
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);
    const frontmatter = data as PostFrontmatter;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": frontmatter.title,
                            "description": frontmatter.description,
                            "datePublished": frontmatter.date,
                            "image": frontmatter.featuredImage?.src,
                            "author": {
                                "@type": "Person",
                                "name": frontmatter.author?.name,
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Devity Technologies",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": frontmatter.faqs.map((f) => ({
                                "@type": "Question",
                                "name": f.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": f.a,
                                },
                            })),
                        },
                    ]),
                }}
            />
            <Layout>
                <article className="container py-24 max-w-3xl mx-auto">
                    <p className="font-mono text-xs tracking-[0.25em] uppercase text-teal mb-4">
                        Resources
                    </p>
                    <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6">
                        {frontmatter.title}
                    </h1>
                    <p className="text-foreground-soft text-lg mb-8">{frontmatter.description}</p>

                    <div className="flex items-center gap-3 mb-12 pb-12 border-b border-border">
                        <img
                            src={frontmatter.author.photo}
                            alt={frontmatter.author.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover w-10 h-10"
                        />
                        <div>
                            <p className="font-display text-sm font-medium text-foreground">
                                {frontmatter.author.name}
                            </p>
                            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                                {frontmatter.author.role}
                            </p>
                        </div>
                    </div>

                    {frontmatter.featuredImage && (
                        <img
                            src={frontmatter.featuredImage.src}
                            alt={frontmatter.featuredImage.alt}
                            className="w-full h-auto mb-16 border border-border"
                        />
                    )}

                    <div className="max-w-none">
                        <MDXRemote source={content} components={mdxComponents} />
                    </div>

                    {frontmatter.faqs?.length > 0 && (
                        <div className="mt-20">
                            <p className="label-mono mb-6">FAQ</p>
                            <h2 className="font-display text-3xl md:text-4xl font-medium leading-[0.98] tracking-tight mb-10">
                                Questions, Answered.
                            </h2>
                            <FAQAccordion items={frontmatter.faqs} />
                        </div>
                    )}

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
                </article>
            </Layout>
        </>
    );
}