import React from "react";
import { Modal as AntdModal } from "antd";

function Modal({ visible, onCancel, onOk, children, title }) {
  return (
    <div>
      <AntdModal
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        title={title}
      >
        {children}
      </AntdModal>
    </div>
  );
}

export default Modal;
