import connectMongoDB from "@backend/db/mongodb";
import About from "@backend/models/about";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const {
    displayName: displayName,
    desc: desc,
    fullName: fullName,
    nickname: nickname,
    age: age,
    birthday: birthday,
    sex: sex,
    nationality: nationality,
    status: status,
    languages: languages,
  } = await request.json();
  await connectMongoDB();
  await About.findByIdAndUpdate(id, {
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
  return NextResponse.json({ message: "About me updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  await connectMongoDB();
  const abouts = await About.findOne({ _id: id });
  return NextResponse.json({ abouts }, { status: 200 });
}
