import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NESCO Pipe & Tubes | Precision Stainless Steel",
  description: "Premium NESCO Pipe & Tubes website with animated stainless steel product stories, quality systems and full product coverage.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
