import { hashSync } from "bcrypt";
import { prisma } from "./prisma.client";
import { categories, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
}

const generateProductVariation = ({
    productId,
    size,
}: {
    productId: number;
    size?: number;
}) => {
    return {
        productId,
        price: randomDecimalNumber(190, 660),
        size
    } as Prisma.ProductVariationUncheckedCreateInput;
}

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User',
                email: 'kadae@ukr.net',
                password: hashSync('1111', 10),
                verified: new Date(),
                role: "USER",
            },
            {
                fullName: 'Admin',
                email: 'admin@ukr.net',
                password: hashSync('1111', 10),
                verified: new Date(),
                role: "ADMIN",
            }
        ]
    });

    await prisma.caregory.createMany({
        data: categories
    });
    await prisma.product.createMany({
        data: products
    });

    const product1 = await prisma.product.create({
        data:
        {
            name: "Футболка",
            imageUrl: "https://brutalmanshop.com/image/cachewebp/catalog/Dlya%20Nego/Futbolka/skull-406x580.webp",
            categoryId: 1,
        }
    })

    const product2 = await prisma.product.create({
        data:
        {
            name: "Светер",
            imageUrl: "https://rockway.biz/image/cachewebp/catalog/data/longsleeves/3_262-740x740.webp",
            categoryId: 1,
        },
    })


    await prisma.productVariation.createMany({
        data: [
            generateProductVariation({ productId: product1.id, size: 10, }),
            generateProductVariation({ productId: product1.id, size: 20 }),
            generateProductVariation({ productId: product1.id, size: 30 }),

            generateProductVariation({ productId: product2.id, size: 10 }),
            generateProductVariation({ productId: product2.id, size: 20 }),
            generateProductVariation({ productId: product2.id, size: 30 }),

            generateProductVariation({ productId: 1 }),
            generateProductVariation({ productId: 2 }),
            generateProductVariation({ productId: 3 }),
            generateProductVariation({ productId: 4 }),

        ]
    });
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111111'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '22222222'
            }
        ]
    })
    await prisma.cartItem.createMany({
        data: [{
            productVariationId: 1,
            cartId: 1,
            quantity: 2
        }]
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Caregory" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductVariation" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    }
    catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})