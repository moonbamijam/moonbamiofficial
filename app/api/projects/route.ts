import connectMongoDB from "@utils/mongodb";
import Project from "@models/project";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { src, alt, title, desc, website, github, endpoint } = await request.json();
  await connectMongoDB();
  await Project.create({
    src,
    alt,
    title,
    desc,
    website,
    github,
    endpoint,
  });
  return NextResponse.json({ message: "Project created" });
}

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}
