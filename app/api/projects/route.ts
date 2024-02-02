import connectMongoDB from "@utilities/mongodb";
import Project from "@models/project";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { 
    title, 
    desc, 
    href
  } = await request.json();
  await connectMongoDB();
  await Project.create({ 
    title, 
    desc,
    href
  });
  return NextResponse.json({ status: 200 });
};

export async function GET() {
  await connectMongoDB();
  const project = await Project.find();
  return NextResponse.json({ project })
};