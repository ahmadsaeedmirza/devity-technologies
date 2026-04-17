import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();

const tryLoadEnvFile = (fileName) => {
  const fullPath = path.join(projectRoot, fileName);
  if (!fs.existsSync(fullPath)) return;

  const raw = fs.readFileSync(fullPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;

    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();

    if (!key || key in process.env) continue;

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
};

// Allow local builds to provide SITE_URL/VITE_SITE_URL via files.
tryLoadEnvFile(".env");
tryLoadEnvFile(".env.local");

const routes = [
  { loc: "/", changefreq: "weekly", priority: 1.0 },
  { loc: "/services", changefreq: "monthly", priority: 0.9 },
  { loc: "/work", changefreq: "monthly", priority: 0.9 },
  { loc: "/about", changefreq: "yearly", priority: 0.8 },
  { loc: "/process", changefreq: "yearly", priority: 0.8 },
  { loc: "/contact", changefreq: "yearly", priority: 0.7 },
];

const today = new Date().toISOString().slice(0, 10);

const normalizeBaseUrl = (url) => url.replace(/\/$/, "");

const getBaseUrl = () => {
  const explicit = process.env.SITE_URL || process.env.VITE_SITE_URL;
  if (explicit) return normalizeBaseUrl(explicit);

  // Default to the canonical production domain.
  // This avoids generating sitemaps that point at Vercel preview URLs.
  return "https://www.devitytechnologies.com";
};

const baseUrl = getBaseUrl();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) =>
        `  <url>\n` +
        `    <loc>${baseUrl}${r.loc}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n` +
        `    <priority>${r.priority.toFixed(1)}</priority>\n` +
        `  </url>`,
    )
    .join("\n") +
  `\n</urlset>\n`;

const distDir = path.join(projectRoot, "dist");
const publicDir = path.join(projectRoot, "public");

if (!fs.existsSync(distDir)) {
  console.error("[sitemap] dist/ not found. Run the Vite build first.");
  process.exit(1);
}

fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf8");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");

console.log(`[sitemap] Wrote sitemap.xml for ${baseUrl}`);
