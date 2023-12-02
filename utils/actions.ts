import Listing from "@/models/listing";
import dbConnect from "@/lib/db";

export const getListings = async () => {
  await dbConnect();
  return await Listing.find({});
};
