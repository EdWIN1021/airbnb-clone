import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export const Profile = () => {
  return (
    <div className="flex items-center space-x-4 cursor-pointer">
      <div className="px-3 py-2 hover:bg-medium-gray rounded-full">
        <span className="text-sm font-semibold ">Airbnb your home</span>
      </div>

      <div className="cursor-pointer hover:bg-medium-gray rounded-full p-2">
        <MdLanguage className="w-4 h-4" />
      </div>

      <div className="w-[81px] h-[38px] border border-light-gray rounded-full flex items-center p-2 hover:shadow-md">
        <IoIosMenu className="h-4 w-4 flex-1" />
        <FaUserCircle className="w-[30px] h-[30px] fill-dark-gray" />
      </div>
    </div>
  );
};
