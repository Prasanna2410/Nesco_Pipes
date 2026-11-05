import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, FileCheck2, PackageCheck, ScanSearch } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { industries } from "@/lib/industry-content";

export const metadata: Metadata = {
  title: "Industries We Serve | Industrial Metal Supply | NESCO",
  description: "Explore specification-led pipe, tube, flange, fitting and alloy supply for oil and gas, chemical, pharmaceutical, power, manufacturing and infrastructure projects.",
  alternates: { canonical: "/industries" },
};

const supplySteps = [
  { icon: ScanSearch, title: "Review the duty", copy: "Service conditions, purchase specification, product form and project controls are reviewed together." },
  { icon: Check, title: "Align the supply", copy: "Grade, manufacturing route, dimensions and standards are matched to the approved requirement." },
  { icon: FileCheck2, title: "Control the documents", copy: "Inspection, traceability, certificates and marking are coordinated as agreed for the order." },
  { icon: PackageCheck, title: "Plan the delivery", copy: "Packing, identification and dispatch are organised around the destination and project programme." },
];

export default function IndustriesPage() {
  return <main className="sector-page industry-index-page">
    <SiteHeader />

    <section className="industry-index-hero">
      <div className="industry-index-copy">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
        <small>/ INDUSTRIES WE SERVE</small>
        <h1>Supply decisions begin with the <em>service environment.</em></h1>
        <p>NESCO coordinates industrial metal products around pressure, temperature, corrosion, fabrication, cleanliness and documentation—not simply around a product name.</p>
        <div className="industry-index-actions">
          <Link href="/contact#contact-request">Discuss your requirement <ArrowUpRight /></Link>
          <Link href="/products">Browse the product range <ArrowRight /></Link>
        </div>
      </div>
      <div className="industry-index-visual">
        <Image src="/assets/industry-backgrounds/01-oil-and-gas.png" alt="Industrial piping installation serving process industries" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
        <div className="industry-index-visual-shade" />
        <div className="industry-index-count"><b>06</b><span>Industry-specific<br />supply guides</span></div>
        <div className="industry-index-caption"><span>NESCO / MUMBAI</span><p>Product, material and documentation coordination for India and export markets.</p></div>
      </div>
    </section>

    <section className="industry-index-directory">
      <div className="industry-index-heading">
        <div><small>/ APPLICATION-LED DIRECTORY</small><h2>Choose the operating context.</h2></div>
        <p>Each guide connects the service environment with typical applications, material considerations, suitable product forms and the information needed for a useful enquiry.</p>
      </div>
      <div className="industry-index-list">
        {industries.map((industry, index) => <Link href={`/industries/${industry.slug}`} className="industry-index-row" key={industry.slug}>
          <span className="industry-index-number">{String(index + 1).padStart(2, "0")}</span>
          <div className="industry-index-row-image"><Image src={industry.image} alt={`${industry.title} industry application`} fill sizes="180px" /></div>
          <div className="industry-index-row-copy"><small>{industry.eyebrow}</small><h2>{industry.title}</h2><p>{industry.summary}</p></div>
          <div className="industry-index-tags">{industry.applications.slice(0, 2).map((application) => <span key={application}>{application}</span>)}</div>
          <span className="industry-index-arrow" aria-hidden="true"><ArrowUpRight /></span>
        </Link>)}
      </div>
    </section>

    <section className="industry-index-method">
      <div className="industry-index-method-head"><small>/ NESCO SUPPLY FRAMEWORK</small><h2>From requirement review to controlled dispatch.</h2><p>A disciplined sequence keeps the product, grade, dimensions, tests and documentation connected throughout the enquiry.</p></div>
      <div className="industry-index-method-grid">
        {supplySteps.map((step, index) => { const Icon = step.icon; return <article key={step.title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon /></div><h3>{step.title}</h3><p>{step.copy}</p></article>; })}
      </div>
    </section>

    <section className="sector-quote">
      <div><small>/ PROJECT OR MAINTENANCE REQUIREMENT</small><h2>Start with the specification.</h2><p>Share the product, material grade, dimensions, quantity, applicable standards, inspection scope and delivery destination for a coordinated review.</p></div>
      <Link href="/contact#contact-request">Request a reviewed quote <ArrowUpRight /></Link>
    </section>
    <SiteFooter />
  </main>;
}
