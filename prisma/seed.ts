import { hashSync } from "bcrypt";
import { prisma } from "./prisma.client";
import { categories, products } from "./constants";

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
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
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