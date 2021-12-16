import React from 'react'
import { Link } from 'react-router-dom'
import style from "./index.module.css";


import { ReactComponent as Whatsapp } from "../../../assets/icons/whatsapp.svg";
import { ReactComponent as Phone } from "../../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../../assets/icons/email.svg";


function SecundaryContact() {
    return (
        <>
            <div id="contact"></div>

            <div className={style.mainContainer}>
                <div className={style.container}>
                    <p className={style.titleInformation}>Entre em contato comigo:</p>
                </div>
                <div className={style.container}>

                    <div className={style.icons}>
                        <div style={{ cursor: "pointer" }}>
                            <a href="https://api.whatsapp.com/send?phone=5511934927114" target="_blank"><Whatsapp /></a>
                        </div>

                        <div style={{ cursor: "pointer" }}>
                            <a href="tel:+5511934927114" target="_blank"><Phone /></a>
                        </div>

                        <div style={{ cursor: "pointer" }}>
                            <a href="mailto:contato@ffhigiene.com.br" target="_blank"><Email /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default SecundaryContact
