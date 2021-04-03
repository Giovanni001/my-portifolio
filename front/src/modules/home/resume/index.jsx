import React from "react";
import { pdf } from "@react-pdf/renderer";

import Pdf from "../pdf";

function Resume() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: "Giovanni",
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
        firstNumber: "",
        secondNumber: "",
        email: "",
        street: "",
        neighborhood: "",
      },
      professionalHistoric1: {
        occupation: "",
        companyName: "",
        description: "",
      },
      professionalHistoric2: {
        occupation: "",
        companyName: "",
        description: "",
      },
      educationHistoric: {
        institutionName: "",
        description: "",
        duration: "",
      },
      educationHistoric2: {
        institutionName: "",
        description: "",
        duration: "",
      },
      course: {
        courseName: "",
        description: "",
        data: "",
      },
    };
    const component = <Pdf data={data} />;

    const blob = await pdf(component).toBlob();
    const url = URL.createObjectURL(blob);

    window.open(url);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <button type="submit">Gerar</button>
      </form>
    </div>
  );
}

export default Resume;
