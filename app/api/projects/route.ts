import connectMongoDB from "@utilities/mongodb";
import Project from "@models/project";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { 
    src,
    projectTitle,
    projectDesc,
    href,
  } = await request.json();
  await connectMongoDB();
  await Project.create({ 
    src,
    projectTitle,
    projectDesc,
    href,
  });
  return NextResponse.json({message: "Project created"})
};

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects })
};