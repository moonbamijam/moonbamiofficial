import connectMongoDB from "@backend/db/mongodb";
import TechStack from "@backend/models/techstack";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { ariaLabel, href, src, alt } = await request.json();
  await connectMongoDB();
  await TechStack.create({
    ariaLabel,
    href,
    src,
    alt,
  });
  return NextResponse.json({ message: "Project created" });
}

export async function GET() {
  await connectMongoDB();
  const techstacks = await TechStack.find();
  return NextResponse.json({ techstacks });
}
