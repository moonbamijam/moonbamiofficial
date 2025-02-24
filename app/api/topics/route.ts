import connectMongoDB from "@backend/db/mongodb";
import Topic from "@backend/models/topic";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { title, desc } = await request.json();
  await connectMongoDB();
  await Topic.create({
    title,
    desc,
  });
  return NextResponse.json({ message: "New topic created" });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
