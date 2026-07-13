import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowUpRight } from "lucide-react";

interface FeaturedImage {
    src: string;
    alt: string;
}

interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    featuredImage: FeaturedImage;
}

function getLatestPosts(limit: number): Post[] {
    const contentDir = path.join(process.cwd(), "content/blog");
    const files = fs.readdirSync(contentDir);

    return files
        .map((file) => {
            const source = fs.readFileSync(path.join(contentDir, file), "utf8");
            const { data } = matter(source);
            return { slug: file.replace(/\.mdx$/, ""), ...(data as any) };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
}

export default function LatestResources() {
    const posts = getLatestPosts(3);

    if (posts.length === 0) return null;

    return (
        <section className="py-24 border-t border-border">
            <div className="container">
                <div className="max-w-3xl mb-16">
                    <p className="label-mono mb-6">Resources</p>
                    <h2 className="font-display text-4xl md:text-6xl font-medium leading-[0.98] tracking-tight">
                        Latest from{" "}
                        <span className="display-italic text-gradient-brand">the guide</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <a
                            key={post.slug}
                            href={`/resources/${post.slug}`}
                            className="group block border border-border hover:shadow-card transition-shadow"
                        >
                            {post.featuredImage && (
                                <img
                                    src={post.featuredImage.src}
                                    alt={post.featuredImage.alt}
                                    width={400}
                                    height={260}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-8">
                                <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-teal transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-foreground-soft text-sm leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
                <a
                    href="/resources"
                    className="inline-flex items-center gap-2 mt-12 font-mono text-xs tracking-[0.2em] uppercase text-teal hover:underline group"
                >
                    View all resources
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                </a>
            </div >
        </section >
    );
}