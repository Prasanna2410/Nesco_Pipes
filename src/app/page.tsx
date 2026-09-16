"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Factory, FileCheck2, Globe2, Mail, MapPin, MoveRight, Phone, Plane } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/components/SmoothScroll";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import ScrollSequenceHero from "@/components/ScrollSequenceHero";
import { productCategories } from "@/lib/catalog";
import { companyContact } from "@/lib/company-contact";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  ["01", "Complete product range", "Pipes, tubes, sheets, plates, coils, bars, rods, wires, flanges, fittings, fasteners, instrumentation fittings and valves."],
  ["02", "Materials and grades", "Stainless steel, duplex, super duplex, nickel alloys, Monel, Inconel, Hastelloy, carbon steel, titanium, aluminum and SMO 254."],
  ["03", "Quality documentation", "Material test certificates, dimensional checks, inspection support and export packing can be arranged for project orders."],
  ["04", "Mumbai supply hub", "Responsive dispatch support for India, the Middle East, Asia, Europe and other export destinations."],
];

const industries = [
  { name: "Oil & Gas", text: "Pipe, flange and fitting supply for high-pressure process lines.", focus: "Pressure / process / offshore", image: "/assets/industry-backgrounds/01-oil-and-gas.png" },
  { name: "Power Plants", text: "Heat-resistant grades for utility and maintenance requirements.", focus: "Heat / steam / utility", image: "/assets/industry-backgrounds/02-power-plants.png" },
  { name: "Chemical", text: "Corrosion-conscious alloys for aggressive media and plant piping.", focus: "Corrosion / containment", image: "/assets/industry-backgrounds/03-chemical.png" },
  { name: "Food & Pharma", text: "Clean-finish tubes, valves and fittings for hygienic systems.", focus: "Hygienic / clean finish", image: "/assets/industry-backgrounds/04-food-and-pharma.png" },
  { name: "Marine", text: "Durable metals for salt-heavy and fabrication-intensive environments.", focus: "Saltwater / ship systems", image: "/assets/industry-backgrounds/05-marine.png" },
  { name: "Infrastructure", text: "Fast-moving stock support for EPC, fabrication and project teams.", focus: "Structural / EPC / fabrication", image: "/assets/industry-backgrounds/06-infrastructure.png" },
];

const aboutSlides = [
  { image: "/assets/about-slider/01-pipes-tubes.png", title: "Pipes & tubes", detail: "Seamless, welded and precision tubular products" },
  { image: "/assets/about-slider/02-sheets-plates.png", title: "Sheets & plates", detail: "Flat products prepared around grade and thickness" },
  { image: "/assets/about-slider/03-flanges-fittings.png", title: "Flanges & fittings", detail: "Connection components for demanding piping systems" },
  { image: "/assets/about-slider/04-product-range.png", title: "Complete product range", detail: "One coordinated source for industrial metal supply" },
];

function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 900);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <motion.div className="loader" initial={false} animate={{ y: done ? "-100%" : 0 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} aria-hidden="true">
      <div className="loader-mark"><span>NE</span><i /><span>SCO</span></div>
      <div className="loader-line"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.85, ease: "easeInOut" }} /></div>
      <p>Pipe & Tubes</p>
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="page-progress" style={{ scaleY: scrollYProgress }} />;
}

function AboutProductSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const slide = aboutSlides[activeSlide];

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => setActiveSlide((current) => (current + 1) % aboutSlides.length), 5200);
    return () => window.clearTimeout(timer);
  }, [activeSlide, paused]);

  const move = (direction: number) => setActiveSlide((current) => (current + direction + aboutSlides.length) % aboutSlides.length);

  return (
    <div className="about-product-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          className="about-product-slide"
          key={slide.image}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08, clipPath: reduceMotion ? "inset(0)" : "inset(0 0 14% 0)" }}
          animate={{ opacity: 1, scale: 1, clipPath: "inset(0)" }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.025 }}
          transition={{ duration: reduceMotion ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={slide.image} alt={`${slide.title} supplied by NESCO Pipe & Tubes`} fill sizes="(max-width: 900px) 88vw, 42vw" priority={activeSlide === 0} />
        </motion.div>
      </AnimatePresence>
      <div className="about-slider-shade" aria-hidden="true" />
      <div className="about-slider-scan" aria-hidden="true" />
      <div className="about-slider-top"><span><i /> NESCO / PRODUCT SYSTEMS</span><b>{String(activeSlide + 1).padStart(2, "0")} / {String(aboutSlides.length).padStart(2, "0")}</b></div>
      <div className="about-slider-copy" aria-live="polite"><small>Industrial supply range</small><strong>{slide.title}</strong><span>{slide.detail}</span></div>
      <div className="about-slider-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Show previous About NESCO image"><ChevronLeft /></button>
        <div>{aboutSlides.map((item, index) => <button type="button" className={index === activeSlide ? "active" : ""} onClick={() => setActiveSlide(index)} aria-label={`Show ${item.title}`} aria-current={index === activeSlide ? "true" : undefined} key={item.title}><i /></button>)}</div>
        <button type="button" onClick={() => move(1)} aria-label="Show next About NESCO image"><ChevronRight /></button>
      </div>
      <div className={`about-slider-progress ${paused ? "paused" : ""}`} aria-hidden="true"><i key={activeSlide} /></div>
    </div>
  );
}

function Standard() {
  return (
    <section className="standard-v3" id="about">
      <div className="standard-heading">
        <div><span>/ 01 - ABOUT NESCO</span><p>Manufacturer, supplier and exporter</p></div>
        <h2>Industrial metals supplied with the clarity buyers need.</h2>
      </div>
      <div className="standard-grid">
        <AboutProductSlider />
        <div className="pipe-flow-visual" role="img" aria-label="Animated NESCO material sourcing and delivery pipeline">
          <svg viewBox="0 0 600 600" aria-hidden="true">
            <defs>
              <linearGradient id="pipe-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6f8498" /><stop offset="0.28" stopColor="#edf5fb" /><stop offset="0.52" stopColor="#8ca0b3" /><stop offset="0.78" stopColor="#f8fbfe" /><stop offset="1" stopColor="#61778c" /></linearGradient>
              <filter id="pipe-shadow"><feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#082b56" floodOpacity=".2" /></filter>
            </defs>
            <g className="pipe-route" filter="url(#pipe-shadow)">
              <path id="pipe-source" d="M44 126 H205 Q242 126 242 163 V248 Q242 275 270 275" />
              <path id="pipe-inspect" d="M556 128 H414 Q377 128 377 165 V246 Q377 275 345 275" />
              <path id="pipe-pack" d="M46 474 H194 Q232 474 232 436 V359 Q232 327 270 327" />
              <path id="pipe-deliver" d="M554 476 H422 Q382 476 382 437 V360 Q382 327 345 327" />
            </g>
            <g className="pipe-highlight">
              <path d="M44 126 H205 Q242 126 242 163 V248 Q242 275 270 275" />
              <path d="M556 128 H414 Q377 128 377 165 V246 Q377 275 345 275" />
              <path d="M46 474 H194 Q232 474 232 436 V359 Q232 327 270 327" />
              <path d="M554 476 H422 Q382 476 382 437 V360 Q382 327 345 327" />
            </g>
            <g className="pipe-joints"><circle cx="44" cy="126" r="13" /><circle cx="556" cy="128" r="13" /><circle cx="46" cy="474" r="13" /><circle cx="554" cy="476" r="13" /></g>
            <circle className="flow-particle fp-blue" r="8"><animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#pipe-source" /></animateMotion></circle>
            <circle className="flow-particle fp-copper" r="8"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#pipe-inspect" /></animateMotion></circle>
            <circle className="flow-particle fp-blue" r="8"><animateMotion dur="4.6s" repeatCount="indefinite"><mpath href="#pipe-pack" /></animateMotion></circle>
            <circle className="flow-particle fp-copper" r="8"><animateMotion dur="5.4s" repeatCount="indefinite"><mpath href="#pipe-deliver" /></animateMotion></circle>
          </svg>
          <div className="pipe-flow-core"><Factory /><strong>NESCO</strong><span>MATERIAL FLOW</span></div>
          <div className="pipe-stage-label psl-1"><b>01</b><span>Source<small>Grade & form</small></span></div>
          <div className="pipe-stage-label psl-2"><b>02</b><span>Inspect<small>Test & verify</small></span></div>
          <div className="pipe-stage-label psl-3"><b>03</b><span>Pack<small>Protect & mark</small></span></div>
          <div className="pipe-stage-label psl-4"><b>04</b><span>Deliver<small>India & export</small></span></div>
        </div>
        <div className="standard-core">
          <i /><i /><i />
          <span className="core-satellite cs1" /><span className="core-satellite cs2" /><span className="core-satellite cs3" />
          <div><Globe2 /><strong>360°</strong><span>SUPPLY SUPPORT</span></div>
          <small className="core-note n1">SOURCE</small><small className="core-note n2">VERIFY</small><small className="core-note n3">DELIVER</small>
        </div>
        <div className="standard-cards">
          {strengths.map(([number, title, copy]) => (
            <article className="standard-card" key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
              <CheckCircle2 />
            </article>
          ))}
        </div>
      </div>
      <div className="standard-signoff"><span>Stock support</span><span>Custom sizes</span><span>Export packing</span><Link href="/quality-policy">Quality policy <ArrowUpRight /></Link></div>
    </section>
  );
}

function AssuranceOrbit() {
  const section = useRef<HTMLElement>(null);
  const portal = useRef<HTMLDivElement>(null);
  const steps = [
    ["01", "Choose the family", "Start from pipes, tubes, flanges, sheets, fittings or valves so the enquiry lands in the right supply path."],
    ["02", "Match the metal", "Select stainless steel, duplex, super duplex, nickel alloy, Monel, Inconel, Hastelloy, titanium or carbon steel."],
    ["03", "Confirm the standard", "Share ASTM, ASME, ANSI, DIN, EN, JIS or project-specific requirements with dimensions and quantity."],
    ["04", "Ship with proof", "Receive material documents, packing support and dispatch coordination from Mumbai for local or export orders."],
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".portal-step");
      const tl = gsap.timeline({ scrollTrigger: { trigger: section.current, start: "top top", end: "+=2800", scrub: 1, pin: true } });
      tl.fromTo(portal.current, { scale: .58, rotate: -10 }, { scale: 1.03, rotate: 8, duration: 1 });
      panels.forEach((panel, index) => {
        if (index > 0) {
          tl.to(panels[index - 1], { opacity: 0, y: -60, duration: .25 }).fromTo(panel, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: .3 });
        }
        tl.to(portal.current, { scale: 1.03 + index * .18, rotate: 8 + index * 12, duration: .7 }, "<");
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="portal-story" id="supply-flow" ref={section}>
      <div className="portal-visual" ref={portal}>
        <Image src="/assets/nesco-steel-portal.png" alt="Circular stainless steel tube detail" fill sizes="60vw" />
        <div className="portal-vignette" />
      </div>
      <div className="portal-title"><span>/ 02</span><b>SUPPLY<br />FLOW</b></div>
      <div className="portal-steps">
        {steps.map(([number, title, copy], index) => (
          <article className={`portal-step s${index + 1}`} key={number}>
            <small>{number} / 04 - SOURCING PATH</small>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="scroll-meter"><span>SCROLL</span><i /></div>
    </section>
  );
}

function Products() {
  return (
    <section className="catalog-flow" id="products">
      <div className="catalog-flow-head">
        <span>/ 03 - PRODUCT CATALOGUE</span>
        <div>
          <h2>One catalogue. Every essential connection.</h2>
          <p>Explore our core range by product form, from seamless pipe and heat exchanger tube to precision flanges, butt weld fittings, flat products, bars and fastening solutions.</p>
        </div>
      </div>
      <div className="range-compact-grid">
        {productCategories.map((category, index) => (
          <article className="range-compact-card" key={category.id}>
            <div className="range-card-image"><Image src={category.image} alt={category.title} fill sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div>
            <small>0{index + 1} / RANGE</small>
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <div>
              {category.items.slice(0, 4).map((item) => (
                <Link href={`/${item.slug}`} key={item.slug}>{item.title}</Link>
              ))}
            </div>
            <Link className="category-all" href={`/products#${category.id}`}>Full range <MoveRight /></Link>
          </article>
        ))}
      </div>
      <Link className="catalog-master-link" href="/products">Open complete category-wise catalogue <ArrowUpRight /></Link>
    </section>
  );
}

function Industries() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="industries-showcase" id="industries">
      <div className="industries-showcase-header">
        <div className="industries-showcase-label">
          <span>/ 03 — INDUSTRIES</span>
          <span className="industry-system-status"><i /> 06 systems online</span>
        </div>
        <div className="industries-showcase-title">
          <h2>Engineered for <em>critical environments.</em></h2>
          <div className="industries-showcase-brief">
            <p>From pressure-intensive process plants to hygienic production lines, NESCO coordinates the metals, forms and documentation each operating environment demands.</p>
            <div className="industry-brief-stats" aria-label="NESCO industry capabilities">
              <span><b>06</b> core sectors</span>
              <span><b>360°</b> supply support</span>
              <span><b>24/7</b> enquiry response</span>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-showcase-grid">
        {industries.map((item, index) => (
          <motion.article
            className="industry-showcase-card"
            key={item.name}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 70, clipPath: "inset(12% 0 0 0 round 18px)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0 round 18px)" }}
            whileHover={reduceMotion ? undefined : { y: -12, scale: 1.006 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: reduceMotion ? 0 : 0.78, delay: reduceMotion ? 0 : index * 0.055, ease: [0.22, 1, 0.36, 1] }}
            onPointerMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
              event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--spot-x", "50%");
              event.currentTarget.style.setProperty("--spot-y", "42%");
            }}
          >
            <Image className="industry-showcase-image" src={item.image} alt={`${item.name} industrial application supplied by NESCO Pipe & Tubes`} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw" />
            <div className="industry-showcase-shade" aria-hidden="true" />
            <div className="industry-card-gridlines" aria-hidden="true" />
            <span className="industry-card-scan" aria-hidden="true" />
            <div className="industry-card-top">
              <small>0{index + 1} / SECTOR</small>
              <span><i /> {item.focus}</span>
            </div>
            <div className="industry-card-content">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <div className="industry-card-foot"><span><Factory /> NESCO / application supply</span><i /></div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Reach() {
  const destinations = ["India", "UAE", "Saudi Arabia", "Qatar", "Bahrain", "Kuwait", "Singapore", "Malaysia", "Canada", "Australia"];
  const exportDestinations = destinations.slice(1);
  return (
    <section className="reach-v3" id="reach">
      <div className="reach-v3-head"><span>/ 04 - GLOBAL REACH</span><div><h2>India at the centre. Supply routes in motion.</h2><p>From Mumbai, NESCO coordinates stainless steel and alloy supply for industrial buyers, fabricators, maintenance teams and project contractors across key international markets.</p></div></div>
      <div className="reach-v3-grid">
        <motion.div className="network-map" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="supply-network">
            <i className="supply-orbit orbit-outer" /><i className="supply-orbit orbit-middle" /><i className="supply-orbit orbit-inner" />
            <span className="flight-path flight-one"><Plane /></span><span className="flight-path flight-two"><Plane /></span><span className="flight-path flight-three"><Plane /></span>
            <span className="supply-signal signal-one" /><span className="supply-signal signal-two" /><span className="supply-signal signal-three" /><span className="supply-signal signal-four" />
            <div className="india-core"><Globe2 /><strong>INDIA</strong><small>Mumbai supply hub</small></div>
            {exportDestinations.map((destination, index) => <span className={`country-node country-${index + 1}`} key={destination}><i /><b>{destination}</b></span>)}
          </div>
          <div className="network-flight-legend"><span><Plane /> Active export routes</span><span><i /> Supply destination</span></div>
          <div className="map-caption"><Globe2 /><span>Stocked, documented and coordinated from India</span><small>GLOBAL EXPORT</small></div>
        </motion.div>
        <div className="network-copy">
          <small>Supply destinations</small>
          <div className="destination-list">{destinations.map((destination, index) => <span key={destination}>{String(index + 1).padStart(2, "0")} {destination}</span>)}</div>
          <div className="network-stats"><div><b>15+</b><span>Countries served</span></div><div><b>243+</b><span>Happy clients</span></div><div><b>24/7</b><span>Support</span></div></div>
          <Link href="/contact">Start an export enquiry <ArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    location.href = `${companyContact.salesMailto}?subject=${encodeURIComponent(`Quote: ${data.get("product")}`)}&body=${encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nRequirement: ${data.get("message")}`)}`;
  }
  return (
    <section className="contact-v3" id="contact">
      <div className="quote-atmosphere" aria-hidden="true"><i /><i /><i /></div>
      <motion.div className="contact-v3-intro" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }}>
        <span className="quote-eyebrow"><i /> 05 / REQUEST A QUOTE</span>
        <h2>Your requirement, <em>engineered into supply.</em></h2>
        <p>Give our team the essentials and we will prepare a clear, specification-led quotation for your piping or metal requirement.</p>
        <div className="quote-essentials" aria-label="Details to include in your request">
          <div><b>01</b><span>Product form<small>Pipe, tube, flange or fitting</small></span></div>
          <div><b>02</b><span>Material grade<small>Alloy, standard and specification</small></span></div>
          <div><b>03</b><span>Dimensions<small>Size, schedule, class or thickness</small></span></div>
          <div><b>04</b><span>Order details<small>Quantity and delivery destination</small></span></div>
        </div>
        <div className="contact-channels">
          <a href={companyContact.primaryPhoneHref}><Phone /><span>Call our team<small>{companyContact.primaryPhone} / {companyContact.secondaryPhone}</small></span><ArrowUpRight /></a>
          <a href={companyContact.salesMailto}><Mail /><span>Email sales &amp; exports<small>{companyContact.salesEmail} / {companyContact.exportsEmail}</small></span><ArrowUpRight /></a>
          <Link href="/contact"><MapPin /><span>Mumbai office<small>{companyContact.address}</small></span><ArrowUpRight /></Link>
        </div>
      </motion.div>
      <motion.form className="contact-form-v3" onSubmit={submit} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }}>
        <div className="form-head"><span className="form-head-icon"><Factory /></span><div><small>Direct sales enquiry</small><h3>Build your quotation brief.</h3></div><FileCheck2 /></div>
        <div className="quote-form-steps" aria-hidden="true"><span className="active">Contact</span><i /><span>Specification</span><i /><span>Send</span></div>
        <label><span>Your name <b>*</b></span><input name="name" placeholder="Full name" autoComplete="name" required /></label>
        <label><span>Work email <b>*</b></span><input name="email" type="email" placeholder="name@company.com" autoComplete="email" required /></label>
        <label className="wide"><span>Product or material grade <b>*</b></span><input name="product" placeholder="e.g. Duplex 2205 seamless pipes" required /></label>
        <label className="wide"><span>Requirement details <b>*</b></span><textarea name="message" placeholder="Add size, schedule or class, quantity, applicable standard and delivery destination" required /></label>
        <button><span>Prepare email enquiry</span><ArrowUpRight /></button><p><CheckCircle2 /> Your details stay in your email client. Submitting opens a ready-to-send draft.</p>
      </motion.form>
    </section>
  );
}

export default function Home() {
  return <main><SmoothScroll /><Loader /><ScrollProgress /><SiteHeader home /><ScrollSequenceHero /><Standard /><AssuranceOrbit /><Products /><Industries /><Reach /><Contact /><SiteFooter /></main>;
}
