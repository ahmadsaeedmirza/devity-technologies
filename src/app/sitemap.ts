import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://www.devitytechnologies.com").replace(/\/$/, "");

  const routes = [
    { path: "", changefreq: "weekly", priority: 1.0 },
    { path: "/services", changefreq: "monthly", priority: 0.9 },
    { path: "/services/web-platforms", changefreq: "monthly", priority: 0.8 },
    { path: "/services/saas-applications", changefreq: "monthly", priority: 0.8 },
    { path: "/services/mobile-applications", changefreq: "monthly", priority: 0.8 },
    { path: "/services/ai-automation", changefreq: "monthly", priority: 0.8 },
    { path: "/work", changefreq: "monthly", priority: 0.9 },
    { path: "/about", changefreq: "yearly", priority: 0.8 },
    { path: "/process", changefreq: "yearly", priority: 0.8 },
    { path: "/contact", changefreq: "yearly", priority: 0.7 },
    { path: "/resources", changefreq: "weekly", priority: 0.8 },
    { path: "/free-technical-audit", changefreq: "monthly", priority: 0.9 },
  ];

  const staticEntries = routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changefreq as any,
    priority: r.priority,
  }));

  const contentDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(contentDir);

  const blogEntries = files.map((file) => {
    const source = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data } = matter(source);
    const slug = file.replace(/\.mdx$/, "");

    return {
      url: `${baseUrl}/resources/${slug}`,
      lastModified: new Date(data.date),
      changeFrequency: "monthly" as any,
      priority: 0.7,
    };
  });

  return [...staticEntries, ...blogEntries];
}