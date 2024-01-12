import React from "react";
import { getDetail, getHosts } from "@/utils/server";
import { IoIosStar } from "react-icons/io";
import { IDetail } from "@/models/Detail";
import { BiSolidMedal } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";

const RoomPage = async ({ params }: { params: { roomId: string } }) => {
  const { roomId } = params;
  const detail = (await getDetail(roomId)) as IDetail;
  const hosts = await getHosts();

  return (
    <div className="mx-20 pt-6">
      <h1 className="font-semibold text-[26px]">{detail.title}</h1>

      <div className="flex  text-[14px]">
        <div className="flex items-center font-semibold flex-1">
          <IoIosStar className="mr-1" />
          <span>{detail.stars}</span>
          <span className="mx-1">&middot;</span>
          <span className="underline">{detail?.reviewCount} reviews </span>
          <span className="text-dark-gray mx-1">&middot;</span>
          <BiSolidMedal className="mr-1" />
          <span className="font-normal">Superhost</span>
          <span className="text-dark-gray mx-1">&middot;</span>
          <span className="underline">{detail?.address}</span>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center">
            <MdIosShare className="w-6 h-6 pr-2" />
            <span className="font-semibold">Share</span>
          </div>

          <div className="flex items-center">
            <FaRegHeart className="inline-block w-6 h-6 pr-2 " />
            <span className="font-semibold">Save</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 grid-flow-row gap-2 mt-6 rounded-2xl overflow-hidden max-h-[408px]">
        {detail?.image_urls?.map((url, index) => (
          <Image
            className={`${
              index === 0 && "col-span-2 row-span-2"
            } w-full h-full `}
            key={index}
            src={url}
            height={200}
            width={200}
            alt=""
          />
        ))}
      </div>

      <div className="flex flex-col">
        <div>
          <div className="py-8">
            <h2 className="text-[22px] font-semibold">{detail?.subTitle}</h2>
            <p>
              {detail?.numOfGuests} guests <span>&middot;</span>
              {detail?.numOfBedRooms} bedroom <span>&middot;</span>
              {detail?.numOfBeds} bed <span>&middot;</span>
              {detail?.numOfBath} bath
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 border-y py-6 border-light-gray">
          <Image
            className="rounded-full"
            src={detail?.host?.photoUrl}
            width={40}
            height={40}
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-semibold">
              Hosted by {detail?.host?.name}
            </span>
            <span className="text-[14px] text-[rgb(113,113,113)]">
              {new Date().getFullYear() - detail?.host.startYear} years hosting
            </span>
          </div>
        </div>

        <div className="py-8"></div>
      </div>
    </div>
  );
};

export default RoomPage;
