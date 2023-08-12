import { prisma } from "@/utils/connectPrisma";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const POST = async (
  request: NextRequest,
  { params }: { params: { orderId: string } }
) => {
  const { orderId } = params;
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: { intent_id: paymentIntent.id },
    });
    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret })
    );
  }
  return new NextResponse(
    JSON.stringify({ message: "Order not found!", status: 404 })
  );
};
