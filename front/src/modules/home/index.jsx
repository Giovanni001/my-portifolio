import React from "react";
import AboutMe from "./about-me";
import Contact from "./contact/";
import Footer from "./footer";
import GitHub from "./github";
import Interests from "./interests";
import NavBar from "./navbar";
import Resume from "./resume";
import Skills from "./skills";
import Technologies from "./technologies";
import RoundButton from "../../commom-components/button/round-button";

import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import SecundaryContact from "./secondary_contact";

function Home() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Interests />
      <Technologies />
      <Skills />
      <Contact />
      <SecundaryContact />
      <Resume />
      <GitHub />
      <Footer />
      <RoundButton icon={<Arrow />} />
    </div>
  );
}

export default Home;
