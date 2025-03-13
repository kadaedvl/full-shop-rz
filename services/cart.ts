import { axiosInstantds } from "./axiosInstantds"
import { CartDTO } from "./dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstantds.get<CartDTO>('/cart');
    return data;
}

export const updateItemQuantuty = async (id: number, quantity: number): Promise<CartDTO> => {
    const { data } = await axiosInstantds.patch<CartDTO>('/cart/' + id, { quantity });
    return data;
}