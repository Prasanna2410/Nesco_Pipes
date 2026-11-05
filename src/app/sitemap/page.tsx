import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { alloyCategories, productCategories } from "@/lib/catalog";
import { industries } from "@/lib/industry-content";
import { resources } from "@/lib/resource-content";
import { MATERIALS_PATH, productHref } from "@/lib/product-routes";

export const metadata: Metadata = {
  title: "Sitemap | NESCO Pipe & Tubes",
  description: "Browse all NESCO company, product, material, industry and technical-resource pages from one structured directory.",
  alternates: { canonical: "/sitemap" },
};

const companyLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Product Directory", "/products"], ["Materials Directory", MATERIALS_PATH],
  ["Industries We Serve", "/industries"], ["Technical Resources", "/resources"], ["Quality Assurance", "/quality-policy"],
  ["Certifications & Compliance", "/certificate"], ["Contact the Sales Desk", "/contact"],
] as const;
const policyLinks = [["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-condition"]] as const;

function Group({ number, eyebrow, title, links, label }: { number: string; eyebrow: string; title: string; links: ReadonlyArray<readonly [string, string]>; label: string }) {
  return <article className="sitemap-link-group"><div className="sitemap-group-heading"><span>{number}</span><div><small>{eyebrow}</small><h3>{title}</h3></div></div><nav aria-label={label}>{links.map(([text, href]) => <Link href={href} key={href}><span>{text}</span><ArrowUpRight /></Link>)}</nav></article>;
}

export default function SitemapPage() {
  return <main className="sitemap-page">
    <SiteHeader />
    <section className="sitemap-hero"><div className="sitemap-hero-grid" aria-hidden="true" /><div className="sitemap-hero-inner"><small><i /> Site directory</small><h1>Everything NESCO,<br /><em>clearly mapped.</em></h1><p>Reach every company, product, material, industry and technical-resource page available on the NESCO Pipe &amp; Tubes website.</p><a href="/sitemap.xml">View XML sitemap <ArrowUpRight /></a></div></section>
    <section className="sitemap-directory" aria-label="Website directory">
      <div className="sitemap-directory-intro"><small>/ Complete directory</small><h2>Find the right page.</h2><p>Navigate by company information, product form, material family, industry or technical question.</p></div>
      <div className="sitemap-primary-grid"><Group number="01" eyebrow="Navigate" title="Company & resources" links={companyLinks} label="Company and resource pages" /><Group number="02" eyebrow="Information" title="Policies" links={policyLinks} label="Policy pages" /></div>
      <div className="sitemap-section-heading"><small>/ 03 — Products</small><h2>Browse by product form.</h2></div>
      <div className="sitemap-groups-grid">{productCategories.map((category) => <Group key={category.id} number={String(category.items.length).padStart(2, "0")} eyebrow="Product range" title={category.title} links={category.items.map((item) => [item.title, productHref(item.slug)] as const)} label={`${category.title} pages`} />)}</div>
      <div className="sitemap-section-heading sitemap-alloy-heading"><small>/ 04 — Materials</small><h2>Browse by material grade.</h2></div>
      <div className="sitemap-groups-grid">{alloyCategories.map((category) => <Group key={category.id} number={String(category.items.length).padStart(2, "0")} eyebrow="Material family" title={category.title} links={category.items.map((item) => [item.displayTitle ?? item.title, productHref(item.slug)] as const)} label={`${category.title} grade pages`} />)}</div>
      <div className="sitemap-section-heading"><small>/ 05 — Industries &amp; knowledge</small><h2>Browse by application or technical question.</h2></div>
      <div className="sitemap-groups-grid"><Group number="06" eyebrow="Applications" title="Industry guides" links={industries.map((item) => [item.title, `/industries/${item.slug}`] as const)} label="Industry pages" /><Group number="10" eyebrow="Knowledge center" title="Technical resources" links={resources.map((item) => [item.title, `/resources/${item.slug}`] as const)} label="Technical resource pages" /></div>
    </section>
    <SiteFooter />
  </main>;
}
