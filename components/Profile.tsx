"use client";

import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LoginOrSigup from "./LoginOrSigup";

const Menu = dynamic(() => import("@/components/Menu"), { ssr: false });

const Modal = dynamic(() => import("@/components/Modal"), {
  ssr: false,
});

const Profile = () => {
  const [openMenu, toggleMenu] = useState(false);
  const [openModal, toggleModal] = useState(false);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      const targetElement = event.target as Element;
      if (!targetElement.closest(".menu-container")) {
        toggleMenu(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="hidden md:flex items-center cursor-pointer gap-1 flex-1 justify-end menu-container">
      <div className="py-2 px-2 hover:bg-medium-gray rounded-full">
        <span className="text-sm font-semibold ">Airbnb your home</span>
      </div>

      <div className="cursor-pointer hover:bg-medium-gray rounded-full p-2">
        <MdLanguage className="w-4 h-4" />
      </div>

      <button
        className="w-[81px] h-[38px] border border-light-gray rounded-full flex items-center p-2 py-5 hover:shadow-md"
        onClick={() => toggleMenu((openMenu) => !openMenu)}
        name={"here"}
      >
        <IoIosMenu className="h-4 w-4 flex-1" />
        <FaUserCircle className="w-[30px] h-[30px] fill-dark-gray" />
      </button>

      {openMenu && <Menu toggleMenu={toggleMenu} toggleModal={toggleModal} />}

      <Modal open={openModal} toggle={toggleModal}>
        <LoginOrSigup toggle={toggleModal} />
      </Modal>
    </div>
  );
};

export default Profile;
