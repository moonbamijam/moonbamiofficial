// import connectMongoDB from "@utilities/mongodb";
// import About from "@models/topic";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
// import { NextResponse } from "next/server";

// export async function PUT(request: Request, { params }: Params) {
//   const { id } = params;
//   const { 
//     title: title,
//     desc: desc, 
//   } = await request.json();
//   await connectMongoDB();
//   await About.findByIdAndUpdate(id, {
//     title,
//     desc,
//     name,
//   });
//   return NextResponse.json({ message: "Updated" }, { status: 200 });
// }

// export async function GET(request: Request, { params }: Params  ) {
//   const { id } = params;
//   await connectMongoDB();
//   const about = await About.findOne({ _id: id });
//   return NextResponse.json({ about }, { status: 200 });
// };