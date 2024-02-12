import connectMongoDB from "@utilities/mongodb";
import About from "@models/about";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { 
    displayName,
    desc,
    fullName,
    nickname,
    age,
    birthday,
    sex,
    nationality,
    status,
    languages, 
  } = await request.json();
  await connectMongoDB();
  await About.create({ 
    displayName,
    desc,
    fullName,
    nickname,
    age,
    birthday,
    sex,
    nationality,
    status,
    languages,
  });
  return NextResponse.json({message: "About created"})
};

export async function GET() {
  await connectMongoDB();
  const about = await About.find();
  return NextResponse.json({ about })
};