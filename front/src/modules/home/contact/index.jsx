import React, { useState } from "react";
import service from "./service";

import Button from "../../../commom-components/button/base-button";
import { notification } from "antd";

import style from "./index.module.css";

import ContactImage from "../../../images/contact/contact.png";
import Data from "../../../images/contact/data.png";

import { ReactComponent as Email } from "../../../assets/icons/email.svg";
import { ReactComponent as Map } from "../../../assets/icons/map.svg";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSuject] = useState("");

  console.log(name, email, message);

  async function handleEmailSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      subject,
      email,
      message,
    };
    try {
      const response = await service.create(data);
      const { status } = response;
      if (status === 200) {
        openNotificationWithIcon("success");
      }
      e.target.reset();
      return response;
    } catch (err) {
      openNotificationWithIcon("error");
    }
  }

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: `${
        type === "success"
          ? "Menssagem, enviada com sucesso!"
          : "Não foi possivel enviar a menssagem!"
      }`,
      duration: 6,
    });
  };
  return (
    <div id="contact">
      <div className={style.title}>
        <h2>
          <span>Contato</span>
        </h2>
      </div>
      <div className={style.mainContainerInformation}>
        <div>
          <div className={style.containerInformation}>
            <Person />
            <div>
              <p className={style.titleInformation}>Nome</p>
              <p className={style.descriptionInformation}>
                Giovanni Manganotti Ribeiro Machado
              </p>
            </div>
          </div>
          <div className={style.containerInformation}>
            <Map />
            <div>
              <p className={style.titleInformation}>Endereço</p>
              <p className={style.descriptionInformation}>
                Rua Sargento Arnaldo Mangile
              </p>
            </div>
          </div>
          <div className={style.containerInformation}>
            <Email />
            <div>
              <p className={style.titleInformation}>Email</p>
              <p className={style.descriptionInformation}>
                giovannimanganotti001@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className={style.imageInformation}>
          <img src={Data} alt="" />
        </div>
      </div>
      <form onSubmit={(e) => handleEmailSubmit(e)}>
        <div className={style.mainContainer}>
          <div className={style.container}>
            <div className={style.teste}>Me mande uma menssagem :)</div>
            <div className={style.fields}>
              <div className={style.containerFields}>
                <label htmlFor="">Nome</label>
                <input
                  type="text"
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="">Assunto</label>
                <input
                  type="text"
                  name={subject}
                  onChange={(e) => setSuject(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="">Mensagem</label>
                <textarea
                  className={style.textArea}
                  name={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className={style.image}>
              <img src={ContactImage} alt="" />
            </div>
            <div className={style.button}>
              <Button text="Enviar" color="blue" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
