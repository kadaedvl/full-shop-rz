import { prisma } from "@/prisma/prisma.client"
import { calcTotalAmount } from "./calc-cart-item-total-amount";

const updateTotalAmount = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
        where: {
            token
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
    });

    if (!userCart) {
        return;
    }
    const totalAmount = userCart?.cartItem.reduce((acc, item) => {
        return acc + calcTotalAmount(item);
    }, 0);


    return await prisma.cart.update({
        where: {
            id: userCart.id
        },
        data: {
            totalAmount,
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
}

export default updateTotalAmount