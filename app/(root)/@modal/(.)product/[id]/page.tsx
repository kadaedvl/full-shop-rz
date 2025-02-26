import { prisma } from "@/prisma/prisma.client";
import './page.css'
import { notFound } from "next/navigation";
import Selecter from "@/components/shared/Selecter";
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
    // if (!product) {
    //     return notFound();
    // }
    // return (
    //     <div className="container">
    //         <img className='productImg' src={product?.imageUrl}></img>
    //         <div className="productInfo">
    //             <h1 className="productName">{product.name}</h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque autem tempore dolore officia numquam veritatis, doloribus adipisci, accusantium eum perspiciatis, ducimus placeat. Voluptate quas ducimus explicabo cumque iusto labore!</p>
    //             <Selecter
    //                 selectedValue='1'
    //                 items={[
    //                     {
    //                         name: 'S',
    //                         value: '10'
    //                     },
    //                     {
    //                         name: 'L',
    //                         value: '20'
    //                     },
    //                     {
    //                         name: 'XS',
    //                         value: '30'
    //                     }
    //                 ]} />
    //         </div>
    //     </div>
    // );
}

export default ProductModalPage
