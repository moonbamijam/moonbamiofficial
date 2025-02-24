import connectMongoDB from "@backend/db/mongodb";
import TechStack from "@backend/models/techstack";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const {
    ariaLabel: ariaLabel,
    href: href,
    src: src,
    alt: alt,
  } = await request.json();
  await connectMongoDB();
  await TechStack.findByIdAndUpdate(id, {
    ariaLabel,
    href,
    src,
    alt,
  });
  return NextResponse.json({ message: "Tech Stack updated!" }, { status: 200 });
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  await connectMongoDB();
  const techstacks = await TechStack.findOne({ _id: id });
  return NextResponse.json({ techstacks }, { status: 200 });
}
