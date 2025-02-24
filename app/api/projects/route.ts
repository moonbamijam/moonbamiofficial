import connectMongoDB from "@backend/db/mongodb";
import Project from "@backend/models/project";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { src, alt, title, desc, website, github, slug } = await request.json();
  await connectMongoDB();
  await Project.create({
    src,
    alt,
    title,
    desc,
    website,
    github,
    slug,
  });
  return NextResponse.json({ message: "Project created" });
}

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}
