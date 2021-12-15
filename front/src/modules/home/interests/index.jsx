import React from "react";
import Card from "../../../commom-components/card";
import style from "./index.module.css";

import Image1 from "../../../images/interests/image1.png";
import Image2 from "../../../images/interests/image2.png";
import Image3 from "../../../images/interests/image3.png";

function Interests() {
  console.log("%c Olá!", "color: red; font-size: 30px;");
  const card = [
    {
      topImage: Image1,
      centerImage: "",
      title: "",
      description:
        "Sempre tive uma enorme paixão por Marketing Digital e uma afinidade muito grande.",
      bottomText: "Marketing Digital",
    },
    {
      topImage: Image2,
      centerImage: "",
      title: "",
      description:
        "Gerenciar o trafego pago seria algo realmente incrível e desafiador. ",
      bottomText: "Analista de Trafego",
    },
    {
      topImage: Image3,
      centerImage: "",
      title: "",
      description:
        "Uma área incrível que envolve muita análise e muitos desafios constantes.",
      bottomText: "Analista de Web Analytics",
    },
  ];
  return (
    <div id="interests">
      <div className={style.title}>
        <h2>
          <span>Interesses</span>
        </h2>
      </div>
      <div className={style.container}>
        {card.map((e, index) => (
          <Card
            key={index}
            topImage={e.topImage}
            centerImage={e.centerImage}
            title={e.title}
            description={e.description}
            bottomText={e.bottomText}
            className=""
            marginBottom={style.marginBottom}
          />
        ))}
      </div>
    </div>
  );
}

export default Interests;
