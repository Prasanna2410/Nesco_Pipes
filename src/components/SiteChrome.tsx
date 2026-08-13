"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { alloyCategories, productCategories } from "@/lib/catalog";

function BrandLogo() {
  return <span className="brand-crop"><Image src="/assets/nesco-logo-provided.png" width={1600} height={900} alt="NESCO Pipe & Tubes" priority /></span>;
}

type ProductGroup = { id: string; title: string; links: ReadonlyArray<readonly [string, string]> };

const productGroups: ProductGroup[] = productCategories.map((category) => ({
  id: category.id,
  title: category.title,
  links: category.items.slice(0, 5).map((item) => [item.title, `/${item.slug}`] as const),
}));

const alloyGroups: ProductGroup[] = alloyCategories.map((category) => ({
  id: category.id,
  title: category.title,
  links: category.items.slice(0, 5).map((item) => [item.title, `/${item.slug}`] as const),
}));

export function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
  };
  const currentSlug = pathname.replace(/^\//, "");
  const aboutActive = ["/about", "/quality-policy", "/certificate"].includes(pathname);
  const productsActive = pathname === "/products" || productCategories.some((category) => category.items.some((item) => item.slug === currentSlug));
  const alloysActive = pathname === "/alloys" || alloyCategories.some((category) => category.items.some((item) => item.slug === currentSlug));

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${!home ? "inner-header" : ""}`}>
      <Link className="logo" href="/" aria-label="NESCO Pipe and Tubes home"><BrandLogo /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <div className="nav-about">
          <Link className={`nav-products-trigger ${aboutActive ? "active" : ""}`} href="/about" onClick={closeMenus}>About Us <ChevronDown /></Link>
          <div className="nav-about-menu">
            <small>About NESCO</small>
            <Link href="/about" className={pathname === "/about" ? "active" : ""} onClick={closeMenus}>
              <span><b>About Us</b><small>Company profile, capabilities, values and supply approach</small></span><ArrowUpRight />
            </Link>
            <Link href="/quality-policy" className={pathname === "/quality-policy" ? "active" : ""} onClick={closeMenus}>
              <span><b>Quality Assurance</b><small>Specification, inspection and documentation control</small></span><ArrowUpRight />
            </Link>
            <Link href="/certificate" className={pathname === "/certificate" ? "active" : ""} onClick={closeMenus}>
              <span><b>Certifications &amp; Compliance</b><small>View NESCO&apos;s management-system and product credentials</small></span><ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="nav-products">
          <Link className={`nav-products-trigger ${productsActive ? "active" : ""}`} href="/products" onClick={closeMenus}>Products <ChevronDown /></Link>
          <div className="mega-menu">
            <div className="mega-intro"><small>Core product line</small><h2>Find the right industrial product by form.</h2><p>Pipes, tubes, fittings and engineered metal products arranged for faster sourcing.</p><Link href="/products" onClick={closeMenus}>View complete catalogue <ArrowRight /></Link></div>
            <div className="mega-catalog">
              {productGroups.map((group, index) => <div className="mega-column" key={group.title}>
                <Link className="mega-category" href={`/products#${group.id}`} onClick={closeMenus}><b>{String(index + 1).padStart(2, "0")}</b><span>{group.title}</span><ArrowUpRight /></Link>
                <div>{group.links.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}<ArrowUpRight /></Link>)}</div>
              </div>)}
            </div>
          </div>
        </div>
        <div className="nav-products nav-alloys">
          <Link className={`nav-products-trigger ${alloysActive ? "active" : ""}`} href="/alloys" onClick={closeMenus}>Alloy <ChevronDown /></Link>
          <div className="mega-menu mega-menu-alloys">
            <div className="mega-intro mega-intro-alloys"><small>Material & alloy range</small><h2>Start with the material your service demands.</h2><p>Stainless steel, nickel alloys, duplex, cupro nickel and titanium grades arranged for specification-led sourcing.</p><Link href="/alloys" onClick={closeMenus}>View complete alloy directory <ArrowRight /></Link></div>
            <div className="mega-catalog mega-catalog-alloys">
              {alloyGroups.map((group, index) => <div className="mega-column" key={group.title}>
                <Link className="mega-category" href={`/alloys#${group.id}`} onClick={closeMenus}><b>{String(index + 1).padStart(2, "0")}</b><span>{group.title}</span><ArrowUpRight /></Link>
                <div>{group.links.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}<ArrowUpRight /></Link>)}</div>
              </div>)}
            </div>
          </div>
        </div>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </nav>
      <Link className="quote-link" href={home ? "#contact" : "/contact"}>Request a quote <ArrowUpRight /></Link>
      <button className="menu-toggle" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={mobileOpen}>{mobileOpen ? <X /> : <Menu />}</button>
      <AnimatePresence>
        {mobileOpen ? <motion.nav className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: .35 }}>
          <div className="mobile-menu-main">
            <Link href="/" onClick={closeMenus}>Home <ArrowUpRight /></Link>
            <div className={`mobile-about ${mobileAboutOpen ? "is-open" : ""}`}>
              <button type="button" aria-expanded={mobileAboutOpen} aria-controls="mobile-about-links" onClick={() => setMobileAboutOpen((value) => !value)}>About Us <ChevronDown /></button>
              <div className="mobile-about-links" id="mobile-about-links">
                <Link href="/about" onClick={closeMenus}>About Us <ArrowUpRight /></Link>
                <Link href="/quality-policy" onClick={closeMenus}>Quality Assurance <ArrowUpRight /></Link>
                <Link href="/certificate" onClick={closeMenus}>Certifications &amp; Compliance <ArrowUpRight /></Link>
              </div>
            </div>
            <Link href="/products" onClick={closeMenus}>Products <ArrowUpRight /></Link>
            <Link href="/alloys" onClick={closeMenus}>Alloy <ArrowUpRight /></Link>
            <Link href="/contact" onClick={closeMenus}>Contact <ArrowUpRight /></Link>
          </div>
          <div className="mobile-menu-products"><small>Popular product pages</small>{productGroups.flatMap((group) => group.links.slice(0, 2)).map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}</Link>)}</div>
          <div className="mobile-menu-products mobile-menu-alloys"><small>Popular alloy grades</small>{alloyGroups.flatMap((group) => group.links.slice(0, 1)).map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}</Link>)}</div>
          <div className="mobile-menu-contact"><a href="tel:+919167963226">+91 91679 63226</a><span>Mumbai, India</span></div>
        </motion.nav> : null}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer footer-v3">
    <div className="footer-v3-grid" aria-hidden="true" />
    <div className="footer-v3-inner">
      <div className="footer-v3-main">
        <div className="footer-v3-brand">
          <BrandLogo />
          <p>NESCO Pipe &amp; Tubes is a Mumbai-based manufacturer, stockist, supplier and exporter of stainless steel, special-alloy and industrial metal products for process plants, EPC contractors, fabricators and maintenance teams.</p>
        </div>

        <nav className="footer-v3-column" aria-label="Footer product navigation">
          <small>Product range</small>
          <Link href="/products">Product Directory</Link>
          <Link href="/seamless-pipes-supplier-exporter">Pipes</Link>
          <Link href="/seamless-tubes-supplier-exporter">Tubes</Link>
          <Link href="/sheets-supplier-exporter">Sheets, Plates &amp; Coils</Link>
          <Link href="/round-bars-supplier-exporter">Bars</Link>
          <Link href="/weld-neck-flanges-supplier-exporter">Flanges</Link>
          <Link href="/elbows-supplier-exporter">Butt Weld Fittings</Link>
          <Link href="/stud-bolts-supplier-exporter">Fasteners</Link>
        </nav>

        <nav className="footer-v3-column" aria-label="Footer alloy navigation">
          <small>Alloy families</small>
          <Link href="/alloys">Alloy Directory</Link>
          <Link href="/alloys#stainless-steel-grades">Stainless Steel</Link>
          <Link href="/alloys#nickel-alloy-grades">Nickel Alloys</Link>
          <Link href="/alloys#duplex-super-duplex-grades">Duplex &amp; Super Duplex</Link>
          <Link href="/alloys#cupro-nickel-grades">Cupro Nickel</Link>
          <Link href="/alloys#titanium-grades">Titanium</Link>
        </nav>

        <nav className="footer-v3-column" aria-label="Footer company navigation">
          <small>Company</small>
          <Link href="/about">About Us</Link>
          <Link href="/quality-policy">Quality Assurance</Link>
          <Link href="/certificate">Certifications &amp; Compliance</Link>
          <Link href="/contact">Contact the Sales Desk</Link>
        </nav>
      </div>

      <div className="footer-v3-contact">
        <a href="tel:+919167963226"><Phone /><span><small>Call the supply desk</small><b>+91 91679 63226</b></span><ArrowUpRight /></a>
        <a href="mailto:sales@shreeimpexalloys.com"><Mail /><span><small>Send your enquiry</small><b>sales@shreeimpexalloys.com</b></span><ArrowUpRight /></a>
        <a href="https://maps.google.com/?q=Shop+No+4+124+T+P+Street+6th+Kumbharwada+Mumbai+400004" target="_blank" rel="noreferrer"><MapPin /><span><small>Mumbai supply office</small><b>6th Kumbharwada, Mumbai 400004</b></span><ArrowUpRight /></a>
      </div>

      <div className="footer-v3-bottom">
        <span>© 2026 NESCO Pipe &amp; Tubes. All rights reserved.</span>
        <p>Specification-led supply · India &amp; export markets</p>
        <nav aria-label="Legal navigation"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-condition">Terms &amp; Conditions</Link></nav>
      </div>
    </div>
  </footer>;
}
