'use client'

import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <nav className="navbar">
      <img src="/assets/Logo.png" alt="Datcarts Logo" className="navLogo" />
      <div className="nav-icon" onClick={() => setView(!view)}>
        <FaBars />
      </div>
      {view ? (
        <ul className="listMob">
          <Link href="/" className="navigation">
            <li>Home</li>
          </Link>
          <Link href="/about" className="navigation">
            <li>About Us</li>
          </Link>
          <Link href="/legal" className="navigation">
            <li>Legal Privacy</li>
          </Link>
          <Link href="/contact" className="navigation">
            <li>Contact Us</li>
          </Link>
          <li>
            <div className="footer-social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </li>
        </ul>
      ) : null}
      <ul className="list-desk">
        <Link href="/" className="desk-list-navigation">
          <li>Home</li>
        </Link>
        <Link href="/about" className="desk-list-navigation">
          <li>About Us</li>
        </Link>
        <Link href="/privacy-policy" className="desk-list-navigation">
          <li>Privacy Policy</li>
        </Link>
        <Link href="/terms-and-conditions" className="desk-list-navigation">
          <li>Terms and Conditions</li>
        </Link>
        <Link href="/contact" className="desk-list-navigation">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;