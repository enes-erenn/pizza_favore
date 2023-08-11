import { prisma } from "@/utils/connectPrisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");
  try {
    // If there is a specified category then filters the products, otherwise returns featured products
    const products = await prisma.product.findMany({
      where: { ...(cat ? { catSlug: cat } : { isFeatured: true }) },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: "500" })
    );
  }
};
