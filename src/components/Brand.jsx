import React from "react";
import "./Brand.css";

const Brand = () => (
  <section className="brand-section">
    <div className="brand-content">
      <h2 className="brand-title">
        <span className="brand-title-yellow">EMPOWER YOUR BRAND</span>
        <br />
        INSIDE THE STORE
      </h2>
      <p className="brand-desc">
        DATCARTS transforms in-store advertising by delivering personalized,
        dynamic content directly to shoppers. Engage customers with targeted
        messages that resonate, driving higher conversion rates and brand
        loyalty.
      </p>
    </div>
    <div className="brand-how-content">
      <div>
        <h3 className="brand-how-title">HOW IT WORKS</h3>
        <ul className="brand-how-list">
          <li>
            <span className="brand-how-dot" /> <b>Select Your Audience</b>
            <br />
            <span className="brand-how-desc">
              Define your target demographic based on shopping habits,
              demographics, and purchase history.
            </span>
          </li>
          <li>
            <span className="brand-how-dot" /> <b>Upload Your Creative</b>
            <br />
            <span className="brand-how-desc">
              Easily upload your ad creatives, ensuring they meet our
              specifications for optimal display.
            </span>
          </li>
          <li>
            <span className="brand-how-dot" /> <b>Display On DATCARTS</b>
            <br />
            <span className="brand-how-desc">
              Your ads are displayed on DATCARTS, reaching shoppers at the point
              of purchase.
            </span>
          </li>
          <li>
            <span className="brand-how-dot" /> <b>Track Performance</b>
            <br />
            <span className="brand-how-desc">
              Access detailed reports on impressions, engagement, and
              conversions to measure ROI.
            </span>
          </li>
        </ul>
      </div>
      <div className="brand-image-block">
        <img src="/assets/sidtrolly1.svg" alt="Smart Cart" className="brand-cart-img" />
        <div className="brand-success-card">
          <div className="brand-success-title">BRAND SUCCESS STORY</div>
          <div className="brand-success-desc">
            A leading beverage company increased{" "}
            <span className="brand-success-green">Sales by 20% in</span>{" "}
            participating stores by leveraging DATCARTS’s targeted advertising
            capabilities.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Brand;
