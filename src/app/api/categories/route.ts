import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const categories = await prisma.category.findMany({
        take: 4
    })
    return NextResponse.json(categories);
}