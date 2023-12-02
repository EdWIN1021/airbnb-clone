import React, { useEffect } from "react";
import Overlay from "./Overlay";
import { createPortal } from "react-dom";
import { IoIosClose } from "react-icons/io";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return createPortal(
    <>
      <Overlay />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-[#fff] w-[568px] max-w-[568px] rounded-lg">
        <IoIosClose className="h-8 w-8 absolute top-4 left-3" />
        <div className="border-b border-light-gray flex items-center h-[64px]">
          <p className="text-[16px] mx-auto font-bold">Log in or sign up</p>
        </div>
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;
