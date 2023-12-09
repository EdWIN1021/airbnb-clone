import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

export async function POST(request: NextRequest) {
  await dbConnect();
  const { name, email, password } = await request.json();

  if (!name || !password || email) {
    return NextResponse.json(
      { status: "fail", message: "abc" },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { status: "fail", message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!isStrongPassword(password)) {
    return NextResponse.json(
      { status: "fail", message: "Please choose a stronger password." },
      { status: 400 }
    );
  }

  const user = await User.find({ email });

  // if (true) {
  //   return NextResponse.json(
  //     { status: "fail", message: "abc" },
  //     { status: 400 }
  //   );
  // }

  return NextResponse.json({ message: "success" });
}
