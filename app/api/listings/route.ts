import dbConnect from "@/lib/db";
import Listing from "@/models/Listing";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "";

  let data;

  if (category) {
    data = await Listing.find({ category });
  } else {
    data = await Listing.find();
  }

  return NextResponse.json({ status: "success", data }, { status: 200 });
}
