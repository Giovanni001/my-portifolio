import React, { useState } from "react";
import style from "./index.module.css";

function NavBar() {
  const [menuToggle, setmenuToggle] = useState(false);

  const menuItens = [
    { title: "Quem eu sou", ref: "#whoAmI" },
    { title: "Habilidades", ref: "#habilities" },
    { title: "Competencias", ref: "#skills" },
    { title: "Interesses", ref: "#interests" },
    { title: "Contato", ref: "#contact" },
  ];

  function handleShowMenuToggle() {
    setmenuToggle((visible) => !visible);
  }
  return (
    <div>
      <div className={menuToggle ? style.sideNavMenuToggle : style.sideNave}>
        {menuItens.map(({ title, ref }) => (
          <a onClick={() => handleShowMenuToggle()} href={ref}>
            {title}
          </a>
        ))}
      </div>
      <nav>
        <div className={style.leftSide}>
          <ul className={style.itensUl}>
            {menuItens.map((e) => (
              <li>{e.title}</li>
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
