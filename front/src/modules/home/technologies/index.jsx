import React, { useState } from "react";
import Circle from "../../../commom-components/circle";
import Modal from "../../../commom-components/modal";

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
  const [isModalVisible, setIsModalVisible] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState({});

  function showModal(id) {
    console.log("id ", id);
    setSelectedSkill(technologies.find((tech) => tech.id === id));
    setIsModalVisible(true);
  }

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  const technologies = [
    {
      id: 0,
      image: ReactImage,
      title: "React, meu primeiro framework!",
      text: "React",
      message:
        "React foi a primeira tecnologia que eu trabalhei, pude aprender muitas coisas com essa tecnologia, é uma biblioteca muito completa usada por diversas empresas atualmente. Vale ressaltar que esse web site foi feito usando React ^^.",
    },
    {
      id: 1,
      image: Css,
      title: "Css, uma paixão enorme por detalhes!",
      text: "Css",
      message:
        "Meu primeiro contato com programação foi front end, e logo me apaixonei por essa área, e junto com ela conheci o Css, uma linguagem de folha de estilos muito utilizada atualmente. Posso dizer que o meu ponto fraco é o perfeccionismo com as coisas, e com o Css não é diferente, dou muito importância aos pequenos detalhes e através dele, consigo usar toda a minha criatividade e vontade de criar.",
    },
    {
      id: 2,
      image: Html,
      title: "Html, o esqueleto do site!",
      text: "Html",
      message:
        "Html, uma linguagem de marcação muito utilizada atualmente, é quase que um requisito saber o básico de Html para ter uma posição no mercado de trabalho atualmente.",
    },
    {
      id: 3,
      image: JavaScript,
      title: "JavaScript, uma linguagem de programação incrível!",
      text: "JavaScript",
      message:
        "Pude ter o meu primeiro contato com JavaScript na faculdade, confesso que achei um pouco difícil no começo, mas com o tempo fui pegando o jeito.",
    },
    {
      id: 4,
      image: Python,
      title: "Python, a minha primeira linguagem!",
      text: "Python",
      message:
        "Isso mesmo, Python foi a primeira linguagem que tive contato, logo me apaixonei, pela sua facilidade que sua sintaxe passava para quem estava começando, foi uma experiência muito boa para quem estava ingressando na área. A paixão foi tanta que na própria faculdade, pude ministrar uma oficina de Python para os estudantes com mais 2 colegas, foi realmente uma experiência incrível!.",
    },
    {
      id: 5,
      image: Git,
      text: "Git",
      title: "Git, uma forma diferente de trabalhar!",
      message:
        "O meu primeiro contato com Git foi na faculdade, uma plataforma de versionamento de código incrível, pude aprender o básico na faculdade e depois a como trabalhar em equipe usando diversas plataformas, tais como: Azure, BitBuckect e GitHub.",
    },
    {
      id: 6,
      image: Azure,
      text: "Azure DevOps",
      title: "Versionamento de Código e Muito mais!",
      message:
        "Tive contato com Azure durante um bom tempo na minha vida profissional, uma plataforma de versionamento de código muito ultilizada no mercado de trabaho, adquiri a experiência utilizando a plataforma para integrar códigos e analisar relatórios, uma ferramenta muito completa.",
    },
    {
      id: 7,
      image: Vegas,
      text: "Vegas",
      title: "Cortar, Ajustar, Criar e Renderizar!",
      message:
        "Vegas foi o primeiro editor que vídeo que tive contato, uma ferramenta muito poderosa e interessante, fiz alguns trabalhos com essa ferramenta incrível.",
    },
    {
      id: 8,
      image: PhotoShop,
      text: "PhotoShop",
      title: "O Poder da Edição!",
      message:
        "Quando mais novo fazia alguns conteúdos na internet e utilizava muito o PhotoShop, uma ferramenta incrível e muito interessante, com muitas possibilidades de expressar a sua criatividade.",
    },
  ];

  return (
    <div id="habilities">
      <div className={style.title}>
        <h2>
          <span>Habilidades Técnicas</span>
        </h2>
      </div>

      <div className={style.container}>
        {technologies.map(({ image, text, id }, index) => {
          return (
            <div key={index}>
              <Circle
                animation
                image={image}
                text={text}
                onClick={() => showModal(id)}
              />
            </div>
          );
        })}
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          title={selectedSkill.title}
        >
          {selectedSkill.message}
        </Modal>
      </div>
    </div>
  );
}

export default Technologies;
