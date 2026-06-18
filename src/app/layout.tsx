import { Lexend } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const lexend = Lexend({
  weight: ["100", "200", "400", "500", "600", "800"],
});

import type { Metadata, Viewport } from "next";

// Site-wide constants 

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";    
const SITE_NAME  = "MindSprout";
const SITE_TITLE = "MindSprout — Learning Kits for Curious Minds";

const DESCRIPTION =
  "MindSprout makes hands-on educational kits that spark curiosity in children. " +
  "Explore STEM, language, and creative learning sets — designed for kids, loved by parents.";

const OG_IMAGE = "https://i.ibb.co.com/VYHPS2cy/Screenshot-2026-06-18-125754.png";       // 1200×630 recommended
const OG_IMAGE_ALT =
  "MindSprout — colorful educational learning kits for curious kids";

const KEYWORDS = [
  "educational toys Bangladesh",
  "kids learning kits",
  "STEM toys for children",
  "শিশুদের শিক্ষামূলক খেলনা",
  "MindSprout",
  "MindSprout",
  "learning kits Dhaka",
  "creative kids kits",
  "hands-on learning",
  "educational gifts for children",
];

// Root metadata export 

export const metadata: Metadata = {
  // Base 
  metadataBase: new URL(SITE_URL),

  // Title template — page titles render as "Page Name | MindSprout"
  title: {
    default:  SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: DESCRIPTION,
  keywords:    KEYWORDS,

  // Authors / publisher 
  authors:     [{ name: "MindSprout Team", url: SITE_URL }],
  creator:     "MindSprout",
  publisher:   "MindSprout",

  // Canonical 
  alternates: {
    canonical: "/",
    languages: {
      "en-BD": "/",
      "bn-BD": "/bn",              // if/when a Bengali locale is added
    },
  },

  // Open Graph 
  openGraph: {
    type:        "website",
    url:         SITE_URL,
    siteName:    SITE_NAME,
    title:       SITE_TITLE,
    description: DESCRIPTION,
    locale:      "en_BD",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    OG_IMAGE_ALT,
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card:        "summary_large_image",
    title:       SITE_TITLE,
    description: DESCRIPTION,
    images:      [OG_IMAGE],
    // creator:  "@MindSprout",       // uncomment when you have a handle
  },

  // Robots 
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-image-preview":   "large",
      "max-snippet":         -1,
      "max-video-preview":   -1,
    },
  },


  // Icons
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any"   },
      { url: "/favicon.png", sizes: "16x16",  type: "image/png" },
      { url: "/favicon.png", sizes: "32x32",  type: "image/png" },
      { url: "/favicon.png", sizes: "192x192",type: "image/png" },
      { url: "/favicon.png", sizes: "512x512",type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Verification (fill in when you set these up) 
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "...",
    // other: { "facebook-domain-verification": "..." },
  },

  // Misc 
  category:     "education",
  classification: "Educational E-Commerce",
  referrer:     "origin-when-cross-origin",
};

// Viewport export (separate from metadata per Next.js 14+ spec) 

export const viewport: Viewport = {
  width:              "device-width",
  initialScale:       1,
  maximumScale:       5,
  themeColor:         [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f172a" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="min-h-[calc(100vh-287px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
