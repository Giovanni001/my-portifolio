import React, { useState } from "react";
import Circle from "../../../commom-components/circle";
import style from "./index.module.css";

import English from "../../../images/skills/english.png";
import Agility from "../../../images/skills/agility.png";
import Communication from "../../../images/skills/communication.png";
import Design from "../../../images/skills/design.png";
import Office from "../../../images/skills/office.png";
import Curiosity from "../../../images/skills/curiosity.png";
import Modal from "../../../commom-components/modal";

function Skills() {
  const [isModalVisible, setIsModalVisible] = useState(null);

  const showModal = (index) => {
    setIsModalVisible(index);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const skills = [
    { image: English, text: "Inglês", message: "Ingles é top" },
    { image: Agility, text: "Metodologias Ágeis", message: "a" },
    { image: Communication, text: "Comunicativo", message: "v" },
    { image: Design, text: "Design", message: "p" },
    { image: Office, text: "Pacote Office", message: "Ing" },
    { image: Curiosity, text: "Curioso", message: "top" },
  ];

  return (
    <div id="skills">
      <div className={style.title}>
        <h2>
          <span>Competências</span>
        </h2>
      </div>

      <div className={style.container}>
        {skills.map(({ image, text, message }, index) => {
          return (
            <div key={index}>
              <Circle
                image={image}
                text={text}
                onClick={() => showModal(index)}
              />
              <Modal
                visible={isModalVisible === index}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                {message}
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
