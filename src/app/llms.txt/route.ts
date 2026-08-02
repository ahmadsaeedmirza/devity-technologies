import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

const baseUrl = "https://www.devitytechnologies.com";

export async function GET() {
  const contentDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(contentDir);

  const posts = files
    .map((file) => {
      const source = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data } = matter(source);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        description: data.description,
        date: data.date,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const postLines = posts
    .map(
      (p) => `- [${p.title}](${baseUrl}/resources/${p.slug}): ${p.description}`,
    )
    .join("\n");

  const content = `# Devity Technologies

> Devity Technologies is a software development studio based in Pakistan, remote-first, serving clients across the UK, US, and Australia. We build custom web platforms, SaaS products, mobile applications, and AI automation systems, engineered for measurable business outcomes rather than templated solutions.

## Services

- [Web Platforms](${baseUrl}/services/web-platforms): Full-stack web application development, from internal tools to customer-facing platforms.
- [SaaS Applications](${baseUrl}/services/saas-applications): Custom SaaS products with multi-tenant architecture, subscription billing, and scalable infrastructure.
- [Mobile Applications](${baseUrl}/services/mobile-applications): Cross-platform mobile apps built with React Native, offline-first and performance-tuned.
- [AI & Automation](${baseUrl}/services/ai-automation): Custom AI systems, LLM agents, RAG pipelines, and workflow automation tied to measurable outcomes.

## Company

- [About](${baseUrl}/about): Company background, team, and engineering principles.
- [Work](${baseUrl}/work): Case studies with real client results.
- [Process](${baseUrl}/process): How an engagement unfolds, from discovery to launch and scale.
- [Free Technical Audit](${baseUrl}/free-technical-audit): A free, no-obligation technical and SEO audit.
- [Contact](${baseUrl}/contact): Get in touch to start a project.

## Resources (Guides and Articles)

${postLines}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
