// import connectMongoDB from "@utilities/mongodb";
// import About from "@models/about";
// import { NextResponse } from "next/server";

// export async function POST(request: Request, response: Response) {
//   const { 
//     title, 
//     desc, 
//     name,
//     nickname,
//     age,
//     birthday,
//     sex,
//     nationality,
//     status,
//     languages
//   } = await request.json();
//   await connectMongoDB();
//   await About.create({ 
//     title, 
//     desc,
//     name,
//     nickname,
//     age,
//     birthday,
//     sex,
//     nationality,
//     status,
//     languages
//   });
// };

// export async function GET() {
//   await connectMongoDB();
//   const about = await About.find();
//   return NextResponse.json({ about })
// };