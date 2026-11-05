import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, FileText } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { allProducts } from "@/lib/catalog";
import { getIndustry, industries } from "@/lib/industry-content";
import { resources } from "@/lib/resource-content";
import { productHref } from "@/lib/product-routes";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return { title: `${industry.title} Piping & Alloy Supply | NESCO`, description: industry.summary, alternates: { canonical: `/industries/${industry.slug}` }, openGraph: { title: `${industry.title} Piping & Alloy Supply`, description: industry.summary, images: [industry.image] } };
}

export default async function IndustryDetailPage({ params }: Props) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  const products = industry.products.flatMap((title) => { const product = allProducts.find((item) => item.title === title); return product ? [product] : []; });
  const relatedResources = industry.resources.flatMap((slug) => { const resource = resources.find((item) => item.slug === slug); return resource ? [resource] : []; });
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: industry.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const pageSchema = { "@context": "https://schema.org", "@type": "WebPage", name: `${industry.title} industry supply`, description: industry.summary, url: `${SITE_URL}/industries/${industry.slug}`, primaryImageOfPage: `${SITE_URL}${industry.image}` };

  return <main className="sector-page sector-detail-page">
    <SiteHeader />
    <section className="sector-detail-hero">
      <div className="sector-detail-image"><Image src={industry.image} alt={`${industry.title} plant and industrial application`} fill priority sizes="100vw" /></div>
      <div className="sector-detail-overlay" />
      <div className="sector-detail-copy">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.title }]} />
        <small>{industry.eyebrow}</small><h1>{industry.title}</h1><p>{industry.description}</p>
        <div><Link href="/contact#contact-request">Request a quote <ArrowUpRight /></Link><Link href="#applications">View applications <ArrowRight /></Link></div>
      </div>
    </section>

    <section className="sector-detail-intro" id="applications">
      <div className="sector-section-heading"><small>/ 01 — PIPING APPLICATIONS</small><h2>Where the products are used.</h2><p>Typical application areas are shown for enquiry planning. The approved design and project specification govern actual use.</p></div>
      <div className="sector-application-grid">{industry.applications.map((application, index) => <article key={application}><b>{String(index + 1).padStart(2, "0")}</b><h3>{application}</h3><Check /></article>)}</div>
    </section>

    <section className="sector-requirements">
      <div className="sector-section-heading"><small>/ 02 — MATERIAL REQUIREMENTS</small><h2>Define the service before the grade.</h2></div>
      <div className="sector-requirement-table">{industry.requirements.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="sector-products">
      <div className="sector-section-heading"><small>/ 03 — SUITABLE GRADES & PRODUCTS</small><h2>A practical supply starting point.</h2><p>These are commonly considered options, not a material-selection approval. Availability is confirmed against the complete specification.</p></div>
      <div className="sector-supply-columns">
        <div><small>Material families and grades</small>{industry.grades.map((grade) => { const product = allProducts.find((item) => item.title === grade || item.displayTitle === grade); return product ? <Link href={productHref(product.slug)} key={grade}>{grade}<ArrowUpRight /></Link> : <span key={grade}>{grade}</span>; })}</div>
        <div><small>Relevant product forms</small>{products.map((product) => <Link href={productHref(product.slug)} key={product.slug}>{product.title}<ArrowUpRight /></Link>)}</div>
      </div>
    </section>

    <section className="sector-considerations">
      <div><small>/ 04 — TECHNICAL CONSIDERATIONS</small><h2>Questions to resolve before purchase.</h2></div>
      <ol>{industry.considerations.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></li>)}</ol>
    </section>

    <section className="sector-resources">
      <div className="sector-section-heading"><small>/ RELATED KNOWLEDGE</small><h2>Continue the technical review.</h2></div>
      <div>{relatedResources.map((resource) => <Link href={`/resources/${resource.slug}`} key={resource.slug}><FileText /><span><small>{resource.category}</small><b>{resource.title}</b></span><ArrowUpRight /></Link>)}</div>
    </section>

    <section className="sector-faqs"><div className="sector-section-heading"><small>/ TECHNICAL FAQS</small><h2>Common buyer questions.</h2></div><div>{industry.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="sector-quote"><div><small>/ REQUEST A REVIEWED QUOTATION</small><h2>Send the complete specification.</h2><p>Upload your BOQ, material take-off or purchase specification. Our team will review grade, product form, dimensions, documentation and delivery requirements.</p></div><Link href="/contact#contact-request">Request a quote <ArrowUpRight /></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <SiteFooter />
  </main>;
}
