"use client";

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/retailers", label: "Retailers" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact Us" },
] as const;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 w-full border-b border-white/10 transition-colors duration-300
      ${isMobileMenuOpen ? "bg-[var(--color-black)]" : "bg-black/20 backdrop-blur-md"}`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative h-16 w-40 flex-shrink-0 md:h-20 md:w-48"
        >
          <Image
            src="/assets/Logo_03.webp"
            fill
            className="object-contain object-left"
            alt="DatCarts Logo"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-light text-white/90 hover:text-[var(--color-gold-light)] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white text-2xl hover:text-[var(--color-gold-light)] transition-colors z-[60]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Panel */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm"
            onClick={closeMobileMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                closeMobileMenu();
              }
            }}
            aria-label="Close mobile menu"
          />

          {/* Menu Panel */}
          <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs 
                    bg-[var(--color-black-light)] border-l border-white/20 
                    shadow-2xl px-6 py-8 overflow-y-auto"
          >
            {/* Close Button Area (invisible but functional) */}
            <div className="mb-8 flex justify-end h-10">
              {/* Button is in the main navbar now, this is just spacing */}
            </div>

            {/* Navigation */}
            <nav className="flex-1">
              <ul className="space-y-4">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg border border-white/20 px-6 py-4 
                           text-white font-medium bg-white/5
                           hover:border-[var(--color-green)] 
                           hover:bg-[var(--color-green)]/10
                           hover:text-[var(--color-green)]
                           transition-all duration-200
                           active:scale-[0.98]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom Accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 
                      bg-gradient-to-r from-[var(--color-green)] 
                      to-[var(--color-gold)]"
            />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
