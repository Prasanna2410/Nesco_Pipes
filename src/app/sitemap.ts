import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

const staticPages = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/alloys", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/certificate", changeFrequency: "monthly", priority: 0.7 },
  { path: "/quality-policy", changeFrequency: "monthly", priority: 0.6 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-condition", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = allProducts.map(({ slug }) => ({
    url: `${SITE_URL}/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticPages.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    })),
    ...productPages,
  ];
}
