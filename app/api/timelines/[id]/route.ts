import { NextResponse } from "next/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import connectMongoDB from "@backend/db/mongodb";
import Timeline from "@backend/models/timeline";

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const {
    date: date,
    type: type,
    note: note,
    message: message,
  } = await request.json();
  await connectMongoDB();
  await Timeline.findByIdAndUpdate(id, {
    date,
    type,
    note,
    message,
  });
  return NextResponse.json({ message: "Timeline updated!" }, { status: 200 });
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  await connectMongoDB();
  const timelines = await Timeline.findOne({ _id: id });
  return NextResponse.json({ timelines }, { status: 200 });
}
