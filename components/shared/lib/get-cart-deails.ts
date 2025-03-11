import { calcTotalAmount } from "./calc-cart-item-total-amount";
import { CartDTO } from "@/services/dto/cart.dto";

export type IcartItems = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    size?: number | null;
}

interface ReturnProps {
    items: IcartItems[];
    totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.items.map((el) => ({
        id: el.id,
        quantity: el.quantity,
        name: el.productVariation.product.name,
        imageUrl: el.productVariation.product.imageUrl,
        price: calcTotalAmount(el),
        size: el.productVariation.size,
    }));
    return {
        items,
        totalAmount: data.totalAmount,
    };
}