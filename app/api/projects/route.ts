import connectMongoDB from "@db/mongodb";
import Project from "@features/project/project";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { src, alt, title, desc, website, github, slug, tag, tech } =
    await request.json();
  await connectMongoDB();
  await Project.create({
    src,
    alt,
    title,
    desc,
    website,
    github,
    slug,
    tag,
    tech,
  });
  return NextResponse.json({ message: "Project created" });
}

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}
