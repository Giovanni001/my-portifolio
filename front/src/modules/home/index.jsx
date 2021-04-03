import React from "react";
import AboutMe from "./about-me";
import Contact from "./contact";
import Footer from "./footer";
import Interests from "./interests";
import NavBar from "./navbar";
import Resume from "./resume";
import Skills from "./skills";
import Technologies from "./technologies";

function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Technologies />
      <Skills />
      <Interests />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default Home;
