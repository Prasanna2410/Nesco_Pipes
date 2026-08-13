"use client";

import Link from "next/link";
import { ArrowUpRight, Boxes, CircleDot } from "lucide-react";
import { useState } from "react";
import { alloyCategories, productCategories } from "@/lib/catalog";

export function ProductCategorySidebar({ currentSlug }: { currentSlug: string }) {
  const currentPageIsAlloy = alloyCategories.some((category) => category.items.some((item) => item.slug === currentSlug));
  const [browseMode, setBrowseMode] = useState<"products" | "alloys">(currentPageIsAlloy ? "alloys" : "products");
  const browsingAlloys = browseMode === "alloys";
  const categories = browsingAlloys ? alloyCategories : productCategories;
  const itemCount = categories.reduce((total, category) => total + category.items.length, 0);
  const directoryHref = browsingAlloys ? "/alloys" : "/products";

  return (
    <aside className={`product-category-sidebar ${browsingAlloys ? "alloy-category-sidebar" : ""}`} aria-label={browsingAlloys ? "Browse alloy families" : "Browse product categories"}>
      <div className="product-sidebar-heading">
        <small>{browsingAlloys ? "Alloy explorer" : "Product explorer"}</small>
        <strong>{browsingAlloys ? "Browse materials and grades" : "Browse the complete range"}</strong>
        <div className="product-sidebar-switch" role="group" aria-label="Choose sidebar catalogue">
          <button type="button" aria-pressed={!browsingAlloys} onClick={() => setBrowseMode("products")}>
            <Boxes aria-hidden="true" />
            <span>By products</span>
          </button>
          <button type="button" aria-pressed={browsingAlloys} onClick={() => setBrowseMode("alloys")}>
            <CircleDot aria-hidden="true" />
            <span>By alloys</span>
          </button>
        </div>
        <div className="product-sidebar-meta">
          <span><b>{String(categories.length).padStart(2, "0")}</b> {browsingAlloys ? "Families" : "Categories"}</span>
          <span><b>{String(itemCount).padStart(2, "0")}</b> {browsingAlloys ? "Grades" : "Products"}</span>
        </div>
        <Link href={directoryHref}>View directory <ArrowUpRight /></Link>
      </div>

      <div className="product-sidebar-group">
          <small>{browsingAlloys ? "Material families" : "Product categories"}</small>
          {categories.map((category, categoryIndex) => {
            const isCurrentCategory = category.items.some((item) => item.slug === currentSlug);
            return (
              <details key={`${category.id}-${currentSlug}`} open={isCurrentCategory}>
                <summary>
                  <span>{String(categoryIndex + 1).padStart(2, "0")}</span>
                  <b>{category.title}</b>
                  <i aria-hidden="true" />
                </summary>
                <div>
                  {category.items.map((item) => (
                    <Link className={item.slug === currentSlug ? "is-current" : undefined} href={`/${item.slug}`} key={item.slug} aria-current={item.slug === currentSlug ? "page" : undefined}>
                      <span>{item.title}</span>
                      <ArrowUpRight />
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
      </div>
    </aside>
  );
}
