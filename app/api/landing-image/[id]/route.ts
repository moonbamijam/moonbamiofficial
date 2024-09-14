import connectMongoDB from "@utils/mongodb";
import LandingImage from "@models/landingImage";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const { image: image, alt: alt } = await request.json();
  await connectMongoDB();
  await LandingImage.findByIdAndUpdate(id, {
    image,
    alt,
  });
  return NextResponse.json(
    { message: "Landing image updated" },
    { status: 200 },
  );
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  await connectMongoDB();
  const landingImage = await LandingImage.findOne({ _id: id });
  return NextResponse.json({ landingImage }, { status: 200 });
}
