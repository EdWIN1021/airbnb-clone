"use server";

import Listing from "@/models/Listing";
import dbConnect from "@/lib/db";

export const getListings = async () => {
  await dbConnect();
  return await Listing.find({});
};

