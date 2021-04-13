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
        "Busco enfrentar os mais diversos desafios e crescer com eles, estou sempre em constante aprendizado, procuro sempre dar o meu melhor, ajudando a empresa e os colegas de trabalho",
      habilities: {
        one: "Git",
        two: "Scrum, Kanban",
        three: "React, Vue",
        four: "Java Script, Html, Css",
        five: "Azure DevOps",
        six: "Figma, Miro",
        seven: "Inglês (Intermediário)",
      },
      contact: {
        firstNumber: "Celular: (11) 93492-7114",
        secondNumber: "Celular Secundário: (11) 93456-4041",
        email: "E-mail: giovannimanganotti001@gmail.com",
        street: "Rua: Sargento Arnaldo Mangile",
        neighborhood: "Bairro: Jundiaí Mirim",
      },
      professionalHistoric1: {
        occupation: "Menor Aprendiz (Auxiliar Administrativo)",
        companyName:
          "Emulzint aditivos alimentícios indústria e comercio LTDA ( 2017- 2018)",
        description:
          "Atuava na área administrativa, era responsável por gerar relatórios, atualizar planilhas, receber e classificar notas fiscais de produtos, auxiliando na resolução de possíveis dúvidas dos colaboradores da área administrativa e industrial.",
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
          "Tecnólogo em ADS - Análise e Desenvolvimento de Sistemas - Data: Atualmente cursando",
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
