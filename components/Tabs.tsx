"use client";

import {
  GiTreehouse,
  GiGrandPiano,
  GiGreenhouse,
  GiMushroomHouse,
} from "react-icons/gi";
import { LiaFireAltSolid } from "react-icons/lia";
import { HiOutlineHomeModern } from "react-icons/hi2";
import {
  MdCabin,
  MdApartment,
  MdOutlineCastle,
  MdOutlineHouseboat,
} from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { TbUfo } from "react-icons/tb";
import { GrHome } from "react-icons/gr";
import { FaHouseFloodWater } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";

import Tab from "./Tab";
import { IListing } from "@/models/Listing";
import Property from "./Property";
import { useEffect, useState } from "react";
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
    title: "OMG",
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
    title: "Tiny homes",
    icon: <GrHome className="stroke-dark-gray" size={24} />,
  },
  // {
  //   title: "Islands",
  //   icon: <GiIsland className="fill-dark-gray" size={24} />,
  // },
  // {
  //   title: "Beach",
  //   icon: <TbBeach className="stroke-dark-gray" size={24} />,
  // },
  // {
  //   title: "Skiing",
  //   icon: <LiaSkiingSolid className="fill-dark-gray" size={24} />,
  // },
  // {
  //   title: "Arctic",
  //   icon: <IoSnowOutline className="stroke-dark-gray" size={24} />,
  // },

  // {
  //   title: "Play",
  //   icon: <GiEightBall className="fill-dark-gray" size={24} />,
  // },
  // {
  //   title: "Chef's kitchens",
  //   icon: <FaKitchenSet className="fill-dark-gray" size={24} />,
  // },
  // {
  //   title: "Camping",
  //   icon: <GiCampingTent className="fill-dark-gray" size={24} />,
  // },

  // {
  //   title: "Amazing pools",
  //   icon: <PiSwimmingPool className="fill-dark-gray" size={24} />,
  // },
  // {
  //   title: "Farms",
  //   icon: <GiFarmTractor className="fill-dark-gray" size={24} />,
  // },
];

const Tabs = () => {
  const [tab, setTab] = useState("");
  const [listings, setListings] = useState<IListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const getListings = async () => {
      try {
        const res = await fetch(`/api/listings?category=${tab}`);
        const { data } = await res.json();
        setListings(() => data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getListings();

    return () => {
      controller.abort();
    };
  }, [tab]);

  return (
    <>
      <div className="px-6 md:px-10">
        <div className="flex w-full gap-[2.3rem] mt-8 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <Tab key={tab.title} tab={tab} onClick={() => setTab(tab.title)} />
          ))}
        </div>
      </div>

      {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 px-6 md:px-10">
          {listings?.map((listing: IListing) => (
            <Property key={listing._id} listing={listing} />
          ))}
        </div>
      )}
    </>
  );
};

export default Tabs;
