import React, { useState } from "react";
import Button from "../base-button";
import PropTypes from "prop-types";
import style from "./index.module.css";

function RoundButton({ icon }) {
  const [scrollButtonToTop, setScrollButtonToTop] = useState(false);

  const scrollTop = function () {
    window.scrollTo(0, 0);
  };

  function handleScrollButtonToTop() {
    window.addEventListener("scroll", () => {
      const verticalScroll = window.scrollY;

      verticalScroll > 400
        ? setScrollButtonToTop(true)
        : setScrollButtonToTop(false);
    });
  }

  const roundButton = (
    <Button
      icon={icon}
      onClick={() => scrollTop()}
      onScroll={handleScrollButtonToTop()}
      className={style.roundButton}
    />
  );
  return <div>{scrollButtonToTop ? roundButton : ""}</div>;
}

export default RoundButton;

RoundButton.propTypes = {
  icon: PropTypes.object,
};
