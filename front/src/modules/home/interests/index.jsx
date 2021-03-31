import React from "react";
import Card from "../../../commom-components/card";
import style from "./index.module.css";

import Image1 from "../../../images/interests/image1.png";
import Image2 from "../../../images/interests/image2.png";
import Image3 from "../../../images/interests/image3.png";

function Interests() {
  const card = [
    {
      topImage: Image1,
      centerImage: "",
      title: "",
      description:
        "Sempre tive uma enorme paixão pela área tecnologia e uma afinidade muito grande.",
      bottomText: "Área Tecnologica",
    },
    {
      topImage: Image2,
      centerImage: "",
      title: "",
      description:
        "Estou sempre criando coisas, artes e sites, possuo uma certa afinidade com Desing.",
      bottomText: "Trainee",
    },
    {
      topImage: Image3,
      centerImage: "",
      title: "",
      description:
        "Meu primeira área, a que tenho saudades e um carinho muito grande.",
      bottomText: "Área Administrativa",
    },
  ];
  return (
    <>
      <div className={style.title}>
        <p>Interesses</p>
      </div>
      <div className={style.container}>
        {card.map((e) => (
          <Card
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
    </>
  );
}

export default Interests;
