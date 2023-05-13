import React from "react";

import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Contact from "../components/Contact";
import Client from "../components/Client";
import { useLocation } from "react-router-dom";

const Home = (): JSX.Element => {
  const location = useLocation();

  if (location.hash) {
    setTimeout(() => {
      document
        .getElementById(location.hash.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }

  console.log(location.hash);

  return (
    <div id="home">
      <Hero />
      <Products />
      <Services />
      <Pricing />
      <About />
      <Client />
      <Contact />
    </div>
  );
};

export default Home;
