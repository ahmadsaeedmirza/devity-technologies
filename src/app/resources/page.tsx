import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "@/components/devity/Layout";
import PageHero from "@/components/devity/PageHero";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources | Devity Technologies",
    description:
        "Guides and insights on web development, SaaS, mobile, and AI automation.",
    alternates: {
        canonical: "https://www.devitytechnologies.com/resources",
    },
};

interface PostFrontmatter {
    title: string;
    description: string;
    date: string;
}

interface Post extends PostFrontmatter {
    slug: string;
}

const contentDir = path.join(process.cwd(), "content/blog");

export default function Page() {
    const files = fs.readdirSync(contentDir);
    const posts: Post[] = files
        .map((file) => {
            const source = fs.readFileSync(path.join(contentDir, file), "utf8");
            const { data } = matter(source);
            const frontmatter = data as PostFrontmatter;
            return { slug: file.replace(/\.mdx$/, ""), ...frontmatter };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <Layout>
            <PageHero
                eyebrow="Resources"
                title="Guides on building things that last."
                description="Practical, no-fluff guides on web platforms, SaaS, mobile, and AI automation."
            />
            <section className="py-20 border-t border-border">
                <div className="container space-y-px bg-border border border-border">
                    {posts.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/resources/${p.slug}`}
                            className="bg-background p-10 flex items-center justify-between gap-6 hover:bg-mint-soft/30 transition-colors group"
                        >
                            <div>
                                <h2 className="font-display text-2xl font-medium text-foreground mb-2">
                                    {p.title}
                                </h2>
                                <p className="text-foreground-soft text-sm leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:rotate-45" />
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
}