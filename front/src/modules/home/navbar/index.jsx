import React, { useState } from "react";
import style from "./index.module.css";

function NavBar() {
  const [menuToggle, setmenuToggle] = useState(false);

  const menuItens = [
    { title: "Quem eu sou", ref: "#whoAmI" },
    { title: "Interesses", ref: "#interests" },
    { title: "Habilidades", ref: "#habilities" },
    { title: "Competencias", ref: "#skills" },
    { title: "Contato", ref: "#contact" },
  ];

  function handleShowMenuToggle() {
    setmenuToggle((visible) => !visible);
  }
  return (
    <div className="">
      <div
        className={`${menuToggle ? style.sideNavMenuToggle : style.sideNave}`}
      >
        {menuItens.map(({ title, ref }, index) => (
          <div key={index}>
            <a onClick={() => handleShowMenuToggle()} href={ref}>
              {title}
            </a>
          </div>
        ))}
      </div>
      <nav>
        <div className={style.leftSide}>
          <ul className={style.itensUl}>
            {menuItens.map(({ title, ref }, index) => (
              <a key={index} href={ref}>
                {title}
              </a>
            ))}
          </ul>
        </div>
        <div className={style.containerMenuToggle}>
          <div
            onClick={() => handleShowMenuToggle()}
            className={`${
              menuToggle ? style.closeMenuToggle : style.menuToggle
            }`}
          >
            <div className={style.one}></div>
            <div className={style.two}></div>
            <div className={style.three}></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
