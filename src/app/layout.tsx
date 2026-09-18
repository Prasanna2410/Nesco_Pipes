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
      <head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga -- Keep the supplied asynchronous GTM loader in the head without adding a package. */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZM5TDVH');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZM5TDVH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
