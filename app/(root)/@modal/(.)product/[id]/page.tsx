import { prisma } from "@/prisma/prisma.client";
import './page.css'
import { notFound } from "next/navigation";
import ChooseProductModal from "@/components/shared/modals/choose-product-modal";


const ProductModalPage = async ({ params: { id } }: { params: { id: string } }) => {
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });
    const productVariation = await prisma.productVariation.findMany({ where: { productId: Number(id) } });
    if (!product) {
        return notFound();
    }
    return (
        <ChooseProductModal product={product} productVariation={productVariation} />
    )
}

export default ProductModalPage
