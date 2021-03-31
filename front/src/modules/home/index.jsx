import React from "react";
import AboutMe from "./about-me";
import Contact from "./contact";
import Interests from "./interests";
import Skills from "./skills";
import Technologies from "./technologies";

function Home() {
  return (
    <div>
      <AboutMe />
      <Technologies />
      <Skills />
      <Interests />
      <Contact />
    </div>
  );
}

export default Home;
