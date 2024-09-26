import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
  const results = await prisma.userInfo.findMany();

  return NextResponse.json({results});
}