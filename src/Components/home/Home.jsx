import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Test from "./testiomonal/Test";

function Home() {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
    </div>
  );
}

export default Home;
