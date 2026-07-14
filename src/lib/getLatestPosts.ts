import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface FeaturedImage {
    src: string;
    alt: string;
}

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    featuredImage: FeaturedImage;
}

export function getLatestPosts(limit: number): Post[] {
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