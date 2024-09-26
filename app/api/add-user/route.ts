import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const res = await request.json();
    const {email, password, about, address, birthdate} = res;

const result = await prisma.userInfo.create({
    data: {
        email,
        password,
        about,
        address,
        birthdate,
    }
})

    return NextResponse.json({result})
}