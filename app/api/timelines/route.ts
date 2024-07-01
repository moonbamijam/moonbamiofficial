import { NextResponse } from "next/server";
import connectMongoDB from "@utils/mongodb";
import Timeline from "@models/timeline";

export async function POST(request: Request, response: Response) {
  const { date, type, note, message } = await request.json();
  await connectMongoDB();
  await Timeline.create({
    date,
    type,
    note,
    message,
  });
  return NextResponse.json({ message: "New Timeline created" });
}

export async function GET() {
  await connectMongoDB();
  const timelines = await Timeline.find();
  return NextResponse.json({ timelines });
}
