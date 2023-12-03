import React, { useEffect } from "react";
import Overlay from "./Overlay";
import { createPortal } from "react-dom";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return createPortal(
    <>
      <Overlay />
  

      {children}
    </>,
    document.body
  );
};

export default Modal;
