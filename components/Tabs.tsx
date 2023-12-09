import {
  GiTreehouse,
  GiIsland,
  GiFarmTractor,
  GiExpense,
  GiGrandPiano,
  GiGreenhouse,
  GiMushroomHouse,
  GiEightBall,
  GiCampingTent,
} from "react-icons/gi";

import { LiaFireAltSolid, LiaSkiingSolid } from "react-icons/lia";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiSwimmingPool } from "react-icons/pi";
import {
  MdCabin,
  MdApartment,
  MdOutlineCastle,
  MdOutlineHouseboat,
} from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { TbUfo, TbBeach } from "react-icons/tb";
import { GrHome } from "react-icons/gr";
import { FaHouseFloodWater, FaKitchenSet } from "react-icons/fa6";
import { IoColorPaletteOutline, IoSnowOutline } from "react-icons/io5";

import Tab from "./Tab";
const tabs = [
  {
    title: "Cabins",
    icon: <MdCabin className="fill-dark-gray" size={24} />,
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
    title: "Grand pianos",
    icon: <GiGrandPiano className="fill-dark-gray" size={24} />,
  },
  {
    title: "Creative spaces",
    icon: <IoColorPaletteOutline className="fill-dark-gray" size={24} />,
  },
  {
    title: "Design",
    icon: <HiOutlineHomeModern className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Earth homes",
    icon: <GiGreenhouse className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Tree houses",
    icon: <GiTreehouse className="fill-dark-gray" size={24} />,
  },
  {
    title: "Trending",
    icon: <LiaFireAltSolid className="fill-dark-gray" size={24} />,
  },
  {
    title: "Mansions",
    icon: <MdApartment className="fill-dark-gray" size={24} />,
  },
  {
    title: "Houseboats",
    icon: <MdOutlineHouseboat className="fill-dark-gray" size={24} />,
  },
  {
    title: "Countryside",
    icon: <GiMushroomHouse className="fill-dark-gray" size={24} />,
  },
  {
    title: "Lake",
    icon: <FaHouseFloodWater className="fill-dark-gray" size={24} />,
  },
  {
    title: "Castles",
    icon: <MdOutlineCastle className="fill-dark-gray" size={24} />,
  },
  {
    title: "Tiny homes!",
    icon: <GrHome className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Islands",
    icon: <GiIsland className="fill-dark-gray" size={24} />,
  },
  {
    title: "Beach",
    icon: <TbBeach className="stroke-dark-gray" size={24} />,
  },
  {
    title: "Skiing",
    icon: <LiaSkiingSolid className="fill-dark-gray" size={24} />,
  },
  {
    title: "Arctic",
    icon: <IoSnowOutline className="stroke-dark-gray" size={24} />,
  },

  {
    title: "Play",
    icon: <GiEightBall className="fill-dark-gray" size={24} />,
  },
  {
    title: "Chef's kitchens",
    icon: <FaKitchenSet className="fill-dark-gray" size={24} />,
  },
  {
    title: "Camping",
    icon: <GiCampingTent className="fill-dark-gray" size={24} />,
  },

  {
    title: "Amazing pools",
    icon: <PiSwimmingPool className="fill-dark-gray" size={24} />,
  },
  {
    title: "Farms",
    icon: <GiFarmTractor className="fill-dark-gray" size={24} />,
  },
];

const Tabs = () => {
  return (
    <div className="px-6 md:px-10">
      <div className="flex w-full gap-[2.4rem] mt-8 mb-8 overflow-x-scroll">
        {tabs.map((tab) => (
          <Tab key={tab.title} tab={tab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
