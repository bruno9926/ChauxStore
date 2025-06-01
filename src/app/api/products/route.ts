import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc'},
    take: 10,
    include: {
      category: {
        select: { name: true }
      }
    }
  });
  
  return NextResponse.json(products);
}