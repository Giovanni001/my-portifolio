import React from "react";
import style from "./index.module.css";

function Circle({ image, text }) {
  return (
    <div className={style.container}>
      <div className={style.divImage}>
        <img src={image} alt="" className={style.image} />
      </div>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default Circle;
