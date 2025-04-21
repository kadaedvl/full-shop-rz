import { Api } from "@/services/api-client";
import { create } from "zustand";
import { getCartDetails, IcartItems } from "../lib/get-cart-deails";
import { CreateCartItemValues } from "@/services/dto/cart.dto";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    cartItem: IcartItems[];
    fetchCartItems: () => Promise<void>;
    updateItemQuantuty: (id: number, quantity: number) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
    addCartItem: (values: any) => Promise<void>;
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
    updateItemQuantuty: async (id: number, quantity: number) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.cart.updateItemQuantuty(id, quantity);
            set(getCartDetails(data));
        }
        catch (err) {
            console.error(err)
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    removeCartItem: async (id: number) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        }
        catch (err) {
            console.error(err)
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
    addCartItem: async (values: CreateCartItemValues) => {
        try {
            set({ loading: true, error: false })
            const data = await Api.cart.addCartItem(values);
            set(getCartDetails(data));
        }
        catch (err) {
            console.error(err)
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
}));