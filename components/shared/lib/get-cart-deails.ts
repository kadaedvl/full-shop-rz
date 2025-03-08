import { Cart } from "@prisma/client";
import { IcartItems } from "../store/cart";
import { calcTotalAmount } from "./calc-cart-item-total-amount";

interface ReturnProps {
    items: IcartItems[];
    totalAmount: number;
}

export const getCartItemsDetails = (data: any) => {
    const items = data.items.map((el: any) => ({
        id: el.id,
        quantity: el.quantity,
        name: el.productVariation.product.name,
        imageUrl: el.productVariation.product.imageUrl,
        price: calcTotalAmount(el),
        size: el.productVariation.size,

    }));
    return items;
}