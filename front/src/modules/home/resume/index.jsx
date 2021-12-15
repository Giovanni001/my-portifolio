import React, { useState } from "react";
import Button from "../../../commom-components/button/base-button";
import { pdf } from "@react-pdf/renderer";

import style from "./index.module.css";
import Pdf from "../pdf";

function Resume() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: "Giovanni Manganotti Ribeiro Machado",
      age: "20",
      professionalObjectives:
        "Estou em busca de uma posição como Analista de Marketing, para desenvolver as minhas habilidades e coloca-las em prática em prol da empresa.",
      habilities: {
        one: "Premiere",
        two: "Scrum, Kanban",
        three: "WordPress",
        four: "Java Script, Html, Css",
        five: "Google Analytics",
        six: "Figma, Miro, Canva, Photoshop",
        seven: "Inglês (Intermediário)",
      },
      contact: {
        firstNumber: "Celular: (11) 93492-7114",
        secondNumber: "Celular Secundário: (11) 93456-4041",
        email: "E-mail: giovannimanganotti001@gmail.com",
        street: "Rua: Sargento Arnaldo Mangile",
      },
      professionalHistoric1: {
        occupation: "Auxiliar Administrativo",
        companyName:
          "FF Higiene Profissional (Ago 2021 até o momento)",
        description:
          "Criação das mídias sociais da empresa do zero '\n'Implementação e Acompanhamento do Google Analytics, Criação e Gerenciamento do Calendário Editorial'\n'Gerenciamento das mídias sociais'\n'Criação e edição de conteúdo para as mídias sociais, usando tecnologias da atualidade como Figma e Adobre Premiere'\n'Implementação do Google Bussiness '\n'Gerenciamento do site da empresa usando WordPress.",
      },

      professionalHistoric2: {
        occupation: "Desenvolvedor (Estágio)",
        companyName: "Masti Tecnologia ( 2019- 2020)",
        description:
          "Atuava na área de desenvolvimento de softwares: Tinha como tarefa desenvolver aplicações em geral para empresas de médio/pequeno e grande porte. Organizava reuniões com os colaboradores e auxiliava na realização de testes de qualidade (QA). Desenvolvia relatórios e ajudava na gestão da equipe.",
      },


      educationHistoric1: {
        institutionName:
          "Faculdade de Tecnologia - Fatec Deputado Ary Fossem Jundiaí",
        description:
          "Tecnólogo em Análise e Desenvolvimento de Sistemas - Data: 2017 - 2021",
      },
      educationHistoric2: {
        institutionName: "Data Company",
        description:
          "Aprendiz de Informática e Hardware e Redes ( 2013 - 2014) Windows-Word-Excel-PowerPoint-Internet-Hardware- Redes",
        duration: "",
      },
    };

    const component = <Pdf data={data} />;
    setLoading(true);
    const blob = await pdf(component).toBlob();
    setLoading(false);
    const url = URL.createObjectURL(blob);

    window.open(url);
  };
  return (
    <div className={style.container}>
      <p className={style.title}>
        Caso preferir, você pode visualizar o meu curriculo :)
      </p>
      <form action="" onSubmit={handleSubmit}>
        <Button isLoading={loading} type="submit" coloor="blue" text="Gerar" />
      </form>
    </div>
  );
}

export default Resume;
