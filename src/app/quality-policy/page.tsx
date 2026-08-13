import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  CircleGauge,
  FileCheck2,
  FlaskConical,
  PackageCheck,
  Ruler,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Quality Policy & Assurance | NESCO Pipe & Tubes",
  description:
    "Explore the NESCO Pipe & Tubes quality approach covering specification review, material traceability, inspection, testing coordination, documentation and protected dispatch.",
};

const qualityCommitments = [
  {
    icon: ScanSearch,
    title: "Specification before supply",
    copy: "Product form, material grade, standard, dimensions, condition, tolerances and acceptance criteria are reviewed as one connected requirement.",
  },
  {
    icon: BadgeCheck,
    title: "Material identity maintained",
    copy: "Heat, lot or piece identification is coordinated with the order so the supplied material can be related to the applicable quality documentation.",
  },
  {
    icon: Ruler,
    title: "Dimensions verified",
    copy: "Size, wall, length, profile, facing, thread or other product-specific characteristics are checked against the agreed inspection scope.",
  },
  {
    icon: FlaskConical,
    title: "Testing matched to risk",
    copy: "PMI, mechanical testing, hardness, NDT, corrosion testing or third-party witnessing can be coordinated when required by the specification or purchase order.",
  },
  {
    icon: FileCheck2,
    title: "Documents reviewed",
    copy: "Material certificates and agreed inspection records are checked for alignment with the ordered grade, product form and documented requirements.",
  },
  {
    icon: PackageCheck,
    title: "Release protected",
    copy: "Identification, surface protection, segregation and packing are planned around product geometry, handling conditions and the final delivery route.",
  },
] as const;

const qualityFlow = [
  ["01", "Define", "Translate the enquiry into a clear technical basis: product, grade, standard, dimensions, quantity, service and destination."],
  ["02", "Review", "Identify tolerances, supply condition, testing, certification, marking and inspection points before the offer is finalised."],
  ["03", "Coordinate", "Align the approved requirement with sourcing, manufacturing or processing, inspection availability and documentation."],
  ["04", "Verify", "Review material identity, dimensions, workmanship, test records and order-specific acceptance evidence before release."],
  ["05", "Deliver", "Protect, identify and dispatch the material with the agreed commercial and quality-document package."],
] as const;

const inspectionMatrix = [
  ["Material identity", "Grade, specification, heat or lot reference and marking", "MTC review, visual identity check and PMI when specified"],
  ["Dimensions", "Product-specific size, wall, length, tolerance and geometry", "Calibrated dimensional inspection against the purchase requirement"],
  ["Surface & workmanship", "Finish, visible discontinuities, edges, ends, bevels, faces or threads", "Visual examination and product-specific acceptance checks"],
  ["Mechanical properties", "Tensile, yield, elongation, hardness or impact requirements", "Test-result review or additional testing where contractually required"],
  ["Nondestructive examination", "UT, RT, PT, eddy current, hydrostatic or pneumatic examination", "Applied only where required by the product standard, class or order"],
  ["Final release", "Quantity, identification, protection, packing and document completeness", "Dispatch-stage verification against the approved order scope"],
] as const;

const documentation = [
  ["Material certification", "Mill Test Certificate and material traceability information appropriate to the ordered specification."],
  ["Inspection records", "Dimensional, PMI, hardness, NDT or other reports when included in the approved inspection scope."],
  ["Third-party inspection", "Witnessing, hold points and release-note coordination with an approved inspection agency when requested."],
  ["Commercial documents", "Packing list, invoice, origin or export documentation coordinated as applicable to the shipment."],
  ["Marking & identification", "Grade, heat or lot, size, standard, purchase-order reference and piece identification as applicable."],
] as const;

const certificationSystems = [
  ["ISO 9001:2015", "Quality management system"],
  ["ISO 14001:2015", "Environmental management system"],
  ["ISO 45001:2018", "Occupational health and safety"],
  ["PED 2014/68/EU", "Pressure-equipment scope"],
] as const;

export default function QualityPolicyPage() {
  return (
    <main className="quality-page-v2">
      <SiteHeader />

      <section className="quality-v2-hero">
        <div className="quality-v2-hero-grid" aria-hidden="true" />
        <div className="quality-v2-orbit quality-v2-orbit-one" aria-hidden="true" />
        <div className="quality-v2-orbit quality-v2-orbit-two" aria-hidden="true" />
        <div className="quality-v2-hero-inner">
          <div className="quality-v2-hero-copy">
            <small><i /> NESCO / QUALITY ASSURANCE / MUMBAI</small>
            <h1>Quality made visible.<em>Confidence made practical.</em></h1>
            <p>At NESCO Pipe & Tubes, quality is managed as a connected process—from understanding the specification to verifying material identity, inspection evidence, documentation, packing and final release.</p>
            <div className="quality-v2-hero-actions">
              <a href="#quality-policy">Explore our approach <ArrowDown aria-hidden="true" /></a>
              <Link href="/certificate">View certifications <ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="quality-v2-hero-signals" aria-label="NESCO quality principles">
              <span><CheckCircle2 aria-hidden="true" /> Specification-led</span>
              <span><CheckCircle2 aria-hidden="true" /> Traceability-focused</span>
              <span><CheckCircle2 aria-hidden="true" /> Document-controlled</span>
            </div>
          </div>

          <div className="quality-v2-hero-visual">
            <div className="quality-v2-image-frame">
              <Image
                src="/assets/about-slider/04-product-range.png"
                alt="NESCO pipes, tubes, flanges, bars and flat products prepared for quality-controlled industrial supply"
                fill
                sizes="(max-width: 900px) 92vw, 44vw"
                priority
              />
              <div className="quality-v2-image-shade" aria-hidden="true" />
              <div className="quality-v2-scan-line" aria-hidden="true" />
              <span className="quality-v2-corner top-left" aria-hidden="true" />
              <span className="quality-v2-corner top-right" aria-hidden="true" />
              <span className="quality-v2-corner bottom-left" aria-hidden="true" />
              <span className="quality-v2-corner bottom-right" aria-hidden="true" />
              <div className="quality-v2-visual-caption"><span>Control status</span><b><i /> Requirement under review</b></div>
            </div>
            <div className="quality-v2-assurance-seal"><ShieldCheck aria-hidden="true" /><span>Quality<br />assured</span></div>
            <div className="quality-v2-coordinate-tag"><span>NESCO / QA</span><b>19.0760° N · 72.8777° E</b></div>
          </div>
        </div>
      </section>

      <section className="quality-v2-policy" id="quality-policy">
        <div className="quality-v2-kicker"><span>01</span><i /><small>Our quality policy</small></div>
        <div className="quality-v2-policy-grid">
          <div className="quality-v2-policy-heading">
            <h2>Correctly specified.<em>Clearly documented.</em>Responsibly delivered.</h2>
            <div className="quality-v2-policy-principles" aria-label="Quality policy priorities">
              <article><b>01</b><span><strong>Conformity</strong><small>Customer, statutory and specification requirements</small></span><CheckCircle2 aria-hidden="true" /></article>
              <article><b>02</b><span><strong>Evidence</strong><small>Traceability, inspection and controlled documentation</small></span><CheckCircle2 aria-hidden="true" /></article>
              <article><b>03</b><span><strong>Improvement</strong><small>Feedback, corrective action and stronger future supply</small></span><CheckCircle2 aria-hidden="true" /></article>
            </div>
          </div>
          <div className="quality-v2-policy-copy">
            <p className="lead">NESCO Pipe & Tubes is committed to supplying industrial metal products that conform to the agreed customer, statutory and specification requirements.</p>
            <p>We pursue this commitment through disciplined enquiry and order review, responsible sourcing, material traceability, appropriate inspection and testing coordination, controlled documentation, protected handling and clear customer communication.</p>
            <p>We maintain and continually improve our management practices by reviewing performance, addressing nonconformities, strengthening supplier and process controls, developing team competence and using customer feedback to improve future supply.</p>
            <div className="quality-v2-policy-signature">
              <BadgeCheck aria-hidden="true" />
              <span><b>NESCO Pipe & Tubes</b>Quality is confirmed against the agreed requirement—not assumed from a product name.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-v2-commitments">
        <div className="quality-v2-section-head">
          <div><small>/ 02 — QUALITY COMMITMENTS</small><h2>Control where it matters.<em>Evidence where it counts.</em></h2></div>
          <p>Every order has its own technical basis. The controls below are applied in proportion to the product standard, service risk and approved purchase requirements.</p>
        </div>
        <div className="quality-v2-commitment-grid">
          {qualityCommitments.map(({ icon: Icon, title, copy }, index) => (
            <article key={title}>
              <div><b>{String(index + 1).padStart(2, "0")}</b><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="quality-v2-flow">
        <div className="quality-v2-flow-copy">
          <small><i /> 03 / CONTROL SEQUENCE</small>
          <h2>One requirement.<em>Five connected controls.</em></h2>
          <p>Quality is strongest when technical, commercial, inspection and documentation decisions remain connected from enquiry to dispatch.</p>
          <Link href="/contact">Discuss your inspection scope <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <ol className="quality-v2-flow-list">
          {qualityFlow.map(([number, title, copy]) => (
            <li key={title}>
              <b>{number}</b>
              <div><span>{title}</span><p>{copy}</p></div>
              <CheckCircle2 aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="quality-v2-inspection">
        <div className="quality-v2-kicker"><span>04</span><i /><small>Inspection & testing framework</small></div>
        <div className="quality-v2-inspection-heading">
          <h2>From identity to final release.</h2>
          <p>The exact inspection plan depends on the product form, material specification, manufacturing class and purchase order. NESCO coordinates the applicable checks and evidence rather than treating every product as identical.</p>
        </div>
        <div className="quality-v2-inspection-table" role="region" aria-label="Quality inspection framework" tabIndex={0}>
          <div className="quality-v2-inspection-row quality-v2-inspection-head"><span>Control area</span><span>What is reviewed</span><span>Typical evidence</span></div>
          {inspectionMatrix.map(([area, review, evidence], index) => (
            <div className="quality-v2-inspection-row" key={area}>
              <b data-label="Control area"><small>{String(index + 1).padStart(2, "0")}</small>{area}</b>
              <span data-label="What is reviewed">{review}</span>
              <p data-label="Typical evidence">{evidence}</p>
            </div>
          ))}
        </div>
        <p className="quality-v2-inspection-note"><CircleGauge aria-hidden="true" /> Additional tests are supplied only when applicable to the ordered standard or agreed in the quotation and purchase order.</p>
      </section>

      <section className="quality-v2-documents">
        <div className="quality-v2-documents-visual">
          <div className="quality-v2-document-sheet">
            <div><span>NESCO / QUALITY FILE</span><FileCheck2 aria-hidden="true" /></div>
            <small>Document alignment</small>
            <h3>Material.<br />Inspection.<br />Release.</h3>
            <ul>
              <li><span>01</span> Purchase requirement</li>
              <li><span>02</span> Material certification</li>
              <li><span>03</span> Inspection evidence</li>
              <li><span>04</span> Dispatch documents</li>
            </ul>
            <b className="quality-v2-document-status"><i /> Review complete</b>
          </div>
          <div className="quality-v2-document-shadow" aria-hidden="true" />
        </div>
        <div className="quality-v2-documents-copy">
          <small>/ 05 — DOCUMENTATION CONTROL</small>
          <h2>A document package that follows the material.</h2>
          <p>Documentation requirements should be defined with the enquiry. NESCO reviews the applicable records against the approved order so the final submission reflects what was actually requested and supplied.</p>
          <div className="quality-v2-document-list">
            {documentation.map(([title, copy], index) => (
              <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-v2-certifications">
        <div className="quality-v2-certification-glow" aria-hidden="true" />
        <div className="quality-v2-certification-copy">
          <small><i /> Independently assessed systems</small>
          <h2>Certified frameworks.<em>Applied with discipline.</em></h2>
          <p>Our certifications support a structured approach to quality, environmental responsibility, occupational health and safety, and applicable pressure-equipment requirements.</p>
          <Link href="/certificate">Inspect our certificates <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="quality-v2-certification-list">
          {certificationSystems.map(([standard, label], index) => (
            <div key={standard}><b>{String(index + 1).padStart(2, "0")}</b><span><strong>{standard}</strong><small>{label}</small></span><CheckCircle2 aria-hidden="true" /></div>
          ))}
        </div>
      </section>

      <section className="quality-v2-improvement">
        <div className="quality-v2-improvement-head">
          <small>/ 06 — CONTINUAL IMPROVEMENT</small>
          <h2>Quality does not end at dispatch.</h2>
          <p>Feedback, deviations and completed orders provide useful evidence. We use that evidence to strengthen future reviews, supplier coordination, documentation and service.</p>
        </div>
        <div className="quality-v2-improvement-loop" aria-label="Continual improvement cycle">
          <div><b>01</b><span>Listen</span><p>Capture technical and service feedback.</p></div>
          <i aria-hidden="true" />
          <div><b>02</b><span>Review</span><p>Understand the cause and affected controls.</p></div>
          <i aria-hidden="true" />
          <div><b>03</b><span>Improve</span><p>Apply corrective or preventive action.</p></div>
          <i aria-hidden="true" />
          <div><b>04</b><span>Verify</span><p>Check effectiveness in future supply.</p></div>
        </div>
      </section>

      <section className="quality-v2-cta" id="quality-support">
        <div className="quality-v2-cta-grid" aria-hidden="true" />
        <div className="quality-v2-cta-copy">
          <small><ShieldCheck aria-hidden="true" /> Project quality support</small>
          <h2>Define the requirement.<em>We’ll coordinate the evidence.</em></h2>
          <p>Share the product, grade, standard, dimensions, inspection scope, documentation requirements and delivery destination for a structured review.</p>
          <div className="quality-v2-cta-tags" aria-label="Project quality support services">
            <span><CheckCircle2 aria-hidden="true" /> Specification review</span>
            <span><CheckCircle2 aria-hidden="true" /> Inspection planning</span>
            <span><CheckCircle2 aria-hidden="true" /> Document coordination</span>
          </div>
        </div>
        <aside className="quality-v2-cta-panel">
          <div><small>Enquiry input</small><FileCheck2 aria-hidden="true" /></div>
          <h3>What should you share?</h3>
          <ul>
            <li><span>01</span>Product, material grade and standard</li>
            <li><span>02</span>Dimensions, quantity and delivery destination</li>
            <li><span>03</span>Testing, inspection and documentation scope</li>
          </ul>
          <Link href="/contact"><span>Start a quality-led enquiry</span><ArrowUpRight aria-hidden="true" /></Link>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
