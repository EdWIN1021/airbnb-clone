"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import Overlay from "./Overlay";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, open, toggle }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return createPortal(
    <>
      {open && (
        <>
          <Overlay toggle={toggle} />
          {children}
        </>
      )}
    </>,
    document.body
  );
};

export default Modal;
