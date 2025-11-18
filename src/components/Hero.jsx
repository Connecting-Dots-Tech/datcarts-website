import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-overlay"></div>
      <div className="hero-left">
        <h1 className="hero-title">REVOLUTIONIZING RETAIL SECTOR</h1>
        <p className="hero-description">
          Enhancing Shopping Boosting Efficiency Driving Profit
        </p>
        <img src="/assets/cart.png" alt="Shopping Cart" className="hero-cart-img" />
      </div>
    </div>
  );
};

export default Hero;
