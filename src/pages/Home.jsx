import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Brand from "../components/Brand";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <Features />
      {/* <Team /> */}
      <Footer />
    </div>
  );
};

export default Home;
