import React from "react";
import Layout from "../components/Layout";
import PageTop from "../components/PageTop";
import Team from "../components/Team";
import Brand from "../components/Brand";
import AboutAssoci from "../components/AboutAssoci";

const About = () => {
  return (
    <Layout>
      <PageTop pageName={"About Us"}/>
      {/* <Brand /> */}
      <Team/>
      <AboutAssoci/>

    </Layout>
  );
};

export default About;
