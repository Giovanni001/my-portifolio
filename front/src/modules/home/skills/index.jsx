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
  const [teste, setTeste] = useState(null);

  const showModal = (id) => {
    setIsModalVisible(id);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const skills = [
    {
      image: Agility,
      text: "Metodologias Ágeis",
      message:
        "Um conceito muito importante que qualquer organização usar no seu dia-a-dia, tendo com mais aparição em empresas de desenvolvimento. Tenho experiência em Scrum e Kanban, tendo desenvolvido sistemas usando essas duas estratégias.",
      title: "O Segredo para qualquer projeto dar certo!",
      id: 0,
    },
    {
      image: Design,
      text: "Figma",
      message:
        "Desde sempre me vejo no figma criando artes e outras diversas coisas. O figma foi primeira ferramente de design que eu tive contato, uma ferramenta muito completa e bem estruturada, a vale ressaltar que esse website foi prototipado inicialmente no figma ^^.",
      title: "Criar, Aprender e Se Divertir!",
      id: 1,
    },
    {
      image: Office,
      text: "Pacote Office",
      message:
        "Nos dias atuais se tornou indispensavel um profissional de qualquer area não saber lidar com essas três ferramentas, ferramentas indispensaveis para muitas organizações no seu dia-a-dia. Considero que possuo um nivel bom nessas três ferramentas.",
      title: "Word, Excel e Power-Point!",
      id: 2,
    },
    {
      image: English,
      text: "Inglês",
      message:
        "Desde pequeno sempre quis aprender uma lingua nova, logo começei com o inglês, como não tinha condições para ir em uma escola particular, tive que me virar e aprender sozinho, tenho muito a aprender ainda mas considero meu nivel de inglês intermediário.",
      title: "Yes I Speak!",
      id: 4,
    },

    {
      image: Communication,
      text: "Comunicativo",
      message:
        "A base para qualquer profissional seja em qualquer area é a comunicação. Considero que tenho uma boa comunicação, sempre soube lidar muito bem com as pessoas ao meu redor e a como me expressar de forma clara e objetiva.",
      title: "Comunicação, um pilar básico e extremamente importante!",
      id: 3,
    },
    {
      image: Curiosity,
      text: "Curioso",
      message:
        "Sempre fui uma pessoa muito curiosa no sentido de aprender coisas novas, estou sempre pesquizando novas ferramentas, novos cursos para realizar e novos aprendizados, seja lugares físicos ou virtuais, estou sempre acompanhando as ultimas noticias do mundo.",
      title: "A curiosidade atrai o leigo, e o torna um perito!",
      id: 5,
    },
  ];

  return (
    <div id="skills">
      <div className={style.title}>
        <h2>
          <span>Competências</span>
        </h2>
      </div>

      <div className={style.container}>
        {skills.map(({ image, text, message, id, title }, index) => {
          return (
            <div key={index}>
              <Circle
                image={image}
                text={text}
                animation
                onClick={() => showModal(id)}
              />
              <Modal
                visible={isModalVisible === id}
                onOk={handleOk}
                onCancel={handleCancel}
                title={title}
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
