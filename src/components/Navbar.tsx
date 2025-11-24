"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [view, setView] = useState<boolean>(false);

  const handleToggle = () => setView(!view);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setView(!view);
    }
  };

  return (
    <nav className="navbar">
      <div style={{ position: "relative", width: "220px", height: "110px" }}>
        <Image
          src="/assets/Logo_03.png"
          fill={true}
          objectFit="contain"
          alt="Company Logo"
          priority
        />
      </div>
      <button
        className="nav-icon"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-label="Toggle navigation menu"
        aria-expanded={view}
      >
        <FaBars />
      </button>
      {view && (
        <ul className="listMob">
          <li>
            <Link href="/" className="navigation">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="navigation">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="navigation">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-and-conditions" className="navigation">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link href="/contact" className="navigation">
              Contact Us
            </Link>
          </li>
          {}
          <li>
            <div className="footer-social">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/datcarts/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/connecting-dots-tech-venture/"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </li>
        </ul>
      )}
      <ul className="list-desk">
        <li>
          <Link href="/" className="desk-list-navigation">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="desk-list-navigation">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy" className="desk-list-navigation">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions" className="desk-list-navigation">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link href="/contact" className="desk-list-navigation">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
