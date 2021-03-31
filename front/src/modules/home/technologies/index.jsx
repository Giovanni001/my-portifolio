import React from "react";
import Circle from "../../../commom-components/circle";

import ReactImage from "../../../images/technologies/react.png";

import Css from "../../../images/technologies/css.png";
import JavaScript from "../../../images/technologies/javascript.png";
import Html from "../../../images/technologies/html.png";

import style from "./index.module.css";

function Technologies() {
  const technologies = [
    { image: ReactImage, text: "React" },
    { image: Css, text: "Css" },
    { image: JavaScript, text: "JavaScript" },
    { image: Html, text: "Html" },
  ];

  return (
    <>
      <div className={style.title}>
        <div>Tecnologias</div>
      </div>

      <div className={style.container}>
        {technologies.map((e) => (
          <Circle image={e.image} text={e.text} />
        ))}
      </div>
    </>
  );
}

export default Technologies;
