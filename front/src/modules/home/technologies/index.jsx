import React from "react";
import Circle from "../../../commom-components/circle";

import ReactImage from "../../../images/technologies/react.png";
import Css from "../../../images/technologies/css.png";
import JavaScript from "../../../images/technologies/javascript.png";
import Html from "../../../images/technologies/html.png";

import Git from "../../../images/technologies/git.png";
import Azure from "../../../images/technologies/azure.png";
import Python from "../../../images/technologies/python.png";
import Vegas from "../../../images/technologies/vegas.png";
import PhotoShop from "../../../images/technologies/photoshop.png";

import style from "./index.module.css";

function Technologies() {
  const technologies = [
    { image: ReactImage, text: "React" },
    { image: Css, text: "Css" },
    { image: JavaScript, text: "JavaScript" },
    { image: Html, text: "Html" },
    { image: Python, text: "Python" },
    { image: Git, text: "Git" },
    { image: Azure, text: "Azure DevOps" },
    { image: Vegas, text: "Vegas" },
    { image: PhotoShop, text: "PhotoShop" },
  ];

  return (
    <div id="habilities">
      <div className={style.title}>
        <h2>
          <span>Habilidades Técnicas</span>
        </h2>
      </div>

      <div className={style.container}>
        {technologies.map((e, index) => (
          <Circle key={index} image={e.image} text={e.text} />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
