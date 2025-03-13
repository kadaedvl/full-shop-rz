import { CartItemDTO } from "@/services/dto/cart.dto";

export const calcTotalAmount = (item: CartItemDTO): number => {
    return item.productVariation.price;
}