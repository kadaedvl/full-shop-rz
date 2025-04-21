import { axiosInstantds } from "./axiosInstantds"
import { CartDTO, CreateCartItemValues } from "./dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstantds.get<CartDTO>('/cart');
    return data;
}

export const updateItemQuantuty = async (id: number, quantity: number): Promise<CartDTO> => {
    const { data } = await axiosInstantds.patch<CartDTO>('/cart/' + id, { quantity });
    return data;
}

export const removeCartItem = async (id: number): Promise<CartDTO> => {
    return (await axiosInstantds.delete<CartDTO>('/cart/' + id)).data;
}

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => {
    const { data } = await axiosInstantds.post<CartDTO>('/cart', values);
    return data;
}