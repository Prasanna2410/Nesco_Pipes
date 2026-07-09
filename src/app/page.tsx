"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Check, Factory, FileCheck2, Globe2, Mail, MapPin, MoveRight, Phone, ShieldCheck } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import ScrollSequenceHero from "@/components/ScrollSequenceHero";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { n: "01", title: "Seamless Pipes", image: "/assets/product-universe/01-seamless-pipes.webp", href: "/stainless-steel-seamless-pipe-manufacturer-india" },
  { n: "02", title: "Welded Pipes", image: "/assets/product-universe/02-welded-pipes.webp", href: "/stainless-steel-welded-pipe-manufacturer-india" },
  { n: "03", title: "Seamless Tubes", image: "/assets/product-universe/03-seamless-tubes.webp", href: "/stainless-steel-seamless-tube-manufacturer-india" },
  { n: "04", title: "Welded Tubes", image: "/assets/product-universe/04-welded-tubes.webp", href: "/stainless-steel-welded-tube-manufacturer-india" },
  { n: "05", title: "Section Tubes", image: "/assets/product-universe/05-section-tubes.webp", href: "/stainless-steel-section-tubes-manufacturer-india" },
  { n: "06", title: "U Tubes", image: "/assets/product-universe/06-u-tubes.webp", href: "/stainless-steel-u-tubes-manufacturer-india" },
  { n: "07", title: "Corrugated Tubes", image: "/assets/product-universe/07-corrugated-tubes.webp", href: "/stainless-steel-corrugated-tubes-manufacturer-india" },
  { n: "08", title: "Fittings", image: "/assets/product-universe/08-fittings.webp", href: "/stainless-steel-fittings-manufacturer-supplier-india" },
  { n: "09", title: "Valves", image: "/assets/product-universe/09-valves.webp", href: "/stainless-steel-valves-manufacturer-india" },
  { n: "10", title: "Sheets & Plates", image: "/assets/product-universe/10-sheets-plates.webp", href: "/stainless-steel-sheet-manufacturer-india" },
];

const story = [
  { n: "01", eyebrow: "Material", title: "The right metal", body: "Premium stainless steel selected for pressure, temperature, corrosion and hygiene." },
  { n: "02", eyebrow: "Precision", title: "The exact grade", body: "From 304 and 316L to 321H and 904L—matched to the demands of your application." },
  { n: "03", eyebrow: "Proof", title: "Tested. Certified.", body: "Dimensional checks, material test certificates and third-party inspection on critical orders." },
  { n: "04", eyebrow: "Delivery", title: "Ready for the world", body: "Made in Mumbai and supplied across India, the Middle East, Asia, Europe and beyond." },
];

const industries = [
  { name: "Oil & Gas", text: "High-pressure stainless systems for aggressive flow conditions.", stat: "Up to export supply", image: "/assets/industries/01-oil-gas.webp", position: "center 48%" },
  { name: "Power Plants", text: "Heat-tolerant pipe and tube programs for utility-scale performance.", stat: "Thermal-ready", image: "/assets/industries/02-power-plants.webp", position: "center 51%" },
  { name: "Chemical", text: "Corrosion-conscious grades for process lines and controlled media.", stat: "316L to 904L", image: "/assets/industries/03-chemical.webp", position: "62% 50%" },
  { name: "Food & Pharma", text: "Clean-finish tubing, fittings and valves for hygienic production.", stat: "Sanitary flow", image: "/assets/industries/04-food-pharma.webp", position: "62% 50%" },
  { name: "Marine & Shipbuilding", text: "Reliable steel sections for salt-heavy and vibration-heavy environments.", stat: "Marine durable", image: "/assets/industries/05-marine-shipbuilding.webp", position: "center 54%" },
  { name: "Infrastructure", text: "Fast-moving stock support for fabricators, EPC and industrial buyers.", stat: "Mumbai dispatch", image: "/assets/industries/06-infrastructure.webp", position: "center 52%" },
];

function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1650);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <motion.div className="loader" initial={false} animate={{ y: done ? "-100%" : 0 }} transition={{ duration: .9, ease: [0.76, 0, 0.24, 1] }} aria-hidden="true">
      <div className="loader-mark"><span>NE</span><i /><span>SCO</span></div>
      <div className="loader-line"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.25, ease: "easeInOut" }} /></div>
      <p>Precision in motion</p>
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="page-progress" style={{ scaleY: scrollYProgress }} />;
}

function Manifesto() {
  const wrap = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".standard-word", { opacity: .12, y: 28 }, { opacity: 1, y: 0, stagger: .08, scrollTrigger: { trigger: wrap.current, start: "top 68%", end: "45% 48%", scrub: true } });
      gsap.fromTo(".standard-card", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: .12, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".standard-grid", start: "top 78%" } });
      gsap.to(".standard-core", { rotate: 18, scrollTrigger: { trigger: wrap.current, start: "top bottom", end: "bottom top", scrub: 1 } });
    }, wrap);
    return () => ctx.revert();
  }, []);
  const standards = [
    ["01", "Material selection", "Application-led grade selection for corrosion, pressure, temperature and hygiene."],
    ["02", "Controlled production", "Modern processes and experienced specialists maintain consistent pipe geometry."],
    ["03", "Verified quality", "Chemical, mechanical and dimensional checks support dependable performance."],
    ["04", "Documented delivery", "Material test certificates and inspection support are available for critical orders."],
  ];
  return (
    <section className="standard-v3" id="about" ref={wrap}>
      <div className="standard-heading">
        <div><span>/ 01 — OUR STANDARD</span><p>ISO 9001:2015 certified systems</p></div>
        <h2>{"Precision is not the finish. It is the entire process.".split(" ").map((word, index) => <span className="standard-word" key={`${word}-${index}`}>{word} </span>)}</h2>
      </div>
      <div className="standard-grid">
        <div className="standard-core">
          <i /><i /><i />
          <div><ShieldCheck /><strong>ISO</strong><span>9001:2015</span></div>
          <small className="core-note n1">MATERIAL</small><small className="core-note n2">PROCESS</small><small className="core-note n3">PROOF</small>
        </div>
        <div className="standard-cards">
          {standards.map(([number, title, copy]) => <article className="standard-card" key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p><Check /></article>)}
        </div>
      </div>
      <div className="standard-signoff"><span>Manufacturer</span><span>Supplier</span><span>Exporter</span><Link href="/quality-policy">Explore our quality policy <ArrowUpRight /></Link></div>
    </section>
  );
}

function PortalStory() {
  const section = useRef<HTMLElement>(null);
  const portal = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".portal-step");
      const tl = gsap.timeline({ scrollTrigger: { trigger: section.current, start: "top top", end: "+=3600", scrub: 1, pin: true } });
      tl.fromTo(portal.current, { scale: .55, rotate: -12 }, { scale: 1.05, rotate: 8, duration: 1.2 });
      panels.forEach((panel, i) => {
        if (i > 0) tl.to(panels[i - 1], { opacity: 0, y: -70, duration: .22 }).fromTo(panel, { opacity: 0, y: 70 }, { opacity: 1, y: 0, duration: .28 });
        tl.to(portal.current, { scale: 1.05 + i * .22, rotate: 8 + i * 14, duration: .75 }, "<");
      });
    });
    return () => mm.revert();
  }, []);
  return (
    <section className="portal-story" id="quality" ref={section}>
      <div className="portal-visual" ref={portal}><Image src="/assets/nesco-steel-portal.png" alt="Concentric precision steel tubes forming an electric blue tunnel" fill sizes="60vw" /><div className="portal-vignette" /></div>
      <div className="portal-title"><span>/ 02</span><b>THE ANATOMY<br />OF ASSURANCE</b></div>
      <div className="portal-steps">{story.map((item, i) => <article className={`portal-step s${i + 1}`} key={item.n}><small>{item.n} / 04 — {item.eyebrow}</small><h2>{item.title}</h2><p>{item.body}</p></article>)}</div>
      <div className="scroll-meter"><span>SCROLL</span><i /></div>
    </section>
  );
}

function Products() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      if (!track.current || !section.current) return;
      gsap.to(track.current, { x: () => -(track.current!.scrollWidth - window.innerWidth), ease: "none", scrollTrigger: { trigger: section.current, start: "top top", end: () => `+=${track.current!.scrollWidth}`, scrub: 1, pin: true, invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);
  return (
    <section className="products-v2" id="products" ref={section}>
      <div className="products-track" ref={track}>
        <article className="product-intro"><span>/ 03 — PRODUCT UNIVERSE</span><h2>TEN FAMILIES.<br /><em>ENDLESS</em><br />POSSIBILITIES.</h2><p>Scroll across our complete stainless steel range.</p><MoveRight /></article>
        {products.map((p, i) => <Link className={`product-panel panel-${i + 1}`} href={p.href} key={p.n} aria-label={`Explore ${p.title}`}>
          <Image className="product-panel-image" src={p.image} alt={`${p.title} by Nesco Pipe & Tubes`} fill sizes="(max-width: 900px) 100vw, 80vh" />
          <span className="product-panel-focus" aria-hidden="true" />
        </Link>)}
        <article className="product-end"><p>Can’t see your exact requirement?</p><h3>We probably<br />make it.</h3><Link href="/products">See full catalogue <ArrowUpRight /></Link></article>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="industries-v2" id="industries">
      <div className="industries-head"><span>/ 04 — WHERE IT WORKS</span><h2>BUILT FOR THE<br />SYSTEMS THAT KEEP<br /><em>INDUSTRY MOVING.</em></h2></div>
      <div className="industries-grid">
        {industries.map((item, i) => (
          <motion.article
            key={item.name}
            className="industry-card"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image className="industry-card-image" src={item.image} alt={`${item.name} stainless steel systems`} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectPosition: item.position }} />
            <div className="industry-card-shade" aria-hidden="true" />
            <small>0{i + 1} / SECTOR</small>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <span>{item.stat}</span>
          </motion.article>
        ))}
      </div>
      <div className="industries-marquee"><div>{["PRESSURE", "HEAT", "CORROSION", "FLOW", "HYGIENE", "STRENGTH", "PRESSURE", "HEAT"].map((x, i) => <span key={`${x}-${i}`}>{x}<b>✦</b></span>)}</div></div>
    </section>
  );
}

function Reach() {
  const destinations = ["India", "UAE", "Saudi Arabia", "Qatar", "Bahrain", "Kuwait", "Singapore", "Malaysia", "Canada", "Australia"];
  const stats = [["15+", "Countries supplied"], ["ISO", "9001:2015 certified"], ["24/7", "Customer support"]];
  return (
    <section className="reach-v3" id="reach">
      <div className="reach-v3-head"><span>/ 05 — GLOBAL REACH</span><div><h2>One Mumbai address.<br /><em>A global supply network.</em></h2><p>Reliable stainless steel supply for industrial buyers, fabricators and project teams across India and international markets.</p></div></div>
      <div className="reach-v3-grid">
        <motion.div className="network-map" initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: 1 }}>
          <div className="network-globe"><i /><i /><i /><i /><span className="route r1"/><span className="route r2"/><span className="route r3"/><b><MapPin />Mumbai<small>Supply hub</small></b>{[1,2,3,4,5,6].map((item) => <span className={`network-pin p${item}`} key={item}/>)}</div>
          <div className="map-caption"><Globe2 /><span>Manufactured and coordinated from Mumbai</span><small>INDIA / 18.96° N, 72.82° E</small></div>
        </motion.div>
        <div className="network-copy">
          <small>Active supply destinations</small>
          <div className="destination-list">{destinations.map((destination, index) => <motion.span key={destination} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }}>{String(index + 1).padStart(2,"0")} {destination}</motion.span>)}</div>
          <div className="network-stats">{stats.map(([number,label]) => <div key={label}><b>{number}</b><span>{label}</span></div>)}</div>
          <Link href="/products#markets">View every supply location <ArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = new FormData(e.currentTarget);
    location.href = `mailto:sales@shreeimpexalloys.com?subject=${encodeURIComponent(`Quote: ${data.get("product")}`)}&body=${encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nRequirement: ${data.get("message")}`)}`;
  }
  return (
    <section className="contact-v3" id="contact">
      <div className="contact-v3-intro">
        <span>/ 06 — START A CONVERSATION</span>
        <h2>Bring us the specification.<br /><em>We’ll shape the supply.</em></h2>
        <p>Share the grade, dimensions, quantity and delivery destination. Our team will respond with the right product route.</p>
        <div className="contact-channels">
          <a href="tel:+919167963226"><Phone /><span>Call our team<small>+91 91679 63226</small></span><ArrowUpRight /></a>
          <a href="mailto:sales@shreeimpexalloys.com"><Mail /><span>Email sales<small>sales@shreeimpexalloys.com</small></span><ArrowUpRight /></a>
          <Link href="/contact"><MapPin /><span>Mumbai office<small>6th Kumbharwada, Mumbai 400004</small></span><ArrowUpRight /></Link>
        </div>
      </div>
      <motion.form className="contact-form-v3" onSubmit={submit} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8 }}>
        <div className="form-head"><Factory /><div><small>Project inquiry</small><h3>Tell us what you need.</h3></div><FileCheck2 /></div>
        <label><span>Your name</span><input name="name" placeholder="Full name" required /></label>
        <label><span>Work email</span><input name="email" type="email" placeholder="name@company.com" required /></label>
        <label className="wide"><span>Product or grade</span><input name="product" placeholder="e.g. 316L seamless pipe" required /></label>
        <label className="wide"><span>Requirement</span><textarea name="message" placeholder="Size, schedule, quantity and delivery destination" required /></label>
        <button>Send inquiry <ArrowUpRight /></button><p>By submitting, you open an email draft with your enquiry details.</p>
      </motion.form>
    </section>
  );
}

export default function Home() {
  return <main><SmoothScroll/><Loader/><ScrollProgress/><SiteHeader home /><ScrollSequenceHero/><Manifesto/><PortalStory/><Products/><Industries/><Reach/><Contact/><SiteFooter /></main>;
}
