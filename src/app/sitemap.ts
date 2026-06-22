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
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changefreq as any,
    priority: r.priority,
  }));
}
