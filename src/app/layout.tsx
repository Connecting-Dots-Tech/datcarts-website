import type { Metadata } from "next";
import "../index.css";
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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
