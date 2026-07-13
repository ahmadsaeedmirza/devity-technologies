import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Layout from "@/components/devity/Layout";
import type { Metadata } from "next";

const contentDir = path.join(process.cwd(), "content/blog");

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

    return {
        title: `${data.title} | Devity Technologies`,
        description: data.description,
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": data.title,
                        "description": data.description,
                        "datePublished": data.date,
                        "author": {
                            "@type": "Organization",
                            "name": "Devity Technologies",
                        },
                    }),
                }}
            />
            <Layout>
                <article className="container py-24 max-w-3xl mx-auto prose prose-invert">
                    <p className="font-mono text-xs tracking-[0.25em] uppercase text-teal mb-4">
                        Resources
                    </p>
                    <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6">
                        {data.title}
                    </h1>
                    <p className="text-foreground-soft text-lg mb-12">{data.description}</p>
                    <MDXRemote source={content} />
                </article>
            </Layout>
        </>
    );
}