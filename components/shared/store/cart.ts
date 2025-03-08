import { Api } from "@/services/api-client";
import { create } from "zustand";
import { getCartItemsDetails } from "../lib/get-cart-deails";

export type IcartItems = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    size?: number | null;
}

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: IcartItems[];
    fetchCartItems: () => Promise<void>;
    updateItemQuantuty: (id: number, quantity: number) => Promise<void>;
    addCartItem: (values: any) => Promise<void>;
    remuveCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set: any, get: any) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,
    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false })
            const data = await Api.cart.fetchCart();
            set(getCartItemsDetails(data));
        }
        catch (err) {
            console.error(err)
            set({ error: true });
        } finally {
            set({ loading: true });
        }
    },
    updateItemQuantuty: async () => { },
    addCartItem: async () => { },
    remuveCartItem: async () => { },
}));