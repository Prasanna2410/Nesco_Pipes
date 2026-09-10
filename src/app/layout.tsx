import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import ComingSoon from "@/components/ComingSoon";
import "./globals.css";
import "lenis/dist/lenis.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coming Soon | NESCO Pipe & Tubes",
  description: "The new NESCO Pipe & Tubes website is coming soon. Contact our Mumbai team for product enquiries and quotations.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout() {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable} ${manrope.variable}`}>
      <body><ComingSoon /></body>
    </html>
  );
}
