// src/app/layout.tsx
import type { Metadata } from "next";
import "../index.css"; // Changed from output.css
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Datcarts",
  description: "Marketing website for Datcarts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
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
