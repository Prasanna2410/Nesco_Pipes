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
import { alloyCategories } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "About NESCO Pipe & Tubes",
  description: "Established in 1985, NESCO Pipe & Tubes brings 30+ years of experience to industrial metal supply across India and international markets.",
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
            <h1>Industrial metal supply,<em>built on experience and trust.</em></h1>
            <p>Established in 1985, NESCO brings 30+ years of industry experience to dependable industrial metal supply across domestic and international markets.</p>
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
          <div><small>Established</small><b>1985</b><span>Mumbai, India</span></div>
          <div><small>Industry experience</small><b>30+</b><span>Years of supply knowledge</span></div>
          <div><small>Published range</small><b>{String(gradeCount).padStart(2, "0")}</b><span>Listed alloy grades</span></div>
          <div><small>Supply reach</small><b>IN+</b><span>India and export markets</span></div>
        </div>
      </section>

      <div className="about-nx-marquee" aria-label="NESCO product and material range">
        <div><span>Pipes</span><i /> <span>Tubes</span><i /> <span>Flat Products</span><i /> <span>Bars</span><i /> <span>Flanges</span><i /> <span>Fittings</span><i /> <span>Fasteners</span><i /> <span>Special Alloys</span></div>
      </div>

      <section className="about-nx-story" id="company-story">
        <div className="about-nx-story-shell">
          <div className="about-nx-section-mark"><span>01</span><small>Company profile</small></div>
          <div className="about-nx-story-layout">
            <div className="about-nx-story-title">
              <small>Established in 1985 &middot; Mumbai, India</small>
              <h2>Experience-led industrial supply, built around your requirements.</h2>
              <div className="about-nx-story-facts" aria-label="Company profile highlights">
                <span><b>1985</b><small>Established</small></span>
                <span><b>30+</b><small>Years of experience</small></span>
                <span><b>India + Export</b><small>Market coverage</small></span>
              </div>
            </div>
            <div className="about-nx-story-copy">
              <p className="lead">Established in 1985, NESCO Pipe &amp; Tubes brings 30+ years of industry experience to the supply of industrial metal products. Based in Mumbai, India, we serve process plants, EPC contractors, fabricators, maintenance teams and industrial distributors across domestic and international markets.</p>
              <p>Built on the principles of quality, integrity and customer commitment, NESCO focuses on understanding the specific needs of every customer and coordinating suitable supply solutions for diverse industrial applications. Our approach combines material knowledge, sourcing capabilities and responsive service to support requirements from routine procurement to specialised project needs.</p>
              <p>Our comprehensive product portfolio includes seamless, welded and EFW pipes, process and heat-transfer tubes, flanges, butt weld fittings, sheets, plates, coils, round bars, rods and industrial fasteners. We coordinate supply across stainless steel, nickel alloys, duplex and super duplex stainless steels, cupro nickel and titanium, subject to the specified standards, grades, dimensions and availability.</p>
              <p>At NESCO, we believe dependable supply goes beyond the product itself. We emphasise clear communication, specification review, material traceability and coordination of inspection, documentation, packing and delivery requirements as agreed for each order.</p>
            </div>
          </div>
          <div className="about-nx-story-bottom">
            <div className="about-nx-story-image">
              <Image src="/assets/about-slider/01-pipes-tubes.png" alt="Pipes and tubes supplied by NESCO" fill sizes="(max-width: 800px) 100vw, 58vw" />
              <span><small>NESCO supply philosophy</small><b>Right material. Right document. Right delivery.</b></span>
            </div>
            <aside className="about-nx-story-note">
              <span>How we support supply</span>
              <h3>More than material. A coordinated supply response.</h3>
              <p>Every enquiry is reviewed around the grade, standard, dimensions, supply condition, testing, documentation, packing and destination&mdash;not simply a product name.</p>
              <ul><li><Check /> Specification-led review</li><li><Check /> One accountable contact</li><li><Check /> India and export coordination</li></ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="about-nx-direction">
        <div className="about-nx-direction-shell">
          <div className="about-nx-section-mark light"><span>02</span><small>Mission &amp; vision</small></div>
          <div className="about-nx-direction-head">
            <div><small>Purpose and direction</small><h2>Dependable today.<em>Trusted for the long term.</em></h2></div>
            <p>Our mission defines how we support customers now. Our vision sets the standard for the relationships, capabilities and responsible growth we continue to build.</p>
          </div>
          <div className="about-nx-direction-grid">
            <article className="about-nx-direction-card mission">
              <div className="about-nx-direction-card-top"><span><Target /><b>Our mission</b></span><small>01</small></div>
              <h3>Make industrial metal procurement simpler and more dependable.</h3>
              <p>Bring together reliable material sourcing, responsive service, clear documentation and disciplined delivery coordination so customers can procure with confidence.</p>
              <div className="about-nx-direction-card-foot"><span>Reliable sourcing</span><span>Responsive service</span><span>Clear documentation</span></div>
            </article>
            <article className="about-nx-direction-card vision">
              <div className="about-nx-direction-card-top"><span><Globe2 /><b>Our vision</b></span><small>02</small></div>
              <h3>Be a trusted global source for industrial metal products.</h3>
              <p>Build long-term recognition through broader capability, responsible operations, consistent quality and commitments that are carried through.</p>
              <div className="about-nx-direction-card-foot"><span>Global reach</span><span>Responsible operations</span><span>Long-term trust</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-nx-system">
        <div className="about-nx-system-head">
          <div className="about-nx-section-mark light"><span>03</span><small>Operating model</small></div>
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
          <div className="about-nx-section-mark light"><span>04</span><small>Quality evidence</small></div>
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
          <div className="about-nx-section-mark"><span>05</span><small>Why NESCO</small></div>
          <div><h2>Practical support at every critical stage.</h2><p>Professional supply is created by connected decisions—not one isolated promise.</p></div>
        </div>
        <div className="about-nx-advantage-grid">
          {advantages.map(({ icon: Icon, title, copy }, index) => <article key={title}><div><b>{String(index + 1).padStart(2, "0")}</b><Icon /></div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="about-nx-cta">
        <div className="about-nx-grid" aria-hidden="true" />
        <div className="about-nx-cta-copy"><small>Discuss your requirement</small><h2>Bring the specification.<em>We will coordinate the supply.</em></h2><p>Share the product, grade, standard, dimensions, quantity, testing scope and destination for a structured response.</p></div>
        <div className="about-nx-cta-action"><span>Based in Mumbai, serving India and international markets.</span><Link href="/contact"><span>Start a product enquiry</span><ArrowUpRight /></Link></div>
      </section>

      <SiteFooter />
    </main>
  );
}
