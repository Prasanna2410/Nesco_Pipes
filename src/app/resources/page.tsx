import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { resources } from "@/lib/resource-content";

export const metadata: Metadata = { title: "Technical Resources & Knowledge Center | NESCO", description: "Practical industrial buying guides covering stainless grades, pipe construction, schedules, standards, certificates and project procurement.", alternates: { canonical: "/resources" } };

export default function ResourcesPage() {
  return <main className="knowledge-page">
    <SiteHeader />
    <section className="knowledge-hero"><div className="knowledge-grid-lines" aria-hidden="true" /><div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Technical Resources" }]} />
      <small>/ NESCO KNOWLEDGE CENTER</small><h1>Technical clarity for <em>better procurement.</em></h1><p>Original, practical guidance for buyers, engineers and project teams reviewing industrial pipe, material and documentation requirements.</p><Link href="#articles">Browse all guides <ArrowRight /></Link>
    </div><BookOpen aria-hidden="true" /></section>
    <section className="knowledge-directory" id="articles"><div className="sector-section-heading"><small>/ TECHNICAL LIBRARY</small><h2>Ten essential buying guides.</h2><p>Each guide links the technical question to relevant products, industries and a clearer enquiry path.</p></div>
      <div className="knowledge-grid">{resources.map((resource, index) => <Link href={`/resources/${resource.slug}`} key={resource.slug}><span>{String(index + 1).padStart(2, "0")}</span><small>{resource.category}</small><h2>{resource.title}</h2><p>{resource.summary}</p><div><b><CalendarDays /> Updated 04 Nov 2026</b><b>{resource.readTime}</b></div><strong>Read guide <ArrowUpRight /></strong></Link>)}</div>
    </section>
    <section className="knowledge-cta"><div><small>/ NEED A PRODUCT-SPECIFIC REVIEW?</small><h2>Turn the research into a clear RFQ.</h2></div><div><Link href="/products">Explore products <ArrowRight /></Link><Link href="/contact#contact-request">Request a quote <ArrowUpRight /></Link></div></section>
    <SiteFooter />
  </main>;
}
