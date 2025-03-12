import { prisma } from "@/prisma/prisma.client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value;
        if (!token) {
            return NextResponse.json({ totalAmountL: 0, cartItem: [] });
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                OR: [
                    {
                        token
                    }
                ],
            },
            include: {
                cartItem: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    include: {
                        productVariation: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
        })

        return NextResponse.json(userCart);
    }
    catch (err) {
        console.error(err)
    }
}