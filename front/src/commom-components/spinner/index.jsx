import React from "react";
import { Spin } from "antd";

import style from "./index.module.css";

function Spinner({ className }) {
  return (
    <div className={style.spin}>
      <Spin className={className} />
    </div>
  );
}

export default Spinner;
