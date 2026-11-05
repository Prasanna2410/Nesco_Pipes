import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";
import { industries } from "@/lib/industry-content";
import { resources } from "@/lib/resource-content";

const staticPages = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/materials", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.85 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.85 },
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
    url: `${SITE_URL}/products/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const industryPages: MetadataRoute.Sitemap = industries.map(({ slug }) => ({ url: `${SITE_URL}/industries/${slug}`, changeFrequency: "monthly", priority: 0.8 }));
  const resourcePages: MetadataRoute.Sitemap = resources.map(({ slug, updated }) => ({ url: `${SITE_URL}/resources/${slug}`, lastModified: updated, changeFrequency: "monthly", priority: 0.75 }));

  return [
    ...staticPages.map(({ path, changeFrequency, priority }) => ({
      url: path ? `${SITE_URL}${path}` : `${SITE_URL}/`,
      changeFrequency,
      priority,
    })),
    ...productPages,
    ...industryPages,
    ...resourcePages,
  ];
}
