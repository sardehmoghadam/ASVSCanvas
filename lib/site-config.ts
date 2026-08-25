import type { Metadata } from "next";

/**
 * Central site identity used for SEO metadata, canonical URLs, sitemaps, and
 * robots.txt.
 *
 * Canonical URLs always point at the production GitHub Pages location (which is
 * served under the /ASVSCanvas base path) regardless of whether the site is
 * built locally (no base path) or in CI (base path applied).
 */
export const SITE_URL = "https://sardehmoghadam.github.io/ASVSCanvas";

/** Build an absolute production URL from an internal path. */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/**
 * Shared Open Graph block so every page produces a consistent, crawlable link
 * preview. Next.js replaces (rather than deep-merges) `openGraph` per segment,
 * so each page must carry the image, site name, type, and locale explicitly.
 */
export function buildOpenGraph(params: {
  title: string;
  description: string;
  url: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    siteName: "ASVS Academy",
    locale: "en_US",
    url: params.url,
    title: params.title,
    description: params.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: "ASVS Academy",
      },
    ],
  };
}
