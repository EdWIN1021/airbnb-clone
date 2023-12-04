import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/app/models/User";

export async function POST(request: NextRequest) {
  await dbConnect();
  const { id, email, name, image } = await request.json();
  const user = await User.findOne({ email });

  if (!user) {
    await User.create({ googleId: id, email, name, image });
  }

  return NextResponse.json({ status: 204 });
}

export async function GET(request: NextRequest) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const email = searchParams?.get("email");
  const user = await User.findOne({ email });

  if (user) {
    return NextResponse.json(
      {
        message: "success",
        user,
      },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    {
      message: "fail",
      user: null,
    },
    {
      status: 400,
    }
  );
}
