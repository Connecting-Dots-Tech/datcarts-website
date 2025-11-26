"use client";

import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/contact", label: "Contact Us" },
] as const;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-20 w-44 flex-shrink-0 md:h-28 md:w-56"
          aria-label="Home"
        >
          <Image
            src="/assets/Logo_03.png"
            fill
            className="object-contain object-left"
            alt="DatCarts Logo"
            priority
            sizes="(max-width: 768px) 176px, 224px"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile, shown on lg+ */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-light text-white transition-colors hover:text-green"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Shown on mobile, hidden on lg+ */}
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-center text-2xl text-white transition-colors hover:text-green focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Only renders when open */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[url('/assets/bgnav.svg')] bg-cover bg-center shadow-xl">
            <div className="flex h-full flex-col px-6 py-8">
              {/* Close button */}
              <div className="mb-8 flex justify-end">
                <button
                  onClick={closeMobileMenu}
                  className="text-2xl text-white transition-colors hover:text-green focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close menu"
                >
                  <FaXmark />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-4">
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg border border-white/80 px-6 py-3 text-center text-white transition-all hover:border-green hover:bg-green/10"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
