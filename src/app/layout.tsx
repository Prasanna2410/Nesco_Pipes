import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NESCO Pipe & Tubes | Stainless Steel & Alloy Products",
  description: "NESCO Pipe & Tubes supplies pipes, tubes, sheets, plates, coils, bars, flanges, fittings, fasteners, instrumentation fittings and valves from Mumbai.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
