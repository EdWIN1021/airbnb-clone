"use server";

import dbConnect from "@/lib/db";
import Listing from "@/models/Listing";
import Detail from "@/models/Detail";
import Host from "@/models/Host";

export const getListings = async () => {
  await dbConnect();
  return await Listing.find({});
};

export const getDetail = async (_id: string) => {
  await dbConnect();
  return await Detail.findById(_id).populate("host");
};

export const getHosts = async () => {
  await dbConnect();
  return await Host.find({});
};
