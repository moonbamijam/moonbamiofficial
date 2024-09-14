import connectMongoDB from "@utils/mongodb";
import LandingImage from "@models/landingImage";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { image, alt } = await request.json();
  await connectMongoDB();
  await LandingImage.create({
    image,
    alt,
  });
  return NextResponse.json({ message: "Landing image created" });
}

export async function GET() {
  await connectMongoDB();
  const landingImage = await LandingImage.find();
  return NextResponse.json({ landingImage });
}
