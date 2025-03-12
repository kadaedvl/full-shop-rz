import { prisma } from "@/prisma/prisma.client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, {params}: {params: {id: string}}) {
    try {
        const id = Number(params.id);
        const data = (await req.json()) as { quantity: number};
        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Cart Token not found'});
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id,
            },
        });
        if(!cartItem) {
            return NextResponse.json({error:'Cart item not found'})
        }

        await prisma.cartItem.update({
            where: {
                id,
            },
            data: {
                quantity: data.quantity,
            },
        })
    }
    catch(error) {
        console.log('[CART_PATCH] Server error', error)
        return NextResponse.json({message: 'Server error'},{status: 500});
    }
}