import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { allProducts } from "@/lib/catalog";
import { getIndustry } from "@/lib/industry-content";
import { getResource, resources } from "@/lib/resource-content";
import { productHref } from "@/lib/product-routes";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return resources.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const article = getResource((await params).slug); return article ? { title: `${article.title} | NESCO Knowledge Center`, description: article.description, alternates: { canonical: `/resources/${article.slug}` }, openGraph: { type: "article", title: article.title, description: article.description, publishedTime: article.published, modifiedTime: article.updated } } : {}; }

export default async function ResourceArticlePage({ params }: Props) {
  const article = getResource((await params).slug); if (!article) notFound();
  const products = article.products.flatMap((title) => { const item = allProducts.find((product) => product.title === title); return item ? [item] : []; });
  const industryLinks = article.industries.flatMap((slug) => { const item = getIndustry(slug); return item ? [item] : []; });
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.published, dateModified: article.updated, author: { "@type": "Organization", name: "NESCO Pipe & Tubes" }, publisher: { "@type": "Organization", name: "NESCO Pipe & Tubes" }, mainEntityOfPage: `${SITE_URL}/resources/${article.slug}` };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: article.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <main className="knowledge-page article-page">
    <SiteHeader />
    <article>
      <section className="article-hero"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: article.title }]} /><small>{article.category}</small><h1>{article.title}</h1><p>{article.summary}</p><div><span><CalendarDays /> Published 04 Nov 2026</span><span><CalendarDays /> Updated 04 Nov 2026</span><span><Clock /> {article.readTime}</span></div></section>
      <div className="article-layout"><aside><small>ON THIS PAGE</small><nav>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, "0")} {section.heading}</a>)}{article.table ? <a href="#comparison">Comparison table</a> : null}<a href="#faqs">Technical FAQs</a><a href="#references">References</a></nav><Link href="/contact#contact-request">Request a quote <ArrowUpRight /></Link></aside>
        <div className="article-body"><div className="article-note"><b>Technical note</b><p>This guide supports procurement discussion and does not replace the approved design code, materials-engineering review or project specification. Verify the current edition of every referenced standard.</p></div>
          {article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><small>/ {String(index + 1).padStart(2, "0")}</small><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</section>)}
          {article.table ? <section id="comparison" className="article-table-section"><small>/ TECHNICAL TABLE</small><h2>{article.table.caption}</h2><div role="region" aria-label={article.table.caption} tabIndex={0}><table><thead><tr>{article.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{article.table.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row">{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div></section> : null}
          <section id="faqs" className="article-faqs"><small>/ TECHNICAL FAQS</small><h2>Common buyer questions.</h2>{article.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</section>
          <section className="article-links"><div><small>RELATED PRODUCTS</small>{products.map((product) => <Link href={productHref(product.slug)} key={product.slug}>{product.title}<ArrowUpRight /></Link>)}</div><div><small>INDUSTRY GUIDES</small>{industryLinks.map((industry) => <Link href={`/industries/${industry.slug}`} key={industry.slug}>{industry.title}<ArrowUpRight /></Link>)}</div></section>
          <section id="references" className="article-references"><small>/ PRIMARY REFERENCES</small><h2>Standards and technical sources.</h2><p>Links are provided for source context. Always use the edition required by the contract and approved project documents.</p>{article.references.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label}<ExternalLink /></a>)}</section>
        </div>
      </div>
    </article>
    <section className="sector-quote"><div><small>/ NEXT STEP</small><h2>Have a grade, size or BOQ to review?</h2><p>Send the complete requirement for a specification-led quotation.</p></div><Link href="/contact#contact-request">Request a quote <ArrowUpRight /></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <SiteFooter />
  </main>;
}
