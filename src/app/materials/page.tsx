import type { Metadata } from "next";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Materials & Grades | NESCO Pipe & Tubes",
  description: "Explore NESCO stainless steel, nickel alloy, duplex and super duplex, cupro nickel and titanium material grades for industrial supply requirements.",
  alternates: { canonical: "/materials" },
};

export default function MaterialsPage() {
  return (
    <main className="inner-page alloy-directory-page">
      <SiteHeader />
      <ProductExplorer initialMode="alloy" />
      <SiteFooter />
    </main>
  );
}
