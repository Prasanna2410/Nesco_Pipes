"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

export function ProductPageNav({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="product-page-nav" aria-label="On this product page">
      <span>On this page</span>
      {items.map((item) => (
        <a
          className={activeId === item.id ? "is-active" : undefined}
          href={`#${item.id}`}
          key={item.id}
          aria-current={activeId === item.id ? "location" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
