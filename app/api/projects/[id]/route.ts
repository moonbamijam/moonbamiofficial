import connectMongoDB from "@utilities/mongodb";
import Project from "@models/project";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const { 
    title: title,
    desc: desc, 
    href: href,
  } = await request.json();
  await connectMongoDB();
  await Project.findByIdAndUpdate(id, {
    title,
    desc,
    href,
  });
  return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: Params  ) {
  const { id } = params;
  await connectMongoDB();
  const projects = await Project.findOne({ _id: id });
  return NextResponse.json({ projects }, { status: 200 });
};