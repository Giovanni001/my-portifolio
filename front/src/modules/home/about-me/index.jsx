import React from "react";

import mainImage from "../../../images/mainImage.png";
import me from "../../../images/me/me.png";

import style from "./index.module.css";

const { DateTime } = require("luxon");

function AboutMe() {
  let dt = DateTime.now();
  let f = { month: "long", day: "numeric" };
  let date = dt.setLocale("pt-BR").toLocaleString(f); //=> 'September 14'
  let hour = dt.hour;
  let minute = dt.minute;
  let year = dt.year;

  return (
    <div id="whoAmI">
      <div className={style.container}>
        <img className={style.image} src={mainImage} alt="" />
        <div className={style.containerImage}>
          <img src={me} alt="" className={style.me} />
        </div>
        <div className={style.title}>
          <h1>Giovanni</h1>
        </div>
        <div className={style.description}>
          <p className={style.descriptionStyle}>
            Jovem profissional com uma paixão enorme pela área de Tecnologia
          </p>
        </div>
        <div className={style.containerPresentationLetter}>
          <div className={style.presentationLetter}>
            <p className={style.letterTitle}>CARTA DE APRESENTAÇÃO</p>
            <div className={style.hr}>
              <hr className={style.styleHr} />
            </div>
            <p
              className={style.data}
            >{`${date} de ${year} - ${hour}:${minute}`}</p>
            <p className={style.letterText}>
              Olá, Me chamo Giovanni Manganotti, tenho 20 anos e moro em
              Jundiaí. Sou um jovem estudante na area de Tecnologia, atualmente
              cursando Analise e Desenvolvimento de Sistemas na Fatec de
              Jundiaí. Desde de pequeno sempre fui curioso, sempre buscando
              aprender coisas novas cada vez mais e mais, e ao crescer isso nao
              mudou.Estou sempre evoluindo e aprendendo a cada dia mais seja com
              meus acertos ou com meus erros.
            </p>
            <p className={style.letterTitle}>MEU PROPÓSITO</p>
            <div className={style.hr}>
              <hr className={style.styleHr} />
            </div>
            <p className={style.letterText}>
              Tenho como propósito, ajudar o maior numero de pessoas durante a
              minha caminhada, deixar o melhor que tenho de mim com elas para
              que um dia elas se lembrem quem foi Giovanni Manganotti Ribeiro
              Machado.
            </p>
            <div className={style.bottomText}>
              <p className={style.bottomTextStyle}>
                Estou em busca de uma oportunidade, Posso fazer parte do seu
                time?
              </p>
            </div>
            <div className={style.hireMe}>
              <p className={style.hireMeStyle}>#emBuscaDeNovosDesafios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
