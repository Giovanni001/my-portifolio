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
                        <div style={{ marginRight: "30px", cursor: "pointer" }}>

                            <a href="https://api.whatsapp.com/send?phone=5511934927114" target="_blank"><Whatsapp /></a>


                        </div>
                        <div style={{ marginRight: "30px", cursor: "pointer" }}>
                            <Phone />
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <Email />
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default SecundaryContact
