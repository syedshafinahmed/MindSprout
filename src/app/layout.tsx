import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

const lexend = Lexend({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MindSprout - Educational Toys for Kids",
    template: "%s | MindSprout - Educational Toys for Kids",
  },
  description: "Empowering the next generation of minds through fun, curiosity, and meaningful learning experiences.",
  icons: {
    icon: "/favicon.png",
  },
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
