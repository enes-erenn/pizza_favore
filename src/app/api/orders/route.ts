import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connectPrisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  // If user authenticated
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: { userEmail: session.user.email! },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!", status: "500" })
      );
    }
  }

  return new NextResponse(
    JSON.stringify({ message: "Not authenticated!", status: "500" })
  );
};
