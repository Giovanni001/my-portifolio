import React, { useState } from "react";
import service from "./service";

import Button from "../../../commom-components/button/base-button";

import ContactImage from "../../../images/contact/contact.png";
import Data from "../../../images/contact/data.png";

import { notification } from "antd";
import style from "./index.module.css";

import { ReactComponent as Email } from "../../../assets/icons/email.svg";
import { ReactComponent as Map } from "../../../assets/icons/map.svg";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSuject] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleEmailSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      subject,
      email,
      message,
    };
    try {
      setLoading(true);
      const response = await service.create(data);
      const { status } = response;
      if (status === 200) {
        openNotificationWithIcon("success");
      }
      e.target.reset();
      setLoading(false);
      return response;
    } catch (err) {
      openNotificationWithIcon("error");
      setLoading(false);
    }
    setLoading(false);
  }

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: `${
        type === "success"
          ? "Menssagem enviada com sucesso!"
          : "Não foi possivel enviar a mensagem!"
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
              <p className={style.titleInformation}>Cidade</p>
              <p className={style.descriptionInformation}>Jundiaí - SP</p>
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
            <div className={style.teste}>Me mande uma mensagem :)</div>
            <div className={style.fields}>
              <div className={style.containerFields}>
                <label htmlFor="">Nome</label>
                <input
                  type="text"
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength="255"
                />
                <label htmlFor="">Assunto</label>
                <input
                  type="text"
                  name={subject}
                  onChange={(e) => setSuject(e.target.value)}
                  maxLength="255"
                  required
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength="255"
                  required
                />
                <label htmlFor="">Mensagem</label>
                <textarea
                  className={style.textArea}
                  name={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength="500"
                  required
                ></textarea>
              </div>
            </div>
            <div className={style.image}>
              <img src={ContactImage} alt="" />
            </div>
            <div className={style.button}>
              <Button isLoading={loading} text="Enviar" color="blue" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
