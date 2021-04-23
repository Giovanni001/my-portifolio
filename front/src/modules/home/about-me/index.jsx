import React from "react";

import mainImage from "../../../images/mainImage.png";

import me from "../../../images/me/me.png";

import style from "./index.module.css";

const { DateTime } = require("luxon");

function AboutMe() {
  let dt = DateTime.now();
  let f = { month: "long", day: "numeric" };
  let date = dt.setLocale("pt-BR").toLocaleString(f);
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
            Jovem profissional com uma paixão enorme em aprender coisas novas e
            desafiadoras
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
            <p className={style.letterText1}>
              Olá, Me chamo Giovanni Manganotti, tenho 20 anos e moro em
              Jundiaí. Sou um jovem estudante na área de Tecnologia, atualmente
              cursando Análise e Desenvolvimento de Sistemas na Fatec de
              Jundiaí. Desde de pequeno sempre fui uma pessoa curiosa, sempre
              buscando aprender coisas novas e desafios contantes.
            </p>
            <p className={style.letterText2}>
              O meu maior diferencial é a minha persistência e a minha
              capacidade de sempre dar o meu melhor em tudo o que faço, desde as
              coisas mais simples até as mais complexas, mesmo não tendo
              conhecimento em algo em um primeiro momento, eu busco aprender e
              me informar. Sempre realizando muito networking com o objetivo de
              fazer novos amigos e aprender coisas novas.
            </p>
            <p className={style.letterTitle}>MEU PROPÓSITO</p>
            <div className={style.hr}>
              <hr className={style.styleHr} />
            </div>
            <p className={style.letterText2}>
              Tenho como propósito, ajudar o maior numero de pessoas durante a
              minha caminhada para o sucesso, deixar o melhor que tenho de mim
              com elas para que um dia elas se lembrem quem foi Giovanni
              Manganotti Ribeiro Machado.
            </p>
            {/* <div className={style.bottomText}>
              <p className={style.bottomTextStyle}>
                Estou em busca de uma oportunidade, Posso fazer parte do seu
                time?
              </p>
            </div> */}
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
