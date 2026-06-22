export type SeoType = "website" | "article";

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: SeoType;
  robots?: string;
}

export const useSEO = (_config: SeoConfig) => {
  // No-op on the client side since SEO tags are server-side rendered natively by Next.js
};
