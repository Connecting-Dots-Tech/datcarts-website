import type { Metadata } from "next";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Datcarts",
  description: "Marketing website for Datcarts",
  metadataBase: new URL("https://datcarts.com"),
  openGraph: {
    type: "website",
    title: "Datcarts",
    description:
      "Retail adtech platform that transforms stores into measurable media channels.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VRES604RV1"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VRES604RV1');

          `}
        </Script>
        {/* Navbar is positioned absolutely, so it overlays content */}
        <Navbar />

        {/* Main content needs top padding to account for absolute navbar */}
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
