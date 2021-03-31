import React from "react";
import style from "./index.module.css";

import ContactImage from "../../../images/contact/contact.png";
import Button from "../../../commom-components/button/base-button";

function Contact() {
  return (
    <>
      <div className={style.title}>
        <p>Contato</p>
      </div>
      <form action="">
        <div className={style.mainContainer}>
          <div className={style.container}>
            <div className={style.teste}>Me mande um email :)</div>
            <div className={style.fields}>
              <label htmlFor="">Nome</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="text" />
              <label htmlFor="">Mensagem</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
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
    </>
  );
}

export default Contact;
