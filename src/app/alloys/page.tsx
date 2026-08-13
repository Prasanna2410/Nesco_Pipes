import type { Metadata } from "next";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Alloy & Material Grades | NESCO Pipe & Tubes",
  description: "Explore NESCO stainless steel, nickel alloy, duplex and super duplex, cupro nickel and titanium grades for industrial supply requirements.",
};

export default function AlloysPage() {
  return (
    <main className="inner-page alloy-directory-page">
      <SiteHeader />
      <ProductExplorer initialMode="alloy" />
      <SiteFooter />
    </main>
  );
}
