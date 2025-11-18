'use client'

import Link from "next/link";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-left">
        <div className="footer-logo-exact">
          <img src="/assets/Logo.png" alt="Datcarts logo" className="Footer-Logo" />
        </div>
        <div className="footer-desc-exact">Revolutionizing Retail Sector</div>
      </div>
      <br />
      <div className="footer-divide" />
      <div className="footer-links">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/">Home</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li className="footer-info-text">Mettungal, Manakkapady</li>
            <li className="footer-info-text">Ernakulam, Kerala 683520</li>
            <li><a href="mailto:connectingdotstech@hotmail.com">connectingdotstech@hotmail.com</a></li>
            <li><a href="tel:+917907772742">+91 790 777 2742</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h4>Subscribe to our newsletter</h4>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-divide" />

      <div className="footer-bottom">
        <div className="footer-copyright">
          <span className="footer-highlight">© 2025 DATCARTS</span>. All rights
          reserved. Transforming retail, one cart at a time.
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/datcarts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/company/connecting-dots-tech-venture/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;