import dbConnect from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
  return NextResponse.json({ avs: "asd" });
}
