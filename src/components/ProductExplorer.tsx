"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Boxes, Check, CircleDot, Minus, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { alloyCategories, materialAvailabilityMatrix, productCategories } from "@/lib/catalog";

type BrowseMode = "form" | "alloy";

type ProductExplorerProps = {
  initialMode?: BrowseMode;
};

const modes = [
  { id: "form" as const, label: "By product form", description: "Pipes, tubes, flanges and more" },
  { id: "alloy" as const, label: "By alloy grade", description: "Stainless, nickel, duplex and more" },
];

const alloyGradeCount = alloyCategories.reduce((total, category) => total + category.items.length, 0);
const availabilityColumns = [
  ["pipes", "Pipes"],
  ["tubes", "Tubes"],
  ["flanges", "Flanges"],
  ["fittings", "Butt Weld Fittings"],
  ["flat", "Sheets & Plates"],
  ["coils", "Coils"],
  ["bars", "Round Bars"],
] as const;

export function ProductExplorer({ initialMode = "form" }: ProductExplorerProps) {
  const [mode, setMode] = useState<BrowseMode>(initialMode);
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = mode === "form" ? productCategories : alloyCategories;
  const activeCategory = categories[activeIndex] ?? categories[0];
  const isAlloyDirectory = initialMode === "alloy";

  useEffect(() => {
    function selectFromHash() {
      const categoryId = window.location.hash.slice(1);
      const productIndex = productCategories.findIndex((category) => category.id === categoryId);
      if (productIndex >= 0) {
        setMode("form");
        setActiveIndex(productIndex);
        return;
      }

      const alloyIndex = alloyCategories.findIndex((category) => category.id === categoryId);
      if (alloyIndex >= 0) {
        setMode("alloy");
        setActiveIndex(alloyIndex);
      }
    }

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  function changeMode(nextMode: BrowseMode) {
    setMode(nextMode);
    setActiveIndex(0);
  }

  return (
    <section className="product-explorer" aria-labelledby="product-explorer-title">
      <div className="explorer-heading">
        <div>
          <span>{isAlloyDirectory ? "/ ALLOY DIRECTORY" : "/ PRODUCT DIRECTORY"}</span>
          <h2 id="product-explorer-title">{isAlloyDirectory ? <>Material families.<br /><em>Grades ready to source.</em></> : <>One range.<br /><em>Two ways to source.</em></>}</h2>
        </div>
        <div className="explorer-heading-copy">
          <p>{isAlloyDirectory ? "Start with the required alloy family, compare the available grades and continue to specification-led material pages prepared for industrial enquiries." : "Browse by physical product form or start with the alloy your application requires. Each path leads to clear, enquiry-ready product pages."}</p>
          <div><span><b>{String(isAlloyDirectory ? alloyCategories.length : productCategories.length).padStart(2, "0")}</b> {isAlloyDirectory ? "material families" : "product families"}</span><span><b>{alloyGradeCount}</b> alloy grades</span></div>
        </div>
      </div>

      <div className="explorer-mode-tabs" role="tablist" aria-label="Choose how to browse products">
        {modes.map((item) => (
          <button key={item.id} type="button" role="tab" aria-selected={mode === item.id} onClick={() => changeMode(item.id)}>
            {item.id === "form" ? <Boxes /> : <CircleDot />}
            <span><strong>{item.label}</strong><small>{item.description}</small></span>
          </button>
        ))}
      </div>

      <div className="explorer-workspace">
        <nav className="explorer-category-nav" aria-label={mode === "form" ? "Product-form categories" : "Alloy categories"}>
          <small>{mode === "form" ? "Core product line" : "Material families"}</small>
          {categories.map((category, index) => (
            <button key={category.id} type="button" className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)} aria-pressed={index === activeIndex}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{category.title}</span>
              <MoveRight />
            </button>
          ))}
        </nav>

        <div className="explorer-stage">
          <AnimatePresence mode="wait">
            <motion.article key={`${mode}-${activeCategory.id}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
              <div className="explorer-visual">
                <Image src={activeCategory.image} alt={activeCategory.title} fill sizes="(max-width: 900px) 100vw, 58vw" priority={activeIndex === 0} />
                <div className="explorer-visual-shade" />
                <span>{mode === "form" ? "Product form" : "Alloy family"}</span>
                <div><small>{String(activeIndex + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}</small><h3>{activeCategory.title}</h3></div>
              </div>
              <div className="explorer-detail">
                <div className="explorer-summary"><span>Overview</span><p>{activeCategory.summary}</p></div>
                <div className="explorer-products">
                  <small>{mode === "form" ? "Available products" : "Available grades"}</small>
                  <div>
                    {activeCategory.items.map((item, index) => (
                      <Link href={`/${item.slug}`} key={item.slug}>
                        <b>{String(index + 1).padStart(2, "0")}</b>
                        <span>{item.title}</span>
                        <ArrowUpRight />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <section className="material-availability" aria-labelledby="material-availability-title">
        <div className="availability-intro">
          <div>
            <span>/ PRODUCT AVAILABILITY</span>
            <h2 id="material-availability-title">One material family.<br /><em>Every essential product form.</em></h2>
          </div>
          <div className="availability-copy">
            <p>Use this client-approved matrix as a quick sourcing guide. Final supply is confirmed against the exact grade, standard, dimensions, quantity and delivery schedule.</p>
            <div className="availability-legend" aria-label="Availability legend">
              <span><Check /> Available</span>
              <span><Minus /> Rare / specification-led enquiry</span>
            </div>
          </div>
        </div>

        <div className="availability-table-wrap">
          <table className="availability-table">
            <thead>
              <tr>
                <th scope="col">Material family</th>
                {availabilityColumns.map(([, label]) => <th scope="col" key={label}>{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {materialAvailabilityMatrix.map((row) => (
                <tr key={row.family}>
                  <th scope="row"><span>{row.family}</span></th>
                  {availabilityColumns.map(([key, label]) => {
                    const status = row[key];
                    return (
                      <td key={key}>
                        <span className={`availability-status ${status}`} aria-label={`${row.family} ${label}: ${status === "available" ? "available" : "rare, enquiry required"}`}>
                          {status === "available" ? <Check /> : <Minus />}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="availability-note"><strong>Need a less common combination?</strong> Share the material grade, product form and governing standard. NESCO Pipe & Tubes will review mill and made-to-order options for your requirement.</p>
      </section>
    </section>
  );
}
