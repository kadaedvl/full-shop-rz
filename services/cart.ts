import { axiosInstantds } from "./axiosInstantds"
import { Cart } from "@prisma/client";

export const fetchCart = async (): Promise<Cart> => {
    const { data } = await axiosInstantds.get<Cart>('/cart');
    return data;
}