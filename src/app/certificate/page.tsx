import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BadgeCheck, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { CertificateGallery } from "@/components/CertificateGallery";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Certifications | NESCO Pipe & Tubes",
  description: "View NESCO Pipe & Tubes certifications for ISO 9001, ISO 14001, ISO 45001 and the Pressure Equipment Directive.",
};

export default function CertificatePage() {
  return (
    <main className="certificate-page">
      <SiteHeader />

      <section className="certification-hero">
        <div className="certification-hero-grid" />
        <div className="certification-orbit certification-orbit-one" />
        <div className="certification-orbit certification-orbit-two" />
        <div className="certification-hero-inner">
          <div className="certification-hero-copy">
            <small><i /> Verified management systems · Mumbai, India</small>
            <h1><span>Certified quality.</span><em>Trusted delivery.</em></h1>
            <p>NESCO Pipe & Tubes operates with independently assessed management systems and product-scope certification supporting quality, environmental responsibility, workplace safety and pressure-equipment requirements.</p>
            <div className="certification-hero-actions">
              <a href="#certificates">Explore credentials <ArrowDown aria-hidden="true" /></a>
              <Link href="/quality-policy">Our quality approach <ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="certification-hero-stats" aria-label="Certification summary">
              <div><b>04</b><span>Active credentials</span></div>
              <div><b>2026</b><span>Issued</span></div>
              <div><b>2029</b><span>Current expiry</span></div>
            </div>
          </div>

          <div className="certification-hero-visual" aria-label="NESCO certificate previews">
            <div className="hero-certificate-card hero-certificate-back-two">
              <Image src="/assets/certificates/iso-45001-2018.jpg" alt="" fill sizes="28vw" />
            </div>
            <div className="hero-certificate-card hero-certificate-back-one">
              <Image src="/assets/certificates/iso-14001-2015.jpg" alt="" fill sizes="28vw" />
            </div>
            <div className="hero-certificate-card hero-certificate-front">
              <Image src="/assets/certificates/iso-9001-2015.jpg" alt="ISO 9001:2015 certificate issued to NESCO Pipe & Tubes" fill sizes="(max-width: 800px) 72vw, 28vw" priority />
              <span><BadgeCheck aria-hidden="true" /> Verified credential</span>
            </div>
            <div className="certification-hero-badge"><ShieldCheck aria-hidden="true" /><span>Quality<br />assured</span></div>
          </div>
        </div>
      </section>

      <section className="certification-intro" id="certificates">
        <div className="certification-section-kicker"><span>01</span><i /><small>Our credentials</small></div>
        <div className="certification-intro-copy">
          <h2><span>Standards you can inspect.</span><em>Confidence you can carry forward.</em></h2>
          <p>Each certificate is presented in its original form. Open any credential for a clear, full-size view of its scope, certificate number, issue date and validity information.</p>
        </div>
        <CertificateGallery />
      </section>

      <section className="certification-scope">
        <div className="certification-scope-mark"><FileCheck2 aria-hidden="true" /></div>
        <div>
          <small>Certified scope</small>
          <h2>Industrial supply backed by documented systems.</h2>
          <p>Manufacturer, stockist and supplier of stainless steel, duplex and super duplex stainless steel, nickel alloy and cupro nickel seamless and welded pipes, tubes, fittings and flanges.</p>
        </div>
        <span className="certification-scope-code">NESCO / CERT / 2026</span>
      </section>

      <section className="certification-cta">
        <div className="certification-cta-grid" />
        <div className="certification-cta-copy">
          <small><i /> Documentation support</small>
          <h2>Need certificates with your project submission?</h2>
          <p>Share the product, grade, standard, inspection scope and documentation requirements. NESCO will review them as one coordinated enquiry.</p>
          <div className="certification-documentation-tags" aria-label="Documentation services">
            <span><CheckCircle2 aria-hidden="true" /> Certificate coordination</span>
            <span><CheckCircle2 aria-hidden="true" /> Inspection scope review</span>
            <span><CheckCircle2 aria-hidden="true" /> Submission-ready details</span>
          </div>
        </div>
        <aside className="certification-documentation-card">
          <div><span>Project documentation</span><FileCheck2 aria-hidden="true" /></div>
          <b>Specification-led certificate support.</b>
          <p>Material documents, inspection requirements and submission details coordinated with the supply enquiry.</p>
          <Link href="/contact">Start an enquiry <ArrowUpRight aria-hidden="true" /></Link>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
