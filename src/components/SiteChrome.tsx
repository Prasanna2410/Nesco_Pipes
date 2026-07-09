"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function BrandLogo() {
  return <span className="brand-crop"><Image src="/assets/nesco-logo.jpg" width={1280} height={720} alt="NESCO Pipe & Tubes" priority /></span>;
}

const mainNav = [
  { label: "Company", href: "/about" },
  { label: "Quality", href: "/quality-policy" },
  { label: "Certificates", href: "/certificate" },
  { label: "Global Supply", href: "/products#markets" },
  { label: "Contact", href: "/contact" },
];

type ProductGroup = { title: string; links: ReadonlyArray<readonly [string, string]> };

const productGroups: ProductGroup[] = [
  { title: "Pipes & Tubes", links: [["Seamless Pipes", "/stainless-steel-seamless-pipe-manufacturer-india"], ["Welded Pipes", "/stainless-steel-welded-pipe-manufacturer-india"], ["Seamless Tubes", "/stainless-steel-seamless-tube-manufacturer-india"], ["Welded Tubes", "/stainless-steel-welded-tube-manufacturer-india"]] },
  { title: "Flat Products", links: [["Sheets", "/stainless-steel-sheet-manufacturer-india"], ["Plates", "/stainless-steel-plate-manufacturer-india"], ["Coils & Strips", "/stainless-steel-coils-strips-manufacturer-india"], ["Rods", "/stainless-steel-rod-manufacturer-supplier-india"]] },
  { title: "Flow Components", links: [["Valves", "/stainless-steel-valves-manufacturer-india"], ["Fittings", "/stainless-steel-fittings-manufacturer-supplier-india"], ["Fasteners", "/fasteners-manufacturer-india"], ["Unions & Clamps", "/stainless-steel-tc-clamp-manufacturer-india"]] },
];

export function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
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

  const closeMenus = () => { setMobileOpen(false); setProductsOpen(false); };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${!home ? "inner-header" : ""}`}>
      <Link className="logo" href="/" aria-label="NESCO Pipe and Tubes home"><BrandLogo /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>Company</Link>
        <div className={`nav-products ${productsOpen ? "open" : ""}`}>
          <button type="button" onClick={() => setProductsOpen((value) => !value)} aria-expanded={productsOpen}>Products <ChevronDown /></button>
          <div className="mega-menu">
            <div className="mega-intro"><small>Complete product universe</small><h2>Stainless systems for demanding industries.</h2><Link href="/products" onClick={closeMenus}>Explore all 140+ product and supply pages <ArrowRight /></Link></div>
            {productGroups.map((group) => <div className="mega-column" key={group.title}><small>{group.title}</small>{group.links.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}<ArrowUpRight /></Link>)}</div>)}
          </div>
        </div>
        {mainNav.slice(1).map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>)}
      </nav>
      <Link className="quote-link" href={home ? "#contact" : "/contact"}>Request a quote <ArrowUpRight /></Link>
      <button className="menu-toggle" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={mobileOpen}>{mobileOpen ? <X /> : <Menu />}</button>
      <AnimatePresence>
        {mobileOpen ? <motion.nav className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: .35 }}>
          <div className="mobile-menu-main"><Link href="/" onClick={closeMenus}>Home <ArrowUpRight /></Link><Link href="/about" onClick={closeMenus}>Company <ArrowUpRight /></Link><Link href="/products" onClick={closeMenus}>Products <ArrowUpRight /></Link><Link href="/quality-policy" onClick={closeMenus}>Quality <ArrowUpRight /></Link><Link href="/certificate" onClick={closeMenus}>Certificates <ArrowUpRight /></Link><Link href="/contact" onClick={closeMenus}>Contact <ArrowUpRight /></Link></div>
          <div className="mobile-menu-products"><small>Popular product pages</small>{productGroups.flatMap((group) => group.links.slice(0, 2)).map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}</Link>)}</div>
          <div className="mobile-menu-contact"><a href="tel:+919167963226">+91 91679 63226</a><span>Mumbai, India</span></div>
        </motion.nav> : null}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-brand"><BrandLogo /><p>ISO 9001:2015 certified stainless steel manufacturer, supplier and exporter based in Mumbai.</p></div>
    <div><small>Company</small><Link href="/about">About</Link><Link href="/quality-policy">Quality policy</Link><Link href="/certificate">Certificates</Link></div>
    <div><small>Products</small><Link href="/products">Full catalogue</Link><Link href="/stainless-steel-seamless-pipe-manufacturer-india">Seamless pipes</Link><Link href="/stainless-steel-valves-manufacturer-india">Valves</Link></div>
    <div><small>Contact</small><a href="tel:+919167963226">+91 91679 63226</a><a href="mailto:sales@shreeimpexalloys.com">sales@shreeimpexalloys.com</a><Link href="/contact">Mumbai office</Link></div>
    <div className="footer-bottom"><span>© 2026 NESCO Pipe & Tubes</span><Link href="/privacy-policy">Privacy</Link><Link href="/terms-condition">Terms</Link></div>
  </footer>;
}
