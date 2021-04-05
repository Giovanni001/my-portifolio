import React, { useState } from "react";
import service from "./index";

import ContactImage from "../../../images/contact/contact.png";
import Button from "../../../commom-components/button/base-button";

import { notification } from "antd";
import style from "./index.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleEmailSubmit(e) {
    e.preventDefault();

    const data = {
      name,
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
      <form onSubmit={handleEmailSubmit}>
        <div className={style.mainContainer}>
          <div className={style.container}>
            <div className={style.teste}>Me mande uma menssagem :)</div>
            <div className={style.fields}>
              <div className={style.containerFields}>
                <label htmlFor="">Nome</label>
                <input type="text" name={name} onChange={(e) => setName(e)} />
                <label htmlFor="">Email</label>
                <input type="text" name={email} onChange={(e) => setEmail(e)} />
                <label htmlFor="">Mensagem</label>
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  name={message}
                  onChange={(e) => setMessage(e)}
                ></textarea>
              </div>
            </div>
            <div className={style.image}>
              <img src={ContactImage} alt="" />
            </div>
            <div className={style.button}>
              <Button type="submit" text="Enviar" color="blue" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
