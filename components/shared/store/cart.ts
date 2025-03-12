import { Api } from "@/services/api-client";
import { create } from "zustand";
import { getCartDetails, IcartItems } from "../lib/get-cart-deails";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    cartItem: IcartItems[];
    fetchCartItems: () => Promise<void>;
    // updateItemQuantuty: (id: number, quantity: number) => Promise<void>;
    // addCartItem: (values: any) => Promise<void>;
    // remuveCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    cartItem: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false })
            const data = await Api.cart.fetchCart();
            set(getCartDetails(data));
        }
        catch (err) {
            console.error(err)
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
    // updateItemQuantuty: async () => { },
    // addCartItem: async () => { },
    // remuveCartItem: async () => { },
}));