import React from "react";
import Circle from "../../../commom-components/circle";
import style from "./index.module.css";

import English from "../../../images/skills/english.png";
import Agility from "../../../images/skills/agility.png";
import Communication from "../../../images/skills/communication.png";
import Design from "../../../images/skills/design.png";
import Office from "../../../images/skills/office.png";
import Curiosity from "../../../images/skills/curiosity.png";

function Skills() {
  const images = [
    { image: English, text: "Inglês" },
    { image: Agility, text: "Metodologias Ágeis" },
    { image: Communication, text: "Comunicativo" },
    { image: Design, text: "Design" },
    { image: Office, text: "Pacote Office" },
    { image: Curiosity, text: "Curioso" },
  ];
  return (
    <>
      <div className={style.title}>
        <p>Competências</p>
      </div>

      <div className={style.container}>
        {images.map((e) => (
          <Circle image={e.image} text={e.text} />
        ))}
      </div>
    </>
  );
}

export default Skills;
