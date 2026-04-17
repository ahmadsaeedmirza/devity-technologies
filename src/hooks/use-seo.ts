import { useEffect } from "react";

const SITE_NAME = "Devity Technologies";

export type SeoType = "website" | "article";

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: SeoType;
  robots?: string;
}

const getSiteUrl = () => {
  const envUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();
  if (envUrl) return envUrl.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "";
};

const upsertMetaByName = (name: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useSEO = ({
  title,
  description,
  path,
  image = "/favicon.png",
  type = "website",
  robots = "index,follow",
}: SeoConfig) => {
  useEffect(() => {
    const siteUrl = getSiteUrl();
    const url = siteUrl ? `${siteUrl}${path}` : path;
    const ogImage =
      siteUrl && image.startsWith("/") ? `${siteUrl}${image}` : image;

    document.title = `${title} — ${SITE_NAME}`;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);

    upsertMetaByProperty("og:title", `${title} — ${SITE_NAME}`);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", type);
    if (siteUrl) upsertMetaByProperty("og:url", url);
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:image", ogImage);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", `${title} — ${SITE_NAME}`);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", ogImage);

    if (siteUrl) upsertLink("canonical", url);
  }, [title, description, path, image, type, robots]);
};
