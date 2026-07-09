import type { Metadata } from "next";

const baseUrl = "https://143it.com";

/**
 * Generate Open Graph image URL
 */
export function getOgImageUrl(title?: string): string {
  // For now, return a default OG image URL
  // In production, you would generate dynamic OG images or use a static one
  return `${baseUrl}/og-image.svg`;
}

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path: string): string {
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Generate comprehensive metadata with Open Graph, Twitter Cards, and canonical URLs
 */
export function generateMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}): Metadata {
  const canonical = getCanonicalUrl(path);
  const ogImageUrl = ogImage || getOgImageUrl(title);

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "143IT",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors: authors.map((name) => ({ name })) }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };

  return metadata;
}
