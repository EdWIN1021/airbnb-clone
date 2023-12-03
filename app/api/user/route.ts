import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(request: NextRequest) {
  await dbConnect();
  const { id, email, name, image } = await request.json();
  const user = await User.findOne({ email });

  if (!user) {
    await User.create({ googleId: id, email, name, image });
  }

  return NextResponse.json({ status: 204 });
}
