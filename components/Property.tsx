import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IListing } from "@/models/listing";

const Property: React.FC<{ listing: IListing }> = ({ listing }) => {
  return (
    <div className="text-sm w-[300px]">
      <div>
        <Image
          className="rounded-md w-full h-[280px] object-cover"
          width={303}
          height={200}
          src={listing.image_url}
          alt="property"
        />
      </div>

      <ul className="mt-2">
        <li>
          <div className="flex items-center  justify-between space-x-4">
            <span className="font-semibold">{listing.name}</span>

            <div className="flex items-center space-x-1">
              <IoStar className="inline-block" />
              <span>
                {listing.rating} ({listing.number_of_reviews})
              </span>
            </div>
          </div>
        </li>
        <li className="overflow-hidden">
          <span className="text-color-secondary whitespace-nowrap ">
            {listing.title}
          </span>
        </li>
        <li>
          <span className="text-color-secondary">
            {listing.number_of_beds} beds
          </span>
        </li>
        <li>
          <span className="font-semibold">${listing.price} CAD </span>
          <span>night</span>
        </li>
      </ul>
    </div>
  );
};

export default Property;
