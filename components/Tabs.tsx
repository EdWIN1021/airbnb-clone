import {
  GiTreehouse,
  GiIsland,
  GiFarmTractor,
  GiExpense,
} from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiSwimmingPool } from "react-icons/pi";
import { MdCabin, MdApartment, MdOutlineCastle } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { TbUfo, TbBeach } from "react-icons/tb";
import { GrHome } from "react-icons/gr";
import { FaHouseFloodWater } from "react-icons/fa6";

import Tab from "./Tab";
const tabs = [
  {
    title: "Tree houses",
    icon: <GiTreehouse className="fill-dark-gray" size={24} />,
  },
  {
    title: "Design",
    icon: <HiOutlineHomeModern className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Amazing pools",
    icon: <PiSwimmingPool className="fill-dark-gray" size={24} />,
  },
  {
    title: "Islands",
    icon: <GiIsland className="fill-dark-gray" size={24} />,
  },
  {
    title: "Farms",
    icon: <GiFarmTractor className="fill-dark-gray" size={24} />,
  },
  {
    title: "Cabins",
    icon: <MdCabin className="fill-dark-gray" size={24} />,
  },
  {
    title: "Mansions",
    icon: <MdApartment className="fill-dark-gray" size={24} />,
  },
  {
    title: "Amazing views",
    icon: <SlPicture className="fill-dark-gray" size={24} />,
  },
  {
    title: "OMG!",
    icon: <TbUfo className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Tiny homes!",
    icon: <GrHome className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Beachfront",
    icon: <TbBeach className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Lake",
    icon: <FaHouseFloodWater className="fill-dark-gray" size={24} />,
  },
  {
    title: "Luxe",
    icon: <GiExpense className="fill-dark-gray" size={24} />,
  },
  {
    title: "Castle",
    icon: <MdOutlineCastle className="fill-dark-gray" size={24} />,
  },
];

const Tabs = () => {
  return (
    <div className="flex justify-around gap-10 mt-10 mb-8 overflow-scroll px-20">
      {tabs.map((tab) => (
        <Tab key={tab.title} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;
