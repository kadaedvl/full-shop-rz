import { findOrCreateCart } from "@/components/shared/lib/find-or-create-cart";
import updateTotalAmount from "@/components/shared/lib/update-totam-amount";
import { prisma } from "@/prisma/prisma.client";
import { CreateCartItemValues } from "@/services/dto/cart.dto";
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
    catch (error) {
        console.log('[CART_GET] Server error', error);
        return NextResponse.json({ message: "You dont create Cart" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get('cartToken')?.value;
        if (!token) {
            token = crypto.randomUUID();
        }

        const userCart = await findOrCreateCart(token);

        const data = (await req.json()) as CreateCartItemValues

        const findCartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                productVariationId: data.productVariationId,
            },
        });

        if (findCartItem) {
            await prisma.cartItem.update({
                where: {
                    id: findCartItem.id
                },
                data: {
                    quantity: findCartItem.quantity + 1
                }
            });
        }
        await prisma.cartItem.create({
            data: {
                cartId: userCart.id,
                productVariationId: data.productVariationId,
                quantity: 1,
            },
        });

        const updateUserCart = await updateTotalAmount(token);

        const resp = NextResponse.json(updateUserCart);

        resp.cookies.set('cartToken', token)
        return resp;
    }
    catch (error) {
        console.log('[CART_POST] Server error', error);
        return NextResponse.json({ message: "You dont create Cart" }, { status: 500 });
    }
}