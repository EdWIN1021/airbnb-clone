"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

const Menu: React.FC<{
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  toggleModal: Dispatch<SetStateAction<boolean>>;
}> = ({ toggleMenu, toggleModal }) => {
  return (
    <>
      <div className="bg-[#FFF] rounded-lg w-[200px] top-[65px] shadow-[0_0_15px_rgba(101,119,134,0.2)] absolute">
        <ul>
          <li className="block px-3 py-1.5 hover:bg-medium-gray">
            <button
              className="w-full h-full text-start"
              onClick={() => {
                toggleMenu(false);
                toggleModal(true);
              }}
            >
              Log in
            </button>
          </li>
          <li className="block px-3 py-1.5 hover:bg-medium-gray">
            <button
              className="w-full h-full text-start"
              onClick={() => {
                toggleMenu(false);
                toggleModal(true);
              }}
            >
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
