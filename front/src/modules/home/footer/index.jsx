import React from "react";
import style from "./index.module.css";

import Facebook from "../../../images/footer/facebook.png";
import Linkedin from "../../../images/footer/linkedin.png";
import GitHub from "../../../images/footer/github.png";

const socialMidias = [
  {
    name: Facebook,
    alt: "Facebook Link",
    link: "https://www.facebook.com/giovanny.ribeiro.75",
  },
  {
    name: Linkedin,
    alt: "Linkedin Link",
    link: "https://www.linkedin.com/in/giovanni-manganotti-47096716a/",
  },
  { name: GitHub, alt: "GitHub Link", link: "https://github.com/Giovanni001" },
];

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Redes Sociais</p>
      </div>
      <div className={style.topDiv}>
        {socialMidias.map(({ name, alt, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noreferrer">
            <img src={name} alt={alt} className={style.socialMidiaStyle} />
          </a>
        ))}
      </div>
      <div className={style.bottomDiv}>
        <p>© All rights reserved. Developed by Giovanni Manganotti.</p>
      </div>
    </div>
  );
}

export default Footer;
