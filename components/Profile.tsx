"use client";

import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import Menu from "./Menu";
import { useState } from "react";
import LoginOrSigup from "./LoginOrSigup";

const Profile = () => {
  const [openMenu, toggleMenu] = useState(false);
  const [openModal, toggleModal] = useState(false);

  return (
    <div className="flex items-center space-x-4 cursor-pointer">
      <div className="px-3 py-2 hover:bg-medium-gray rounded-full">
        <span className="text-sm font-semibold ">Airbnb your home</span>
      </div>

      <div className="cursor-pointer hover:bg-medium-gray rounded-full p-2">
        <MdLanguage className="w-4 h-4" />
      </div>

      <button
        className="w-[81px] h-[38px] border border-light-gray rounded-full flex items-center p-2 hover:shadow-md"
        onClick={() => toggleMenu((openMenu) => !openMenu)}
      >
        <IoIosMenu className="h-4 w-4 flex-1" />
        <FaUserCircle className="w-[30px] h-[30px] fill-dark-gray" />
      </button>

      {openMenu && <Menu toggleMenu={toggleMenu} toggleModal={toggleModal} />}
      {openModal && <LoginOrSigup />}
    </div>
  );
};

export default Profile;