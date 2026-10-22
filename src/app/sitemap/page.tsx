import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { alloyCategories, productCategories } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Sitemap | NESCO Pipe & Tubes",
  description:
    "Browse all NESCO Pipe & Tubes company, product and alloy-grade pages from one structured directory.",
};

const companyLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Product Directory", "/products"],
  ["Alloy Directory", "/alloys"],
  ["Quality Assurance", "/quality-policy"],
  ["Certifications & Compliance", "/certificate"],
  ["Contact the Sales Desk", "/contact"],
] as const;

const policyLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-condition"],
] as const;

export default function SitemapPage() {
  return (
    <main className="sitemap-page">
      <SiteHeader />

      <section className="sitemap-hero">
        <div className="sitemap-hero-grid" aria-hidden="true" />
        <div className="sitemap-hero-inner">
          <small><i /> Site directory</small>
          <h1>Everything NESCO,<br /><em>clearly mapped.</em></h1>
          <p>Use this directory to reach every company, product and material-grade page available on the NESCO Pipe &amp; Tubes website.</p>
          <a href="/sitemap.xml">View XML sitemap <ArrowUpRight /></a>
        </div>
      </section>

      <section className="sitemap-directory" aria-label="Website directory">
        <div className="sitemap-directory-intro">
          <small>/ Complete directory</small>
          <h2>Find the right page.</h2>
          <p>Navigate by company information, product form or alloy family.</p>
        </div>

        <div className="sitemap-primary-grid">
          <article className="sitemap-link-group sitemap-link-group-featured">
            <div className="sitemap-group-heading"><span>01</span><div><small>Navigate</small><h3>Company &amp; resources</h3></div></div>
            <nav aria-label="Company and resource pages">
              {companyLinks.map(([label, href]) => <Link href={href} key={href}><span>{label}</span><ArrowUpRight /></Link>)}
            </nav>
          </article>

          <article className="sitemap-link-group sitemap-link-group-featured">
            <div className="sitemap-group-heading"><span>02</span><div><small>Information</small><h3>Policies</h3></div></div>
            <nav aria-label="Policy pages">
              {policyLinks.map(([label, href]) => <Link href={href} key={href}><span>{label}</span><ArrowUpRight /></Link>)}
            </nav>
          </article>
        </div>

        <div className="sitemap-section-heading">
          <small>/ 03 — Products</small>
          <h2>Browse by product form.</h2>
        </div>
        <div className="sitemap-groups-grid">
          {productCategories.map((category) => (
            <article className="sitemap-link-group" key={category.id}>
              <div className="sitemap-group-heading"><span>{String(category.items.length).padStart(2, "0")}</span><div><small>Product range</small><h3>{category.title}</h3></div></div>
              <nav aria-label={`${category.title} pages`}>
                {category.items.map((item) => <Link href={`/${item.slug}`} key={item.slug}><span>{item.title}</span><ArrowUpRight /></Link>)}
              </nav>
            </article>
          ))}
        </div>

        <div className="sitemap-section-heading sitemap-alloy-heading">
          <small>/ 04 — Materials</small>
          <h2>Browse by alloy grade.</h2>
        </div>
        <div className="sitemap-groups-grid">
          {alloyCategories.map((category) => (
            <article className="sitemap-link-group" key={category.id}>
              <div className="sitemap-group-heading"><span>{String(category.items.length).padStart(2, "0")}</span><div><small>Alloy family</small><h3>{category.title}</h3></div></div>
              <nav aria-label={`${category.title} grade pages`}>
                {category.items.map((item) => <Link href={`/${item.slug}`} key={item.slug}><span>{item.displayTitle ?? item.title}</span><ArrowUpRight /></Link>)}
              </nav>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
