"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Factory,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
} from "lucide-react";

const enquirySteps = [
  {
    number: "01",
    label: "Product form",
    title: "Name the product.",
    copy: "Start with pipe, tube, sheet, plate, coil, bar, flange, fitting, fastener or another required form.",
    detail: "Pipe / Tube / Flange / Fitting",
    icon: Factory,
  },
  {
    number: "02",
    label: "Material identity",
    title: "Define the grade.",
    copy: "Share the stainless steel, duplex, nickel alloy, titanium or project-specific material designation.",
    detail: "Grade / UNS / ASTM / ASME",
    icon: ShieldCheck,
  },
  {
    number: "03",
    label: "Technical dimensions",
    title: "Add the specification.",
    copy: "Include size, schedule, wall thickness, pressure class, finish, length and testing requirements where applicable.",
    detail: "Size / Schedule / Class / Finish",
    icon: Ruler,
  },
  {
    number: "04",
    label: "Commercial scope",
    title: "Set the delivery brief.",
    copy: "Confirm quantity, required date, inspection needs and the final delivery destination for a clearer quotation.",
    detail: "Quantity / Date / Destination",
    icon: PackageCheck,
  },
] as const;

export function ContactExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const visualTravel = useSpring(useTransform(scrollYProgress, [0, 1], [0, 110]), { stiffness: 90, damping: 24 });
  const heroProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const product = value("product") || "Industrial material requirement";
    const body = [
      `Name: ${value("name")}`,
      `Company: ${value("company")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone")}`,
      "",
      `Product family: ${product}`,
      `Material grade: ${value("grade")}`,
      `Dimensions / standard: ${value("specification")}`,
      `Quantity: ${value("quantity")}`,
      `Delivery destination: ${value("destination")}`,
      "",
      "Additional requirement:",
      value("message"),
    ].join("\n");

    window.location.href = `mailto:sales@shreeimpexalloys.com?subject=${encodeURIComponent(`NESCO quotation enquiry: ${product}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <section className="contact-experience-hero" ref={heroRef}>
        <i className="contact-page-progress" aria-hidden="true">
          <motion.i style={{ scaleY: heroProgress }} />
        </i>
        <div className="contact-hero-atmosphere" aria-hidden="true"><i /><i /><span>RFQ</span></div>

        <motion.div
          className="contact-hero-copy"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="contact-hero-eyebrow">NESCO / DIRECT SALES DESK</span>
          <h1>From specification <em>to supply.</em></h1>
          <p className="contact-hero-lead">Share the material, dimensions, quantity and destination. Our Mumbai team will turn the requirement into a clearer, project-ready quotation.</p>
          <div className="contact-hero-actions">
            <a className="contact-hero-primary" href="#contact-request">Build your enquiry <ArrowDown /></a>
            <a className="contact-hero-secondary" href="tel:+919167963226"><Phone /> +91 91679 63226</a>
          </div>
          <div className="contact-hero-facts">
            <div><strong>01</strong><span>Direct sales coordination</span></div>
            <div><strong>02</strong><span>Technical review support</span></div>
            <div><strong>03</strong><span>India and export supply</span></div>
          </div>
        </motion.div>

        <motion.div className="contact-command-wrap" style={reduceMotion ? undefined : { y: visualTravel }}>
          <div className="contact-hero-showcase">
            <div className="contact-showcase-image">
              <Image src="/assets/about-slider/04-product-range.png" alt="NESCO pipes, tubes, flanges, bars and industrial metal products" fill sizes="(max-width: 1100px) 88vw, 43vw" priority />
              <div className="contact-showcase-shade" />
            </div>
            <div className="contact-showcase-top"><span><i /> NESCO PRODUCT SYSTEMS</span><b>RFQ / DIRECT</b></div>
            <div className="contact-showcase-copy">
              <small>Specification-led supply</small>
              <strong>One brief.<br />Full coordination.</strong>
              <p>Product, grade, dimensions, documentation and delivery reviewed together.</p>
            </div>
            <div className="contact-showcase-capabilities" aria-label="Quotation support">
              <span><ShieldCheck /> Material review</span>
              <span><FileCheck2 /> Documentation</span>
              <span><Globe2 /> India + export</span>
            </div>
            <div className="contact-showcase-badge"><CheckCircle2 /><span>Project-ready<br />response</span></div>
          </div>
        </motion.div>

        <a className="contact-scroll-cue" href="#enquiry-path"><span>Scroll to prepare</span><i /><ArrowDown /></a>
      </section>

      <section className="contact-brief-story" id="enquiry-path">
        <div className="contact-brief-intro">
          <span className="contact-brief-eyebrow">01 / A better brief</span>
          <h2>Four details make every enquiry stronger.</h2>
          <p>A complete requirement helps the team review availability, standards, inspection and delivery without unnecessary back-and-forth.</p>
          <Link className="contact-catalogue-link" href="/products">Explore the product catalogue <ArrowRight /></Link>
        </div>
        <div className="contact-brief-steps">
          {enquirySteps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="contact-brief-step"
              >
                <span className="contact-step-number">{step.number}</span>
                <div className="contact-step-copy">
                  <Icon />
                  <small className="contact-step-label">{step.label}</small>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  <small className="contact-step-detail">{step.detail}</small>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-request-section" id="contact-request">
        <div className="contact-request-atmosphere" aria-hidden="true"><i /><i /><i /></div>
        <div className="contact-request-heading">
          <span className="contact-request-eyebrow">02 / Request a quote</span>
          <div>
            <h2>Build a supply-ready enquiry.</h2>
            <p>Provide what you know. Our sales team can help refine the remaining technical and commercial details.</p>
          </div>
        </div>

        <div className="contact-request-grid">
          <aside className="contact-direct-panel">
            <div className="contact-direct-head">
              <div className="contact-direct-status"><i /><span>Sales desk available</span></div>
              <span className="contact-direct-kicker">Direct contact</span>
              <h3>Mumbai supply desk.</h3>
              <p className="contact-direct-copy">Speak directly with the team coordinating product, documentation, packing and delivery requirements.</p>
            </div>
            <div className="contact-direct-links">
              <a className="contact-direct-link" href="tel:+919167963226"><Phone /><div><span>Call our team</span><strong>+91 91679 63226</strong></div><ArrowUpRight /></a>
              <a className="contact-direct-link" href="mailto:sales@shreeimpexalloys.com"><Mail /><div><span>Email sales</span><strong>sales@shreeimpexalloys.com</strong></div><ArrowUpRight /></a>
              <a className="contact-direct-link" href="https://maps.google.com/?q=Shop+No+4+124+T+P+Street+6th+Kumbharwada+Mumbai+400004" target="_blank" rel="noreferrer"><MapPin /><div><span>Visit the office</span><strong>6th Kumbharwada, Mumbai 400004</strong></div><ArrowUpRight /></a>
            </div>
            <div className="contact-availability">
              <Clock3 />
              <span><b>Sales response</b><small>Monday–Saturday / business hours</small></span>
            </div>
            <div className="contact-support-tags" aria-label="Enquiry support">
              <span>MTC coordination</span><span>Inspection support</span><span>Export packing</span>
            </div>
            <div className="contact-direct-route" aria-hidden="true"><span>MUMBAI</span><i /><b>INDIA + EXPORT</b></div>
          </aside>

          <form
            className="contact-experience-form"
            onSubmit={submit}
          >
            <div className="contact-form-heading">
              <span><FileCheck2 /></span>
              <div><small className="contact-form-kicker">Quotation brief</small><h3>Tell us what you need.</h3></div>
              <b>RFQ</b>
            </div>
            <div className="contact-form-stage"><span className="active">Contact</span><i /><span>Specification</span><i /><span>Delivery</span></div>
            <div className="contact-form-assurance">
              <span><CheckCircle2 /> Specification reviewed</span>
              <span><CheckCircle2 /> Documentation coordinated</span>
              <span><CheckCircle2 /> Reply prepared by sales</span>
            </div>

            <label className="contact-form-field">
              <span>Your name <b>*</b></span>
              <input name="name" placeholder="Full name" autoComplete="name" required />
            </label>
            <label className="contact-form-field">
              <span>Company</span>
              <input name="company" placeholder="Company or project" autoComplete="organization" />
            </label>
            <label className="contact-form-field">
              <span>Work email <b>*</b></span>
              <input name="email" type="email" placeholder="name@company.com" autoComplete="email" required />
            </label>
            <label className="contact-form-field">
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+91" autoComplete="tel" />
            </label>
            <label className="contact-form-field">
              <span>Product family <b>*</b></span>
              <select name="product" defaultValue="" required>
                <option value="" disabled>Select product family</option>
                <option>Pipes</option>
                <option>Tubes</option>
                <option>Sheets, Plates & Coils</option>
                <option>Bars</option>
                <option>Flanges</option>
                <option>Butt Weld Fittings</option>
                <option>Fasteners</option>
                <option>Other requirement</option>
              </select>
            </label>
            <label className="contact-form-field">
              <span>Material grade <b>*</b></span>
              <input name="grade" placeholder="e.g. SS 316L / Duplex 2205" required />
            </label>
            <label className="contact-form-field contact-form-field--wide">
              <span>Dimensions and standard <b>*</b></span>
              <input name="specification" placeholder="Size, schedule, class, thickness, ASTM / ASME standard" required />
            </label>
            <label className="contact-form-field">
              <span>Quantity</span>
              <input name="quantity" placeholder="Pieces, metres, tonnes..." />
            </label>
            <label className="contact-form-field">
              <span>Delivery destination <b>*</b></span>
              <input name="destination" placeholder="City / country / port" required />
            </label>
            <label className="contact-form-field contact-form-field--wide">
              <span>Additional requirement</span>
              <textarea name="message" placeholder="Testing, inspection, certification, finish, packing or delivery timeline" />
            </label>

            <button className="contact-form-submit" type="submit"><span>Prepare email enquiry</span><Send /></button>
            <p className="contact-form-note"><CheckCircle2 /> Your information remains in your email client. Submitting opens a completed draft for your review.</p>
          </form>
        </div>
      </section>
    </>
  );
}
