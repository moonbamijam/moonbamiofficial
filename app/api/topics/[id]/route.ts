import connectMongoDB from "@backend/db/mongodb";
import Topic from "@backend/models/topic";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const { title: title, desc: desc } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, {
    title,
    desc,
  });
  return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  await connectMongoDB();
  const topics = await Topic.findOne({ _id: id });
  return NextResponse.json({ topics }, { status: 200 });
}
