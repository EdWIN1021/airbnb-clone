import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IListing } from "@/models/Listing";
import Link from "next/link";

const Property: React.FC<{ listing: IListing }> = ({ listing }) => {
  return (
    <Link href={`/room/${listing._id}`}>
      <div className="text-sm flex flex-col">
        <div className="flex-1">
          <Image
            className="rounded-xl w-full h-full object-cover aspect-square"
            width={303}
            height={200}
            src={listing.image_url}
            alt="property"
          />
        </div>

        <ul className="mt-2">
          <li>
            <div className="flex items-center  justify-between">
              <span className="font-semibold max-w-[100%] inline-block overflow-hidden">
                {listing.name}
              </span>

              <div className="flex items-center">
                <IoStar className="inline-block" />
                <span>
                  {listing.rating} ({listing.number_of_reviews})
                </span>
              </div>
            </div>
          </li>
          <li>
            <span className="text-color-secondary max-w-[100%] block overflow-hidden">
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
    </Link>
  );
};

export default Property;
