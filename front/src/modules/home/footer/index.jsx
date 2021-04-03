import React from "react";
import style from "./index.module.css";

import Facebook from "../../../images/footer/facebook.png";
import Linkedin from "../../../images/footer/linkedin.png";
import GitHub from "../../../images/footer/github.png";

const images = [
  { name: Facebook, alt: "", link: "" },
  { name: Linkedin, alt: "", link: "" },
  { name: GitHub, alt: "", link: "" },
];

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Redes Sociais</p>
      </div>
      <div className={style.topDiv}>
        {images.map(({ name, alt }) => (
          <img src={name} alt={alt} />
        ))}
        <img src="" alt="" />
      </div>
      <div className={style.bottomDiv}>
        <p>© All rights reserved. Developed by Giovanni Manganotti.</p>
      </div>
    </div>
  );
}

export default Footer;
