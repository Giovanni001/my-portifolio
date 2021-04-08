import React from "react";

import style from "./index.module.css";

function Circle({ image, text, onClick, animation }) {
  return (
    <div className={style.container}>
      <div className={style.divImage}>
        <img src={image} alt="" className={style.image} />
      </div>
      <p
        onClick={onClick}
        className={animation ? style.textAnimation : style.textNormal}
      >
        {text}
      </p>
    </div>
  );
}

export default Circle;
