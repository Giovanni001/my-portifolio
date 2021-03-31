import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.css";

function Button({ text, color, className, onClick, onScroll, icon }) {
  let buttonColor;
  switch (color) {
    case "blue":
      buttonColor = style.blue;
      break;
    default: {
      buttonColor = style.blue;
    }
  }
  return (
    <div>
      <button
        onClick={onClick}
        onScroll={onScroll}
        icon={icon}
        className={`${style.button} ${buttonColor} ${className}`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  text: "",
  color: "",
};
