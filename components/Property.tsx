import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IListing } from "@/app/models/Listing";

const Property: React.FC<{ listing: IListing }> = ({ listing }) => {
  return (
    <div className="text-sm flex flex-col">
      <div className="flex-1">
        <Image
          className="rounded-xl w-full h-full object-fit aspect-square"
          width={303}
          height={200}
          src={listing.image_url}
          alt="property"
        />
      </div>

      <ul className="mt-2">
        <li>
          <div className="flex items-center  justify-between">
            <span className="font-semibold">{listing.name}</span>

            <div className="flex items-center">
              <IoStar className="inline-block" />
              <span>
                {listing.rating} ({listing.number_of_reviews})
              </span>
            </div>
          </div>
        </li>
        <li className="overflow-hidden">
          <span className="text-color-secondary ">{listing.title}</span>
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
