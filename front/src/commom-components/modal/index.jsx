import React, { useState } from "react";
import { Modal as AntdModal } from "antd";

function Modal({ visible, onCancel, onOk, children }) {
  console.log(children);

  return (
    <div>
      <AntdModal visible={visible} onCancel={onCancel} onOk={onOk}>
        {children}
      </AntdModal>
    </div>
  );
}

export default Modal;
