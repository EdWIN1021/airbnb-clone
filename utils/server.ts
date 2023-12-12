"use server";

import Listing from "@/models/Listing";
import dbConnect from "@/lib/db";
import Detail from "@/models/Detail";

export const getListings = async () => {
  await dbConnect();
  return await Listing.find({});
};

export const getDetail = async (_id: string) => {
  await dbConnect();
  return await Detail.findById(_id);
};
