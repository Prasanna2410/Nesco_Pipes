"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, FileCheck2, Mail, Send, ShieldCheck, X } from "lucide-react";
import { type EnquiryStatus, submitEnquiry } from "@/lib/submit-enquiry";

type ProductInquiryPanelProps = {
  productTitle: string;
  category: string;
  cta: string;
  sectionNumber?: string;
};

export function ProductInquiryPanel({ productTitle, category, cta, sectionNumber = "11" }: ProductInquiryPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submission, setSubmission] = useState<{ status: EnquiryStatus; message: string }>({ status: "idle", message: "Your enquiry will be delivered securely to the NESCO sales team." });
  const formRef = useRef<HTMLFormElement>(null);
  const standardPlaceholder = category === "Tubes"
    ? "e.g. ASTM A269 / A213 / approved project specification"
    : "e.g. ASTM material standard / applicable dimensional standard";
  const dimensionsPlaceholder = category === "Tubes"
    ? "OD, wall thickness, tolerance, length / coil / U-bend geometry"
    : "NPS / OD, schedule or wall thickness, and length";

  useEffect(() => {
    if (!isOpen) return;
    const frame = window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmission({ status: "sending", message: "Sending your product enquiry securely..." });
    try {
      await submitEnquiry(form, `Product page: ${productTitle}`);
      form.reset();
      setSubmission({ status: "success", message: "Thank you. Your product enquiry has been sent to the NESCO sales team." });
    } catch (error) {
      setSubmission({ status: "error", message: error instanceof Error ? error.message : "We could not send your enquiry. Please try again." });
    }
  }

  return (
    <section className={`product-rfq-v3${isOpen ? " is-open" : ""}`} id="rfq">
      <div className="product-rfq-atmosphere" aria-hidden="true"><i /><i /><span>RFQ</span></div>

      <div className="product-rfq-intro">
        <div className="product-rfq-intro-top">
          <small>/ {sectionNumber} — REQUEST FOR QUOTATION</small>
          <span className="product-rfq-status"><i /> Nesco direct sales desk</span>
        </div>
        <div className="product-rfq-copy-layout">
          <div className="product-rfq-message">
            <span className="product-rfq-product"><small>Selected product</small><b>{productTitle}</b></span>
            <h2>Turn your specification into a supply-ready enquiry.</h2>
            <p>{cta}</p>
            <div className="product-rfq-assurance">
              <span><ShieldCheck /> Technical review</span>
              <span><FileCheck2 /> Documentation support</span>
              <span><Mail /> Secure submission</span>
            </div>
          </div>
          <div className="product-rfq-action-panel">
            <small>Ready to source?</small>
            <strong>Start with the details you already have.</strong>
            <p>Our team will review the grade, dimensions, testing and delivery requirements together.</p>
            <button type="button" className="product-rfq-trigger" aria-expanded={isOpen} aria-controls="product-inquiry-form" onClick={() => setIsOpen((open) => !open)}>
              <span>{isOpen ? "Close enquiry form" : "Start product enquiry"}</span>
              {isOpen ? <X /> : <ArrowRight />}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <form className="product-inline-enquiry" id="product-inquiry-form" ref={formRef} onSubmit={submit}>
          <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="product-inline-form-head">
            <span><FileCheck2 /></span>
            <div><small>Product-specific enquiry</small><h3>Tell us what the project requires.</h3><p>The product is already selected. Complete the technical and delivery details below.</p></div>
            <b>RFQ / 01</b>
          </div>

          <div className="product-inline-fields">
            <label><span>Your name <b>*</b></span><input name="name" autoComplete="name" placeholder="Full name" required /></label>
            <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company or project" /></label>
            <label><span>Work email <b>*</b></span><input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
            <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91" /></label>
            <label className="field-wide"><span>Product</span><input name="product" value={productTitle} readOnly /></label>
            <label><span>Material grade <b>*</b></span><input name="grade" placeholder="e.g. SS 316L / Duplex 2205" required /></label>
            <label><span>Standard <b>*</b></span><input name="standard" placeholder={standardPlaceholder} required /></label>
            <label><span>Quantity <b>*</b></span><input name="quantity" placeholder="Pieces, metres, tonnes..." required /></label>
            <label className="field-wide"><span>Dimensions <b>*</b></span><input name="specification" placeholder={dimensionsPlaceholder} required /></label>
            <label className="field-wide"><span>Delivery destination <b>*</b></span><input name="destination" placeholder="City / country / port" required /></label>
            <label className="field-wide"><span>Required test certificates</span><input name="certificates" placeholder="e.g. EN 10204 3.1, PMI, UT, RT or third-party inspection" /></label>
            <label className="field-wide"><span>Testing, inspection or additional requirements</span><textarea name="message" placeholder="MTC, PMI, NDT, finish, end preparation, packing or delivery schedule" /></label>
            <label className="field-wide product-file-field"><span>Upload drawing / BOQ <small>(optional)</small></span><input name="drawing" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.dwg,.dxf,.jpg,.jpeg,.png" /><small>Accepted project files up to 5 MB will be attached securely to the enquiry.</small></label>
          </div>

          <div className="product-inline-submit-row">
            <button type="submit" disabled={submission.status === "sending"}><span>{submission.status === "sending" ? "Sending enquiry..." : "Send enquiry"}</span><Send /></button>
            <p className={`product-submission-note is-${submission.status}`} role="status" aria-live="polite"><CheckCircle2 /> {submission.message}</p>
          </div>
        </form>
      ) : null}
    </section>
  );
}
