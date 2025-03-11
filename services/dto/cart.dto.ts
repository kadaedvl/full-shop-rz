import { Cart, CartItem, Product, ProductVariation } from "@prisma/client";

export type CartItemDTO = CartItem & {
    productVariation: ProductVariation & {
        product: Product;
    }
};

export interface CartDTO extends Cart {
    items: CartItemDTO[];
}