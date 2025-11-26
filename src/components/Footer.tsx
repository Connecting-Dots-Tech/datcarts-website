"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import React from "react";

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
] as const;

const CONTACT_INFO = {
  address: ["Mettungal, Manakkapady", "Ernakulam, Kerala 683520"],
  email: "connectingdotstech@hotmail.com",
  phone: "+91 790 777 2742",
} as const;

const SOCIAL_LINKS = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/datcarts/",
    label: "Instagram",
  },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/connecting-dots-tech-venture/",
    label: "LinkedIn",
  },
] as const;

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Newsletter subscription:", email);
  };

  return (
    <footer className="w-full bg-[url('/assets/footerherodesk.svg')] bg-cover bg-center pt-12 md:bg-[url('/assets/footerherodesk.svg')] max-md:bg-[url('/assets/footerheromob.svg')]">
      <div className="mx-auto flex w-full flex-col items-center">
        {/* Logo and Tagline */}
        <div className="flex w-[90%] flex-col justify-between md:w-[90%] md:flex-row">
          <div className="relative h-16 w-40">
            <Image
              src="/assets/Logo.png"
              alt="Datcarts logo"
              fill
              className="object-contain object-left"
              sizes="160px"
            />
          </div>
          <p className="mt-2 text-right text-xs font-light md:mt-0 md:text-sm max-md:text-left">
            Revolutionizing Retail Sector
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-[85%] rounded-full bg-[#474848] md:w-[90%]" />

        {/* Footer Links Grid */}
        <div className="mb-8 flex w-[85%] flex-col gap-6 md:w-[90%] md:flex-row md:justify-between md:gap-8">
          {/* Company Links */}
          <FooterColumn title="Company">
            {COMPANY_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-extralight text-white opacity-85 transition-all hover:text-green hover:opacity-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Legal Links */}
          <FooterColumn title="Legal">
            {LEGAL_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-extralight text-white opacity-85 transition-all hover:text-green hover:opacity-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn title="Contact">
            {CONTACT_INFO.address.map((line, index) => (
              <li
                key={index}
                className="text-sm font-extralight text-white opacity-85"
              >
                {line}
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm font-extralight text-white opacity-85 transition-all hover:text-green hover:opacity-100"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="text-sm font-extralight text-white opacity-85 transition-all hover:text-green hover:opacity-100"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
          </FooterColumn>

          {/* Newsletter */}
          <div className="flex w-full flex-col md:w-80">
            <h4 className="mb-6 text-base font-bold text-white">
              Subscribe to our newsletter
            </h4>
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-2 flex flex-col items-center justify-center gap-2 py-5 text-center"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                required
                className="w-full rounded-md border-none bg-[#222223] px-4 py-3 text-center text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-green px-4 py-3 text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-[85%] rounded-full bg-[#474848] md:w-[90%]" />

        {/* Footer Bottom */}
        <div className="mb-8 flex w-[85%] flex-col items-center justify-between gap-4 text-center md:w-[90%] md:flex-row md:gap-0">
          <p className="text-[10px] text-white">
            <span className="text-[#b7a221]">© 2025 DATCARTS</span>. All rights
            reserved. Transforming retail, one cart at a time.
          </p>

          {/* Social Links */}
          <div className="flex gap-1">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-full border-x border-white/20 bg-[#3f3e40] text-white transition-all hover:-translate-y-1 hover:bg-green"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Column Component
const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="min-w-[120px] max-w-[200px]">
    <h4 className="mb-6 text-base font-bold text-white">{title}</h4>
    <ul className="m-0 flex list-none flex-col gap-3 p-0">{children}</ul>
  </div>
);

export default Footer;
