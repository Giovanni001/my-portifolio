import React from "react";

import style from "./index.module.css";

function GitHub() {
  return (
    <div className={style.container}>
      <div className={style.mainTitleContainer}>
        <p className={style.mainTitle}>
          Você pode encontrar esse projeto no GitHub!
        </p>
      </div>

      <div className={style.containerTitle}>
        <a
          href="https://github.com/Giovanni001/my-portifolio"
          target="_blank"
          rel="noreferrer"
        >
          Click para ir até o projeto!
        </a>
      </div>
    </div>
  );
}

export default GitHub;
