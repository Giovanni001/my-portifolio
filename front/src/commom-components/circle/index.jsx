import React from "react";

import style from "./index.module.css";

function Circle({ image, text, onClick }) {
  return (
    <div className={style.container}>
      <div className={style.divImage}>
        <img src={image} alt="" className={style.image} />
      </div>
      <p onClick={onClick} className={style.textAnimation}>
        {text}
      </p>
    </div>
  );
}

export default Circle;
