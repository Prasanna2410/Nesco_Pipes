import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Check,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  MapPin,
  PackageCheck,
  ScanLine,
  ShieldCheck,
  Target,
  Truck,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { alloyCategories, productCategories } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "About NESCO Pipe & Tubes",
  description: "Meet NESCO Pipe & Tubes, a Mumbai-based manufacturer, stockist, supplier and exporter of industrial metal products for India and international markets.",
};

const workflow = [
  { icon: ClipboardCheck, title: "Define", copy: "Product form, grade, standard, dimensions, quantity and intended service." },
  { icon: ScanLine, title: "Review", copy: "Supply condition, tolerances, testing, certification and inspection requirements." },
  { icon: Boxes, title: "Coordinate", copy: "Availability, production route, documentation, packing and delivery schedule." },
  { icon: Truck, title: "Deliver", copy: "Clearly identified material supported by the documents agreed for the order." },
] as const;

const advantages = [
  { icon: ShieldCheck, title: "Specification control", copy: "The grade, standard, dimensions and acceptance requirements are reviewed as one coordinated supply brief." },
  { icon: FileCheck2, title: "Traceable documentation", copy: "MTCs, heat identification and agreed inspection records are aligned with the purchase requirement." },
  { icon: BadgeCheck, title: "Inspection support", copy: "PMI, dimensional checks, NDT and third-party witnessing can be coordinated where specified." },
  { icon: PackageCheck, title: "Project-ready delivery", copy: "Identification, protection, packing and dispatch planning are matched to the material and transport route." },
] as const;

const certifications = [
  ["ISO 9001:2015", "Quality management"],
  ["ISO 14001:2015", "Environmental management"],
  ["ISO 45001:2018", "Health and safety management"],
  ["PED 2014/68/EU", "Pressure-equipment scope"],
] as const;

export default function AboutPage() {
  const gradeCount = alloyCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <main className="about-nx-page">
      <SiteHeader />

      <section className="about-nx-hero">
        <div className="about-nx-grid" aria-hidden="true" />
        <div className="about-nx-hero-inner">
          <div className="about-nx-hero-copy">
            <div className="about-nx-eyebrow"><span>01</span><i /> NESCO Pipe &amp; Tubes · Mumbai</div>
            <h1>Industrial metal supply,<em>built around your requirements.</em></h1>
            <p>NESCO brings industrial product range, alloy knowledge, quality documentation and delivery coordination together through one accountable supply desk.</p>
            <div className="about-nx-hero-actions">
              <a href="#company-story">Meet NESCO <ArrowDown /></a>
              <Link href="/contact">Discuss a requirement <ArrowUpRight /></Link>
            </div>
          </div>

          <div className="about-nx-hero-stage">
            <div className="about-nx-hero-image-main">
              <Image src="/assets/about-slider/04-product-range.png" alt="NESCO industrial metal product range" fill sizes="(max-width: 900px) 92vw, 44vw" priority />
            </div>
            <div className="about-nx-hero-image-detail">
              <Image src="/assets/about-slider/03-flanges-fittings.png" alt="Flanges and fittings supplied by NESCO" fill sizes="(max-width: 700px) 38vw, 17vw" priority />
            </div>
            <div className="about-nx-hero-status"><i /><span><small>Supply desk</small><b>Specification review active</b></span></div>
            <div className="about-nx-hero-coordinate"><MapPin /><span>Mumbai<br />18.96° N / 72.83° E</span></div>
          </div>
        </div>

        <div className="about-nx-hero-metrics">
          <div><small>Product architecture</small><b>{String(productCategories.length).padStart(2, "0")}</b><span>Core product families</span></div>
          <div><small>Material capability</small><b>{String(alloyCategories.length).padStart(2, "0")}</b><span>Alloy families</span></div>
          <div><small>Published range</small><b>{String(gradeCount).padStart(2, "0")}</b><span>Listed alloy grades</span></div>
          <div><small>Supply reach</small><b>IN+</b><span>India and export markets</span></div>
        </div>
      </section>

      <div className="about-nx-marquee" aria-label="NESCO product and material range">
        <div><span>Pipes</span><i /> <span>Tubes</span><i /> <span>Flat Products</span><i /> <span>Bars</span><i /> <span>Flanges</span><i /> <span>Fittings</span><i /> <span>Fasteners</span><i /> <span>Special Alloys</span></div>
      </div>

      <section className="about-nx-story" id="company-story">
        <div className="about-nx-section-mark"><span>01</span><small>Company profile</small></div>
        <div className="about-nx-story-layout">
          <div className="about-nx-story-title">
            <small>More than one product. More than one material.</small>
            <h2>One coordinated source for demanding industrial supply.</h2>
          </div>
          <div className="about-nx-story-copy">
            <p className="lead">NESCO Pipe &amp; Tubes is a Mumbai-based manufacturer, stockist, supplier and exporter serving process plants, EPC contractors, fabricators, maintenance teams and industrial distributors.</p>
            <p>Our scope extends beyond stainless steel pipe. NESCO supports seamless, welded and EFW pipes; process and heat-transfer tubes; sheets, plates and coils; bars; flanges; butt weld fittings; and industrial fasteners.</p>
            <p>Requirements can be coordinated across stainless steel, nickel alloys, duplex and super duplex, cupro nickel and titanium—subject to the exact product standard, grade, dimensions and availability.</p>
          </div>
        </div>
        <div className="about-nx-story-bottom">
          <div className="about-nx-story-image">
            <Image src="/assets/about-slider/01-pipes-tubes.png" alt="Pipes and tubes supplied by NESCO" fill sizes="(max-width: 800px) 100vw, 58vw" />
            <span><small>NESCO supply philosophy</small><b>Right material. Right document. Right delivery.</b></span>
          </div>
          <aside className="about-nx-story-note">
            <span>Our role</span>
            <h3>Turn a technical requirement into a supply-ready order.</h3>
            <p>Every enquiry is reviewed around the grade, standard, dimensions, supply condition, testing, documentation, packing and destination—not simply a product name.</p>
            <ul><li><Check /> Specification-led review</li><li><Check /> One accountable contact</li><li><Check /> India and export coordination</li></ul>
          </aside>
        </div>
      </section>

      <section className="about-nx-system">
        <div className="about-nx-system-head">
          <div className="about-nx-section-mark light"><span>02</span><small>Operating model</small></div>
          <div><h2>From enquiry to dispatch,<em>clarity stays in the loop.</em></h2><p>A disciplined order path reduces ambiguity before material enters production, inspection, packing or transport.</p></div>
        </div>
        <ol className="about-nx-workflow">
          {workflow.map(({ icon: Icon, title, copy }, index) => <li key={title}>
            <div><b>{String(index + 1).padStart(2, "0")}</b><Icon /></div>
            <span>{title}</span><p>{copy}</p>
          </li>)}
        </ol>
        <div className="about-nx-system-foot"><span>Technical review</span><i /><span>Commercial alignment</span><i /><span>Quality release</span><i /><span>Dispatch coordination</span><Link href="/quality-policy">Explore quality assurance <ArrowUpRight /></Link></div>
      </section>

      <section className="about-nx-assurance">
        <div className="about-nx-assurance-copy">
          <div className="about-nx-section-mark light"><span>03</span><small>Quality evidence</small></div>
          <h2>Quality and documentation, aligned with your requirements.</h2>
          <p>NESCO supports ordered material through specification review, material traceability, dimensional and visual checks, inspection coordination and export-ready identification and packing.</p>
          <div className="about-nx-assurance-tags"><span>MTC support</span><span>PMI coordination</span><span>NDT reports</span><span>Third-party inspection</span></div>
          <Link href="/quality-policy">See how quality is managed <ArrowUpRight /></Link>
        </div>
        <div className="about-nx-documents">
          <div className="about-nx-document-top"><ShieldCheck /><span><small>NESCO / CONTROLLED SUPPLY</small><b>Management-system credentials</b></span></div>
          {certifications.map(([standard, label], index) => <Link href="/certificate" key={standard}><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{standard}</strong><small>{label}</small></span><ArrowUpRight /></Link>)}
          <Link className="about-nx-document-all" href="/certificate">Open Certifications &amp; Compliance <ArrowUpRight /></Link>
        </div>
      </section>

      <section className="about-nx-advantages">
        <div className="about-nx-section-heading compact">
          <div className="about-nx-section-mark"><span>04</span><small>Why NESCO</small></div>
          <div><h2>Practical support at every critical stage.</h2><p>Professional supply is created by connected decisions—not one isolated promise.</p></div>
        </div>
        <div className="about-nx-advantage-grid">
          {advantages.map(({ icon: Icon, title, copy }, index) => <article key={title}><div><b>{String(index + 1).padStart(2, "0")}</b><Icon /></div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="about-nx-direction">
        <div className="about-nx-direction-shell">
          <div className="about-nx-direction-head">
            <div className="about-nx-section-mark"><span>05</span><small>Purpose &amp; ambition</small></div>
            <div>
              <small>NESCO / DIRECTION</small>
              <h2>What guides us today.<em>Where we are building next.</em></h2>
              <p>A clear purpose keeps sourcing, documentation and delivery decisions aligned. A clear ambition keeps that standard moving forward.</p>
            </div>
          </div>

          <div className="about-nx-direction-grid">
            <article className="about-nx-direction-card mission">
              <div className="about-nx-direction-card-top"><span><Target /><b>Mission</b></span><small>01 / PURPOSE</small></div>
              <div className="about-nx-direction-card-body"><span>01</span><h3>Make industrial metal procurement simpler and more dependable.</h3><p>Bring together reliable material sourcing, responsive service, clear documentation and disciplined delivery coordination so customers can procure with confidence.</p></div>
              <div className="about-nx-direction-card-foot"><span>Reliable sourcing</span><span>Responsive service</span><span>Clear documentation</span></div>
              <b className="about-nx-direction-monogram" aria-hidden="true">M</b>
            </article>

            <article className="about-nx-direction-card vision">
              <div className="about-nx-direction-card-top"><span><Globe2 /><b>Vision</b></span><small>02 / AMBITION</small></div>
              <div className="about-nx-direction-card-body"><span>02</span><h3>Be a trusted global source for industrial metal products.</h3><p>Build long-term recognition through broader capability, responsible operations, consistent quality and commitments that are carried through.</p></div>
              <div className="about-nx-direction-card-foot"><span>Global reach</span><span>Responsible operations</span><span>Long-term trust</span></div>
              <b className="about-nx-direction-monogram" aria-hidden="true">V</b>
            </article>
          </div>
        </div>
      </section>

      <section className="about-nx-cta">
        <div className="about-nx-grid" aria-hidden="true" />
        <div><small>NESCO / MUMBAI / INDIA &amp; EXPORT</small><h2>Bring the specification.<em>We’ll coordinate the supply.</em></h2><p>Share the product, grade, standard, dimensions, quantity, testing scope and destination for a structured response.</p></div>
        <Link href="/contact"><span>Start a product enquiry</span><ArrowUpRight /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
