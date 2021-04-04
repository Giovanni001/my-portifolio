import React from "react";
import style from "./index.module.css";

function Card({
  topImage,
  centerImage,
  title,
  description,
  bottomText,
  className,
  marginBottom,
}) {
  return (
    <div className={style.mainContainer}>
      <div className={`${style.container} ${marginBottom} ${className}`}>
        <div className={`${style.topDiv} ${style.image}`}>
          <img src={topImage} alt="" />
          {centerImage === "" ? (
            ""
          ) : (
            <div className={style.meStyle}>
              <img src={centerImage} alt="" className={style.me} />
            </div>
          )}
        </div>
        <div className={style.text}>
          <div className={style.containerTitle}>
            <p className={style.title}>{title}</p>
          </div>
          <div className={style.containerDescription}>
            <p className={style.description}>{description}</p>
          </div>
        </div>
        <div className={style.teste}>
          <div className={style.bottom}>
            <p className={style.bottomText}>{bottomText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
